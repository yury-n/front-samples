import last from "lodash/last";
import includes from "lodash/includes";
import without from "lodash/without";
import omit from "lodash/omit";
import React              from "react";
import Modal              from "react-modal";

import styles             from "./styles";

import {addEventListener} from "utils/dom_helpers";

const MODAL_OPEN_CLASSNAME = "modal-open";
const ADD_SCROLLBAR_CLASSNAME = "modal-open-scrollable";

const REACT_APPLICATION_ID = "reactApplication";

let mainAppElement, bodyElement;

mainAppElement = document.getElementById(REACT_APPLICATION_ID);
bodyElement = document.body;

if (bodyElement && typeof Modal.setAppElement === "function") {
  Modal.setAppElement(bodyElement);
}

let openModals = [];
addEventListener(document, "keyup", (e) => {
  if (e.keyCode === 27) {
    const currentModal = last(openModals);
    currentModal && currentModal.props.onRequestHide && currentModal.props.onRequestHide();
  }
});

// Figure out if the modal is open or closed and ensure the proper side effects
// Open modals need the following things to happen:
// - Make sure the body has the proper class to keep it from scrolling
// - Make sure the modal is at the front of the open modals array, which is
//   used to handle the escape key.

function doSideEffects (modalComponent) {
  if (modalComponent.props.isOpen === false) {
    modalIsNotOpen(modalComponent);
  } else {
    modalIsOpen(modalComponent);
  }
}

function modalIsOpen (modalComponent) {
  bodyElement.classList.add(MODAL_OPEN_CLASSNAME);

  if (mainAppElement) {
    const {height} = mainAppElement.getBoundingClientRect();
    if (window && window.innerHeight < height) {
      bodyElement.classList.add(ADD_SCROLLBAR_CLASSNAME);
    }
  } else {
    console.warn("mainAppElement needs to be defined for modal to work correctly");
  }

  if (!includes(openModals, modalComponent)) {
    openModals.push(modalComponent);
  }

}

function modalIsNotOpen (modalComponent) {
  bodyElement.classList.remove(MODAL_OPEN_CLASSNAME);
  bodyElement.classList.remove(ADD_SCROLLBAR_CLASSNAME);

  openModals = without(openModals, modalComponent);
}

/**
* Base modal wrapper around our custom version of react-modal
* Provide the base configuration we need for our modals.
*/
const BaseModal = React.createClass({

  getDefaultProps () {
    return {
      isOpen: true,
    };
  },

  componentDidMount () {
    doSideEffects(this);
  },

  componentWillReceiveProps (newProps) {
    if (this.props.isOpen !== newProps.isOpen) {
      this.openStatusChanged = true;
    }
  },

  componentDidUpdate () {
    if (this.openStatusChanged) {
      doSideEffects(this);
      this.openStatusChanged = false;
    }
  },

  componentWillUnmount () {
    modalIsNotOpen(this);
  },

  render () {
    const {style, overlayStyle, onRequestHide, requestHideOnOverlayClick, isOpen, ...props} = this.props;

    const contentStyle = {...styles.modal, ...style};
    const combinedOverlayStyle = {...styles.modalBackdrop, ...overlayStyle};

    return (
      <Modal
        {...props}
        isOpen={isOpen == null ? true : isOpen}
        onRequestClose={onRequestHide}
        shouldCloseOnOverlayClick={!!requestHideOnOverlayClick}
        style={{content: contentStyle, overlay: combinedOverlayStyle}}
      />
    );
  },

});

export default BaseModal;
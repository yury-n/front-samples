// Based on https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/EventListener.js
// Cross browser addEventListener helper and utils

import React from "react";


export function addEventListener (target, eventType, callback) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, false);
    return {
      remove () {
        target.removeEventListener(eventType, callback, false);
      },
    };
  } else if (target.attachEvent) {
    target.attachEvent(`on${ eventType}`, callback);
    return {
      remove () {
        target.detachEvent(`on${ eventType}`, callback);
      },
    };
  }
}

export function removeEventListener (target, eventType, callback) {
  if(target.removeEventListener) {
    target.removeEventListener(eventType, callback, false);
  } else if (target.detachEvent) {
    target.detachEvent(`on${ eventType}`, callback);
  }
}

export function hasParent (child, parent) {
  var node = child.parentNode;
  while (node != null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

export function isOnScreen (node) {
  if (!node) return false;

  node = React.findDOMNode(node.getDOMNode());

  const vpH = viewPortHeight(); // Viewport Height
  const st = scrollY(); // Scroll Top
  const y = posY(node);
  const nH = nodeHeight(node);

  return (st < y && y + nH < (vpH + st));

}

export function requestAnimationFrame (...args) {
  /* eslint-disable no-undef */
  return setImmediate(...args);
  /* eslint-enable no-undef */

  const requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;

  if (requestAnimationFrame) {
    requestAnimationFrame.apply(window, args);
  }
}

export default {
  addEventListener,
  removeEventListener,
  hasParent,
  isOnScreen,
  requestAnimationFrame,
  posY,
}

function posY (elm) {
  var test = elm;
  var top = 0;

  while(!!test && test.tagName.toLowerCase() !== "body") {
    top += test.offsetTop;
    test = test.offsetParent;
  }

  return top;
}

function viewPortHeight () {

  var de = document.documentElement;

  if (window.innerWidth) {
    return window.innerHeight;
  } else if (de && !isNaN(de.clientHeight) ) {
    return de.clientHeight;
  }

  return 0;
}

function scrollY () {
  if (window.pageYOffset) return window.pageYOffset;
  return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function nodeHeight (elm) {
  return elm.clientHeight || 0;
}
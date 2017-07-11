import React from 'react'

import Button from 'components/Button'
import Modal from 'components/Modal'
import NavBar from 'components/NavBar'

class EscapableModal extends React.Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      anotherModalIsOpen: false,
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Button label="I want modal" onClick={() => this.setState({modalIsOpen: true})} />
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel=""
          onRequestHide={() => this.setState({modalIsOpen: false})}
          style={{padding: "60px"}}
        >
          <h1>This is Modal 1!</h1>
          <Button label="I want more" onClick={() => this.setState({anotherModalIsOpen: true})} />
          <Modal
            isOpen={this.state.anotherModalIsOpen}
            contentLabel=""
            onRequestHide={() => this.setState({anotherModalIsOpen: false})}
            style={{padding: "20px"}}
          >
            <h1>Sure, here is more</h1>
          </Modal>
        </Modal>
      </div>
    )
  }
}

export default EscapableModal;
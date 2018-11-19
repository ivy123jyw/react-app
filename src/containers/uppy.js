import React, { Component } from "react";
import DashboardModal from '@uppy/react/lib/DashboardModal'
import "./uppy.css";
import { Auth } from "aws-amplify";

export default class MusicUploadButton extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      modalOpen: false
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen () {
    this.setState({
      modalOpen: true
    })
  }

  handleClose () {
    this.setState({
      modalOpen: false
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleOpen}>Upload some music</button>
        <DashboardModal
          uppy={this.props.uppy}
          closeModalOnClickOutside
          open={this.state.modalOpen}
          onRequestClose={this.handleClose}
          plugins={['Webcam']}
        />
      </div>
    );
  }
}

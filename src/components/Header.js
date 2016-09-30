import React, { Component, PropTypes } from 'react'

class Header extends Component {
  static propTypes = {
      title: PropTypes.string.isRequired
}

  render() {
    const { title } = this.props
    return (
           <h2> {title} </h2>
  ) 
  }
}

export default Header

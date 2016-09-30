import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  static propTypes = {
    skiing: PropTypes.number.isRequired,
    snowboarding: PropTypes.number.isRequired,
    onIncrementSkiing: PropTypes.func.isRequired,
    onIncrementSnowboarding: PropTypes.func.isRequired
  }

  render() {
    const { skiing, snowboarding, onIncrementSkiing, onIncrementSnowboarding } = this.props
    return (
      <body>
      <p> WHAT IS YOUR FAVOURITE SPORT? </p>
         <table>
           <tr>
            <td>
            <button onClick={onIncrementSkiing}>
              SKIING
            </button>
            {' '}
            </td>
            <td>
            <button onClick={onIncrementSnowboarding}>
              SNOWBOARDING
            </button>
            {' '}
            </td>
           </tr>
           <tr>
            <td>
            {skiing}
            </td>
            <td>  
            {snowboarding}
            </td>
           </tr>
         </table>
      </body>
    )
  }
}

export default Counter

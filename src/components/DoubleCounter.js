import React, { Component, PropTypes } from 'react'

class DoubleCounter extends Component {
  static propTypes = {
    valueA: PropTypes.number.isRequired,
    valueB: PropTypes.number.isRequired,
    titleA: PropTypes.string.isRequired,
    titleB: PropTypes.string.isRequired, 
    onIncrementA: PropTypes.func.isRequired,
    onIncrementB: PropTypes.func.isRequired
  }

  render() {
    const { valueA, valueB, titleA, titleB, onIncrementA, onIncrementB } = this.props
    return (
         <p>
           <div className="rTable">
            <div className="rTableRow">
              <div className="rTableCell"><button onClick={onIncrementA}>{titleA}</button></div>
              <div className="rTableCell"><button onClick={onIncrementB}>{titleB}</button></div>
            </div>
            <div className="rTableRow"> 
              <div className="rTableCell">{valueA} points</div>
              <div className="rTableCell">{valueB} points</div>
            </div>
           </div>
         </p>
    )
  }
}

export default DoubleCounter

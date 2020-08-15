import React from "react";
import { connect } from "react-redux";
import '../list.css'

class List extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='list'>
            <ul className='list_container'>
              {this.props.data[0] === undefined ? console.log('empty') : this.props.data[0][0].map((el, id) => {
                return <li className='items' key={id}>{el.title}:
                  <span className='temps'> Max: {Math.floor(this.props.data[0][1][id][0].max_temp)}°C</span>
                  <span className='temps'>Min:{Math.floor(this.props.data[0][1][id][0].min_temp)}°C</span>
                </li>
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  }
}



export default connect(mapStateToProps,null)(List);

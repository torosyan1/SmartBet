import React from "react";
import io from 'socket.io-client';
import "../App.css";
import List from "./list";
import {connect} from "react-redux";
import {setData} from '../redux/actions/action'

class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                inputValue: "",
                data: {}
            };
        }

  search = () => {
    const socket = io('http://localhost:5000');
    socket.emit('location', {
      url: `https://www.metaweather.com/api/location/search/?query=${this.state.inputValue}`
    });
    socket.on('location', (data) => {
      this.setState({
        data: [data.city, data.wather]
      }, () => {
        this.props.setDataStore(this.state.data)
      })
    })
}

  render() {
    return (
      <React.Fragment>
      <div className='container'>
        <h1>Now the weather</h1>
          <div className='btn_s'>
               <input type='text' placeholder='search...'
                    value={this.state.inputValue}
                    onChange={(event) => this.setState({ inputValue: event.target.value })} />
                <button onClick={this.search}>Search</button>
          </div>
      </div>
        <List />
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setDataStore: (data) => { dispatch(setData(data)) },
  };
};

export default connect(null, mapDispatchToProps)(App);

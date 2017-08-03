import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Maps from './components/Maps';

class App extends Component {
  render(){
    return (
        <div>
          this is my react app
          <Maps
            center={{lat:34.1789377,lng:-118.4338344}}
            zoom={12}
            containerElement={
              <div style={{ height: `200px` }} />
            }
            mapElement={
              <div style={{ height: `100px` }} />
            }
          />
        </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));

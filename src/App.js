import React, {Component} from 'react';
import Header             from './components/Header/Header.js'

//styles
import './base_styles/main.scss'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default App;

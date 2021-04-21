import './Subscribe.css';
import axios from 'axios';
import { Component } from 'react';

class Subscribe extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      isSubscribed: false,
    }
  }

  handleUserInput = (ev) => {
    this.setState({
      userInput: ev.target.value
    });
  }

  submitSubscriber = async () => {
    //for now we are assuming that the user provides a valid email address
      await axios.post('/api/subscribers', {email: this.state.userInput})
      .then(() => {
        this.setState({...this.state, isSubscribed: true});
      })
      .catch(err => console.log(err));

      this.setState({...this.state, badEmail: true});
  }


  render() {
    return (
      <div className="subscribe">
        <div className="subscribe-container">
          <div className="subscribe-text">
              <h2>Subscribe:</h2>
              <p>
                  Get updates on new pieces, events, and shows where Nate’s work can be seen.
              </p>
          </div>
          <div className="subscribe-form">
              <input placeholder="Your email here..." onChange={this.handleUserInput}></input>
              <button id="subscribe-button" onClick={this.submitSubscriber}>Subscribe</button>
              <div>{this.state.isSubscribed?<p>Thanks for subscribing!</p>:null}</div>
          </div>
        </div>
      </div>
    )
  }
    
}
  
export default Subscribe;
import './Contact.css';
import axios from 'axios';
import {useState} from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [emailStatus, setEmailStatus] = useState(null);

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  }

  const handleText = (ev) => {
    setText(ev.target.value);
  }

  const contactArtist = async () => {
    //check the users input to see if it's valid.
    if (email.length===0 || text.length===0) {
      setEmailStatus("incomplete");
      return;
    }

    setEmailStatus("pending");
    await axios.post('/api/contact', {
      email: email,
      text: text
    })
    .then(() => {
        setEmailStatus('success');
      })
    .catch(err => {
      setEmailStatus('failed');
      console.log(err);
    });
  }

  return (
    <div className="contact">
        <h2 class="view-header">Contact/Commissions:</h2>
        <p>Nate is accepting commissions on a case by case basis. Please provide some quick details about your project and Nate will get back to you to discuss more specifics.</p>
        <div className="contact-form">

          <h2>Commision/Contact Request</h2>

          <div className="email-contact">
            <p>Email:</p> <input id="email-input-contact" placeholder="Your email here..." onChange={handleEmail}></input>
          </div>

          <div className="details-contact">
            <p>Commission/Contact Details:</p>
            <textarea rows="15" id="details-input-contact" placeholder="Provide a summary of your project here..."
            onChange={handleText}></textarea>
          </div>
          <div className="send-contact-button-container">
            <button id="send-contact-request" onClick={contactArtist}>Send Request</button>
          </div>
          <div className="email-message">
            {emailStatus==="pending"?
              <p>Sending Email...</p>:
              emailStatus==="failed"?
                <p>There was a problem sending the email. Please try again. If the problem persists please let the artist know.</p>:
                emailStatus==="success"?
                  <p>Email sent!</p>:
                  emailStatus==="incomplete"?
                    <p>You must provide both a valid email and your commission/contact details.</p>:
                    null
            }
          </div>
        </div>
    </div>
  );
}

export default Contact;
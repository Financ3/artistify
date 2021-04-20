import './Contact.css';

function Contact() {
    return (
      <div className="contact">
          <h2 class="view-header">Contact/Commissions:</h2>
          <p>Nate is accepting commissions on a case by case basis. Please provide some quick details about your project and Nate will get back to you to discuss more specifics.</p>
          <div className="contact-form">

            <h2>Commision/Contact Request</h2>

            <div className="email-contact">
              <p>Email:</p> <input id="email-input-contact" placeholder="Your email here..."></input>
            </div>

            <div className="details-contact">
              <p>Commission Details:</p>
              <textarea rows="15" id="details-input-contact" placeholder="Provide a summary of your project here..."></textarea>
            </div>
            <div className="send-contact-button-container">
              <button id="send-contact-request">Send Request</button>
            </div>

          </div>
      </div>
    );
  }
  
  export default Contact;
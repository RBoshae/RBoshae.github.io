import React from 'react'

const constactStyle = {
   width: '42%', float: 'left', display: 'inline-block', marginRight: '1rem'
}

const Contact = () => {
  return(
    <section id="contact">
      <h1>Contact</h1>
      <div id="contactMessage">
        <p>If you think I might be a good fit at your company or are interested in speaking with me feel free to send me an email.</p>
        <h3>Email</h3>
        <p>rwboshae (at) gmail (dot) com</p>

      </div>

      {/* TODO: Add Form.
        <div style={{ float: 'right', display: 'inline-block', marginRight: '1rem'}}>
        <form role="form" aria-label="contact form" novalidate="">
          <div>
            <div>
              <input type="text" id="field_name" required="" aria-invalid="false" name="Name" value="" placeholder="Name *" data-aid="nameField"></input>
              <input type="text" id="field_email" required="" aria-invalid="false" name="Email" value="" class="cf2_required" placeholder="Email *" data-aid="emailField"></input>
            </div>
            <div>
              <input type="text" id="field_subject" aria-invalid="false" name="Subject" value="" class="" placeholder="Subject" data-aid="subjectField"></input>
            </div>
            <textarea name="Message" placeholder="Message" data-aid="messageField" ></textarea>
            <button type="submit" id="comp-iqqoiul5submit" class="cf2submit">Send</button>
          </div>
        </form>
      </div>*/}
    </section>
  )
}

export default Contact;

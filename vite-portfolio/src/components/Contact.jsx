

function Contact ()  {
  <section id="contact" className="contact">
    <h2>Contact Me</h2>
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Message:
        <textarea name="message" rows="5" required></textarea>
      </label>
      <button type="submit">Send Message</button>
    </form>
  </section>
};

export default Contact;

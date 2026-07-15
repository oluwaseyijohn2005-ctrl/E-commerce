export default function CustomerCare() {
  return (
    <div className="page">
      <h2>Customer Care</h2>
      <p>We’re here to help! Reach out to us anytime.</p>
      
      <div className="contact-grid">
        <div>
          <h3>📞 Call Us</h3>
          <p>+234 800 123 4567</p>
          <p>Mon - Sat: 9am - 6pm</p>
        </div>
        <div>
          <h3>📧 Email Us</h3>
          <p>support@shopeasy.com</p>
        </div>
        <div>
          <h3>📍 Visit Us</h3>
          <p>123 Market Street, Ibadan, Oyo State</p>
        </div>
      </div>

      <form className="contact-form">
        <h3>Send us a message</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="How can we help you?" rows="4" required></textarea>
        <button type="submit" onClick={(e) => {e.preventDefault(); alert("Message sent! We will get back to you.")}}>Submit</button>
      </form>
    </div>
  );
}
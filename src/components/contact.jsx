export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! This is a demo.");
  }

  return (
    <div className="page">
      <h2>Contact Us</h2>
      <p>Have a question? Send us a message and we'll get back to you.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn place-order-btn">Send Message</button>
      </form>
    </div>
  );
}
// src/pages/FAQ.jsx
function FAQ() {
    const faqs = [
      {
        question: "How do I place an order?",
        answer: "Browse online, add items to your cart, and checkout via our secure portal."
      },
      {
        question: "What areas do you serve?",
        answer: "Currently Boston, expanding to neighboring regions soon!"
      },
      {
        question: "How is your meat sourced?",
        answer: "We work with certified ethical farms that avoid hormones and antibiotics."
      },
      {
        question: "Can I pause my subscription?",
        answer: "Yes! Adjust or skip deliveries anytime via your account."
      },
      {
        question: "What if my order arrives damaged?",
        answer: "Contact us within 24 hours for a full refund or replacement."
      },
      {
        question: "How long will my meat stay fresh?",
        answer: "Our vacuum-sealed packaging ensures freshness for up to 14 days in your refrigerator, or up to 6 months when frozen."
      },
      {
        question: "Do you have minimum order requirements?",
        answer: "For standard deliveries, our minimum order is $50. For business accounts, please contact our sales team."
      },
      {
        question: "How do I track my delivery?",
        answer: "You'll receive real-time tracking updates via email and text message once your order has been shipped."
      }
    ];
  
    return (
      <div className="faq-page">
        <section className="faq-hero">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about MeatDash.</p>
        </section>
  
        <section className="faq-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">Q: {faq.question}</h3>
                <p className="faq-answer">A: {faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="still-have-questions">
            <h3>Still Have Questions?</h3>
            <p>Our customer service team is ready to help.</p>
            <button className="btn primary">Contact Us</button>
          </div>
        </section>
      </div>
    );
  }
  
  export default FAQ;
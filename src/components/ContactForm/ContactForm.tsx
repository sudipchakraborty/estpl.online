import { useState, type ChangeEvent, type FormEvent } from "react";
import { sendContactEmail } from "../../services/emailService";
import "./ContactForm.css";

const emptyForm = { name: "", email: "", company: "", subject: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      const result = await sendContactEmail(formData);
      setStatus({ type: "success", message: result.message });
      setFormData(emptyForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "The message could not be sent.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact-panel" aria-labelledby="contact-form-heading">
      <div className="contact-panel-intro">
        <p className="contact-panel-label">Start a conversation</p>
        <h2 id="contact-form-heading">Tell us about your requirement</h2>
        <p>Share your Visual AI, automation, inspection, or monitoring requirement and we will be happy to discuss it with you.</p>
        <a href="mailto:info@elternsegen.ai">info@elternsegen.ai</a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name<input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="name" required /></label>
        <label>Email<input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" required /></label>
        <label>Company <span>(optional)</span><input type="text" name="company" value={formData.company} onChange={handleChange} autoComplete="organization" /></label>
        <label>Subject<input type="text" name="subject" value={formData.subject} onChange={handleChange} required /></label>
        <label className="contact-message-field">Message<textarea rows={7} name="message" value={formData.message} onChange={handleChange} required /></label>
        <button type="submit" disabled={sending}>{sending ? "Sending..." : "Send message"}</button>
        {status && (
          <p className={`contact-form-status contact-form-status-${status.type}`} role="status">
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}

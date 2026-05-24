export default function FollowUpPreview({ message }) {
  const copy = async () => navigator.clipboard.writeText(message || '');
  return (
    <section className="card">
      <h3>AI Follow-Up Preview</h3>
      <p>{message || 'Select or create a lead to preview your follow-up message.'}</p>
      <button className="btn" onClick={copy} disabled={!message}>Copy Message</button>
    </section>
  );
}

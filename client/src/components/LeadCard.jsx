export default function LeadCard({ lead, onStatusChange, onEdit }) {
  return (
    <article className="card lead-card">
      <div>
        <h4>{lead.name}</h4>
        <p>{lead.serviceType} • {lead.phone}</p>
        <p>{lead.email}</p>
        <p className="muted">Urgency: {lead.urgency} {lead.budget ? `• Budget: ${lead.budget}` : ''}</p>
      </div>
      <div className="lead-actions">
        <select value={lead.status} onChange={(e) => onStatusChange(lead.id, e.target.value)}>
          {['New', 'Contacted', 'Quoted', 'Won', 'Lost'].map((s) => <option key={s}>{s}</option>)}
        </select>
        <button className="btn secondary" onClick={() => onEdit(lead)}>Edit</button>
      </div>
    </article>
  );
}

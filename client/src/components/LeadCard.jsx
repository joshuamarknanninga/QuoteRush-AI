export default function LeadCard({ lead, onStatusChange }) {
  return (
    <article className="card lead-card">
      <div>
        <h4>{lead.name}</h4><p>{lead.serviceType} • {lead.phone}</p><p>{lead.email}</p>
      </div>
      <select value={lead.status} onChange={(e) => onStatusChange(lead.id, e.target.value)}>
        {['New','Contacted','Quoted','Won','Lost'].map((s) => <option key={s}>{s}</option>)}
      </select>
    </article>
  );
}

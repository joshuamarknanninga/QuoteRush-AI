import { useMemo, useState } from 'react';
import LeadCard from '../components/LeadCard';
import LeadForm from '../components/LeadForm';
import { initialLead, LEAD_STATUSES, loadLeads, saveLeads } from './shared';

export default function Leads() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const [leads, setLeads] = useState(loadLeads());
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState(initialLead);

  const list = useMemo(
    () => leads.filter((l) => (status === 'All' || l.status === status) && `${l.name} ${l.serviceType} ${l.phone} ${l.notes}`.toLowerCase().includes(query.toLowerCase())),
    [leads, query, status]
  );

  const persist = (updated) => { setLeads(updated); saveLeads(updated); };

  const onStatusChange = (id, next) => persist(leads.map((l) => (l.id === id ? { ...l, status: next } : l)));

  const beginEdit = (lead) => { setEditing(lead.id); setEditForm({ ...lead }); };

  const saveEdit = (e) => {
    e.preventDefault();
    persist(leads.map((l) => (l.id === editing ? { ...editForm, id: l.id, createdAt: l.createdAt } : l)));
    setEditing(null);
  };

  return (
    <section>
      <h1>Leads</h1>
      <div className="card filter-row">
        <input placeholder="Search leads, service, phone, notes" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>{['All', ...LEAD_STATUSES].map((s) => <option key={s}>{s}</option>)}</select>
      </div>
      {editing && <><h2>Edit Lead</h2><LeadForm form={editForm} setForm={setEditForm} onSubmit={saveEdit} submitLabel="Update Lead" /></>}
      <div className="grid">{list.map((l) => <LeadCard key={l.id} lead={l} onStatusChange={onStatusChange} onEdit={beginEdit} />)}</div>
    </section>
  );
}

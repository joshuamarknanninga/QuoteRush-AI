import { LEAD_STATUSES, SERVICE_TYPES, URGENCY_OPTIONS } from '../pages/shared';

export default function LeadForm({ form, setForm, onSubmit, submitLabel = 'Save Lead' }) {
  const handle = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <form className="card form-grid" onSubmit={onSubmit}>
      <input name="name" placeholder="Customer Name" value={form.name} onChange={handle} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handle} required />
      <input name="email" placeholder="Email" type="email" value={form.email} onChange={handle} required />
      <select name="serviceType" value={form.serviceType} onChange={handle}>{SERVICE_TYPES.map((s) => <option key={s}>{s}</option>)}</select>
      <select name="urgency" value={form.urgency} onChange={handle}>{URGENCY_OPTIONS.map((u) => <option key={u}>{u}</option>)}</select>
      <input name="budget" placeholder="Budget (optional)" value={form.budget} onChange={handle} />
      <select name="status" value={form.status} onChange={handle}>{LEAD_STATUSES.map((s) => <option key={s}>{s}</option>)}</select>
      <textarea name="notes" placeholder="Quote notes" value={form.notes} onChange={handle} rows="3" />
      <textarea name="roughNotes" placeholder="Rough follow-up notes (example: needs fence repair Friday, worried about cost)" value={form.roughNotes} onChange={handle} rows="3" />
      <button className="btn" type="submit">{submitLabel}</button>
    </form>
  );
}

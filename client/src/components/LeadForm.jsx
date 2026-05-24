const serviceTypes = ['Roofing','Cleaning','Landscaping','HVAC','Plumbing','Painting','Mobile Mechanic','Junk Removal','Pest Control','Other'];

export default function LeadForm({ form, setForm, onSubmit }) {
  const handle = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  return (
    <form className="card form-grid" onSubmit={onSubmit}>
      {['name','phone','email','budget'].map((f) => <input key={f} name={f} placeholder={f[0].toUpperCase()+f.slice(1)} value={form[f]} onChange={handle} required={f !== 'budget'} />)}
      <select name="serviceType" value={form.serviceType} onChange={handle}>{serviceTypes.map((s) => <option key={s}>{s}</option>)}</select>
      <select name="urgency" value={form.urgency} onChange={handle}>{['ASAP','This Week','This Month'].map((u) => <option key={u}>{u}</option>)}</select>
      <select name="status" value={form.status} onChange={handle}>{['New','Contacted','Quoted','Won','Lost'].map((s) => <option key={s}>{s}</option>)}</select>
      <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handle} rows="3" />
      <button className="btn" type="submit">Save Lead</button>
    </form>
  );
}

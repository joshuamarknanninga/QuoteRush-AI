import { useMemo, useState } from 'react';
import LeadCard from '../components/LeadCard';
import { loadLeads, saveLeads } from './shared';

export default function Leads() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const [leads, setLeads] = useState(loadLeads());
  const list = useMemo(() => leads.filter(l => (status==='All'||l.status===status) && `${l.name} ${l.serviceType} ${l.phone}`.toLowerCase().includes(query.toLowerCase())), [leads,query,status]);
  const onStatusChange = (id, next) => {
    const updated = leads.map(l => l.id===id?{...l,status:next}:l);
    setLeads(updated); saveLeads(updated);
  };
  return <section><h1>Leads</h1><div className="card filter-row"><input placeholder="Search leads" value={query} onChange={e=>setQuery(e.target.value)} /><select value={status} onChange={e=>setStatus(e.target.value)}>{['All','New','Contacted','Quoted','Won','Lost'].map(s=><option key={s}>{s}</option>)}</select></div><div className="grid">{list.map(l=><LeadCard key={l.id} lead={l} onStatusChange={onStatusChange} />)}</div></section>;
}

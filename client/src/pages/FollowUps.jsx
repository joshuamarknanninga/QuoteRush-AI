import { useState } from 'react';
import FollowUpPreview from '../components/FollowUpPreview';
import { generateFollowUp } from '../services/followUpFormatter';
import { loadLeads } from './shared';

export default function FollowUps() {
  const leads = loadLeads();
  const [id, setId] = useState(leads[0]?.id || '');
  const lead = leads.find(l=>l.id===id);
  return <section><h1>Follow-Ups</h1><div className="card"><select value={id} onChange={e=>setId(e.target.value)}>{leads.map(l=><option value={l.id} key={l.id}>{l.name} - {l.serviceType}</option>)}</select></div><FollowUpPreview message={lead ? generateFollowUp(lead) : ''} /></section>;
}

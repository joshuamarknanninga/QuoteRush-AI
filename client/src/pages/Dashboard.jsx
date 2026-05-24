import { useMemo, useState } from 'react';
import StatCard from '../components/StatCard';
import LeadForm from '../components/LeadForm';
import FollowUpPreview from '../components/FollowUpPreview';
import { generateFollowUp } from '../services/followUpFormatter';
import { initialLead, loadLeads, saveLeads } from './shared';

export default function Dashboard() {
  const [form, setForm] = useState(initialLead);
  const [leads, setLeads] = useState(loadLeads());
  const onSubmit = (e) => { e.preventDefault(); const next=[{...form,id:crypto.randomUUID(),createdAt:new Date().toISOString()},...leads]; setLeads(next); saveLeads(next); setForm(initialLead); };
  const stats = useMemo(() => ({ total: leads.length, newL: leads.filter(l=>l.status==='New').length, won: leads.filter(l=>l.status==='Won').length }), [leads]);
  return <section><h1>QuoteRush AI</h1><p className="subtitle">Turn missed quote requests into booked jobs</p><div className="stats-grid"><StatCard label="Total Leads" value={stats.total} /><StatCard label="New" value={stats.newL} /><StatCard label="Won Jobs" value={stats.won} /></div><h2>New Quote Request</h2><LeadForm form={form} setForm={setForm} onSubmit={onSubmit} /><div className="grid"><section className="card"><h3>Lead Pipeline</h3><ul>{['New','Contacted','Quoted','Won','Lost'].map(s=><li key={s}>{s}: {leads.filter(l=>l.status===s).length}</li>)}</ul></section><FollowUpPreview message={leads[0] ? generateFollowUp(leads[0]) : ''} /></div><section className="card"><h3>Recent Leads</h3><ul>{leads.slice(0,5).map(l=><li key={l.id}>{l.name} • {l.serviceType} • {l.status}</li>)}</ul></section><section className="card cta"><h3>Ready for faster bookings?</h3><p>Upgrade to unlock higher lead limits and pro pipeline workflows.</p></section></section>;
}

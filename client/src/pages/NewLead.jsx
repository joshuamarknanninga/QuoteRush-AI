import { useState } from 'react';
import LeadForm from '../components/LeadForm';
import { initialLead, loadLeads, saveLeads } from './shared';

export default function NewLead() {
  const [form, setForm] = useState(initialLead);
  const onSubmit = (e) => {
    e.preventDefault();
    const leads = loadLeads();
    leads.unshift({ ...form, id: crypto.randomUUID(), createdAt: new Date().toISOString() });
    saveLeads(leads);
    setForm(initialLead);
  };
  return <section><h1>New Lead</h1><LeadForm form={form} setForm={setForm} onSubmit={onSubmit} /></section>;
}

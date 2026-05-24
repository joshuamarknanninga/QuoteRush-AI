export const LEAD_STATUSES = ['New', 'Contacted', 'Quoted', 'Won', 'Lost'];
export const SERVICE_TYPES = ['Roofing', 'Cleaning', 'Landscaping', 'HVAC', 'Plumbing', 'Painting', 'Mobile Mechanic', 'Junk Removal', 'Pest Control', 'Other'];
export const URGENCY_OPTIONS = ['ASAP', 'This Week', 'This Month'];

export const initialLead = {
  name: '',
  phone: '',
  email: '',
  serviceType: 'Roofing',
  urgency: 'ASAP',
  budget: '',
  notes: '',
  roughNotes: '',
  status: 'New'
};

export const loadLeads = () => JSON.parse(localStorage.getItem('qr_leads') || '[]');
export const saveLeads = (leads) => localStorage.setItem('qr_leads', JSON.stringify(leads));

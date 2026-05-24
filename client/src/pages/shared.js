export const initialLead = { name:'', phone:'', email:'', serviceType:'Roofing', urgency:'ASAP', budget:'', notes:'', status:'New' };
export const loadLeads = () => JSON.parse(localStorage.getItem('qr_leads') || '[]');
export const saveLeads = (leads) => localStorage.setItem('qr_leads', JSON.stringify(leads));

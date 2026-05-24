function serviceLabel(lead) {
  if (lead.roughNotes?.toLowerCase().includes('fence')) return 'fence repair';
  return lead.serviceType.toLowerCase();
}

function urgencyLine(urgency, roughNotes) {
  const text = roughNotes?.toLowerCase() || '';
  if (text.includes('friday')) return 'We currently have availability Friday and can schedule a visit at your convenience.';
  if (urgency === 'ASAP') return 'We can prioritize this quickly and get your quote moving today.';
  if (urgency === 'This Week') return 'We can fit this into this week and keep everything on schedule.';
  return 'We can get this scheduled this month and provide a clear plan.';
}

export function generateFollowUp(lead) {
  const budgetConcern = lead.roughNotes?.toLowerCase().includes('cost') || lead.roughNotes?.toLowerCase().includes('budget');
  const budgetLine = budgetConcern || lead.budget
    ? 'We would be happy to provide a quote and discuss affordable options.'
    : 'We would be happy to provide a detailed quote based on your needs.';

  return `Hi ${lead.name || 'there'}, thanks for reaching out about your ${serviceLabel(lead)}. ${budgetLine} ${urgencyLine(lead.urgency, lead.roughNotes)} Reply here or call us anytime and we will take care of the next steps.`;
}

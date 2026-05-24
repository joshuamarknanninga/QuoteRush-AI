export function generateFollowUp(lead) {
  const urgencyLine =
    lead.urgency === 'ASAP'
      ? 'I know this is urgent, and we can prioritize your request right away.'
      : `We can schedule this ${lead.urgency.toLowerCase()} and keep everything on track.`;

  const budgetLine = lead.budget
    ? `We will tailor a clear option around your budget target of ${lead.budget}.`
    : 'We can provide pricing options that fit your needs.';

  return `Hi ${lead.name}, thanks for reaching out to us about ${lead.serviceType}. ${urgencyLine} ${budgetLine} Reply here or call us at your convenience and we will lock in your quote details.`;
}

import { createPortalSession } from '../services/api';

export default function Settings() {
  const openPortal = async () => {
    try { const { url } = await createPortalSession(); window.location.href = url; }
    catch (e) { alert(e.message); }
  };
  return <section><h1>Settings</h1><div className="card"><h3>Current Plan</h3><p>Plan selected during checkout appears in Stripe customer profile.</p></div><div className="card"><h3>Subscription Status</h3><p>Manage active status, renewals, and payment methods in Stripe Billing Portal.</p><button className="btn" onClick={openPortal}>Manage Subscription</button></div></section>;
}

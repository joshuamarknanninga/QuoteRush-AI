import { createPortalSession } from '../services/api';

export default function Settings() {
  const openPortal = async () => {
    try {
      const customerId = localStorage.getItem('qr_stripe_customer_id') || '';
      const { url } = await createPortalSession(customerId);
      window.location.href = url;
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <section>
      <h1>Settings</h1>
      <div className="card">
        <h3>Current Plan</h3>
        <p>Your selected plan is managed by Stripe checkout and billing records.</p>
      </div>
      <div className="card">
        <h3>Subscription Status</h3>
        <p>Manage active status, renewals, and payment methods in Stripe Billing Portal.</p>
        <button className="btn" onClick={openPortal}>Manage Subscription</button>
      </div>
    </section>
  );
}

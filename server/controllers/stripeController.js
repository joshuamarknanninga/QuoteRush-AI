import Stripe from 'stripe';

const getStripe = () => process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

const priceMap = {
  starter: 'STRIPE_PRICE_STARTER',
  pro: 'STRIPE_PRICE_PRO',
  agency: 'STRIPE_PRICE_AGENCY'
};

export async function createCheckoutSession(req, res) {
  try {
    const stripe = getStripe();
    const { priceKey } = req.body;
    if (!stripe) return res.status(400).json({ error: 'Stripe is not configured yet. Please add server environment keys.' });
    const envKey = priceMap[priceKey];
    const price = process.env[envKey];
    if (!price) return res.status(400).json({ error: `Missing Stripe price mapping for ${priceKey}.` });
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price, quantity: 1 }],
      success_url: `${process.env.CLIENT_URL}/settings?success=true`,
      cancel_url: `${process.env.CLIENT_URL}/pricing?canceled=true`
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Unable to create checkout session.' });
  }
}

export async function createPortalSession(req, res) {
  try {
    const stripe = getStripe();
    if (!stripe) return res.status(400).json({ error: 'Stripe is not configured yet. Please add server environment keys.' });
    res.status(400).json({ error: 'No Stripe customer yet. Complete a checkout first in MVP mode.' });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Unable to create billing portal session.' });
  }
}

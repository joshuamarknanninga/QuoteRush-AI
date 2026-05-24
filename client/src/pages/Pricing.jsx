import PlanCard from '../components/PlanCard';
import { createCheckoutSession } from '../services/api';

const plans = [
  { key:'starter', name:'Starter', price:19, features:['100 leads/month','AI follow-up drafts','lead dashboard','copy-to-text/email'] },
  { key:'pro', name:'Pro', price:49, features:['1,000 leads/month','pipeline tracking','saved templates','priority lead alerts'] },
  { key:'agency', name:'Agency', price:99, features:['unlimited leads','multi-business support','team dashboard','priority support'] }
];

export default function Pricing() {
  const subscribe = async (priceKey) => {
    try {
      const { url } = await createCheckoutSession(priceKey);
      window.location.href = url;
    } catch (e) { alert(e.message); }
  };
  return <section><h1>Pricing</h1><p className="subtitle">Choose a plan built to convert more quote requests into paying jobs.</p><div className="pricing-grid">{plans.map(p=><PlanCard key={p.key} {...p} onSubscribe={()=>subscribe(p.key)} />)}</div></section>;
}

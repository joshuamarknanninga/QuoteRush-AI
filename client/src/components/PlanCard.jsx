export default function PlanCard({ name, price, features, onSubscribe }) {
  return (
    <article className="card plan-card">
      <h3>{name}</h3>
      <p className="price">${price}<span>/month</span></p>
      <ul>{features.map((f) => <li key={f}>{f}</li>)}</ul>
      <button className="btn" onClick={onSubscribe}>Subscribe</button>
    </article>
  );
}

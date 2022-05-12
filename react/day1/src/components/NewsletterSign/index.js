import './styles.css';

export default function NewsletterSign() {
  return (
    <div className="newsletter">
      <h2 className="newsletter__subtitle">Sua casa com as</h2>
      <h1 className="newsletter__title">melhores plantas</h1>

      <p className="newsletter__text">
        Encontre aqui uma vasta seleção de plantas para decorar
        a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.
        Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
      </p>

      <div className="newsletter__email">
        <input type="email" placeholder="insira seu e-mail" />
        <button>
          Assinar newsletter
        </button>
      </div>
    </div>
  );
}

import './styles.css';

import { useState } from 'react';
import emailValidator from '../../utils/emailValidator';

export default function NewsletterSign() {
  const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    const isValidEmail = emailValidator(email);
    const message = isValidEmail ?
      `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`
      : 'Por favor, digite um e-mail valido';

    alert(message);
    setEmail('');
  };

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
        <input
          type="email"
          placeholder="insira seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button name='assinar newsletter' onClick={() => handleButtonClick()}>
          Assinar newsletter
        </button>
      </div>
    </div>
  );
}

import Menu from '../../components/Menu';
import NewsletterSign from '../../components/NewsletterSign';

import './styles.css';

export default function HomePage() {
  return (
    <main className="home">
      <div className="image-home-1">
        <img src="/images/img-home-1.png" alt="forma-amarela" />
      </div>

      <Menu />

      <section className="home__main-content">
        <div className="home__newsletter">
          <NewsletterSign />
        </div>

        <div className="home__img-hero-1">
          <img src="/images/imagem-hero-1.png" alt="Planta" />
        </div>
      </section>
    </main>
  );
}

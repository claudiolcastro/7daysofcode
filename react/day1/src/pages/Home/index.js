import Menu from '../../components/Menu';

import './styles.css';

export default function HomePage() {
  return (
    <main className="home">
      <div className="image-home-1">
        <img src="/images/img-home-1.png" alt="forma-amarela" />
      </div>

      <Menu />
    </main>
  );
}

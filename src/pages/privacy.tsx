import React from 'react';
import Layout from '@theme/Layout';

export default function Privacy(): JSX.Element {
  return (
    <Layout title="Polityka prywatności" description="Polityka prywatności WiseGuard">
      <div style={{padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto'}}>
        <h1>Polityka prywatności</h1>
        <p><em>Ostatnia aktualizacja: styczeń 2026</em></p>

        <h2>1. Jakie informacje zbieramy</h2>
        <p>
          Zbieramy informacje podane bezpośrednio przez Ciebie, w tym imię, email, nazwę firmy i
          numer telefonu, gdy kontaktujesz się z nami lub prosisz o demo.
        </p>

        <h2>2. Jak wykorzystujemy dane</h2>
        <p>Wykorzystujemy dane, aby:</p>
        <ul>
          <li>odpowiadać na zapytania i prośby</li>
          <li>wysyłać powiadomienia techniczne i wsparcie</li>
          <li>informować o produktach, usługach i wydarzeniach</li>
        </ul>

        <h2>3. Bezpieczeństwo danych</h2>
        <p>
          Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych przed
          nieautoryzowanym dostępem, zmianą, ujawnieniem lub zniszczeniem.
        </p>

        <h2>4. Zgodność z RODO</h2>
        <p>
          Jako firma działająca w UE spełniamy wymagania RODO. Masz prawo do dostępu, poprawy lub
          usunięcia danych osobowych.
        </p>

        <h2>5. Kontakt</h2>
        <p>W sprawach dotyczących polityki prywatności napisz do: info@wiseguard.pl</p>
      </div>
    </Layout>
  );
}

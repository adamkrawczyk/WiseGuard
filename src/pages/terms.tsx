import React from 'react';
import Layout from '@theme/Layout';

export default function Terms(): JSX.Element {
  return (
    <Layout title="Warunki użytkowania" description="Warunki użytkowania WiseGuard">
      <div style={{padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto'}}>
        <h1>Warunki użytkowania</h1>
        <p><em>Ostatnia aktualizacja: styczeń 2026</em></p>

        <h2>1. Akceptacja warunków</h2>
        <p>
          Korzystając ze strony WiseGuard, akceptujesz i zgadzasz się na warunki niniejszej umowy.
        </p>

        <h2>2. Opis usługi</h2>
        <p>
          WiseGuard dostarcza system IoT do śledzenia aktywów i zapobiegania kradzieżom na budowach,
          w tym urządzenia, platformę software i powiązane usługi.
        </p>

        <h2>3. Licencja użytkowania</h2>
        <p>
          Udzielamy tymczasowego dostępu do materiałów WiseGuard wyłącznie do osobistego,
          niekomercyjnego użytku informacyjnego.
        </p>

        <h2>4. Ograniczenia odpowiedzialności</h2>
        <p>
          WiseGuard nie ponosi odpowiedzialności za szkody wynikające z użycia lub braku możliwości
          użycia materiałów na stronie.
        </p>

        <h2>5. Umowa świadczenia usług</h2>
        <p>
          Szczegółowe warunki sprzętu, subskrypcji SaaS i wsparcia będą przedstawione w odrębnej
          umowie podczas onboardingu.
        </p>

        <h2>6. Zmiany</h2>
        <p>
          WiseGuard może aktualizować warunki bez wcześniejszego powiadomienia. Korzystanie ze
          strony oznacza akceptację aktualnej wersji.
        </p>

        <h2>7. Kontakt</h2>
        <p>W sprawach dotyczących warunków użytkowania napisz do: info@wiseguard.pl</p>
      </div>
    </Layout>
  );
}

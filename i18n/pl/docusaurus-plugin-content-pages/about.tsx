import React from 'react';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <Layout title="O nas" description="Dowiedz się więcej o WiseGuard">
      <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>O WiseGuard</h1>
        <p>
          WiseGuard to najnowocześniejsze rozwiązanie śledzenia aktywów IoT i zapobiegania kradzieżom, 
          zaprojektowane specjalnie dla branży budowlanej w Polsce.
        </p>
        <h2>Nasza Misja</h2>
        <p>
          Dostarczanie kierownikom budów przystępnego, łatwego w użyciu systemu, który zapobiega 
          kradzieżom, redukuje opóźnienia projektów i poprawia odpowiedzialność za aktywa.
        </p>
        <h2>Nasze Rozwiązanie</h2>
        <p>
          Łączymy tagi BLE do masowego śledzenia aktywów z trackerami GPS dla sprzętu o wysokiej wartości, 
          tworząc hybrydowy system, który równoważy opłacalność z kompleksowym pokryciem.
        </p>
        <h2>Dlaczego WiseGuard?</h2>
        <ul>
          <li>Codzienne automatyczne audyty wszystkich aktywów</li>
          <li>Alerty kradzieży w czasie rzeczywistym</li>
          <li>Śledzenie strefowe ze strategicznymi bramami</li>
          <li>Kompleksowe raporty incydentów dla ubezpieczenia i policji</li>
          <li>Interfejs przyjazny dla kierowników wymagający mniej niż 10 minut dziennie</li>
        </ul>
      </div>
    </Layout>
  );
}

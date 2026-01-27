# WiseGuard — Whitepaper (PL)
## Inteligentny audyt zasobów i antykradzież na budowach (Polska/EU-first)


**Wersja:** 1.0 (sprzedaż + technika)  
**Zakres:** budowy (civil), EU/Polska-first  
**Status produktu:** pilot-ready, software produkcyjny gotowy  
**Backbone:** ROS 2 + WiseOS (Zenoh-based DDS) + InfluxDB + Grafana + Foxglove bridge
---


## 1) Streszczenie wykonawcze
WiseGuard to system monitorowania i audytu zasobów na placu budowy, którego kluczowym wyróżnikiem jest **codzienny, automatyczny “Daily Audit”** wszystkich oznaczonych aktywów oraz **szybkie alerty “missing” w ciągu godzin**, a nie dni. Ogranicza to straty i przestoje spowodowane kradzieżą / “znikaniem” sprzętu.


**Dlaczego teraz:** straty w UE przekraczają **€1.5 mld rocznie**, a w Polsce problem dotyka ~**74% firm w ostatnim roku**; kradzieże generują opóźnienia (często tygodnie), koszty zastępstw i presję ubezpieczeniową.


---


## 2) Problem (z perspektywy budowy)
- Kradzieże i “zaginięcia” dotyczą masowo narzędzi, paliwa, metali (m.in. miedź), przewodów i materiałów.
- Wysoki udział incydentów z komponentem “insider”: ~**41%** przypadków wiązanych jest z pracownikami / osobami z dostępem.
- Standardowe metody: ochrona, CCTV, ręczne inwentaryzacje — są kosztowne i/lub reaktywne (dowiadujesz się “rano” albo “za 2 tygodnie”).
- Odzyskiwanie skradzionego sprzętu bywa niskie (rząd wielkości ~20–25% w publikowanych analizach), więc **czas reakcji** jest krytyczny.


---


## 3) Rozwiązanie: WiseGuard
### 3.1. Co to jest
System IoT + software do:
- masowego tagowania zasobów (setki–tysiące),
- wykrywania obecności w strefach (zone / last-seen),
- alertów “missing” tego samego dnia,
- eskalacji “stolen presumed” po 48h braku potwierdzenia,
- oraz generowania **Incident Package** (raport do policji/ubezpieczyciela).


To nie “kolejny GPS na mapie”. To **procedura operacyjna** wbudowana w narzędzie:
> “Zamykamy dzień audytem. Rano wiesz, co zniknęło w nocy.”


---


## 4) Dlaczego ROS 2 + WiseOS
WiseGuard integruje dane tagów/trackera w **jednym, spójnym kręgosłupie komunikacyjnym**:
- ROS 2 jako model danych i integracji z automatyką (np. roboty, drony, bramki),
- WiseOS jako warstwa wymiany (Zenoh-based DDS), storage (InfluxDB), dashboards (Grafana) oraz bridge do wizualizacji (Foxglove).


Efekt: łatwa rozbudowa o:
- integracje z telemetryką maszyn (OEM/telematics),
- automatyczne akcje i reguły,
- analitykę w czasie i po czasie (historia audytów, trendy incydentów).


---


## 5) Jak to działa (2-tier)
### Tier A: “Mass” — BLE tagi + bramki (strefy)
- Tagi BLE na większości zasobów (narzędzia, drobny sprzęt, wybrane materiały).
- Bramki skanują sygnał i raportują zdarzenia “seen” do WiseOS.
- Lokalizacja: **zone / last-seen** (wystarcza do audytu i wykrycia wyniesienia przez wyjścia / strefy).


Bateria: docelowo ≥ 1 rok, realne 1–2 lata; porównywalne rozwiązania deklarują multi-letnie działanie.


### Tier B: “High value” — trackery (GPS/NB-IoT/LTE-M lub LoRaWAN)
- Dla 10–20% najcenniejszych zasobów (agregaty, zagęszczarki, małe maszyny, generatory, przyczepy).
- Alerty geofence/wyjazd + tryb “recovery mode” (częstsze pozycje po incydencie).


---


## 6) Core feature: Daily Audit
**Cel:** 10 min/dzień dla kierownika budowy, a nie “nocne liczenie”.


Semantyka:
- **Present**: widziany w oknie (np. 24h).
- **Missing**: nie widziany do końca dnia → alarm “sprawdź dziś”.
- **Stolen presumed**: >48h bez potwierdzenia (jeśli brak usprawiedliwienia).


---


## 7) Wartość biznesowa (ROI)
- Redukcja strat bezpośrednich (sprzęt, paliwo, materiały).
- Redukcja kosztów pośrednich: opóźnienia, “przestój” zespołów, koszty zastępcze, tarcia organizacyjne.
- Dowody do ubezpieczyciela/policji: oszczędność czasu + wiarygodność (Incident Package).
- “Land and expand”: start od 50–200 aktywów na 1–2 budowach, potem rollout.


---


## 8) Kto kupuje i jak
**ICP (PL/EU):**
- Generalni wykonawcy (średni/duży), prowadzący równolegle wiele budów,
- firmy instalacyjne (sprzęt rotuje po budowach),
- rental/lease sprzętu (ochrona floty na placach).


**Decydenci:**
- Kierownik budowy (użytkownik + często budżet operacyjny),
- Dyrektor operacyjny / plant manager (rollout),
- Security / HSE,
- ubezpieczyciel jako influencer/partner.


---


## 9) Konkurencja i luka
Wiele rozwiązań jest:
- zbyt “inventory-only” (brak aktywnych alertów i audytu),
- lub zbyt drogie przy masowej skali (GPS dla wszystkiego),
- lub zależne od przypadkowego skanowania telefonem / użytkownikiem. 


WiseGuard wygrywa na:
- **Daily Audit + alerty w godzinach**,
- **strefach (zone-based) dla skali**,
- **Incident Package**, 
- spójnej integracji WiseOS/ROS2.


---


## 10) Pilot-to-scale
Rekomendowany pilot: **2 lokalizacje, ~4 tygodnie**, ok. **50 aktywów/site + 5 high-value trackerów**, 2–3 bramki. Sukces = >95% zgodności audytu/dzień, wykrycie testowego “missing” tego samego dnia oraz akceptacja procesu przez kierownika (≤10 min/dzień). 


---


## 11) Co WiseGuard NIE robi (granice)
- Nie służy do śledzenia pracowników.
- Nie dostarcza narzędzi omijania zabezpieczeń.
- Nie promuje działań ofensywnych; to system defensywny: wykrywanie + audyt + dowody.


---


## 12) Kontakt / następny krok
Następny krok to warsztat wdrożeniowy (2h) + szybki site-survey RF + przygotowanie listy aktywów do pilotu.
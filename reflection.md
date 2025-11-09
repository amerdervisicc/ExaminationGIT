# Reflektion – Git & Agilt (1–2 sidor)

## 1) Egen user story + Acceptance Criteria + INVEST

**Story:** Som användare vill jag kunna filtrera mina todos (Alla/Aktiva/Klara) så att jag snabbt kan fokusera på det som är relevant för mig just nu.

**Acceptance Criteria (checkboxar):**
- [x] Tre filter-knappar finns: "Alla", "Aktiva", "Klara"
- [x] Klick på en filter-knapp uppdaterar listan direkt
- [x] Den aktiva filter-knappen är visuellt markerad (t.ex. annan färg)
- [x] Filter fungerar korrekt tillsammans med andra features (localStorage, toggle, delete)

**INVEST – kort motivering (2–4 meningar):**
- **I**ndependent: Filter-funktionaliteten kan implementeras oberoende av andra features, även om den behöver fungera tillsammans med dem.
- **N**egotiable: Designen kan justeras (t.ex. filter-knapparnas placering, visuell stil) utan att ändra kärnfunktionaliteten.
- **V**aluable: Ger användare värdefull möjlighet att organisera och fokusera på sina todos, vilket förbättrar användarupplevelsen.
- **E**stimable: Liten och tydlig feature som är enkel att uppskatta till ca 2-3 timmar arbete.
- **S**mall: Featuren är fokuserad och begränsad - bara filter-funktionalitet, inga andra ändringar.
- **T**estable: Tydliga acceptance criteria med checkboxar som gör det enkelt att verifiera att featuren fungerar korrekt.

## 2) Sprintmål + Definition of Done (DoD)

**Sprintmål:** 
Implementera 4 features (localStorage, förbättrad styling, filter och räknare) för Todo Lite-appen genom Git-flöde med branches, PR:er, reviews och merge. Visa hela Git-processen inklusive att lösa minst en mergekonflikt.

**DoD (checklista):**
- [x] Kod kör lokalt utan fel
- [x] PR granskad och godkänd (minst 1 review)
- [x] README uppdaterad
- [x] Issue/kort länkat och stängt vid merge
- [x] Alla features fungerar tillsammans korrekt
- [x] Mergekonflikter lösta och dokumenterade

## 3) Retro: Start / Stop / Continue

- **Start:** 
  - Skriva tydligare PR-beskrivningar med "Varför" och "Hur" från början, istället för att lägga till det efteråt. Detta gör det enklare för reviewers att förstå ändringarna snabbt.
  - Testa features tillsammans tidigare i processen för att upptäcka konflikter innan merge.

- **Stop:** 
  - Skapa för många branches samtidigt utan att merga dem i ordning. Detta skapade flera konflikter som kunde ha undvikits genom att mergea features sekventiellt.
  - Glömma att testa att features fungerar tillsammans efter merge.

- **Continue:** 
  - Använda tydliga branch-namn med prefix `feat/` för att hålla koll på vad varje branch gör.
  - Skriva små, fokuserade PR:er (under 250 rader) som är lätta att reviewa.
  - Dokumentera mergekonflikter tydligt i PR-kommentarer med vad/hur/varför.

**Minst en konkret förbättring du provar nästa sprint och varför:**

Jag kommer att börja skriva PR-beskrivningar direkt när jag skapar branchen, inte efteråt. Detta gör att jag tänker igenom "varför" och "hur" tidigt, vilket hjälper mig att hålla features små och fokuserade. Det gör också att reviewers kan förstå ändringarna snabbare, vilket kan leda till snabbare reviews och merges.

# Marketing

## Setup Google Marketing Platform

TODO: expand on items below..
- Google Tag Manager
- Google Optimize
- Google Data Studio

## Create Google Data Studio reports

- TODO: create initial dashboards for marketing in Google Data Studio (Users, Growth, Financial, Features [analytics, hotjar]). -> users: paid, registered, activated, loggedon, oneTimeUsage, fiveTimeUsage.

- TODO: export PinPoint data to CSV in S3, and with a Lambda write the Google Sheets API. This Sheet is a Data Source in DataStudio (user login, etc.)

## Add Minumum Viable Product features

TODO: expand on items below..
- Personas
- Keyword Research
- Google Tag Manager
    - Universal Analytics
        - Add events to apps and website
- Google Search Console
- Personalisation?
- Google Survey
- Chatbot

## Setup Google Analytics Audiences
Gebruikers dynamisch toewijzen aan Audience segment (bijv. left shoppingcart): https://support.google.com/analytics/answer/6212382

For analytics create and export:
    - Segments
    - Goals
    - A Users Dashboard (use Data Studio instead!)
    - A Features Dashboard (filter: gebeurtenis-categorie is gelijk aan ‘feature-one).
    - Gebeurtenissen (Event) (ontstaan door verzending vanuit de code).

- For tag manager create and export (export Workspace):
    - Map Features:
        - Tags
        - Variables (feature-one)

- For Data Studio create based on template -> and embed somewhere. Or find a custom free template that fits the needs.
    - Users report (possible to use data from dashboard?)
    - Features report

**Categorieën, acties en labels**
Elke gebeurtenis bestaat uit vier onderdelen. Each individual Event you want to track must be tagged with at least two of these parts; the other two are optional but recommended.
* Categorie (verplicht): de categorie bevindt zich bovenaan in de hiërarchie. Dit is een manier om gebruikersactiviteit te groeperen. 'Diavoorstelling', 'Video's' en 'Downloads' zijn goede voorbeelden van categorieën, maar u kunt ze zo specifiek of algemeen maken als uw inhoud vereist.
* Actie (verplicht): de actie is letterlijk datgene wat de gebruiker doet. Voor het voorbeeld van de videospeler zijn mogelijke acties: afspelen, onderbreken, delen, de link 'Insluiten' kopiëren, enzovoort.
* Label (optioneel): geeft iets meer informatie over de actie van de gebruiker. Als u bijvoorbeeld gebeurtenissen gebruikt om een videospeler bij te houden, kunt u de naam van de film als label vastleggen wanneer een actie plaatsvindt. Dat geeft meer context bij wat de gebruiker doet.
* Waarde (optioneel): elk geheel getal met een positieve waarde. Dit is dus een getal. U kunt het gebruiken voor het tellen van dingen, zoals euro's of seconden. Als u uw gebeurtenis als doel wilt gebruiken, kunt u opgeven dat Google Analytics de gebeurteniswaarde moet gebruiken als doelwaarde.

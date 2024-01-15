# Einleitung

In einer Welt, die immer stärker vernetzt ist und in der die Menschen weniger Zeit haben, traditionelle Kochbücher aufgrund ihrer Vielfalt zu durchstöbern, besteht ein wachsendes Bedürfnis nach einer digitalen Lösung. Es gibt bereits viele Apps, die sich mit Rezepten und Kochen befassen und jede App legt ihren Schwerpunkt. 
<!-- blank line -->
Als Anforderungen an die App durch den Nutzer könnte für den Entwickler interessant sein:
<!-- blank line -->
1.	**_Bequemlichkeit:_** Rezepte sind immer und überall zur Hand, egal welches technische Gerät (Smartphone. Tablets...) zur Verfügung steht.
2.	**_Ernährungsinformationen:_** Nährwertangaben oder der _Nutri Score_ helfen dem Nutzer “gesunde” Entscheidungen zu treffen.
3.	**_Kostenersparnis_**: Vorschläge zur Verwendung von Lebensmitteln, die man bereits zu Hause hat oder die man dazu kauft, um Verschwendung zu minimieren oder gar zu vermeiden.
4.	**_Allergie- und Diätfilter:_** Anpassung der Rezeptsuche nach spezifischen Ernährungsbedürfnissen, um entsprechende Produkte vermeiden zu können oder Alternativen zu finden
5.	**_Internationale und nationale Gerichte:_**  Zugang zu einer Vielzahl von regionalen und internationalen Küchen und Rezepten aus aller Welt.
6.	**_Gerichte mit entsprechenden Portionen:_**  automatische Anpassung die Zutatenmengen je nach Anzahl der Portionen bzw. Personen.
7.	**_Lernhilfe:_** Wie kocht man heute - neue Kochtechniken und -methoden durch integrierte Tutorials und Tipps.
8.	**_Saisonale Vorschläge:_**  die Rezepte basierend auf saisonalen Zutaten oder Feiertagen
wie Erntedankfest.
9. **_Offline-Zugriff:_** Rezepte können im Kundenkonto gespeichert und von dort heruntergeladen werden, um sie jederzeit im Zugriff zu haben.
10. **_Community:_** Austausch von Ideen und Rezepten unter den Nutzern der App. 
11. **_Eigene Rezepte:_** Der Nutzer hat die Möglichkeit, eigene Rezepte hochzuladen und mit anderen zu teilen, oder im eigenen Bereich zu halten.
12. **_Einkaufliste und Vorratsübersicht:_** Alles soll auf einen Blick verfügbar sein. Beim Einkaufen den handgeschriebenen Zettel vergessen. Wie lange war das Hackfleisch noch gut? All diese Fragen könnte der Nutzer sich schnell und übersichtlich beantworten, indem er eine Website oder App nutzt, in der alles gemeinesam verwaltet wird.
<!-- blank line -->
<span style="color:green;">## Projektziel</span>
<!-- blank line -->
Entwicklung einer Webanwendung für Rezepte mit dem Namen 'EnchantedEats', die Rezepte, einen Essensplan und einen Vorrat vereint, um eine umfassende  Userexperience zu erzeugen.
<!-- blank line -->
## User Story
In unserer modernen, schnelllebigen Zeit wollen wir als Team eine Website/App entwickeln, die das Kochen und Essen bequemer und nachhaltiger macht. Stellen Sie sich vor, Sie schauen in Ihren Kühlschrank, oder die Vorratskammer und haben keine Idee, was Sie aus den vorhandenen Zutaten kochen sollen. Genau da kommt unsere Website/App zum Einsatz: Sie schlägt eine Reihe von Rezepten vor, die genau zu Ihren verfügbaren Lebensmitteln passen. Und wenn Ihnen nichts zusagt, oder Sie noch einkaufen wollen, gibt es sogar noch mehr Rezeptideen! Verschiedene Filter und eine Einkaufsliste helfen Ihnen dabei. Ein besonderes Highlight ist, dass unsere Website/App sich den Bedürfnissen der Nutzer anpasst. Sei es eine Allergie, eine spezielle Diät oder einfach nur kulinarische Vorlieben – die Website/App berücksichtigt all das und sorgt dafür, dass jedes Rezept genau passt. Aber das ist noch nicht alles: Für diejenigen, die einen aktiven Lebensstil pflegen, können sogar Informationen wie Alter, Größe und bevorzugte Sportarten eingegeben werden. Auf dieser Grundlage schlägt unsere Website/App Rezepte vor, die den Nährstoff- und Energiebedarf ergänzen. Damit nicht genug, berechnet sie sogar, wie viele Kalorien ein Rezept hat und wie viel des täglichen Bedarfs damit gedeckt wird. Ein besonderes Anliegen unserer Website/App ist es, Lebensmittelverschwendung zu reduzieren. Indem sie Rezepte anbietet, die genau zu den vorhandenen Lebensmitteln passen, werden Nutzer ermutigt, alles optimal zu nutzen. Gesundheit und Wohlbefinden stehen im Mittelpunkt unserer Website/App, und sie ist bestrebt, jedem Nutzer zu helfen, gesund und lecker zu essen, genau nach seinen Bedürfnissen. Es ist, als hätte man immer seinen persönlichen Chefkoch dabei!
<!-- blank line -->
## Zielgruppen
<!-- blank line -->
**Endnutzer:**
Dazu zählen Menschen die Ernährungsbewusst bzw. - interessiert sind und die Verschwendungen von Lebensmitteln vermeiden wollen, Hobbyköche, Menschen, die auf der Suche nach einer kulinarischen Inspiration sind oder die spezielle Diätanforderungen haben oder Allergien.
<!-- blank line -->
**Stakeholder:**
Website/App-Entwickler, in späteren Release Versionen Ernährungsberater,Fitnesstrainer, Krankenkassen, Ärzte und möglichen Investoren.
<!-- blank line -->
**Partner von Lebensmittelgeschäften:**
Unterstützen unsere Website/App, um bestimmte Lebensmittel für das Kocherlebnis zu empfehlen.
## **Anforderungen/ Requirements**
<!-- blank line -->
- Die Anwendung is als Website per Webbrowser nutzbar
- Eingabefeld für eine Zutat
- Ausgabe von Rezeptvorschlägen aus Basis der ausgewählten Zutat
- Filterfunktion nach Region und nach "vegatarian"
- Abfragen über die API "TheMealDB.com" 
- Skalierbarkeit: Die Anwendung soll so skalierbar sein, das zukünftige Erweiterungen und Funktionen unterstützt werden können
- Benutzerführung: Die Anwendung soll zwingend eine intuitive Benutzerführung bieten,
die es den Nutzern ermöglicht, effizient und einfache Rezepte zu suchen und zu finden.
<!-- blank line -->
## Minimal Viable Product (MVP)
<!-- blank line -->
Das Ziel ist die Bereitstellung einer Kocherfahrung für Nutzer basierend auf Ernährungsvorlieben. Das MVP unterstützt die Verwertung vorhandener Lebensmittel, welche sich im Kühlschrank oder in der Vorratskammer befinden, oder schlägt Rezepte vor, die einen kleinen Zukauf benötigen.
<!-- blank line -->
- **Filterfunktion:**
Nutzer können eine Zutat, die sie zu Hause haben, eingeben und sich Rezepte dazu anzeigen lassen. Außerdem können sie die Ergbenisse nach Land filtern und auch die Filterfunktion "Vegetarisch" nutzen. 
<!-- blank line -->
- **Rezeptvorschläge:**
Rezepte werden auf Basis des Queries erstellt, auch kombiniert mit dem Filter "Land" oder "Vegetarisch". Außerdem kann man sich ein zufälliges Rezept anzeigen lassen.
<!-- blank line -->
- **Anzeigen von Details:**
Die Suchergebnisse werden in Form von Karten mit der Bezeichnung und einem Bild dargestellt. Durch das Klicken auf eine Karte werden die Details angezeigt:
    - Foto des Gerichtes
    - benötigte Zutaten
    - Kochanleitung als Text
    - Kochanleitung als YouTube-Video (wenn vorhanden)
- **Profilseite:**
    - Erstellung, Speicherung, Änderung und Löschung eines Profils (akutell auf LocalStorage)
    - Zufällig generiertes Profilbild, zufällig generierte UniqueID
- **Vorrat verwalten:**
    - Anlegen von Listen, in der das Produkt, Einheit, Kategorie und Mindeshaltbarkeitsdatum erfasst werden kann
    - Listen können angezeigt und gelöscht werden
    - Wenn ein Mindesthaltbarkeitsdatum erreicht ist, wird dieses rot und mit expired gekennzeichnet
<!-- blank line -->
## Releases
<!-- blank line -->
Im Folgenden sind die möglichen spezifischen Ziele für jede Release-Version dargestellt, die jeweils aufeinander aufbauen, um eine umfassende, nutzerfreundliche und interaktive Plattform zu schaffen. Jedes der folgenden Ziele der einzelnen Releases ist ein entscheidender Schritt, um die Anwendung zu einer unverzichtbaren Ressource im Alltag aller Nutzer zu machen und eine lebendige, unterstützende und interaktive Kochgemeinschaft zu schaffen.
<!-- blank line -->
**Release 1: Personalisierung und Organisation**
Das Ziel des Release 1 „Personalisierung und Organisation“ ist die Schaffung einer benutzerzentrierten und organisierten Kocherfahrung, die es den Nutzern ermöglicht, auf der Grundlage ihres persönlichen Lebensmittelvorrats maßgeschneiderte Rezeptvorschläge zu erhalten. Dieser Release zielt darauf ab, den Nutzern eine intuitive und strukturierte Plattform zu bieten, die sowohl ihre individuellen Ernährungsvorlieben als auch die vorhandenen Zutaten berücksichtigt, um die Lebensmittelverschwendung zu reduzieren und die tägliche Mahlzeitenplanung zu vereinfachen.
- **_Hochladen und Verwalten von eigenen Rezepten:_**
Der Nutzer soll die Möglichkeit haben, eigene Rezepte, auch mit Foto oder Video hochzuladen. Diese sollen aus Sicherheitsgründen in einem gesicherten Account gespeichert werden und durch Freigabe des Nutzers für andere sichtbar sein.
- **_Erstellen eines Logins:_**
Um eigene Rezepte hinzuzufügen und individuelle Einstellungen zu speichern, soll dem Nutzer die Möglichkeit gegeben werden, sein Profil in einem Account zu speichern und anzupassen
- **_Vorratsmanagement:_**
Anzeigen der erfassten Lebensmittel nach Kategorie und auch anlegen mehrere unterschiedlicher Listen zur Strukturierung.
- **_Erstellen eines Essensplanes:_**
Der Nutzer sucht sich Rezepte heraus und kann diese in einem Essensplan speichern, der als Wochenplan ausgelegt ist. Dieser kann ausgedruckt, gespeichert oder archiviert werden. Beim Ausdruck werden die Zutaten und die Zubereitung in dem jeweiligen Tag dargestellt. Beim Speichern und archivieren des Essenslanes werden die Links zum Rezept hinterlegt.
<!-- blank line -->
**Release 2: Gesundheitsorientierte Funktionen**
Das Ziel des Release 2 „Gesundheitsorientierte Funktionen“ ist die Erweiterung der Webanwendung „EnchantedEats.de„ um Funktionen, die Gesundheits- und Fitnessaspekte berücksichtigen. Sie sollen den Nutzern dabei helfen, ihre Ernährung gemäß ihren gesundheitlichen Bedürfnissen und Fitnesszielen zu gestalten. Dieses Release soll die Webseite in ein umfassendes Werkzeug verwandeln, das nicht nur beim Kochen hilft, sondern auch bei der Förderung eines gesunden Lebensstils.
- **_Eingabe von Gesundheitsdaten:_**
Eingabe von Größe, Alter, Geschlecht und besonderen gesundheitlichen Ernährungsformen.
- **_Eingaben von Sport- und Aktivitätsdaten:_**
Auswahl der bevorzugten Sportart und Rezepte, die dem Nährstoffbedarf der jeweiligen Aktivität entsprechen.
- **_Kalorienbedarfsrechner:_**
Die Website berechnet den durchschnittlichen Kalorienbedarf und zeigt an, wie viel Prozent des Bedarfs mit den Rezeptportionen gedeckt werden.
- **_Ernährungsvorlieben:_**
Anpassung von Rezeptvorschlägen basierend auf Allergien, Fastenzeiten, speziellen Diäten oder Laktoseintoleranz.
<!-- blank line -->
**Release 3: Integration und Interaktion**
Das Ziel des Release 3 „Integration und Interaktion“ ist die Einführung der erweiterten Funktionen, die eine Interaktion mit der Webseite und die Individualisierung des Nutzererlebnisses weiter verbessern. Dies umfasst die Möglichkeit, neue Lebensmittel durch digitale Kassenzettel schnell und einfacher zu importieren und so den Lebensmittelvorrat aktuell zu halten und effizient zu verwalten. Die Webseite wird zu einem umfassenden Küchenassistenten, der den Nutzern dabei hilft, ihren Alltag in der Küche besser zu organisieren, um eigene oder Rezepte von anderen Köchen schneller wieder zu finden. 
- **_Anbindung an den digitalen Kassenzettel:_**
Importieren von Kassenzetteln, welche durch die jeweilige Kundenkarte z.B. Lidl oder Kaufland Website/App angebunden ist, um die Lebensmittel automatisch in der „Vorratsliste“ zu aktualisieren
- **_Bewertungssystem:_**
Nutzer können Rezepte anderer Nutzer bewerten (Sterne) und entsprechend kommentieren.
- **_QR-Code-Erzeugung:_**
Für selbst erstellte Rezepte wird ein QR-Code generiert. Dadurch kann man  Rezepte wieder leicht ausfindig machen und/ oder mit anderen zu teilen.
<!-- blank line -->
**Release 4: Community-Fokus und erweiterte Interaktion**
Das Ziel der Release 4 „Community-Fokus und erweiterte Interaktion“ ist die Förderung einer aktiven, engagierten und interaktiven Community rund um die vielen verschiedenartigen Rezepte, die den Austausch von Rezepten und die Bewertungen und Kommentaren ermöglicht. Dieses Release soll die Anwendung in eine soziale Plattform verwandeln, die nicht nur individuelle Nutzererfahrungen unterstützt, sondern auch den Austausch und die Vernetzung innerhalb der Koch-Community fördert.
- **_Community-Feed:_**
Nutzer können nach ihrer Eingabe der Login-Daten, dann  ihre eigenen Rezepte teilen, Highlights entdecken und sich inspirieren lassen.
- **_Interaktives Bewertungssystem:_**
Nutzer können nicht nur die die vielen Rezepte bewerten, sondern auch ausführlichere Bewertungen mit Fotos ihrer Kochergebnisse hinzufügen. [Ein Bewertungssystem müsste noch separat entwickelt werden]
- **_Kommentar- und Diskussionsbereich:_**
Unter jedem vorhandenem Rezept, können sich Nutzer Tipps austauschen, Fragen stellen und Feedback geben.
- **_Community-basierte Rezeptsammlungen:_**
Nutzer können ihre eigene Rezeptsammlungen erstellen und teilen, ähnlich wie Playlists bei Musik Streaming Diensten, die von anderen Nutzern abonniert werden können.
- **_Follow- und Freundschaftsfunktion:_**
Nutzer können anderen Köchen folgen und Freundschaftsanfragen senden, um deren Aktivitäten und Rezeptfreigaben im Feed zu sehen. 
- **_Live-Kochsessions und Tutorials:_**
Integration von Live-Streaming-Optionen, wo Nutzer Kochsessions hosten oder an Tutorials teilnehmen können. Tutorials könnten über Youtube abrufbar sein.

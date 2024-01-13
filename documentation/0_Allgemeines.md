## Einleitung

In einer Welt, die immer stärker vernetzt ist und in der die Menschen weniger Zeit haben, traditionelle Kochbücher aufgrund ihrer Vielfalt zu durchstöbern, besteht ein wachsendes Bedürfnis nach einer digitalen Lösung. Es gibt bereits viele Apps, die sich mit Rezepten und Kochen befassen und jede App legt ihren Schwerpunkt. 
<!-- blank line -->
Folgende Schwerpunkte können für den Ersteller von solchen Koch- und Rezepte Apps von Interesse sein:
<!-- blank line -->
1.	Bequemlichkeit:  Rezepte sind immer und überall zur Hand, egal welches technische Gerät (Smartphone. Tablets...) zur Verfügung steht.
2.	Ernährungsinformationen: Nährwertangaben oder der Nutri Score helfen dem Nutzer “gesunde” Entscheidungen zu treffen.
3.	Kostenersparnis: Vorschläge zur Verwendung von Lebensmitteln, die man bereits zu Hause hat oder die man dazu kauft, um Verschwendung zu minimieren oder gar zu vermeiden.
4.	Allergie- und Diätfilter: Anpassung der Rezeptsuche nach spezifischen Ernährungsbedürfnissen, um entsprechende Produkte vermeiden zu können oder Alternativen zu finden
5.	Internationale und nationale Gerichte:  Zugang zu einer Vielzahl von regionalen und internationalen Küchen und Rezepten aus aller Welt.
6.	Gerichte mit entsprechenden Portionen:  automatische Anpassung die Zutatenmengen je nach Anzahl der Portionen bzw. Personen.
7.	Lernhilfe: Wie kocht man heute - neue Kochtechniken und -methoden durch integrierte Tutorials und Tipps.
8.	Saisonale Vorschläge:  die Rezepte basierend auf saisonalen Zutaten oder Feiertagen wie Erntedankfest.
<!-- blank line -->
Weiterhin bieten Apps auch einen Offline-Zugriff, um die Rezepte auf dem Endgerät zu speichern oder besteht auch die Möglichkeit der Nutzung der Community-Funktion, um sich untereinander auszutauschen und in denen Nutzer ihre eigenen Rezepte teilen und Feedback von anderen erhalten können.
<!-- blank line -->
## Projektziel
<!-- blank line -->
**Entwicklung einer Webanwendung für Rezepte mit dem Namen 'Enchanted Eats', die Rezepte, einen Essensplan und einen Vorrat vereint, um eine umfassende  Userexperience zu erzeugen.**
<!-- blank line -->

## User Story
In unserer modernen, schnelllebigen Zeit wollen wir als Team eine Website/App entwickeln, die das Kochen und Essen völlig neugestaltet. Stellen Sie sich vor, Sie schauen in Ihren Kühlschrank, und statt sich zu fragen, was Sie kochen könnten, schlägt unsere Website/App eine Reihe von Rezepten vor, die genau zu den verfügbaren Lebensmitteln passen. Und wenn Sie bereit sind, noch ein paar Zutaten zu kaufen, gibt es sogar noch mehr Rezeptideen! Ein besonderes Highlight ist, dass unsere Website/App sich den Bedürfnissen der Nutzer anpasst. Sei es eine Allergie, eine spezielle Diät oder einfach nur kulinarische Vorlieben – die Website/App berücksichtigt all das und sorgt dafür, dass jedes Rezept genau passt. Aber das ist noch nicht alles: Für diejenigen, die einen aktiven Lebensstil pflegen, können sogar Informationen wie Alter, Größe und bevorzugte Sportarten eingegeben werden. Auf dieser Grundlage schlägt unsere Website/App Rezepte vor, die den Nährstoff- und Energiebedarf ergänzen. Damit nicht genug, berechnet sie sogar, wie viele Kalorien ein Rezept hat und wie viel des täglichen Bedarfs damit gedeckt wird. Ein besonderes Anliegen unserer Website/App ist es, Lebensmittelverschwendung zu reduzieren. Indem sie Rezepte anbietet, die genau zu den vorhandenen Lebensmitteln passen, werden Nutzer ermutigt, alles optimal zu nutzen. Gesundheit und Wohlbefinden stehen im Mittelpunkt unserer Website/App, und sie ist bestrebt, jedem Nutzer zu helfen, gesund und lecker zu essen, genau nach seinen Bedürfnissen. Es ist als hätte man immer seinen persönlichen Chefkoch dabei!
<!-- blank line -->
## Zielgruppen
<!-- blank line -->
**Endnutzer:**
Dazu zählen Menschen die Ernährungsbewusst bzw. - interessiert sind und die Verschwendungen von Lebensmitteln vermeiden wollen, Hobbyköche, Menschen, die auf der Suche nach einer kulinarischen Inspiration sind oder die spezielle Diätanforderungen haben oder Allergien.
<!-- blank line -->
**Stakeholder:**
Website/App-Entwickler, in späteren Release Versionen Ernährungsberater und möglichen Investoren
<!-- blank line -->
**Partner von Lebensmittelgeschäften:**
Unterstützen unsere Website/App, um bestimmte Lebensmittel für das Kocherlebnis zu empfehlen.
## **Anforderungen/ Requirements**
<!-- blank line -->
- Die Anwendung is als Website per Webbrowser nutzbar
- Eingabefelder für Lebensmittel
- Ausgabe von Rezeptvorschlägen aus Basis der ausgewählten Lebensmittel
- Filterfunktion für Intoleranzen, Ernährungsformen etc.
- Abfragen über API von "TheMealDB.com" 
- Skalierbarkeit: Die Anwendung soll so skalierbar sein, das zukünftige Erweiterungen und Funktionen unterstützt werden können
- Sicherheit: Sicherheitsmaßnahmen müssen so implementiert werden,um die 
              Nutzerdaten und die Integrität der Anwendung zu schützen
- Benutzerführung: Die Anwendung soll zwingend eine intuitive Benutzerführung bieten,
die es den Nutzern ermöglicht, effizient und einfache Rezepte zu suchen und zu finden.
<!-- blank line -->

## Minimal Viable Product (MVP)
<!-- blank line -->
Das Ziel ist die Bereitstellung einer Kocherfahrung für Nutzer basierend auf verfügbaren Lebensmitteln und Ernährungsvorlieben, welche sich im Kühlschrank oder in der Vorratskammer befinden oder Lebensmittel die auch zugekauft werden können.
<!-- blank line -->
- Lebensmittelauswahl:
Nutzer können die Lebensmittel, die sie zu Hause haben, eingeben oder aus einer Liste auswählen. 
<!-- blank line -->
- Rezeptvorschläge:
Ausgabe von Rezepten, die den ausgewählten Lebensmitteln entsprechen
<!-- blank line -->
- Anzeigen von Details:
Anzeigen von Details eines Rezeptes (Schritte, Zutaten etc.) nach Klick auf ein Rezeptvorschlag
<!-- blank line -->
- Filterfunktionen:
1.	Es werden Rezepte basierend auf den Eingaben angezeigt 
2.	Erweiterung der Rezeptideen um solche, wo noch weitere Zutaten gekauft werden müssen.

<!-- blank line -->
## Releases
<!-- blank line -->
Im Folgenden sind die möglichen spezifischen Ziele für jede Release-Version dargestellt, die jeweils aufeinander aufbauen, um eine umfassende, nutzerfreundliche und interaktive Plattform zu schaffen. Jedes der folgenden Ziele der einzelnen Releases ist ein entscheidender Schritt, um die Anwendung zu einer unverzichtbaren Ressource im Alltag aller Nutzer zu machen und eine lebendige, unterstützende und interaktive Kochgemeinschaft zu schaffen.
<!-- blank line -->
**Release 1: Personalisierung und Organisation**
Das Ziel des Release 1 „Personalisierung und Organisation“ ist die Schaffung einer benutzerzentrierten und organisierten Kocherfahrung, die es den Nutzern ermöglicht, auf der Grundlage ihres persönlichen Lebensmittelvorrats maßgeschneiderte Rezeptvorschläge zu erhalten. Dieser Release zielt darauf ab, den Nutzern eine intuitive und strukturierte Plattform zu bieten, die sowohl ihre individuellen Ernährungsvorlieben als auch die vorhandenen Zutaten berücksichtigt, um die Lebensmittelverschwendung zu reduzieren und die tägliche Mahlzeitenplanung zu vereinfachen.
- Erstellen eines Accounts/Logins:
Um eigene Rezepte hinzuzufügen und individuelle Einstellungen zu speichern, soll dem Nutzer die Möglichkeit gegeben werden einen Account anzulegen
- Eigene Rezepte hinzufügen:
Nutzer können für ihre Rezepte Fotos hinzufügen. Diese können selbst erstellt sein oder mit verlinkt sein
- Vorratsmanagement:
Anlegen eines Lebensmittelvorrats und Eingabe des Mindesthaltbarkeitsdatums (MHD), welche gleich beim Kauf der Lebensmittel erstellt werden. Dadurch könnte der Nutzer den Verbrauch der Lebensmittel auf Basis des MHDs steuern.
- Erstellen eines Essensplanes:
Basierend auf den vorhandenen Lebensmittelvorrat und des MHDs werden dann Rezepte für einen geplanten Zeitraum vorgeschlagen.
<!-- blank line -->
**Release 2: Gesundheitsorientierte Funktionen**
Das Ziel des Release 2 „Gesundheitsorientierte Funktionen“ ist die Erweiterung der Webanwendung „zutatenzauber.de„ um Funktionen, die Gesundheits- und Fitnessaspekte berücksichtigen, um Nutzern dabei zu helfen, ihre Ernährung gemäß ihren gesundheitlichen Bedürfnissen und Fitnesszielen zu gestalten. Dieses Release soll die Webseite in ein umfassendes Werkzeug verwandeln, das nicht nur beim Kochen hilft, sondern auch bei der Förderung eines gesunden Lebensstils.
- Eingabe von Gesundheitsdaten:
Eingabe von Größe, Alter, Geschlecht und besonderen gesundheitlichen Ernährungsformen.
- Eingaben von Sport- und Aktivitätsdaten:
Auswahl der bevorzugten Sportart und Rezepte, die dem Nährstoffbedarf der jeweiligen Aktivität entsprechen.
- Kalorienbedarfsrechner:
Die Website/App berechnet den durchschnittlichen Kalorienbedarf und zeigt an, wie viel Prozent des Bedarfs mit den Rezeptportionen gedeckt werden.
- Ernährungsvorlieben:
Anpassung von Rezeptvorschlägen basierend auf Allergien, Fastenzeiten, speziellen Diäten oder Laktoseintoleranz.
<!-- blank line -->
**Release 3: Integration und Interaktion**
Das Ziel des Release 3 „Integration und Interaktion“ ist die Einführung der erweiterten Funktionen, die eine Interaktion mit der Webseite und die Individualisierung des Nutzererlebnisses weiter verbessern. Dies umfasst die Möglichkeit, neue Lebensmittel durch digitale Kassenzettel schnell und einfacher zu importieren und so den Lebensmittelvorrat effizienter zu verwalten. Die Webseite wird zu einem umfassenden Küchenassistenten, der den Nutzern dabei hilft, ihren Alltag in der Küche besser zu organisieren, um eigene oder Rezepte von anderen Köchen schneller wieder zu finden. 
- Anbindung an den digitalen Kassenzettel:
Importieren von Kassenzetteln, welche durch die jeweilige Kundenkarte z.B. Lidl oder Kaufland Website/App angebunden ist, um die Lebensmittel automatisch in der „Vorratsliste“ zu aktualisieren
- Bewertungssystem:
Nutzer können Rezepte anderer Nutzer bewerten (Sterne) und entsprechend kommentieren.
- QR-Code-Erzeugung:
Für selbst erstellte Rezepte wird ein QR-Code generiert. Dadurch kann man  Rezepte wieder leicht ausfindig machen und/ oder mit anderen zu teilen.
<!-- blank line -->
**Release 4: Community-Fokus und erweiterte Interaktion**
Das Ziel der Release 4 „Community-Fokus und erweiterte Interaktion“ ist die Förderung einer aktiven, engagierten und interaktiven Community rund um die vielen verschiedenartigen Rezepte, die den Austausch von Rezepten und die Bewertungen und Kommentaren ermöglicht. Dieses Release soll die Anwendung in eine soziale Plattform verwandeln, die nicht nur individuelle Nutzererfahrungen unterstützt, sondern auch den Austausch und die Vernetzung innerhalb der Koch-Community fördert.
- Community-Feed:
Nutzer können nach ihrer Eingabe der Login-Daten, dann  ihre eigenen Rezepte teilen, Highlights entdecken und sich inspirieren lassen.
- Interaktives Bewertungssystem:
Nutzer können nicht nur die die vielen Rezepte bewerten, sondern auch ausführlichere Bewertungen mit Fotos ihrer Kochergebnisse hinzufügen. [Ein Bewertungssystem müsste noch separat entwickelt werden]
- Kommentar- und Diskussionsbereich:
Unter jedem vorhandenem Rezept, können sich Nutzer Tipps austauschen, Fragen stellen und Feedback geben.
- Community-basierte Rezeptsammlungen:
Nutzer können ihre eigene Rezeptsammlungen erstellen und teilen, ähnlich wie Playlists bei Musik Streaming Diensten, die von anderen Nutzern abonniert werden können.
- Follow- und Freundschaftsfunktion:
Nutzer können anderen Köchen folgen und Freundschaftsanfragen senden, um deren Aktivitäten und Rezeptfreigaben im Feed zu sehen. 
- Live-Kochsessions und Tutorials:
Integration von Live-Streaming-Optionen, wo Nutzer Kochsessions hosten oder an Tutorials teilnehmen können. Tutorials könnten über Youtube abrufbar sein.

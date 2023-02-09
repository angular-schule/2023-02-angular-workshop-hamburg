<img src="https://assets.angular.schule/header-intensivworkshop.png">

#### **mit Johannes Hoppe**

<hr>

**Herzlich Willkommen – und schön, dass du dabei bist!**  
In diesem Repository findest du alle Infos zur Vorbereitung und während des Workshops den Quelltext unserer Beispielanwendung.


# 🎮 RxJS Playground

Du kannst dir entweder  
* den Code als ZIP-Datei herunterladen: [rxjs-playground.zip](https://github.com/angular-schule/2023-02-angular-workshop-hamburg/files/10695990/rxjs-playground.zip)<br>**oder**<br>  
* dieses Repository per Git herunterladen und in den Ordner `rxjs-playground` wechseln.

```bash
cd rxjs-playground
npm install
npm start
```

Öffne den Browser unter der URL [http://localhost:**4300**](http://localhost:4300) (!), um die Anwendung zu sehen.
Die Übungen befinden sich im Ordner `rxjs-playground/src/app/exercises/`.


# ✅ Vorbereitung

Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen.  
Die gesamte Installation wird rund 30 Minuten dauern. 

## 1.) Benötigte Software

1. **Node.js 14, 16 oder 18** (jeweils die aktuelle Nebenversionsnummer): [https://nodejs.org](https://nodejs.org)
   + unter macOS bitte Homebrew verwenden! ([siehe Anleitung](https://presentations.angular.schule/HOMEBREW_NODE))
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
3. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)<br>
   _oder_ eine andere geeignete IDE wie **IntelliJ/WebStorm**
   + Wir empfehlen dir eine Auswahl an Extensions für Visual Studio Code.  
     Dazu haben wir ein Extension Pack vorbereitet, das alles Nötige einrichtet:  
     [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack)
   + Du kannst auch IntelliJ/WebStorm nutzen – diese IDEs haben eine brauchbare Angular-Integration.


## 2.) Proxy?

Für die Proxykonfiguration im Unternehmensnetz sind häufig gesonderte Einstellungen nötig.
Wir haben dir hierfür folgende Anleitung erstellt:
https://workshop.angular.schule/proxy  
Sollte es Probleme mit dem Proxy geben, melde Dich bitte bei uns, dann finden wir eine Lösung.


## 3.) Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die CLI auf dem System installieren:

```bash
npm install -g @angular/cli
```

⚠️ Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind:

```
node -v
> Erwartet: 14.20.x, 16.13.x, 18.10.x oder höher, aber nicht 19.x!

npm -v
> Erwartet: 6.x oder höher

ng version
> Erwartet: 15.x.x (!)
```

Falls du bereits eine ältere Version der Angular CLI auf deinem System installiert hast, führe die Installation bitte trotzdem durch.
Global sollte stets die neueste Version installiert sein.


## 4.) Demo Anwendung herunterladen

Bitte installiere das Übungsprojekt schon vor Beginn des Workshops.

Du kannst dir entweder  
* den Code als ZIP-Datei herunterladen: [book-rating.zip](https://github.com/angular-schule/2023-01-angular-workshop-online/files/10467692/book-rating.zip)<br>**oder**<br>  
* dieses Repository per Git herunterladen und in den Ordner `book-rating` wechseln.

> ⚠️ Bitte installiere das Projekt nicht auf einem Netzlaufwerk, sondern direkt auf der lokalen Festplatte!

```bash
cd book-rating
npm install
npm start
```

Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages (npm)` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit der Überschrift *"Book Rating"* erscheinen!

<br>

![Screenshot CLI](screenshot.png)

Beende danach den laufenden Webserver mit Strg + C.


## 5.) Test-Umgebung prüfen

Prüfe bitte, ob der folgende Befehl ohne Fehlermeldungen ausführt:

```bash
npm test
```

Anschließend kannst du den Prozess wieder mit Strg + C beenden.



### Wir freuen uns schon! 🙂

Wenn bei allen Teilnehmenden das Grundgerüst steht, können wir ohne Zeitverlust loslegen.
Sollte es zu einer Fehlermeldung kommen, dann sende uns den Fehlertext einfach per Mail an [team@angular.schule](mailto:team@angular.schule) oder bringe deine Fragen zum Technikcheck mit.

<hr>

<img src="https://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; https://angular.schule | Stand: 20.01.2023


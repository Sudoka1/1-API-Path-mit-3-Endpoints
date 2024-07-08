# 1-API-Path-mit-3-Endpoints

# Erstelle eine API:
Anforderungen
1 API Path mit 3 Endpoints
Die Endpoints
post: Erstellt einen User mit id, username, age,  email, password
get: Gibt einen User zurück aber ohne E-Mail und Passwort
put/patch: Updatet einen User. (Wichtig; Die ID darf nicht überschrieben werden)
Middlwares
Es muss mindestens eine Middleware verwendet werden
Auslagern
Middlewares, Controller und Routes müssen ausgelagert werden. Du weißt wie das geht.

# 1 - Erstelle eine API mit 1 Pfad, 3 Endpoint. API soll Daten eines Users verändern können und soll User zurück geben. User mit Email, Passwort, Telefon Nummer.
# 2 - PUT und POST autentifiziert (abgesichert) sein. Kein Delite Endpoint.
_______________________________________________________________________________________________________________

Erklärung:
Um die Aufgabe im Detail zu erklären, schauen wir uns die einzelnen Komponenten und Schritte zur Erstellung einer API mit Node.js und Express an.

Projektstruktur:

project-root/
├── controllers/
│   └── userController.js
├── middlewares/
│   └── authMiddleware.js
├── routes/
│   └── userRoutes.js
├── app.js
└── package.json

1. Erklärung der Projektstruktur:

controllers/: Enthält die Logik für die Verarbeitung der Anfragen.
middlewares/: Enthält Middleware-Funktionen, die zwischen den Anfragen und den Endpunkten arbeiten.
routes/: Definiert die Routen und verbindet sie mit den entsprechenden Controller-Funktionen.
app.js: Die Hauptdatei, die den Express-Server initialisiert und die Routen einbindet.
package.json: Enthält Projektinformationen und Abhängigkeiten

2. Code Implementierung
app.js
Diese Datei initialisiert den Express-Server und bindet die Routen ein.
controllers/userController.js
Diese Datei enthält die Controller-Funktionen für die User-Operationen.
middlewares/authMiddleware.js
Diese Datei enthält eine Middleware zur Authentifizierung.
routes/userRoutes.js
Diese Datei definiert die Routen für User-Operationen und bindet die entsprechenden Controller und Middleware ein.

3. Überprüfung des Codes
3.1 Abhängigkeiten installieren:

npm init -y
npm install express

3.2 Server starten:

node app.js

3.3 Endpoints testen:

POST /api/users: Um einen neuen Benutzer zu erstellen.
GET /api/users/:id: Um Benutzerdetails ohne email und password abzurufen.
PUT/PATCH /api/users/:id: Um Benutzerinformationen zu aktualisieren (ohne die id zu ändern)

Durch diese Struktur und Implementierung können wir sicherstellen, dass die API den Anforderungen entspricht und die verschiedenen Teile (Middleware, Controller, Routen) gut organisiert sind.

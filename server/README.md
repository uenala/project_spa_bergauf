# node server / ret backend SpaBergaufDotCh

## Aufsetzen

(lokale git- und node-installation werden vorausgesetzt)


# Ins server-Verzeichnis wechseln
$cd server

# NPM-Dependencies installieren (in package.json definiert)
$npm i
```

## Webserver starten

$node index.js


Die Frontend-Files müssen von Hand (oder mit gulp-task in $cd ../SpaBergaufDotCh/, $gulp copy2server) im static Verzeichnis abgelegt/aktualisiert werden.

Die Pages sind Browser unter http://localhost:3000 erreichbar.
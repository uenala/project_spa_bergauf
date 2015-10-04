# node server / rest backend SpaBergaufDotCh

## Aufsetzen

(lokale git- und node-installation werden vorausgesetzt)


# Ins server-Verzeichnis wechseln
$cd server

# NPM-Dependencies installieren (in package.json definiert)
$npm i
```

# Webserver starten

$node index.js


Die Frontend-Files müssen von Hand (oder mit gulp-task in $cd ../SpaBergaufDotCh/, $gulp copy2server) im static Verzeichnis abgelegt/aktualisiert werden,
wenn man das Frontend vom server aus benutzen will.
Die Pages sind dann im Browser unter http://localhost:3003 erreichbar.
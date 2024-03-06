**Carosello Array di Oggetti**
===
- **Consegna:**
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
  

Creare un carosello come nella foto allegata o come il vostro già realizzato.
- **Milestone 0:**
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
- **Milestone 1:**
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
- **Milestone 2**:
Aggiungere il **ciclo infinito** del carosello.** Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
- **BONUS 1:**
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
- **BONUS 2:**
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
- **BONUS 3:**
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

## Svolgimento:
1. Sostituisco il ciclo for normale con un FORECH 
2. aggiungo e tolgo il d-none dell'titolo e descrizione
3. Bonus 1
  - al click della thumbnails dovra comparire quell immagine usando il contatore
4. bonus 3
  - al click del bottone start con set interval partirà il loop
  - al click del bottone stop si fermerà il loop con clear interval
  - al click del bottone inversione si invertirà il loop del carosello grazie ad un valore booleano 

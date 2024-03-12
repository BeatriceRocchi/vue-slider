# Vue Slider

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

**Bonus**

1. al click su una thumb, visualizzare in grande l’immagine corrispondente
2. applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3. quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
4. al doppio click sullo slider cambia la direzione dell’autoplay

## Svolgimento

1. Predisporre ambiente per lavorare con Vue: importare script per Vue, inserire tutto il contenuto del body dell'html in un elemento con id="app", destrutturare Vue in JS per ottenere il metodo createApp, inserire in createApp tutto il JS su cui lavorare
2. Inserire nel return di data() l'array di immagini (array di oggetti) e un counter
3. Mostrare l'immagine in base al counter
4. Al click su uovo/uccello incrementare/decrementare il counter ed inserire controlli per creare slider infinito
5. Caricare tutte le immagini nelle thumbnails (v-for)
6. Rendere attiva la thumbnail con indice uguale al counter
7. Al click sulla thumbnail, modificare il counter assegnandogli l'indice della thumbnail stessa
8. Al caricamento della pagina (al mounted di createApp), avviare l'autoplay. Di default l'autoplay andrà all'immagine successiva
9. Inserire nel return di data() anche un booleano (isAutoplay) per gestire l'autoplay. Di default e quando esco con il mouse dallo slider, l'autoplay deve essere attivo (isAutoplay è true), mentre all'hover sullo slider l'autoplay si deve bloccare (isAutoplay è false). All'interno della funzione che gestisce l'autoplay fare in modo che si avvii solo quando isAutoplay è true
10. Inserire nel return di data() anche un booleano (isNext) per gestire la direzione dell'autoplay che di default è verso l'immagine successiva (isNext è true). Al doppio click sullo slider, assegnare a isNext il suo valore contrario. All'interno della funzione che gestisce l'autoplay inserire condizione per gestirne la direzione sulla base del valore di isNext.
/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const n1 = 5
const n2 = 10
const verify = n1 < n2
console.log(verify)
/* SCRIVI QUI LA TUA RISPOSTA */
// ho scritto due numeri assegnando il simbolo minore al piu picolo
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const n3 = 6
const n4 = 5
const verify2 = n3 !== n5
console.log(verify2)
/* SCRIVI QUI LA TUA RISPOSTA */
// inserito due numeri di cui uno l'ho posto diverso dall'altro
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const number = 10
const number1 = 5
const ver = number % number1
console.log(ver) 
/* SCRIVI QUI LA TUA RISPOSTA */
// ho scelto il numero dieci e ho dato un valore numero 5, 10%5 = 2
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const num = 8
const num2 = 5
const num3 = 3
const num4 = 11
if(num === 8){
    console.log("è uguale a 8")
}
else if(num2 + num3){
    console.log("la somma è 8")
}
else (num4 - num3){
    console.log("la sottr è 8")
}
/* SCRIVI QUI LA TUA RISPOSTA */
// ho prov sia se il num corrisponde, sia add che sottr
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 100
let var1 = 50
if(totalShoppingCart > var1){
  console.log("spedizione gratuita")
}
else if(totalShoppingCart < var1){
  console.log("spezione 10£")
}
else{console.log()}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const n6 = 4
const n7 = 5
const n8 = 6
if(n6 < n7){
  console.log("4 min 5")
}
else if(n7 < n8){
  console.log("5 min 6")
}
else(n8 > n6){
  console.log("6 maggiore di tutti")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let nome = "Mario"
typeof "Mario"
console.log("controllo tipo", typeof)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let prime = 10
let prime1 = 2
if(prime % prime){console.log("se è divisibile per 2 allora è pari")}
else{console.log("se non è divisibile per 2 allora è dispari")}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
    
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  me.city = "Toronto"
  console.log("me", me)
  /* SCRIVI QUI LA TUA RISPOSTA */
  // aggiunto un punto al valore me 
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  delete me.lastName
  console.log("lastname", me.)
  /* SCRIVI QUI LA TUA RISPOSTA */
  // aggiunto prop delete
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
  skills.pop()
  console.log("skills" skills)
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
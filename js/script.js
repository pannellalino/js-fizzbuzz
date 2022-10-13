/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
**Prima di partire a scrivere codice poniamoci qualche domanda:**
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare? */

const container = document.querySelector ('.x-container');
const limit = 100;

for(let i = 1; i <= limit; i++){
  const box = document.createElement ('div');  
  box.className = 'box';  
  


  box.innerHTML = i;

  container.append(box);
}
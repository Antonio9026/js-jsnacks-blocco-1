// Snack2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

// creo array di numeri 
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

// ciclo array di numeri 
for (let i = 0; i < numeri.length; i++) {
    // creo condizione per selezionare elementi in posizione dispari
    if (i % 2 !== 0) {
        // sommo gli elementi 
        sum += numeri[i];
        // log della posizione elementi 
        console.log([i]);
    };
};
// log della somma 
console.log(sum);  
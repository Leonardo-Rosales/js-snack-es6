console.log('Snack Array e Oggetti');

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


function includingPosition(array, a, b) {
    const newArray = [];
    for (let i = a; i <= b; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

// Esempio di utilizzo

const numeri = [10, 25, 33, 31, 777, 1, 79, 99, 210, 7, 67];
console.log(numeri);

const a = 4;
const b = 8;

const risultato = includingPosition(numeri, a, b);
console.log("Nuovo array con valori tra le posizioni", a, "e", b, ":", risultato);

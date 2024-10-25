console.log('Snack Array e Oggetti');

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

//Array oggetti

const bicycle = [
    {
        name: 'Triciclo',
        weight: '20.50'
    },
    {
        name: 'Bmx',
        weight: '15.30'
    },
    {
        name: 'Mountain bike',
        weight: '30.70'
    },
    {
        name: 'Downhill',
        weight: '23'
    },

]

console.log(bicycle);
//console.log(bicycle.length);

//Troviamo la bici con il peso minore

let lightBicycle = bicycle[0]

for (let i = 0; i < bicycle.length; i++) {
    bicycleElement = bicycle[i];
    console.log(bicycleElement);
    if (bicycleElement.weight < lightBicycle.weight) {
        lightBicycle = bicycleElement
    }
}

//Stampiamo a schermo la bici con il peso minore

console.log(`La bici con il peso minore è: ${lightBicycle.name} con un peso di ${lightBicycle.weight} kg`);
console.log('Snack Array e Oggetti');

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeams = [
    {
        name: 'Juventus',
        points: 0,
        fouls: 0

    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0

    },

    {
        name: 'Inter',
        points: 0,
        fouls: 0

    },

    {
        name: 'Milan',
        points: 0,
        fouls: 0

    },

    {
        name: 'Napoli',
        points: 0,
        fouls: 0

    },


]

console.log(footballTeams);

// Generiamo un numero random

function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Assegniamo valori casuali a punti e falli subiti per ogni squadra

footballTeams.forEach(footballTeams => {
    footballTeams.points = generaNumeroRandom(1, 100);
    footballTeams.fouls = generaNumeroRandom(1, 50);
});

// Creiamo un nuovo array con solo i nomi e i falli subiti

const teamFouls = []

for (let i = 0; i < footballTeams.length; i++) {
    teamFouls.push({
        name: footballTeams[i].name,
        fouls: footballTeams[i].fouls
    });
}

console.log(footballTeams);
console.log(teamFouls);
function getMax(array) {
    if (array.length === 0) return NaN;
    return Math.max(...array);
}

function getAverage(array) {
    if (array.length === 0) return NaN;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            return NaN;
        }
        sum += array[i];
    }
    return sum / array.length;
}

function evenAscOddDesc(array) {
    const evens = array.filter(num => num % 2 === 0).sort((a, b) => a - b);
    const odds = array.filter(num => num % 2 !== 0).sort((a, b) => b - a);
    return [...evens, ...odds];
}

function sortByTitle(array) {
    return array.sort((a, b) => {
        if (!a.title || !b.title) {
            return 0;
        }
        return a.title.localeCompare(b.title);
    });
}

function sortByPoints(array) {
    return array.sort((a, b) => {
        if (!a.points || !b.points) {
            return 0;
        }
        else if (b.points !== a.points) {
            return b.points - a.points;
        } else {
            return a.name.localeCompare(b.name);
        }
    });
}



//simple tests
let simplArr = [1, 2, 3, 4, 5];

let ovenOdd = [20, -10, 333, 1000, 552, 7, -7];
let expectAfterSort = [-10,20,552,1000,333,7,-7];

let litmir = [
    { author: 'Oruwell', title: '1984' },
    { author: 'Nesbo', title: 'Knife' },
    { author: 'Caroll', title: 'Alice in Wonderland' },
    { author: 'Gogol', title: 'Viy' },
];

let results = [
    { name: 'Vasya', points: 150 },
    { name: 'Moshe', points: 120 },
    { name: 'Lisa', points: 100 },
    { name: 'Boruh', points: 150 },
    { name: 'Sem', points: 120 },
    { name: 'Lida', points: 200 },
];

console.log(getMax(simplArr)===5);
console.log(getAverage(simplArr)===3);
console.log(JSON.stringify(evenAscOddDesc(ovenOdd))==JSON.stringify(expectAfterSort));

let res = sortByTitle(litmir);
console.log( res[0].title == 1984);
console.log( res[1].title === 'Alice in Wonderland');
console.log( res[3].title === 'Viy');

res = sortByPoints(results)
console.log(res[5].name === 'Lisa');
console.log(res[3].name === 'Moshe');
console.log(res[0].name === 'Lida');

// unexpected tests
simplArr = [1, 2, 3, 4, '5', '1q', 'wer'];
console.log(Number.isNaN(getMax(simplArr)));
console.log(Number.isNaN(getAverage(simplArr)));

simplArr = [];
console.log(Number.isNaN(getAverage(simplArr)));
console.log(Number.isNaN(getMax(simplArr)));

ovenOdd = [20, -10, 333, 'wer', 552, 7, -7, 'qq'];
expectAfterSort = [-10, 20, 552, 333, "wer", 7, -7, "qq"];
console.log(JSON.stringify(evenAscOddDesc(ovenOdd))==JSON.stringify(expectAfterSort));

litmir = [];
console.log(sortByTitle(litmir).length===0);
litmir = [
    { author: 'Oruwell', title: '1984' },
    { author: 'Nesbo', title: 'Knife' },
    { author: 'Caroll'},
    { author: 'Gogol', title: 'Viy' },
    { author: 'Gogol', title: 'Alice in Wonderland' },
];

expectAfterSort =  [{author: "Oruwell", title: "1984"},
                                        {author: "Gogol", title: "Alice in Wonderland"},
                                        {author: "Nesbo", title: "Knife"},
                                        {author: "Caroll"},
                                        {author: "Gogol", title: "Viy"}];
console.log(JSON.stringify(sortByTitle(litmir))==JSON.stringify(expectAfterSort));
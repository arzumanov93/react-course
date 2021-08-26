function fetchData(data, count = 1) {
    console.log(`Данные: ${data} в колисестве ${count}`);
}

fetchData('something');

const x = 25, y = 10;
const coords = {x, y, 
      calcSquare() {
          return this.x*this.y
      }};
console.log(coords.calcSquare());


const persone = {
    name: {
        first: 'Harry',
        second: 'Potter'
    },
    facultet: 'Gryffindor',
    patronus: 'deer'
}

const {name: {first, second}, facultet, patronus} = persone;

console.log(second, facultet);













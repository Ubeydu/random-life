// Welcome to random life.

const life = {
    countries: ['Sudan', 'Turkey', 'New Zealand', 'Chile'],
    jobs: ['plummer', 'painter', 'business person', 'olive grower'],
    diet: ['vegetarian', 'omnivore', 'vegan'],
};

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let i = random(0, life.countries.length);
let j = random(0, life.jobs.length);
let k = random(0, life.diet.length);

console.log(`You live in ${life.countries[i]}, you are a ${life.jobs[j]}, and your diet is ${life.diet[k]}.`);

// Your initial data here
// Write your code below data.

let data = {
    abilities: [
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/',
        },
        is_hidden: true,
        slot: 3,
      },
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/',
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    base_experience: 64,
    forms: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
      },
    ],
    height: 7,
    id: 1,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
    moves: [
      {
        move: {
          name: 'razor-wind',
          url: 'https://pokeapi.co/api/v2/move/13/',
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: 'egg',
              url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
            },
            version_group: {
              name: 'crystal',
              url: 'https://pokeapi.co/api/v2/version-group/4/',
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: 'egg',
              url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
            },
            version_group: {
              name: 'gold-silver',
              url: 'https://pokeapi.co/api/v2/version-group/3/',
            },
          },
        ],
      },
    ],
  
    name: 'bulbasaur',
    order: 1,
    species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
    },
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      back_female: null,
      back_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
      back_shiny_female: null,
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      front_female: null,
      front_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      front_shiny_female: null,
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
    ],
    types: [
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
    ],
    weight: 69,
  };
  

// Challenge 1 - Get the height and weight of Pokemon and return them in String format
const {name, height, weight, types, abilities, stats } = data;

let stringHeight = height.toString()
let stringWeight = weight.toString()

// Challenge 2 - Store the result of Step 1 and again convert height and weight to integer. Then calculate Pokemons BMI. Assume that weight and height are in in kg and meters consequently.
console.log("BMI =",Number(stringWeight) / Number(stringHeight) *2)

// Challenge 3 - Store the name of Pokemon to a new variable. Then using new varibale calculate the length (word count) of Pokemons name and make it an upper case.
let nameOfPoky = name.toUpperCase()
let lengthOfName = nameOfPoky.length;
console.log(`Pokemon name is: ${nameOfPoky}, length of it: ${lengthOfName}`)

// Challenge 4 - Make sure name contains word "bulba"
console.log(nameOfPoky.includes("BULBA"));

// Challenge 5 - Now cut first 2 characters of name and store as a new variable. Also get last 2 charaters of name and store as a new variable. At the end add this 2 variables and return a new name that consists of first 2 and last 2 characters of original name.
let newName = nameOfPoky.slice(0, 2) + nameOfPoky.slice(nameOfPoky.length-2);
console.log(newName)

// Challenge 6 - Now store new name variable into an array. And console to the result.
let nameArr = [newName]
console.log(nameArr)

// Challenge 7 - Console log the names of each "type" that is inside types array in original data. Make sure you see "poison" and "grass" as a result.
types.forEach(item => console.log(item.type.name))

// Challenge 8 - Make sure/check abilites is an array type. Abilites can be found from same data object.
console.log(Array.isArray(abilities))

// Challenge 9 - From abilities array get the last ability (object) and console the name of it.\
let lastAbility = abilities.pop(abilities.name);
console.log('Last ability is :', lastAbility.ability.name)

// Challenge 10 - Now take that last ability (object) and again put it back to abilities array.
abilities.push(lastAbility);
console.log(abilities); // checking to make sure if its there again

// Challenge 11 - Loop throgh the stats data and console the base_stat values
stats.forEach(stat => console.log('base_stat values: ', stat.base_stat))

// Challenge 12 - Store Step 11 values into new array and filter and console the values that above 47.
var base_stats = [];
data.stats.forEach(stat => base_stats.push(stat.base_stat)) 

base_stats.filter(stat => stat > 47).forEach(stat => console.log("Stats above 47 are:",stat))

// Challenge 13 - Reverse an array that contained base_stat values and return a string combining all these values.
console.log(base_stats.reverse().join())

// Challenge 14 - From base_stat values array return shallow copy only 2 first values as an array.
copyOfFirstTwo = [];

copyOfFirstTwo.push(stats[0].base_stat, stats[1].base_stat)

console.log("Shallow Copy List", copyOfFirstTwo);

// Challenge 15 - From base_stat values array replace first number with your
stats[0].stat.name = 'Burak';
console.log(stats[0].stat.name);

// Challenge 16 - Console log keys and values of data object.
for(let [key, value] of Object.entries(data)) {
  console.log(key, value  );
}

// Challenge 17 - From data show avatar, name, height and weight on the DOM. To do that copy and paste below code:

const avatar = document.querySelector('#pokemon-avatar');
const pok_name = document.querySelector('#pokemon-name');
const info = document.querySelector('#info');
const fname = data.name;
const fheight = data.height;
const fweight = data.weight;
const url = data.sprites.front_default;
avatar.src = url;
pok_name.innerHTML = name;
info.innerHTML = `
  <span> Height ${height}</span> -
  <span> Weight ${weight}</span>
`;


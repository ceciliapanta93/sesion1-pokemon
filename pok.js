let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]
 
//1. Ordernar los pokemons por base_damage de menor a mayor.
const base_damage_menor_a_mayor = pokemons.sort((a, b) => a.base_damage - b.base_damage )
//console.log(base_damage_menor_a_mayor, 'base_damage_menor_a_mayor')
 
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.
function orderByProperty(property) {
    const ordered = pokemons.sort((a, b) => a[property] - b[property] )
    return ordered
}
//console.log(orderByProperty('speed'))
//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
function filterByType(type) {
    return pokemons.filter(item => item.type === type)
}
//console.log(filterByType('water'))
//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
const pokemonMaster = {
    id: 2,
    name: 'Ash',
    created_date: '2020-11-21',
    pokemon: []
}
//console.log(pokemonMaster)
//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
function addPokemon() {
    const randomPosition = Math.floor(Math.random() * pokemons.length - 1)
    const pokemonAleatorio = pokemons[randomPosition]
    pokemonMaster.pokemon.push(pokemonAleatorio)
    return pokemonMaster
}
console.log(addPokemon())
//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function addPokemonWithDamage() {
    const randomMinDamage = getRandomArbitrary(1,2)
    const randomMaxDamage = getRandomArbitrary(3,5)
    const randomPosition = Math.floor(Math.random() * pokemons.length - 1)
    const pokemonAleatorio = pokemons[randomPosition]
    pokemonAleatorio.min_damage = randomMinDamage
    pokemonAleatorio.max_damage = randomMaxDamage
    pokemonMaster.pokemons.push(pokemonAleatorio)
    return pokemonAleatorio
}
//console.log(addPokemonWithDamage()
 
//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
function determinarDaño(pokemon) {
    const valorAlatorio = getRandomArbitrary(pokemon.min_damage, pokemon.max_damage)
    const daño = pokemon.base_damage + valorAlatorio
    return daño
}
//console.log('El daño es', determinarDaño(pokemonMaster.pokemons[0]))
//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. El quiere que sus pokemons se ordenen de manera
// que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.
function orderDecrecientBasePlusMaxDamage () {
    addPokemonWithDamage()
    addPokemonWithDamage()
    addPokemonWithDamage()
    return pokemonMaster.pokemons.sort((a,b) => (b.base_damage + b.max_damage) - (a.base_damage + a.max_damage) )
}
console.log(orderDecrecientBasePlusMaxDamage()

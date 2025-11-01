// Pokemon Data Structure
const POKEMON_DATA = {
    "bulbasaur": {
        name: "Bulbasaur",
        types: ["grass", "poison"],
        sprite: "🌱",
        stats: { hp: 45, attack: 49, defense: 49, spAtk: 65, spDef: 65, speed: 45 }
    },
    "charmander": {
        name: "Charmander",
        types: ["fire"],
        sprite: "🔥",
        stats: { hp: 39, attack: 52, defense: 43, spAtk: 60, spDef: 50, speed: 65 }
    },
    "squirtle": {
        name: "Squirtle",
        types: ["water"],
        sprite: "💧",
        stats: { hp: 44, attack: 48, defense: 65, spAtk: 50, spDef: 64, speed: 43 }
    },
    "pidgey": {
        name: "Pidgey",
        types: ["normal", "flying"],
        sprite: "🐦",
        stats: { hp: 40, attack: 45, defense: 40, spAtk: 35, spDef: 35, speed: 56 }
    },
    "rattata": {
        name: "Rattata",
        types: ["normal"],
        sprite: "🐀",
        stats: { hp: 30, attack: 56, defense: 35, spAtk: 25, spDef: 35, speed: 72 }
    },
    "pikachu": {
        name: "Pikachu",
        types: ["electric"],
        sprite: "⚡",
        stats: { hp: 35, attack: 55, defense: 40, spAtk: 50, spDef: 50, speed: 90 }
    },
    "nidoran-m": {
        name: "Nidoran♂",
        types: ["poison"],
        sprite: "🐰",
        stats: { hp: 46, attack: 57, defense: 40, spAtk: 40, spDef: 40, speed: 50 }
    },
    "mankey": {
        name: "Mankey",
        types: ["fighting"],
        sprite: "🐵",
        stats: { hp: 40, attack: 80, defense: 35, spAtk: 35, spDef: 45, speed: 70 }
    },
    "geodude": {
        name: "Geodude",
        types: ["rock", "ground"],
        sprite: "🪨",
        stats: { hp: 40, attack: 80, defense: 100, spAtk: 30, spDef: 30, speed: 20 }
    },
    "magikarp": {
        name: "Magikarp",
        types: ["water"],
        sprite: "🐟",
        stats: { hp: 20, attack: 10, defense: 55, spAtk: 15, spDef: 20, speed: 80 }
    },
    "gyarados": {
        name: "Gyarados",
        types: ["water", "flying"],
        sprite: "🐉",
        stats: { hp: 95, attack: 125, defense: 79, spAtk: 60, spDef: 100, speed: 81 }
    },
    "abra": {
        name: "Abra",
        types: ["psychic"],
        sprite: "🔮",
        stats: { hp: 25, attack: 20, defense: 15, spAtk: 105, spDef: 55, speed: 90 }
    },
    "machop": {
        name: "Machop",
        types: ["fighting"],
        sprite: "💪",
        stats: { hp: 70, attack: 80, defense: 50, spAtk: 35, spDef: 35, speed: 35 }
    },
    "bellsprout": {
        name: "Bellsprout",
        types: ["grass", "poison"],
        sprite: "🌿",
        stats: { hp: 50, attack: 75, defense: 35, spAtk: 70, spDef: 30, speed: 40 }
    },
    "tentacool": {
        name: "Tentacool",
        types: ["water", "poison"],
        sprite: "🪼",
        stats: { hp: 40, attack: 40, defense: 35, spAtk: 50, spDef: 100, speed: 70 }
    },
    "onix": {
        name: "Onix",
        types: ["rock", "ground"],
        sprite: "🐍",
        stats: { hp: 35, attack: 45, defense: 160, spAtk: 30, spDef: 45, speed: 70 }
    },
    "gastly": {
        name: "Gastly",
        types: ["ghost", "poison"],
        sprite: "👻",
        stats: { hp: 30, attack: 35, defense: 30, spAtk: 100, spDef: 35, speed: 80 }
    },
    "drowzee": {
        name: "Drowzee",
        types: ["psychic"],
        sprite: "😴",
        stats: { hp: 60, attack: 48, defense: 45, spAtk: 43, spDef: 90, speed: 42 }
    },
    "voltorb": {
        name: "Voltorb",
        types: ["electric"],
        sprite: "⚫",
        stats: { hp: 40, attack: 30, defense: 50, spAtk: 55, spDef: 55, speed: 100 }
    },
    "snorlax": {
        name: "Snorlax",
        types: ["normal"],
        sprite: "😴",
        stats: { hp: 160, attack: 110, defense: 65, spAtk: 65, spDef: 110, speed: 30 }
    },
    "dratini": {
        name: "Dratini",
        types: ["dragon"],
        sprite: "🐲",
        stats: { hp: 41, attack: 64, defense: 45, spAtk: 50, spDef: 50, speed: 50 }
    },
    "eevee": {
        name: "Eevee",
        types: ["normal"],
        sprite: "🦊",
        stats: { hp: 55, attack: 55, defense: 50, spAtk: 45, spDef: 65, speed: 55 }
    },
    "lapras": {
        name: "Lapras",
        types: ["water", "ice"],
        sprite: "🦕",
        stats: { hp: 130, attack: 85, defense: 80, spAtk: 85, spDef: 95, speed: 60 }
    },
    "zapdos": {
        name: "Zapdos",
        types: ["electric", "flying"],
        sprite: "⚡🦅",
        stats: { hp: 90, attack: 90, defense: 85, spAtk: 125, spDef: 90, speed: 100 }
    },
    "articuno": {
        name: "Articuno",
        types: ["ice", "flying"],
        sprite: "❄️🦅",
        stats: { hp: 90, attack: 85, defense: 100, spAtk: 95, spDef: 125, speed: 85 }
    },
    "moltres": {
        name: "Moltres",
        types: ["fire", "flying"],
        sprite: "🔥🦅",
        stats: { hp: 90, attack: 100, defense: 90, spAtk: 125, spDef: 85, speed: 90 }
    }
};

// Type Effectiveness Chart
const TYPE_EFFECTIVENESS = {
    normal: { weakTo: ["fighting"], resistantTo: [], immuneTo: ["ghost"] },
    fire: { weakTo: ["water", "ground", "rock"], resistantTo: ["fire", "grass", "ice", "bug", "steel", "fairy"] },
    water: { weakTo: ["electric", "grass"], resistantTo: ["fire", "water", "ice", "steel"] },
    electric: { weakTo: ["ground"], resistantTo: ["electric", "flying", "steel"], immuneTo: [] },
    grass: { weakTo: ["fire", "ice", "poison", "flying", "bug"], resistantTo: ["water", "electric", "grass", "ground"] },
    ice: { weakTo: ["fire", "fighting", "rock", "steel"], resistantTo: ["ice"] },
    fighting: { weakTo: ["flying", "psychic", "fairy"], resistantTo: ["bug", "rock", "dark"] },
    poison: { weakTo: ["ground", "psychic"], resistantTo: ["grass", "fighting", "poison", "bug", "fairy"] },
    ground: { weakTo: ["water", "grass", "ice"], resistantTo: ["poison", "rock"], immuneTo: ["electric"] },
    flying: { weakTo: ["electric", "ice", "rock"], resistantTo: ["grass", "fighting", "bug"], immuneTo: ["ground"] },
    psychic: { weakTo: ["bug", "ghost", "dark"], resistantTo: ["fighting", "psychic"] },
    bug: { weakTo: ["fire", "flying", "rock"], resistantTo: ["grass", "fighting", "ground"] },
    rock: { weakTo: ["water", "grass", "fighting", "ground", "steel"], resistantTo: ["normal", "fire", "poison", "flying"] },
    ghost: { weakTo: ["ghost", "dark"], resistantTo: ["poison", "bug"], immuneTo: ["normal", "fighting"] },
    dragon: { weakTo: ["ice", "dragon", "fairy"], resistantTo: ["fire", "water", "electric", "grass"] },
    dark: { weakTo: ["fighting", "bug", "fairy"], resistantTo: ["ghost", "dark"], immuneTo: ["psychic"] },
    steel: { weakTo: ["fire", "fighting", "ground"], resistantTo: ["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"], immuneTo: ["poison"] },
    fairy: { weakTo: ["poison", "steel"], resistantTo: ["fighting", "bug", "dark"], immuneTo: ["dragon"] }
};

// Game Data
const GAME_DATA = {
    "firered-leafgreen": {
        name: "FireRed/LeafGreen",
        region: "Kanto",
        gyms: [
            {
                id: 1,
                name: "Boulder Badge",
                leader: "Brock",
                location: "Pewter City",
                type: "rock",
                icon: "🪨"
            },
            {
                id: 2,
                name: "Cascade Badge",
                leader: "Misty",
                location: "Cerulean City",
                type: "water",
                icon: "💧"
            },
            {
                id: 3,
                name: "Thunder Badge",
                leader: "Lt. Surge",
                location: "Vermilion City",
                type: "electric",
                icon: "⚡"
            },
            {
                id: 4,
                name: "Rainbow Badge",
                leader: "Erika",
                location: "Celadon City",
                type: "grass",
                icon: "🌸"
            },
            {
                id: 5,
                name: "Soul Badge",
                leader: "Koga",
                location: "Fuchsia City",
                type: "poison",
                icon: "☠️"
            },
            {
                id: 6,
                name: "Marsh Badge",
                leader: "Sabrina",
                location: "Saffron City",
                type: "psychic",
                icon: "🔮"
            },
            {
                id: 7,
                name: "Volcano Badge",
                leader: "Blaine",
                location: "Cinnabar Island",
                type: "fire",
                icon: "🌋"
            },
            {
                id: 8,
                name: "Earth Badge",
                leader: "Giovanni",
                location: "Viridian City",
                type: "ground",
                icon: "🌍"
            }
        ],
        encounters: {
            // Before Brock (Badge 0)
            0: [
                { pokemon: "bulbasaur", location: "Starter Choice", method: "Starter" },
                { pokemon: "charmander", location: "Starter Choice", method: "Starter" },
                { pokemon: "squirtle", location: "Starter Choice", method: "Starter" },
                { pokemon: "pidgey", location: "Routes 1-3", method: "Grass" },
                { pokemon: "rattata", location: "Routes 1-3", method: "Grass" },
                { pokemon: "mankey", location: "Route 22", method: "Grass (FireRed)" },
                { pokemon: "nidoran-m", location: "Route 22", method: "Grass" }
            ],
            // After Brock, before Misty
            1: [
                { pokemon: "pikachu", location: "Viridian Forest", method: "Grass" },
                { pokemon: "geodude", location: "Mt. Moon", method: "Cave" },
                { pokemon: "mankey", location: "Route 5-8", method: "Grass" }
            ],
            // After Misty, before Lt. Surge
            2: [
                { pokemon: "abra", location: "Routes 24-25", method: "Grass" },
                { pokemon: "bellsprout", location: "Routes 24-25", method: "Grass (LeafGreen)" },
                { pokemon: "magikarp", location: "Pokémon Center", method: "Purchase" }
            ],
            // After Lt. Surge, before Erika
            3: [
                { pokemon: "drowzee", location: "Route 11", method: "Grass" },
                { pokemon: "voltorb", location: "Route 10", method: "Grass" },
                { pokemon: "gastly", location: "Pokemon Tower", method: "Tower" },
                { pokemon: "eevee", location: "Celadon Mansion", method: "Gift" }
            ],
            // After Erika, before Koga
            4: [
                { pokemon: "snorlax", location: "Routes 12/16", method: "Event" },
                { pokemon: "lapras", location: "Silph Co.", method: "Gift" }
            ],
            // After Koga, before Sabrina
            5: [
                { pokemon: "tentacool", location: "Surfing", method: "Water" }
            ],
            // After Sabrina, before Blaine
            6: [
                { pokemon: "zapdos", location: "Power Plant", method: "Legendary" },
                { pokemon: "articuno", location: "Seafoam Islands", method: "Legendary" }
            ],
            // After Blaine, before Giovanni
            7: [
                { pokemon: "moltres", location: "Mt. Ember", method: "Legendary" },
                { pokemon: "dratini", location: "Safari Zone", method: "Fishing" }
            ]
        }
    },
    "red-blue": {
        name: "Red/Blue",
        region: "Kanto",
        gyms: [
            { id: 1, name: "Boulder Badge", leader: "Brock", location: "Pewter City", type: "rock", icon: "🪨" },
            { id: 2, name: "Cascade Badge", leader: "Misty", location: "Cerulean City", type: "water", icon: "💧" },
            { id: 3, name: "Thunder Badge", leader: "Lt. Surge", location: "Vermilion City", type: "electric", icon: "⚡" },
            { id: 4, name: "Rainbow Badge", leader: "Erika", location: "Celadon City", type: "grass", icon: "🌸" },
            { id: 5, name: "Soul Badge", leader: "Koga", location: "Fuchsia City", type: "poison", icon: "☠️" },
            { id: 6, name: "Marsh Badge", leader: "Sabrina", location: "Saffron City", type: "psychic", icon: "🔮" },
            { id: 7, name: "Volcano Badge", leader: "Blaine", location: "Cinnabar Island", type: "fire", icon: "🌋" },
            { id: 8, name: "Earth Badge", leader: "Giovanni", location: "Viridian City", type: "ground", icon: "🌍" }
        ],
        encounters: {
            0: [
                { pokemon: "bulbasaur", location: "Starter Choice", method: "Starter" },
                { pokemon: "charmander", location: "Starter Choice", method: "Starter" },
                { pokemon: "squirtle", location: "Starter Choice", method: "Starter" },
                { pokemon: "pidgey", location: "Routes 1-3", method: "Grass" },
                { pokemon: "rattata", location: "Routes 1-3", method: "Grass" }
            ],
            1: [
                { pokemon: "pikachu", location: "Viridian Forest", method: "Grass" },
                { pokemon: "geodude", location: "Mt. Moon", method: "Cave" }
            ],
            2: [
                { pokemon: "abra", location: "Routes 24-25", method: "Grass" },
                { pokemon: "magikarp", location: "Pokémon Center", method: "Purchase" }
            ]
        }
    },
    "gold-silver": {
        name: "Gold/Silver",
        region: "Johto",
        gyms: [
            { id: 1, name: "Zephyr Badge", leader: "Falkner", location: "Violet City", type: "flying", icon: "🦅" },
            { id: 2, name: "Hive Badge", leader: "Bugsy", location: "Azalea Town", type: "bug", icon: "🐛" },
            { id: 3, name: "Plain Badge", leader: "Whitney", location: "Goldenrod City", type: "normal", icon: "⭐" },
            { id: 4, name: "Fog Badge", leader: "Morty", location: "Ecruteak City", type: "ghost", icon: "👻" },
            { id: 5, name: "Storm Badge", leader: "Chuck", location: "Cianwood City", type: "fighting", icon: "🥊" },
            { id: 6, name: "Mineral Badge", leader: "Jasmine", location: "Olivine City", type: "steel", icon: "⚙️" },
            { id: 7, name: "Glacier Badge", leader: "Pryce", location: "Mahogany Town", type: "ice", icon: "❄️" },
            { id: 8, name: "Rising Badge", leader: "Clair", location: "Blackthorn City", type: "dragon", icon: "🐉" }
        ],
        encounters: {}
    },
    "ruby-sapphire": {
        name: "Ruby/Sapphire",
        region: "Hoenn",
        gyms: [
            { id: 1, name: "Stone Badge", leader: "Roxanne", location: "Rustboro City", type: "rock", icon: "🪨" },
            { id: 2, name: "Knuckle Badge", leader: "Brawly", location: "Dewford Town", type: "fighting", icon: "🥊" },
            { id: 3, name: "Dynamo Badge", leader: "Wattson", location: "Mauville City", type: "electric", icon: "⚡" },
            { id: 4, name: "Heat Badge", leader: "Flannery", location: "Lavaridge Town", type: "fire", icon: "🔥" },
            { id: 5, name: "Balance Badge", leader: "Norman", location: "Petalburg City", type: "normal", icon: "⭐" },
            { id: 6, name: "Feather Badge", leader: "Winona", location: "Fortree City", type: "flying", icon: "🦅" },
            { id: 7, name: "Mind Badge", leader: "Tate & Liza", location: "Mossdeep City", type: "psychic", icon: "🔮" },
            { id: 8, name: "Rain Badge", leader: "Wallace", location: "Sootopolis City", type: "water", icon: "💧" }
        ],
        encounters: {}
    }
};

// Pokemon Data Structure with PokeAPI Sprites
const POKEMON_DATA = {
    "bulbasaur": {
        name: "Bulbasaur",
        dexNumber: 1,
        types: ["grass", "poison"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        stats: { hp: 45, attack: 49, defense: 49, spAtk: 65, spDef: 65, speed: 45 }
    },
    "charmander": {
        name: "Charmander",
        dexNumber: 4,
        types: ["fire"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        stats: { hp: 39, attack: 52, defense: 43, spAtk: 60, spDef: 50, speed: 65 }
    },
    "squirtle": {
        name: "Squirtle",
        dexNumber: 7,
        types: ["water"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        stats: { hp: 44, attack: 48, defense: 65, spAtk: 50, spDef: 64, speed: 43 }
    },
    "pidgey": {
        name: "Pidgey",
        dexNumber: 16,
        types: ["normal", "flying"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        stats: { hp: 40, attack: 45, defense: 40, spAtk: 35, spDef: 35, speed: 56 }
    },
    "rattata": {
        name: "Rattata",
        dexNumber: 19,
        types: ["normal"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        stats: { hp: 30, attack: 56, defense: 35, spAtk: 25, spDef: 35, speed: 72 }
    },
    "pikachu": {
        name: "Pikachu",
        dexNumber: 25,
        types: ["electric"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        stats: { hp: 35, attack: 55, defense: 40, spAtk: 50, spDef: 50, speed: 90 }
    },
    "nidoran-m": {
        name: "Nidoran♂",
        dexNumber: 32,
        types: ["poison"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
        stats: { hp: 46, attack: 57, defense: 40, spAtk: 40, spDef: 40, speed: 50 }
    },
    "mankey": {
        name: "Mankey",
        dexNumber: 56,
        types: ["fighting"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
        stats: { hp: 40, attack: 80, defense: 35, spAtk: 35, spDef: 45, speed: 70 }
    },
    "geodude": {
        name: "Geodude",
        dexNumber: 74,
        types: ["rock", "ground"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
        stats: { hp: 40, attack: 80, defense: 100, spAtk: 30, spDef: 30, speed: 20 }
    },
    "magikarp": {
        name: "Magikarp",
        dexNumber: 129,
        types: ["water"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
        stats: { hp: 20, attack: 10, defense: 55, spAtk: 15, spDef: 20, speed: 80 }
    },
    "gyarados": {
        name: "Gyarados",
        dexNumber: 130,
        types: ["water", "flying"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        stats: { hp: 95, attack: 125, defense: 79, spAtk: 60, spDef: 100, speed: 81 }
    },
    "abra": {
        name: "Abra",
        dexNumber: 63,
        types: ["psychic"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
        stats: { hp: 25, attack: 20, defense: 15, spAtk: 105, spDef: 55, speed: 90 }
    },
    "machop": {
        name: "Machop",
        dexNumber: 66,
        types: ["fighting"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
        stats: { hp: 70, attack: 80, defense: 50, spAtk: 35, spDef: 35, speed: 35 }
    },
    "bellsprout": {
        name: "Bellsprout",
        dexNumber: 69,
        types: ["grass", "poison"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
        stats: { hp: 50, attack: 75, defense: 35, spAtk: 70, spDef: 30, speed: 40 }
    },
    "tentacool": {
        name: "Tentacool",
        dexNumber: 72,
        types: ["water", "poison"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
        stats: { hp: 40, attack: 40, defense: 35, spAtk: 50, spDef: 100, speed: 70 }
    },
    "onix": {
        name: "Onix",
        dexNumber: 95,
        types: ["rock", "ground"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
        stats: { hp: 35, attack: 45, defense: 160, spAtk: 30, spDef: 45, speed: 70 }
    },
    "gastly": {
        name: "Gastly",
        dexNumber: 92,
        types: ["ghost", "poison"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
        stats: { hp: 30, attack: 35, defense: 30, spAtk: 100, spDef: 35, speed: 80 }
    },
    "drowzee": {
        name: "Drowzee",
        dexNumber: 96,
        types: ["psychic"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
        stats: { hp: 60, attack: 48, defense: 45, spAtk: 43, spDef: 90, speed: 42 }
    },
    "voltorb": {
        name: "Voltorb",
        dexNumber: 100,
        types: ["electric"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
        stats: { hp: 40, attack: 30, defense: 50, spAtk: 55, spDef: 55, speed: 100 }
    },
    "snorlax": {
        name: "Snorlax",
        dexNumber: 143,
        types: ["normal"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
        stats: { hp: 160, attack: 110, defense: 65, spAtk: 65, spDef: 110, speed: 30 }
    },
    "dratini": {
        name: "Dratini",
        dexNumber: 147,
        types: ["dragon"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
        stats: { hp: 41, attack: 64, defense: 45, spAtk: 50, spDef: 50, speed: 50 }
    },
    "eevee": {
        name: "Eevee",
        dexNumber: 133,
        types: ["normal"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        stats: { hp: 55, attack: 55, defense: 50, spAtk: 45, spDef: 65, speed: 55 }
    },
    "lapras": {
        name: "Lapras",
        dexNumber: 131,
        types: ["water", "ice"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
        stats: { hp: 130, attack: 85, defense: 80, spAtk: 85, spDef: 95, speed: 60 }
    },
    "zapdos": {
        name: "Zapdos",
        dexNumber: 145,
        types: ["electric", "flying"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
        stats: { hp: 90, attack: 90, defense: 85, spAtk: 125, spDef: 90, speed: 100 }
    },
    "articuno": {
        name: "Articuno",
        dexNumber: 144,
        types: ["ice", "flying"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
        stats: { hp: 90, attack: 85, defense: 100, spAtk: 95, spDef: 125, speed: 85 }
    },
    "moltres": {
        name: "Moltres",
        dexNumber: 146,
        types: ["fire", "flying"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
        stats: { hp: 90, attack: 100, defense: 90, spAtk: 125, spDef: 85, speed: 90 }
    },
    // Gen 2 Pokemon
    "cyndaquil": {
        name: "Cyndaquil",
        dexNumber: 155,
        types: ["fire"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
        stats: { hp: 39, attack: 52, defense: 43, spAtk: 60, spDef: 50, speed: 65 }
    },
    "totodile": {
        name: "Totodile",
        dexNumber: 158,
        types: ["water"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
        stats: { hp: 50, attack: 65, defense: 64, spAtk: 44, spDef: 48, speed: 43 }
    },
    "chikorita": {
        name: "Chikorita",
        dexNumber: 152,
        types: ["grass"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
        stats: { hp: 45, attack: 49, defense: 65, spAtk: 49, spDef: 65, speed: 45 }
    },
    // Gen 3 Pokemon
    "treecko": {
        name: "Treecko",
        dexNumber: 252,
        types: ["grass"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
        stats: { hp: 40, attack: 45, defense: 35, spAtk: 65, spDef: 55, speed: 70 }
    },
    "torchic": {
        name: "Torchic",
        dexNumber: 255,
        types: ["fire"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
        stats: { hp: 45, attack: 60, defense: 40, spAtk: 70, spDef: 50, speed: 45 }
    },
    "mudkip": {
        name: "Mudkip",
        dexNumber: 258,
        types: ["water"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
        stats: { hp: 50, attack: 70, defense: 50, spAtk: 50, spDef: 50, speed: 40 }
    },
    // Gen 4 Pokemon
    "turtwig": {
        name: "Turtwig",
        dexNumber: 387,
        types: ["grass"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
        stats: { hp: 55, attack: 68, defense: 64, spAtk: 45, spDef: 55, speed: 31 }
    },
    "chimchar": {
        name: "Chimchar",
        dexNumber: 390,
        types: ["fire"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
        stats: { hp: 44, attack: 58, defense: 44, spAtk: 58, spDef: 44, speed: 61 }
    },
    "piplup": {
        name: "Piplup",
        dexNumber: 393,
        types: ["water"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
        stats: { hp: 53, attack: 51, defense: 53, spAtk: 61, spDef: 56, speed: 40 }
    },
    "starly": {
        name: "Starly",
        dexNumber: 396,
        types: ["normal", "flying"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
        stats: { hp: 40, attack: 55, defense: 30, spAtk: 30, spDef: 30, speed: 60 }
    },
    "shinx": {
        name: "Shinx",
        dexNumber: 403,
        types: ["electric"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
        stats: { hp: 45, attack: 65, defense: 34, spAtk: 40, spDef: 34, speed: 45 }
    },
    "riolu": {
        name: "Riolu",
        dexNumber: 447,
        types: ["fighting"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
        stats: { hp: 40, attack: 70, defense: 40, spAtk: 35, spDef: 40, speed: 60 }
    },
    "gible": {
        name: "Gible",
        dexNumber: 443,
        types: ["dragon", "ground"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
        stats: { hp: 58, attack: 70, defense: 45, spAtk: 40, spDef: 45, speed: 42 }
    },
    // Gen 5 Pokemon
    "snivy": {
        name: "Snivy",
        dexNumber: 495,
        types: ["grass"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
        stats: { hp: 45, attack: 45, defense: 55, spAtk: 45, spDef: 55, speed: 63 }
    },
    "tepig": {
        name: "Tepig",
        dexNumber: 498,
        types: ["fire"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
        stats: { hp: 65, attack: 63, defense: 45, spAtk: 45, spDef: 45, speed: 45 }
    },
    "oshawott": {
        name: "Oshawott",
        dexNumber: 501,
        types: ["water"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
        stats: { hp: 55, attack: 55, defense: 45, spAtk: 63, spDef: 45, speed: 45 }
    },
    // Gen 6 Pokemon
    "chespin": {
        name: "Chespin",
        dexNumber: 650,
        types: ["grass"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
        stats: { hp: 56, attack: 61, defense: 65, spAtk: 48, spDef: 45, speed: 38 }
    },
    "fennekin": {
        name: "Fennekin",
        dexNumber: 653,
        types: ["fire"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
        stats: { hp: 40, attack: 45, defense: 40, spAtk: 62, spDef: 60, speed: 60 }
    },
    "froakie": {
        name: "Froakie",
        dexNumber: 656,
        types: ["water"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
        stats: { hp: 41, attack: 56, defense: 40, spAtk: 62, spDef: 44, speed: 71 }
    },
    // Gen 7 Pokemon
    "rowlet": {
        name: "Rowlet",
        dexNumber: 722,
        types: ["grass", "flying"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
        stats: { hp: 68, attack: 55, defense: 55, spAtk: 50, spDef: 50, speed: 42 }
    },
    "litten": {
        name: "Litten",
        dexNumber: 725,
        types: ["fire"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
        stats: { hp: 45, attack: 65, defense: 40, spAtk: 60, spDef: 40, speed: 70 }
    },
    "popplio": {
        name: "Popplio",
        dexNumber: 728,
        types: ["water"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
        stats: { hp: 50, attack: 54, defense: 54, spAtk: 66, spDef: 56, speed: 40 }
    },
    // Gen 8 Pokemon
    "grookey": {
        name: "Grookey",
        dexNumber: 810,
        types: ["grass"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
        stats: { hp: 50, attack: 65, defense: 50, spAtk: 40, spDef: 40, speed: 65 }
    },
    "scorbunny": {
        name: "Scorbunny",
        dexNumber: 813,
        types: ["fire"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
        stats: { hp: 50, attack: 71, defense: 40, spAtk: 40, spDef: 40, speed: 69 }
    },
    "sobble": {
        name: "Sobble",
        dexNumber: 816,
        types: ["water"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
        stats: { hp: 50, attack: 40, defense: 40, spAtk: 70, spDef: 40, speed: 70 }
    },
    // Gen 9 Pokemon
    "sprigatito": {
        name: "Sprigatito",
        dexNumber: 906,
        types: ["grass"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
        stats: { hp: 40, attack: 61, defense: 54, spAtk: 45, spDef: 45, speed: 65 }
    },
    "fuecoco": {
        name: "Fuecoco",
        dexNumber: 909,
        types: ["fire"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png",
        stats: { hp: 67, attack: 45, defense: 59, spAtk: 63, spDef: 40, speed: 36 }
    },
    "quaxly": {
        name: "Quaxly",
        dexNumber: 912,
        types: ["water"],
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png",
        stats: { hp: 55, attack: 65, defense: 45, spAtk: 50, spDef: 45, speed: 50 }
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
        eliteFour: [
            { id: 1, name: "Lorelei", type: "ice", icon: "❄️" },
            { id: 2, name: "Bruno", type: "fighting", icon: "🥊" },
            { id: 3, name: "Agatha", type: "ghost", icon: "👻" },
            { id: 4, name: "Lance", type: "dragon", icon: "🐉" },
            { id: 5, name: "Champion", type: "champion", icon: "👑" }
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
        eliteFour: [
            { id: 1, name: "Lorelei", type: "ice", icon: "❄️" },
            { id: 2, name: "Bruno", type: "fighting", icon: "🥊" },
            { id: 3, name: "Agatha", type: "ghost", icon: "👻" },
            { id: 4, name: "Lance", type: "dragon", icon: "🐉" },
            { id: 5, name: "Rival", type: "champion", icon: "👑" }
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
        eliteFour: [
            { id: 1, name: "Will", type: "psychic", icon: "🔮" },
            { id: 2, name: "Koga", type: "poison", icon: "☠️" },
            { id: 3, name: "Bruno", type: "fighting", icon: "🥊" },
            { id: 4, name: "Karen", type: "dark", icon: "🌑" },
            { id: 5, name: "Lance", type: "champion", icon: "👑" }
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
        eliteFour: [
            { id: 1, name: "Sidney", type: "dark", icon: "🌑" },
            { id: 2, name: "Phoebe", type: "ghost", icon: "👻" },
            { id: 3, name: "Glacia", type: "ice", icon: "❄️" },
            { id: 4, name: "Drake", type: "dragon", icon: "🐉" },
            { id: 5, name: "Wallace/Steven", type: "champion", icon: "👑" }
        ],
        encounters: {}
    },
    "diamond-pearl": {
        name: "Diamond/Pearl/Platinum",
        region: "Sinnoh",
        gyms: [
            { id: 1, name: "Coal Badge", leader: "Roark", location: "Oreburgh City", type: "rock", icon: "🪨" },
            { id: 2, name: "Forest Badge", leader: "Gardenia", location: "Eterna City", type: "grass", icon: "🌿" },
            { id: 3, name: "Cobble Badge", leader: "Maylene", location: "Veilstone City", type: "fighting", icon: "🥊" },
            { id: 4, name: "Fen Badge", leader: "Crasher Wake", location: "Pastoria City", type: "water", icon: "💧" },
            { id: 5, name: "Relic Badge", leader: "Fantina", location: "Hearthome City", type: "ghost", icon: "👻" },
            { id: 6, name: "Mine Badge", leader: "Byron", location: "Canalave City", type: "steel", icon: "⚙️" },
            { id: 7, name: "Icicle Badge", leader: "Candice", location: "Snowpoint City", type: "ice", icon: "❄️" },
            { id: 8, name: "Beacon Badge", leader: "Volkner", location: "Sunyshore City", type: "electric", icon: "⚡" }
        ],
        eliteFour: [
            { id: 1, name: "Aaron", type: "bug", icon: "🐛" },
            { id: 2, name: "Bertha", type: "ground", icon: "🌍" },
            { id: 3, name: "Flint", type: "fire", icon: "🔥" },
            { id: 4, name: "Lucian", type: "psychic", icon: "🔮" },
            { id: 5, name: "Cynthia", type: "champion", icon: "👑" }
        ],
        encounters: {
            0: [
                { pokemon: "turtwig", location: "Starter Choice", method: "Starter" },
                { pokemon: "chimchar", location: "Starter Choice", method: "Starter" },
                { pokemon: "piplup", location: "Starter Choice", method: "Starter" },
                { pokemon: "starly", location: "Routes 201-203", method: "Grass" }
            ],
            1: [
                { pokemon: "shinx", location: "Route 202", method: "Grass" }
            ],
            2: [
                { pokemon: "riolu", location: "Iron Island", method: "Gift" }
            ],
            7: [
                { pokemon: "gible", location: "Wayward Cave", method: "Cave" }
            ]
        }
    },
    "black-white": {
        name: "Black/White/Black 2/White 2",
        region: "Unova",
        gyms: [
            { id: 1, name: "Trio Badge", leader: "Cilan/Chili/Cress", location: "Striaton City", type: "grass", icon: "🌿" },
            { id: 2, name: "Basic Badge", leader: "Lenora", location: "Nacrene City", type: "normal", icon: "⭐" },
            { id: 3, name: "Insect Badge", leader: "Burgh", location: "Castelia City", type: "bug", icon: "🐛" },
            { id: 4, name: "Bolt Badge", leader: "Elesa", location: "Nimbasa City", type: "electric", icon: "⚡" },
            { id: 5, name: "Quake Badge", leader: "Clay", location: "Driftveil City", type: "ground", icon: "🌍" },
            { id: 6, name: "Jet Badge", leader: "Skyla", location: "Mistralton City", type: "flying", icon: "🦅" },
            { id: 7, name: "Freeze Badge", leader: "Brycen", location: "Icirrus City", type: "ice", icon: "❄️" },
            { id: 8, name: "Legend Badge", leader: "Drayden", location: "Opelucid City", type: "dragon", icon: "🐉" }
        ],
        eliteFour: [
            { id: 1, name: "Shauntal", type: "ghost", icon: "👻" },
            { id: 2, name: "Marshal", type: "fighting", icon: "🥊" },
            { id: 3, name: "Grimsley", type: "dark", icon: "🌑" },
            { id: 4, name: "Caitlin", type: "psychic", icon: "🔮" },
            { id: 5, name: "Alder/Iris", type: "champion", icon: "👑" }
        ],
        encounters: {
            0: [
                { pokemon: "snivy", location: "Starter Choice", method: "Starter" },
                { pokemon: "tepig", location: "Starter Choice", method: "Starter" },
                { pokemon: "oshawott", location: "Starter Choice", method: "Starter" }
            ]
        }
    },
    "x-y": {
        name: "X/Y",
        region: "Kalos",
        gyms: [
            { id: 1, name: "Bug Badge", leader: "Viola", location: "Santalune City", type: "bug", icon: "🐛" },
            { id: 2, name: "Cliff Badge", leader: "Grant", location: "Cyllage City", type: "rock", icon: "🪨" },
            { id: 3, name: "Rumble Badge", leader: "Korrina", location: "Shalour City", type: "fighting", icon: "🥊" },
            { id: 4, name: "Plant Badge", leader: "Ramos", location: "Coumarine City", type: "grass", icon: "🌿" },
            { id: 5, name: "Voltage Badge", leader: "Clemont", location: "Lumiose City", type: "electric", icon: "⚡" },
            { id: 6, name: "Fairy Badge", leader: "Valerie", location: "Laverre City", type: "fairy", icon: "🧚" },
            { id: 7, name: "Psychic Badge", leader: "Olympia", location: "Anistar City", type: "psychic", icon: "🔮" },
            { id: 8, name: "Iceberg Badge", leader: "Wulfric", location: "Snowbelle City", type: "ice", icon: "❄️" }
        ],
        eliteFour: [
            { id: 1, name: "Malva", type: "fire", icon: "🔥" },
            { id: 2, name: "Siebold", type: "water", icon: "💧" },
            { id: 3, name: "Wikstrom", type: "steel", icon: "⚙️" },
            { id: 4, name: "Drasna", type: "dragon", icon: "🐉" },
            { id: 5, name: "Diantha", type: "champion", icon: "👑" }
        ],
        encounters: {
            0: [
                { pokemon: "chespin", location: "Starter Choice", method: "Starter" },
                { pokemon: "fennekin", location: "Starter Choice", method: "Starter" },
                { pokemon: "froakie", location: "Starter Choice", method: "Starter" }
            ]
        }
    },
    "sun-moon": {
        name: "Sun/Moon/Ultra Sun/Ultra Moon",
        region: "Alola",
        gyms: [
            { id: 1, name: "Normalium Z", leader: "Ilima", location: "Verdant Cavern", type: "normal", icon: "⭐" },
            { id: 2, name: "Rockium Z", leader: "Olivia", location: "Akala Island", type: "rock", icon: "🪨" },
            { id: 3, name: "Waterium Z", leader: "Lana", location: "Brooklet Hill", type: "water", icon: "💧" },
            { id: 4, name: "Firium Z", leader: "Kiawe", location: "Wela Volcano", type: "fire", icon: "🔥" },
            { id: 5, name: "Grassium Z", leader: "Mallow", location: "Lush Jungle", type: "grass", icon: "🌿" },
            { id: 6, name: "Electrium Z", leader: "Sophocles", location: "Hokulani Observatory", type: "electric", icon: "⚡" },
            { id: 7, name: "Ghostium Z", leader: "Acerola", location: "Thrifty Megamart", type: "ghost", icon: "👻" },
            { id: 8, name: "Dragonium Z", leader: "Hapu", location: "Vast Poni Canyon", type: "dragon", icon: "🐉" }
        ],
        eliteFour: [
            { id: 1, name: "Hala", type: "fighting", icon: "🥊" },
            { id: 2, name: "Olivia", type: "rock", icon: "🪨" },
            { id: 3, name: "Acerola", type: "ghost", icon: "👻" },
            { id: 4, name: "Kahili", type: "flying", icon: "🦅" },
            { id: 5, name: "Kukui/Hau", type: "champion", icon: "👑" }
        ],
        encounters: {
            0: [
                { pokemon: "rowlet", location: "Starter Choice", method: "Starter" },
                { pokemon: "litten", location: "Starter Choice", method: "Starter" },
                { pokemon: "popplio", location: "Starter Choice", method: "Starter" }
            ]
        }
    },
    "sword-shield": {
        name: "Sword/Shield",
        region: "Galar",
        gyms: [
            { id: 1, name: "Grass Badge", leader: "Milo", location: "Turffield", type: "grass", icon: "🌿" },
            { id: 2, name: "Water Badge", leader: "Nessa", location: "Hulbury", type: "water", icon: "💧" },
            { id: 3, name: "Fire Badge", leader: "Kabu", location: "Motostoke", type: "fire", icon: "🔥" },
            { id: 4, name: "Fighting Badge", leader: "Bea", location: "Stow-on-Side", type: "fighting", icon: "🥊" },
            { id: 5, name: "Ghost Badge", leader: "Allister", location: "Stow-on-Side", type: "ghost", icon: "👻" },
            { id: 6, name: "Fairy Badge", leader: "Opal", location: "Ballonlea", type: "fairy", icon: "🧚" },
            { id: 7, name: "Rock Badge", leader: "Gordie", location: "Circhester", type: "rock", icon: "🪨" },
            { id: 8, name: "Dragon Badge", leader: "Raihan", location: "Hammerlocke", type: "dragon", icon: "🐉" }
        ],
        eliteFour: [
            { id: 1, name: "Champion Cup", type: "tournament", icon: "🏆" },
            { id: 2, name: "Leon", type: "champion", icon: "👑" }
        ],
        encounters: {
            0: [
                { pokemon: "grookey", location: "Starter Choice", method: "Starter" },
                { pokemon: "scorbunny", location: "Starter Choice", method: "Starter" },
                { pokemon: "sobble", location: "Starter Choice", method: "Starter" }
            ]
        }
    },
    "scarlet-violet": {
        name: "Scarlet/Violet",
        region: "Paldea",
        gyms: [
            { id: 1, name: "Bug Badge", leader: "Katy", location: "Cortondo", type: "bug", icon: "🐛" },
            { id: 2, name: "Grass Badge", leader: "Brassius", location: "Artazon", type: "grass", icon: "🌿" },
            { id: 3, name: "Electric Badge", leader: "Iono", location: "Levincia", type: "electric", icon: "⚡" },
            { id: 4, name: "Water Badge", leader: "Kofu", location: "Cascarrafa", type: "water", icon: "💧" },
            { id: 5, name: "Normal Badge", leader: "Larry", location: "Medali", type: "normal", icon: "⭐" },
            { id: 6, name: "Ghost Badge", leader: "Ryme", location: "Montenevera", type: "ghost", icon: "👻" },
            { id: 7, name: "Psychic Badge", leader: "Tulip", location: "Alfornada", type: "psychic", icon: "🔮" },
            { id: 8, name: "Ice Badge", leader: "Grusha", location: "Glaseado Mountain", type: "ice", icon: "❄️" }
        ],
        eliteFour: [
            { id: 1, name: "Rika", type: "ground", icon: "🌍" },
            { id: 2, name: "Poppy", type: "steel", icon: "⚙️" },
            { id: 3, name: "Larry", type: "flying", icon: "🦅" },
            { id: 4, name: "Hassel", type: "dragon", icon: "🐉" },
            { id: 5, name: "Geeta", type: "champion", icon: "👑" }
        ],
        encounters: {
            0: [
                { pokemon: "sprigatito", location: "Starter Choice", method: "Starter" },
                { pokemon: "fuecoco", location: "Starter Choice", method: "Starter" },
                { pokemon: "quaxly", location: "Starter Choice", method: "Starter" }
            ]
        }
    }
};

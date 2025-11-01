// Application State
let currentGame = null;
let team = [null, null, null, null, null, null];
let badges = [];
let availablePokemon = [];
let currentSlot = null;

// DOM Elements
const gameSelect = document.getElementById('gameSelect');
const gymBadgesSection = document.getElementById('gymBadgesSection');
const badgeList = document.getElementById('badgeList');
const teamSlots = document.getElementById('teamSlots');
const teamCount = document.getElementById('teamCount');
const typeCoverageSection = document.getElementById('typeCoverageSection');
const typeCoverage = document.getElementById('typeCoverage');
const suggestionsSection = document.getElementById('suggestionsSection');
const suggestionsList = document.getElementById('suggestionsList');
const availablePokemonSection = document.getElementById('availablePokemonSection');
const pokemonList = document.getElementById('pokemonList');
const pokemonSearch = document.getElementById('pokemonSearch');
const darkModeToggle = document.getElementById('darkModeToggle');
const pokemonModal = document.getElementById('pokemonModal');
const closeModal = document.getElementById('closeModal');
const modalSearch = document.getElementById('modalSearch');
const modalPokemonList = document.getElementById('modalPokemonList');

// Initialize
init();

function init() {
    // Load dark mode preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Event Listeners
    gameSelect.addEventListener('change', handleGameChange);
    darkModeToggle.addEventListener('click', toggleDarkMode);
    pokemonSearch.addEventListener('input', handleSearch);
    modalSearch.addEventListener('input', handleModalSearch);
    closeModal.addEventListener('click', closeModalWindow);
    pokemonModal.addEventListener('click', (e) => {
        if (e.target === pokemonModal) closeModalWindow();
    });

    // Team slot click handlers
    const slots = teamSlots.querySelectorAll('.empty-slot');
    slots.forEach((slot, index) => {
        slot.addEventListener('click', () => openPokemonSelector(index));
    });
}

// Dark Mode Toggle
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Game Selection Handler
function handleGameChange(e) {
    const gameId = e.target.value;
    if (!gameId) {
        resetApp();
        return;
    }

    currentGame = GAME_DATA[gameId];
    badges = [];
    team = [null, null, null, null, null, null];

    renderGymBadges();
    updateAvailablePokemon();
    renderTeam();
    updateTeamCount();

    gymBadgesSection.style.display = 'block';
    availablePokemonSection.style.display = 'block';
    typeCoverageSection.style.display = 'none';
    suggestionsSection.style.display = 'none';
}

// Render Gym Badges
function renderGymBadges() {
    if (!currentGame) return;

    badgeList.innerHTML = '';
    currentGame.gyms.forEach((gym) => {
        const badgeItem = document.createElement('div');
        badgeItem.className = 'badge-item';
        badgeItem.dataset.gymId = gym.id;

        badgeItem.innerHTML = `
            <div class="badge-icon">${gym.icon}</div>
            <div class="badge-name">${gym.name}</div>
            <div class="badge-type">${gym.leader}</div>
        `;

        badgeItem.addEventListener('click', () => toggleBadge(gym.id));
        badgeList.appendChild(badgeItem);
    });
}

// Toggle Badge
function toggleBadge(gymId) {
    const index = badges.indexOf(gymId);
    if (index > -1) {
        badges.splice(index, 1);
    } else {
        badges.push(gymId);
    }

    badges.sort((a, b) => a - b);
    updateBadgeDisplay();
    updateAvailablePokemon();
    generateSuggestions();
}

// Update Badge Display
function updateBadgeDisplay() {
    const badgeItems = badgeList.querySelectorAll('.badge-item');
    badgeItems.forEach((item) => {
        const gymId = parseInt(item.dataset.gymId);
        if (badges.includes(gymId)) {
            item.classList.add('earned');
        } else {
            item.classList.remove('earned');
        }
    });
}

// Update Available Pokemon based on badges
function updateAvailablePokemon() {
    if (!currentGame) return;

    const highestBadge = badges.length > 0 ? Math.max(...badges) : 0;
    availablePokemon = [];

    // Get all encounters up to and including the current badge level
    for (let i = 0; i <= highestBadge; i++) {
        if (currentGame.encounters[i]) {
            availablePokemon.push(...currentGame.encounters[i]);
        }
    }

    renderAvailablePokemon();
}

// Render Available Pokemon
function renderAvailablePokemon(searchTerm = '') {
    if (!pokemonList) return;

    pokemonList.innerHTML = '';

    const filtered = availablePokemon.filter(encounter => {
        const pokemon = POKEMON_DATA[encounter.pokemon];
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (filtered.length === 0) {
        pokemonList.innerHTML = '<p style="color: var(--text-secondary); padding: 20px; text-align: center;">No Pokemon available yet. Earn more badges to unlock encounters!</p>';
        return;
    }

    filtered.forEach(encounter => {
        const pokemon = POKEMON_DATA[encounter.pokemon];
        const card = createPokemonCard(pokemon, encounter);
        card.addEventListener('click', () => {
            if (team.filter(p => p !== null).length < 6) {
                const emptySlot = team.findIndex(p => p === null);
                if (emptySlot !== -1) {
                    addToTeam(encounter.pokemon, emptySlot);
                }
            }
        });
        pokemonList.appendChild(card);
    });
}

// Create Pokemon Card
function createPokemonCard(pokemon, encounter) {
    const card = document.createElement('div');
    card.className = 'pokemon-card';

    const typeBadges = pokemon.types.map(type =>
        `<span class="type-badge type-${type}">${type}</span>`
    ).join('');

    card.innerHTML = `
        <div class="pokemon-card-header">
            <div class="pokemon-card-sprite">${pokemon.sprite}</div>
            <div class="pokemon-card-info">
                <div class="pokemon-card-name">${pokemon.name}</div>
                <div class="pokemon-types">${typeBadges}</div>
            </div>
        </div>
        <div class="pokemon-card-location">${encounter.location}</div>
    `;

    return card;
}

// Open Pokemon Selector Modal
function openPokemonSelector(slotIndex) {
    currentSlot = slotIndex;
    renderModalPokemonList();
    pokemonModal.classList.add('show');
}

// Close Modal
function closeModalWindow() {
    pokemonModal.classList.remove('show');
    modalSearch.value = '';
    currentSlot = null;
}

// Render Modal Pokemon List
function renderModalPokemonList(searchTerm = '') {
    modalPokemonList.innerHTML = '';

    const filtered = availablePokemon.filter(encounter => {
        const pokemon = POKEMON_DATA[encounter.pokemon];
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (filtered.length === 0) {
        modalPokemonList.innerHTML = '<p style="color: var(--text-secondary); padding: 20px; text-align: center;">No Pokemon available. Select a game and earn badges to unlock encounters!</p>';
        return;
    }

    filtered.forEach(encounter => {
        const pokemon = POKEMON_DATA[encounter.pokemon];
        const card = createPokemonCard(pokemon, encounter);
        card.addEventListener('click', () => {
            addToTeam(encounter.pokemon, currentSlot);
            closeModalWindow();
        });
        modalPokemonList.appendChild(card);
    });
}

// Add Pokemon to Team
function addToTeam(pokemonId, slotIndex) {
    if (team[slotIndex] === null) {
        team[slotIndex] = pokemonId;
        renderTeam();
        updateTeamCount();
        updateTypeCoverage();
        generateSuggestions();
    }
}

// Remove Pokemon from Team
function removeFromTeam(slotIndex) {
    team[slotIndex] = null;
    renderTeam();
    updateTeamCount();
    updateTypeCoverage();
    generateSuggestions();
}

// Render Team
function renderTeam() {
    const slots = teamSlots.children;

    team.forEach((pokemonId, index) => {
        const slot = slots[index];

        if (pokemonId === null) {
            slot.className = 'empty-slot';
            slot.innerHTML = `
                <span class="plus-icon">+</span>
                <span class="slot-text">Add Pokemon</span>
            `;
            slot.onclick = () => openPokemonSelector(index);
        } else {
            const pokemon = POKEMON_DATA[pokemonId];
            slot.className = 'team-member';

            const typeBadges = pokemon.types.map(type =>
                `<span class="type-badge type-${type}">${type}</span>`
            ).join('');

            slot.innerHTML = `
                <button class="remove-btn" onclick="event.stopPropagation(); removeFromTeam(${index})">×</button>
                <div class="pokemon-sprite">${pokemon.sprite}</div>
                <div class="pokemon-name">${pokemon.name}</div>
                <div class="pokemon-types">${typeBadges}</div>
            `;
            slot.onclick = () => openPokemonSelector(index);
        }
    });
}

// Update Team Count
function updateTeamCount() {
    const count = team.filter(p => p !== null).length;
    teamCount.textContent = `(${count}/6)`;
}

// Update Type Coverage
function updateTypeCoverage() {
    const teamPokemon = team.filter(p => p !== null).map(id => POKEMON_DATA[id]);

    if (teamPokemon.length === 0) {
        typeCoverageSection.style.display = 'none';
        return;
    }

    typeCoverageSection.style.display = 'block';

    // Get all offensive types from team
    const offensiveTypes = new Set();
    teamPokemon.forEach(pokemon => {
        pokemon.types.forEach(type => offensiveTypes.add(type));
    });

    // Calculate coverage
    const allTypes = Object.keys(TYPE_EFFECTIVENESS);
    const coverageData = {};

    allTypes.forEach(defenseType => {
        let hasAdvantage = false;
        offensiveTypes.forEach(attackType => {
            const effectiveness = TYPE_EFFECTIVENESS[defenseType];
            if (effectiveness.weakTo && effectiveness.weakTo.includes(attackType)) {
                hasAdvantage = true;
            }
        });
        coverageData[defenseType] = hasAdvantage;
    });

    // Render coverage
    typeCoverage.innerHTML = '';
    Object.entries(coverageData).forEach(([type, hasCoverage]) => {
        const item = document.createElement('div');
        item.className = 'coverage-item';
        item.innerHTML = `
            <div class="coverage-type type-badge type-${type}">${type}</div>
            <div class="coverage-status ${hasCoverage ? 'good' : 'weak'}">
                ${hasCoverage ? '✓' : '✗'}
            </div>
        `;
        typeCoverage.appendChild(item);
    });
}

// Generate Team Suggestions
function generateSuggestions() {
    const teamPokemon = team.filter(p => p !== null);

    if (teamPokemon.length === 0 || teamPokemon.length === 6) {
        suggestionsSection.style.display = 'none';
        return;
    }

    suggestionsSection.style.display = 'block';

    // Get team types
    const teamTypes = new Set();
    teamPokemon.forEach(pokemonId => {
        POKEMON_DATA[pokemonId].types.forEach(type => teamTypes.add(type));
    });

    // Get next gym challenge
    const nextGym = currentGame ? currentGame.gyms.find(gym => !badges.includes(gym.id)) : null;

    // Score available pokemon
    const suggestions = [];
    const teamIds = new Set(teamPokemon);

    availablePokemon.forEach(encounter => {
        if (teamIds.has(encounter.pokemon)) return;

        const pokemon = POKEMON_DATA[encounter.pokemon];
        let score = 0;
        let reasons = [];

        // Type diversity bonus
        const newTypes = pokemon.types.filter(type => !teamTypes.has(type));
        if (newTypes.length > 0) {
            score += newTypes.length * 2;
            reasons.push(`Adds ${newTypes.join(', ')} coverage`);
        }

        // Gym counter bonus
        if (nextGym) {
            const gymType = nextGym.type;
            const effectiveness = TYPE_EFFECTIVENESS[gymType];
            const hasAdvantage = pokemon.types.some(type =>
                effectiveness.weakTo && effectiveness.weakTo.includes(type)
            );

            if (hasAdvantage) {
                score += 5;
                reasons.push(`Strong against ${nextGym.leader} (${gymType})`);
            }
        }

        // Stat bonus (favor higher total stats)
        const totalStats = Object.values(pokemon.stats).reduce((sum, stat) => sum + stat, 0);
        score += totalStats / 100;

        if (score > 0) {
            suggestions.push({
                encounter,
                pokemon,
                score,
                reason: reasons.join(' • ') || 'Solid addition to team'
            });
        }
    });

    // Sort by score and take top 6
    suggestions.sort((a, b) => b.score - a.score);
    const topSuggestions = suggestions.slice(0, 6);

    // Render suggestions
    suggestionsList.innerHTML = '';

    if (topSuggestions.length === 0) {
        suggestionsList.innerHTML = '<p style="color: var(--text-secondary); padding: 20px; text-align: center;">No suggestions available. Try earning more badges!</p>';
        return;
    }

    topSuggestions.forEach(({ encounter, pokemon, reason }) => {
        const card = createPokemonCard(pokemon, encounter);

        const reasonDiv = document.createElement('div');
        reasonDiv.className = 'suggestion-reason';
        reasonDiv.textContent = reason;
        card.appendChild(reasonDiv);

        card.addEventListener('click', () => {
            const emptySlot = team.findIndex(p => p === null);
            if (emptySlot !== -1) {
                addToTeam(encounter.pokemon, emptySlot);
            }
        });

        suggestionsList.appendChild(card);
    });
}

// Search Handlers
function handleSearch(e) {
    renderAvailablePokemon(e.target.value);
}

function handleModalSearch(e) {
    renderModalPokemonList(e.target.value);
}

// Reset App
function resetApp() {
    currentGame = null;
    team = [null, null, null, null, null, null];
    badges = [];
    availablePokemon = [];

    gymBadgesSection.style.display = 'none';
    availablePokemonSection.style.display = 'none';
    typeCoverageSection.style.display = 'none';
    suggestionsSection.style.display = 'none';

    renderTeam();
    updateTeamCount();
}

// Make removeFromTeam globally accessible
window.removeFromTeam = removeFromTeam;

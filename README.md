# Pokemon Team Planner

A web-based Pokemon team planning tool that helps you build the perfect team based on available encounters, gym badges, and type coverage.

## 🚀 Quick Start

1. Open `index.html` in your web browser
2. Or visit `demo.html` for a guided tour
3. Or run `test.html` to verify all functionality

**Live Demo:** Simply open `demo.html` in any modern web browser to see the application in action!

## Features

### Team Management
- Add 1-6 Pokemon to your team
- Visual team slots with Pokemon sprites and types
- Easy add/remove functionality

### Game Support
- Pokemon Red/Blue
- Pokemon Gold/Silver
- Pokemon Ruby/Sapphire
- Pokemon FireRed/LeafGreen (fully featured with complete encounter data)

### Gym Badge Tracking
- Track which gym badges you've earned
- Unlock Pokemon encounters progressively as you earn badges
- Visual badge display with gym leader information

### Smart Team Suggestions
- AI-powered suggestions based on:
  - Type coverage gaps in your current team
  - Counters for upcoming gym leaders
  - Available encounters up to your current progress
  - Pokemon base stats
- Explanations for why each Pokemon is suggested

### Type Coverage Analysis
- Visual grid showing your team's offensive type coverage
- Identify weaknesses and strengths at a glance
- Helps ensure balanced team composition

### Dark Mode
- Full dark mode support with smooth transitions
- Persistent theme preference (saved to localStorage)
- Easy toggle button in the header

## How to Use

1. **Select Your Game**: Choose which Pokemon game you're playing from the dropdown
2. **Track Your Progress**: Click on gym badges as you earn them
3. **Build Your Team**: Click the "+" slots to add Pokemon to your team
4. **Get Suggestions**: View smart suggestions based on your current team and progress
5. **Analyze Coverage**: Check the type coverage section to identify gaps
6. **Toggle Dark Mode**: Click the sun/moon button to switch themes

## Available Pokemon (FireRed/LeafGreen)

### Starters
- Bulbasaur (Grass/Poison)
- Charmander (Fire)
- Squirtle (Water)

### Early Game (Before Brock)
- Pidgey (Normal/Flying)
- Rattata (Normal)
- Mankey (Fighting)
- Nidoran♂ (Poison)

### Mid Game
- Pikachu (Electric)
- Geodude (Rock/Ground)
- Abra (Psychic)
- Magikarp/Gyarados (Water/Flying)

### Late Game
- Snorlax (Normal)
- Lapras (Water/Ice)
- Eevee (Normal)
- Legendary Birds (Articuno, Zapdos, Moltres)
- Dratini (Dragon)

## Technical Details

### Files
- `index.html` - Main HTML structure
- `styles.css` - Styling with CSS variables for theming
- `app.js` - Application logic and event handlers
- `pokemon-data.js` - Pokemon stats, encounters, and gym data

### Technologies
- Vanilla JavaScript (ES6+)
- CSS3 with CSS Variables
- LocalStorage for theme persistence
- Responsive Grid layouts

## Future Enhancements

- Add more games with complete encounter data
- Include Pokemon evolution chains
- Move suggestions and TM/HM availability
- Ability and nature recommendations
- Export/import team configurations
- Share team builds via URL
- Detailed Pokemon stats view
- Move type coverage analysis

## Browser Compatibility

Works on all modern browsers that support:
- CSS Variables
- ES6 JavaScript
- LocalStorage
- Flexbox and Grid

## License

Open source - feel free to use and modify!

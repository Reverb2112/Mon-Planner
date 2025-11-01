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
- Visual team slots with real Pokemon sprites from PokeAPI
- Easy add/remove functionality

### Game Support (Gen 1-9)
- **Gen 1:** Red/Blue, FireRed/LeafGreen
- **Gen 2:** Gold/Silver
- **Gen 3:** Ruby/Sapphire
- **Gen 4:** Diamond/Pearl/Platinum
- **Gen 5:** Black/White
- **Gen 6:** X/Y
- **Gen 7:** Sun/Moon
- **Gen 8:** Sword/Shield
- **Gen 9:** Scarlet/Violet
- Total: 10 games across all generations

### Gym Badge Tracking
- Track which gym badges you've earned
- Unlock Pokemon encounters progressively as you earn badges
- Visual badge display with gym leader information

### Elite Four Tracker
- Track progress through the Pokemon League
- Toggle defeated Elite Four members
- Champion battles included
- Available for all supported games

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

## Available Pokemon

### Database Size
- **54 Pokemon** with complete stats, types, and real sprites from PokeAPI
- All starter Pokemon from Gen 1-9
- Popular Pokemon from each generation
- Legendary Pokemon

### Starters by Generation
- **Gen 1:** Bulbasaur, Charmander, Squirtle
- **Gen 2:** Chikorita, Cyndaquil, Totodile
- **Gen 3:** Treecko, Torchic, Mudkip
- **Gen 4:** Turtwig, Chimchar, Piplup
- **Gen 5:** Snivy, Tepig, Oshawott
- **Gen 6:** Chespin, Fennekin, Froakie
- **Gen 7:** Rowlet, Litten, Popplio
- **Gen 8:** Grookey, Scorbunny, Sobble
- **Gen 9:** Sprigatito, Fuecoco, Quaxly

### Other Popular Pokemon
- Pikachu, Eevee, Snorlax, Lapras
- Legendary Birds (Articuno, Zapdos, Moltres)
- Dragon types (Dratini, Gible)
- Fighting types (Mankey, Machop, Riolu)
- And many more!

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

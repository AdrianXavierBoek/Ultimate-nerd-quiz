// List of themes to be ranked
const themes = [
        { name: "Dark Souls series", max_score: 40 },
        { name: "Star Wars universe", max_score: 50 },
        { name: "The Lord of the Rings", max_score: 50 },
        { name: "Marvel Cinematic Universe", max_score: 60 },
        { name: "DC Comics universe", max_score: 50 },
        { name: "Dungeons & Dragons", max_score: 40 },
        { name: "Game of Thrones", max_score: 45 },
        { name: "The Witcher series", max_score: 40 },
        { name: "Cyberpunk 2077", max_score: 35 },
        { name: "The Matrix trilogy", max_score: 40 },
        { name: "Pokemon franchise", max_score: 50 },
        { name: "Harry Potter books and films", max_score: 50 },
        { name: "Super Mario series", max_score: 40 },
        { name: "Minecraft", max_score: 50 },
        { name: "World of Warcraft", max_score: 50 },
        { name: "Yu-Gi-Oh! card game", max_score: 40 },
        { name: "Magic: The Gathering", max_score: 45 },
        { name: "Star Trek", max_score: 50 },
        { name: "Star Wars video games", max_score: 40 },
        { name: "The Elder Scrolls series", max_score: 45 },
        { name: "Zelda series", max_score: 45 },
        { name: "Final Fantasy series", max_score: 50 },
        { name: "Assassin's Creed series", max_score: 40 },
        { name: "Resident Evil series", max_score: 40 },
        { name: "Metroid series", max_score: 40 },
        { name: "Lord of the Rings tabletop games", max_score: 35 },
        { name: "Street Fighter series", max_score: 35 },
        { name: "Tekken series", max_score: 35 },
        { name: "Xenoblade Chronicles", max_score: 40 },
        { name: "Fire Emblem series", max_score: 40 },
        { name: "Persona series", max_score: 45 },
        { name: "Kingdom Hearts series", max_score: 45 },
        { name: "Pokémon Trading Card Game", max_score: 40 },
        { name: "Dragon Ball franchise", max_score: 50 },
        { name: "One Piece", max_score: 50 },
        { name: "Naruto series", max_score: 50 },
        { name: "Attack on Titan", max_score: 40 },
        { name: "My Hero Academia", max_score: 45 },
        { name: "The Simpsons", max_score: 40 },
        { name: "Family Guy", max_score: 35 },
        { name: "Rick and Morty", max_score: 45 },
        { name: "Stranger Things", max_score: 45 },
        { name: "Doctor Who", max_score: 50 },
        { name: "Spiderman comics", max_score: 40 },
        { name: "The Hobbit", max_score: 40 },
        { name: "Invincible series", max_score: 40 },
        { name: "Daredevil comics", max_score: 40 },
        { name: "The Punisher comics", max_score: 40 },
        { name: "Deadpool comics", max_score: 40 },
        { name: "Transformers franchise", max_score: 45 },
        { name: "Indiana Jones films", max_score: 40 },
        { name: "Jurassic Park franchise", max_score: 45 },
        { name: "Indiana Jones video games", max_score: 35 },
        { name: "Tomb Raider series", max_score: 40 },
        { name: "King Kong franchise", max_score: 35 },
        { name: "Gundam series", max_score: 45 },
        { name: "Futurama", max_score: 40 },
        { name: "Lego video games", max_score: 40 },
        { name: "Avatar: The Last Airbender", max_score: 50 },
        { name: "The Legend of Korra", max_score: 45 },
        { name: "The Walking Dead", max_score: 40 },
        { name: "Halo franchise", max_score: 45 },
        { name: "Mega Man series", max_score: 40 },
        { name: "Clash of Clans", max_score: 35 },
        { name: "SimCity series", max_score: 40 },
        { name: "Age of Empires series", max_score: 40 },
        { name: "Civilization series", max_score: 45 },
        { name: "League of Legends", max_score: 50 },
        { name: "Counter-Strike series", max_score: 40 },
        { name: "Overwatch", max_score: 45 },
        { name: "Team Fortress 2", max_score: 40 },
        { name: "Fortnite", max_score: 50 },
        { name: "Call of Duty franchise", max_score: 50 },
        { name: "Battlefield series", max_score: 40 },
        { name: "Red Dead Redemption series", max_score: 45 },
        { name: "The Sims series", max_score: 40 },
        { name: "Final Fantasy Tactics", max_score: 35 },
        { name: "Chrono Trigger", max_score: 45 },
        { name: "Dragon Quest series", max_score: 40 },
        { name: "Mass Effect series", max_score: 45 },
        { name: "Dragon Age series", max_score: 40 },
        { name: "GTA series", max_score: 50 },
        { name: "The Witcher books", max_score: 40 },
        { name: "Blade Runner universe", max_score: 40 },
        { name: "The X-Files", max_score: 45 },
        { name: "Marvel Comics", max_score: 50 },
        { name: "DC Comics", max_score: 50 },
        { name: "Vampire: The Masquerade", max_score: 40 },
        { name: "Warhammer 40k", max_score: 50 },
        { name: "Warhammer Fantasy", max_score: 45 },
        { name: "Magic: The Gathering lore", max_score: 45 },
        { name: "Battlestar Galactica", max_score: 45 },
        { name: "The Flash TV series", max_score: 40 },
        { name: "Arrow TV series", max_score: 40 },
        { name: "Marvel's Daredevil TV series", max_score: 40 },
        { name: "The Mandalorian", max_score: 45 },
        { name: "Star Wars Extended Universe", max_score: 45 },
        { name: "Ghostbusters franchise", max_score: 40 },
        { name: "The Twilight Zone", max_score: 40 },
        { name: "Nerdcore rap", max_score: 40 },
        { name: "Saber Marionette J", max_score: 35 },
        { name: "Babylon 5", max_score: 40 },
        { name: "Fable series", max_score: 40 },
        { name: "Dragon Ball Z Kai", max_score: 40 },
        { name: "CyberConnect2 games", max_score: 40 },
        { name: "Persona 5", max_score: 45 },
        { name: "Sonic the Hedgehog series", max_score: 45 },
        { name: "Nier: Automata", max_score: 50 },
        { name: "Guilty Gear series", max_score: 35 },
        { name: "BlazBlue series", max_score: 35 },
        { name: "XCOM series", max_score: 45 },
        { name: "Bioshock series", max_score: 45 },
        { name: "Dishonored series", max_score: 40 },
        { name: "Portal series", max_score: 45 },
        { name: "Half-Life series", max_score: 50 },
        { name: "Steins;Gate", max_score: 40 },
        { name: "Neon Genesis Evangelion", max_score: 45 },
        { name: "Cowboy Bebop", max_score: 45 },
        { name: "Trigun", max_score: 35 },
        { name: "Sword Art Online", max_score: 45 },
        { name: "Bleach series", max_score: 40 },
        { name: "Soul Eater series", max_score: 40 },
        { name: "Inuyasha series", max_score: 40 },
        { name: "Yu Yu Hakusho", max_score: 40 },
        { name: "One Punch Man", max_score: 45 },
        { name: "JoJo's Bizarre Adventure", max_score: 50 },
        { name: "Bleach manga", max_score: 40 },
        { name: "Hunter x Hunter", max_score: 45 },
        { name: "Fullmetal Alchemist", max_score: 50 },
        { name: "Naruto manga", max_score: 45 },
        { name: "Boku no Hero Academia manga", max_score: 45 },
        { name: "Mob Psycho 100", max_score: 40 },
        { name: "Death Note manga", max_score: 40 },
        { name: "KonoSuba", max_score: 35 },
        { name: "Code Geass", max_score: 45 },
        { name: "Rurouni Kenshin", max_score: 40 },
        { name: "Neon Genesis Evangelion manga", max_score: 40 },
        { name: "Yokohama Kaidashi Kikou", max_score: 35 },
        { name: "Cyborg 009", max_score: 35 },
        { name: "Macross franchise", max_score: 40 },
        { name: "Gurren Lagann", max_score: 45 },
        { name: "Vocaloid", max_score: 40 },
        { name: "Made in Abyss", max_score: 40 },
        { name: "Attack on Titan manga", max_score: 50 },
        { name: "Naruto Shippuden", max_score: 50 },
        { name: "Jujutsu Kaisen", max_score: 40 },
        { name: "Spy x Family", max_score: 35 },
        { name: "Black Clover", max_score: 40 },
        { name: "Fairy Tail", max_score: 40 },
        { name: "Haikyuu!!", max_score: 35 },
        { name: "Digimon series", max_score: 40 },
        { name: "K-On!", max_score: 35 },
        { name: "Fruits Basket", max_score: 35 },
        { name: "Re:Zero", max_score: 40 },
        { name: "Eureka Seven", max_score: 40 },
        { name: "Cowboy Bebop movie", max_score: 35 },
        { name: "Trigun movie", max_score: 35 },
        { name: "Persona 4", max_score: 40 },
        { name: "Tales of series", max_score: 45 },
        { name: "Katamari Damacy", max_score: 35 },
        { name: "Nier series", max_score: 50 }
      ];
  


  const surveyForm = document.getElementById('survey-form');
  const resultContainer = document.getElementById('result');
  const totalScoreElement = document.getElementById('total-score');
  const submitButton = document.getElementById('submit-btn');
  
  // Calculate the highest possible score
  const highestPossibleScore = themes.reduce((total, theme) => total + theme.max_score, 0);
  
  // Create input fields dynamically for each theme
  themes.forEach(theme => {
    const themeDiv = document.createElement('div');
    themeDiv.classList.add('theme-item');
  
    const label = document.createElement('label');
    label.innerHTML = `${theme.name} (1 - ${theme.max_score})`;
  
    const input = document.createElement('input');
    input.type = 'number';
    input.min = 1;
    input.max = theme.max_score;
    input.value = 1;
    input.id = theme.name;
    input.classList.add('score-input');
  
    themeDiv.appendChild(label);
    themeDiv.appendChild(input);
    surveyForm.appendChild(themeDiv);
  });
  
  // Function to calculate total score
  function calculateTotalScore() {
    let totalScore = 0;
    themes.forEach(theme => {
      const input = document.getElementById(theme.name);
      totalScore += parseInt(input.value);
    });
    return totalScore;
  }
  
  // Handle submit button click
  submitButton.addEventListener('click', () => {
    const totalScore = calculateTotalScore();
    totalScoreElement.innerText = ` ${totalScore} / ${highestPossibleScore}`;
    resultContainer.style.display = 'block';
  });

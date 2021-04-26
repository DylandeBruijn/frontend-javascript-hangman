function displayWordSoFar(word, guesses) {
  let displayedWord = "";
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const isGuessed = guesses.includes(letter);
    if (isGuessed) {
      const toAdd = `${letter} `;
      displayedWord += toAdd;
    } else {
      displayedWord += "_ ";
    }
  }
  return displayedWord;
}

function isGameWon(word, guesses) {
  let gameWon = false;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const isGuessed = guesses.includes(letter);
    if (!isGuessed) {
      gameWon = false;
    } else {
      gameWon = true;
    }
  }
  return gameWon;
}

function isGameLost(word, guesses) {
  let wrongLetterCounter = 0;
  for (let i = 0; i < guesses.length; i++) {
    const guess = guesses[i];
    const isCharacter = word.includes(guess);
    if (!isCharacter) {
      wrongLetterCounter++;
    }
  }
  if (wrongLetterCounter >= 7) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
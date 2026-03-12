function firstUniqueChar(str) {
    const characterCounts = {};
    caseinsensetivestring = str.toLowerCase();
    
    for (let index = 0; index < caseinsensetivestring.length; index++) {
        const character = caseinsensetivestring[index];
        characterCounts[character] = (characterCounts[character] || 0) + 1;
  }

    for (let index = 0; index < caseinsensetivestring.length; index++) {
        const character = caseinsensetivestring[index];

        if (characterCounts[character] === 1) {
        return character;
    }
  }

  return '';
}

// Test Code
console.log(firstUniqueChar('sTreSS'));
console.log(firstUniqueChar('aabbc')); 

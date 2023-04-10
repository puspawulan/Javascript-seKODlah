function countLetterA(word, loops) {
    let repeatedWord = '';
  
    // repeat the word 'loops' number of times
    for (let i = 0; i < loops; i++) {
      repeatedWord += word;
    }
  
    // count the number of times the letter 'a' appears in the repeated word
    let count = 0;
    for (let i = 0; i < repeatedWord.length; i++) {
      if (repeatedWord[i] === 'a') {
        count++;
      }
    }
  
    return count;
  }
  
  // example usage
  console.log(countLetterA('aha', 3));
function disemvowel(str) {
  
    return str.replace(/[aeiou]/gi,""); // regex to remove vowels, g is global search and i is case insensitivity
  }
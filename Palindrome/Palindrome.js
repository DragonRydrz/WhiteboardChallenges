//  Check to see if a string is a palindrome.  return true or false

const palindrome = str => {
  // Code here
  const noSpaces = str.replace(/\s/g, '');
  return (
    noSpaces ===
    noSpaces
      .split('')
      .reverse()
      .join('')
  );
};

// Do not adjust code below this comment
module.exports = { palindrome };

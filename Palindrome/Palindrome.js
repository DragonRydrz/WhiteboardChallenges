//  Check to see if a string is a palindrome.  return true or false

const palindrome = str => {
  // Code here
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  );
};

// Do not adjust code below this comment
module.exports = { palindrome };

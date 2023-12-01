const revealMe = (revealedArray, scrollReveal) => {
  for (let i = 0; i < revealedArray.length; i += 1) {
    scrollReveal(revealedArray[i][0], {
      duration: revealedArray[i][1],
      origin: revealedArray[i][2],
    });
  }
};

revealMe(
  [
    ['div', 1500, 'top'],
    ['svg', 1500, 'top'],
    ['img', 3500, 'top'],
  ],
  ScrollReveal().reveal, // eslint-disable-line no-undef
);

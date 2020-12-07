const seconds = [5, 1, 2, 3];
seconds.forEach((s) => {
  setTimeout(() => {
    console.log(`waiting ${s} seconds`);
  }, 1000 * s);
});

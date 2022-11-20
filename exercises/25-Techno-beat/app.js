// Add your code here

/**
 * 
 * @param {Array<number>} song 
 */
function lyricsGenerator(song) {
  let repeats = 0;

  return song.map(item => {
    if (repeats <= 3 && item) {
        repeats++;

      if (repeats < 3) {
        return 'Drop the base';
      } else {
        repeats = 0;

        return 'Drop the base !!!Break the base!!!';
      }
    } else {
      repeats = 0;

      return 'Boom';
    }

  }).join(" ");


}

// Don't change anything bellow this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))
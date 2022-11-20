// Code goes here

function matrixBuilder(numberRowsCols) {
  let newMatrix=[];

  for (let i = 0; i < numberRowsCols; i++) {
    newMatrix.push([]);
    
    for (let j = 0; j < numberRowsCols; j++) {
      newMatrix[i].push(Math.floor(Math.random()*2))
    }
  }

  return newMatrix;
}


// do not change anything from this line down
console.log(matrixBuilder(5))
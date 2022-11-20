let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here

function getParkingLotState(actualState) {
  const state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }

  for (const row of actualState) {
    for (const slot of row) {
      switch (slot) {
        case 1:
          state.occupiedSlots++;
          state.totalSlots++;
          break;
        case 2:
          state.availableSlots++;
          state.totalSlots++;
          break;
        default:
          break;
      }
    }
  }

  return state;
}

console.log(getParkingLotState(parking_state))
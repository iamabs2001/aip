// print the board using columns
function print_board(columns) {
  let n = columns.length, row = 0, col = 0;
  while (row < n) {
    while (col < n) {
      process.stdout.write(columns[row] === col ? 'Q ' : '# ');
      col++;
    }
    process.stdout.write('\n');
    col = 0;
    row++;
  }
}

// check if killing
function iskilling(columns) {
  let len = columns.length, last = columns[len - 1], previous = len - 2;
  while (previous >= 0) {
    if (columns[previous] === last) return true;
    if (last - (len - 1) === columns[previous] - previous) return true;
    if (last + (len - 1) === columns[previous] + previous) return true;
    previous--;
  }
  return false;
}

// put next queen only if she does not kill other
function place_next_queen(total, queens, columns) {
  if (queens === 0) return columns;
  columns = columns || [];
  for (let column = 0; column < total; column++) {
    columns.push(column);
    if (!iskilling(columns) && place_next_queen(total, queens - 1, columns)) return columns;
    columns.pop(column);
  }
  return null;
}

// run algorithm
print_board(place_next_queen(4,4));
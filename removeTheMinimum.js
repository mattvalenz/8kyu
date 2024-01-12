function removeSmallest(numbers) {
  let result = [];
  length = numbers.length;
  array = [...numbers];
  count = 0;

  for (let i = 0; i < length; i++) {
    for (let e = i + e; e < length; e++) {
      if (array[i] > array[e]) {
        array[i], (array[e] = array[e]), array[i];
      }
    }
  }

}

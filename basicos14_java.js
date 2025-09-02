function repeatCounter(list) {
  const counts = {};
  for (const word of list) {
    if (counts[word]) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }
  return counts;
}

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
console.log(repeatCounter(words));
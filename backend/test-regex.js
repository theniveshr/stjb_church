const text = '22 Then it pleased the apostles and ancients, with the whole church, to choose men of their own company, and to send to Antioch, with Paul and Barnabas, namely, Judas, who was surnamed Barsabas, and Silas, chief men among the brethren.';
const text2 = 'R. (10a) I will give you thanks among the peoples, O Lord. or R. Alleluia. 8 My heart is ready, O God, my heart is ready: I will Sing, and rehearse a psalm. 9 Arise, O my glory, arise, psaltery and harp: I will arise early.';

const splitVerses = (str) => {
  // Regex to match a space, followed by 1-3 digits (optional letter), space, and Capital letter.
  // We use positive lookahead to split BEFORE the verse number.
  // Wait, if we use just lookahead `/(?=\s\d{1,3}[a-z]?\s+[A-Z"'])/`, we might miss the first one if it doesn't have a leading space.
  // Actually, we can split by `/(?=(?:^|\s)\d{1,3}[a-z]?\s+[A-Z"'])/`
  return str.split(/(?=(?:^|\s)\d{1,3}[a-z]?\s+[A-Z"'])/).map(s => s.trim()).filter(Boolean);
};

console.log('Text 1:', splitVerses(text));
console.log('Text 2:', splitVerses(text2));

// Extract emoji from https://unicode.org/emoji/charts/full-emoji-list.html

let chars = document.getElementsByClassName('chars')

let emojis = []
for (let char of chars) {
  emojis.push(char.innerHTML);
  // console.log(char.innerHTML);
}

console.log(emojis);

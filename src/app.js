

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function random_word(word_array){
  return word_array[getRandomInt(word_array.length-1)];
}

let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

console.log(random_word(who)+" "+random_word(action)+" "+random_word(what)+" "+random_word(when));

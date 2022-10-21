const btn = document.getElementById('lib-button');
const noun = document.getElementById('noun');
const adj = document.getElementById('adjective');
const person = document.getElementById('person');
let story = document.getElementById('story');

const libs = [
    () => `${person.value} likes a/an ${adj.value} ${noun.value}.`,
    () => `Whenever ${person.value} gets a/an ${noun.value}, she/he is in a/an ${adj.value} mood.`,
    () => `You may think ${noun.value} is the best, but ${person.value} knows what is ${adj.value}.`
]

btn.onclick = makeMadLib;

function makeMadLib() {
    story.innerHTML = libs[Math.floor(Math.random() * libs.length)]();
}

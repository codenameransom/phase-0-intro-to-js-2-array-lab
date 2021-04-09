

// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return;
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return;
}

function destructivelyRemoveFirstCat(name){
    cats.splice(0,1);
    return;
}

function appendCat(name){
    return[...cats, name];
}

function prependCat(name){
    return[name, ...cats]
}
function removeLastCat(){
    return cats.slice(0, cats.length -1);
}

function removeFirstCat () {
    return cats.slice(1);
  }
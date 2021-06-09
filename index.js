const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat(Ralph);

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat(Bob);

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat;

function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat;



function appendCat(name) {
    const newAppendCatsArray = [...cats, name]; 
    return newAppendCatsArray;

}
appendCat('Broom');

function prependCat(name) {
    const newPrependCatsArray = [name, ...cats];
    return newPrependCatsArray;
}
prependCat('Arnold');

function removeLastCat() {
    const newRemoveLastCatArray = cats.slice(0, cats.length - 1);
    return newRemoveLastCatArray;
    
}
removeLastCat;

function removeFirstCat() {
    const newRemoveFirstCatArray = cats.slice(1);
    return newRemoveFirstCatArray;
}
removeFirstCat();
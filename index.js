// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift) {
//     console.log(`Wrapped ${gift} and added a bow!`);
// }

// wrapGift(gifts[0]);
// wrapGift(gifts[1]);
// wrapGift(gifts[2]);

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts)

function writeCards(nameArray, eventName) {
    const emptyArray = [];
    for (let i = 0; i < nameArray.length; i++) {
        emptyArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
    };

    return emptyArray;
}

function countDown(posInteger) {
    let i = posInteger;
    while ( i >= 0) {
        console.log(i);
        i--;
    }
}
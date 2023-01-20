console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished) {
   const album = {
        title,
        artist,
        yearPublished,
   } 
   collection.push(album);
   return album;
}

console.log(addToCollection('Costa Blanca', 'Liminanas', '2013'));
console.log(addToCollection('Moon Safari', 'Air', '1998'));
console.log(addToCollection('Universal Being', 'Makaya McCraven', '2018'));
console.log(addToCollection('Both Worlds, *69', 'Gangsta Boo', '2001'));
console.log(addToCollection('B-Side', 'Kruangbin & Leon Bridges', '2022'));
console.log(addToCollection(`So We Won't Forget`, 'Kruangbin & Leon Bridges', '2020'));

console.log(collection);

function showCollection(arr) {
    console.log(arr.length);

    for (let i = 0; i < arr.length; i++) {
        const {title, artist, yearPublished} = arr[i];
        console.log(`${title} by ${artist}, published in ${yearPublished}`);
    }
}

showCollection(collection);

function findByArtist(artist) {

    let newArr = [];    

    for (let i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist) {
            newArr.push(collection[i]);
        }
    }
    return newArr;
}

console.log(findByArtist('Liminanas'));
console.log(findByArtist('Kruangbin & Leon Bridges'));

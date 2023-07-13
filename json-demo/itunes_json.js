import mountainSongs from './mountain.json' assert { type: "json" };
//NOTE: It may help to view/transform the JSON through a formatter

//1. Log an array of the keys of the main object in the JSON file
let arr = []
for (const key in mountainSongs) {
    arr.push(key)
}
console.log(arr)
//2. Get the title of the first track in the data
console.log(mountainSongs.results[0].trackName)
//3. Get all the artists present in the data

    let results = []
    for (let i = 0; i < mountainSongs.results.length; i++) {
        results.push(mountainSongs.results[i].artistName)
    }
    console.log(new Set([results]))

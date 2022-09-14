//creating interface for input
interface versions {
    name: string,
    date: Date,
    Bugs: string[] | string,
    features: string[] | string,
    Author: string,
    Type: string[] | string
}
//enum for type of the versions
enum IversionsType { Patch, Major, Enhancement }
//interface for Bugs
interface IBugId {
    bugId: string,
    bug: string[]
}
//versions Data
const Data: versions[] = [{
    name: "samsung.F11",
    date: new Date('02-07-2020'),
    Type: "major",
    features: ["search"],
    Author: "william",
    Bugs: ['ABC21', "video"]
},
{
    name: "abc-version2.k",
    date: new Date('06-09-2021'),
    Type: "patch",
    features: ["scalable text"],
    Author: "ronald",
    Bugs: ['ABC24', "Video"]
},


{
    name: "apple-version3.0",
    date: new Date('06-07-2019'),
    Type: "major",
    features: ["animation"],
    Author: "sam",
    Bugs: ['ABC20', "tap"]
},


{
    name: "oppoA.53",
    date: new Date('09-11-2015'),
    Type: "patch",
    features: ["design"],
    Author: "Steve",
    Bugs: ['ABC12', "ux problem"]
},


{
    name: "version7.A",
    date: new Date('01-10-2022'),
    Type: "enhancement",
    features: ["scalable text"],
    Author: "ronald",
    Bugs: ['ABC2001', "Visualization uses"]
}]


//Identifing Type in versions:-
let patch = (Data.filter(n => n.Type.includes("patch")))
let major = (Data.filter(n => n.Type.includes("major")))
var Enhancement = (Data.filter(n => n.Type.includes("enhancement")))
console.log("Type of patch in versions", patch)
console.log("Type of major in versions", major)
console.log("Type of enhancement in versions", Enhancement)
console.log("***************************************************")

//Identifying date in versions:-
let year = Data.filter(a => a.date.toString().includes("2020"))
console.log("particular year in versions", year)
console.log("*******************************************************")

//Identifying author in versions:-
var arr1: string[] = []
Data.forEach(version => {
    arr1.push(version.Author)
});
let ab = []
ab = [...new Set(arr1)]
var releaseArr = []
for (let key of ab) {
    let release = 0
    for (let j of arr1) {
        if (key === j) {
            release++
        }
    }
    releaseArr.push(release)
}
let max = Math.max(...releaseArr)
for (let key in releaseArr) {
    if (max == releaseArr[key]) {
        console.log("number of Author in Versions:-", ab[key]);
    }

}
console.log("**************************************************")

// Identifying Bugs :-
let bugId = "ABC12"
let pk = []
for (let key in Data) {
    if (bugId == Data[key].Bugs[0]) {
        pk.push(Data[key])
    }
}
console.log([pk], "bugId")
console.log("****************************************************")

//Specific feature name:-
var fea = Data.filter(n => n.features.includes("scalable text"))
console.log('features', fea)
console.log("****************************************************")

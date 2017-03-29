/**
 * Created by mrbeva on 3/22/17.
 */
//Assignment 1
const linux = 'Programmers are in the enviable position of not only getting to do what they want to, but because the end result is so important they get paid to do it. There are other professions like that, but not that many.';
$('.quote').html(linux);

//text link -> https://gist.githubusercontent.com/OAlm/5cda155b75b048d9c82bc5fde5606d81/raw/e0dd59c8987ff8a0861f22d133d32ef83d751a80/turing.txt

//Remove punctuations from the text (! ? . , etc.)
const noPunc = linux.replace(/[!?,.]/g, ' ');
$('.result1').html(noPunc);
console.log(noPunc);

//List words starting with uppercase 'A'
//.filter(word => word.length > 0);
const words = noPunc.split(' ').filter(word => word !== '');
//each item is an string
const upA = words.filter(word => word.charAt() === 'A').join('<br>');
$('.result2').html(upA);
console.log(upA);

//List words starting with letter 'a', incasesensitive
// the vairable instroduced in one function stays in one function
const inA = words.filter(word => word.toLowerCase().charAt() === 'a').join(' ');
$('.result3').html(inA);
console.log(inA);

//Count words
const count = words.length;
$('.result4').html(count);
console.log(count);

//Remove all vowels from the text
const rmVowel = noPunc.replace(/[aeiou]/g, '');
$('.result5').html(rmVowel);
console.log(rmVowel);

//Count all consonants
// / /g find all spaces
const consonants = rmVowel.replace(/ /g, '').length;
$('.result6').html(consonants);
console.log(consonants);

//Assignment 2
const villains = [
    { number: 1,  villain: "Dr. Julius No",         year: 1962, movie: "Dr No" },
    { number: 2,  villain: "Ernst Stavro Blofeld",  year: 1963, movie: "From Russia with Love" },
    { number: 3,  villain: "Auric Goldfinger",      year: 1964, movie: "Goldfinger" },
    { number: 4,  villain: "Emilio Largo",          year: 1965, movie: "Thunderball" },
    { number: 5,  villain: "Mr.Big",                year: 1973, movie: "Live and Let Die" },
    { number: 6,  villain: "Francisco Scaramanga",  year: 1974, movie: "The Man with the Golden Gun" },
    { number: 7,  villain: "Karl Stromberg",        year: 1977, movie: "The Spy Who Loved Me"},
    { number: 8,  villain: "Hugo Drax",             year: 1979, movie: "Moonraker"},
    { number: 9,  villain: "Aristotle Kristatos",   year: 1981, movie: "For Your Eyes Only"},
    { number: 10, villain: "General Gogol",         year: 1981, movie: "For Your Eyes Only"}
];

$('.villains').html(JSON.stringify(villains, null, 2).replace(/ /g, '&nbsp;').replace(/\n/g, '<br>'));

//List all the villains from 1970s
const villains70s = villains.filter(v => v.year >= 1970 && v.year<1980).map(vi => vi.villain + ' - ' + vi.year).join('<br>');
$('.result7').html(villains70s);
console.log(villains70s);

//Count the average time between the movies
//v - villain, i - index, arr - sliced array
const diff = villains.slice(1).map((v, i) => v.year - villains[i].year).reduce((sum, num) => sum + num, 0);
let ave = diff / (villains.length-1);
ave = Math.round(ave * 10)/10;
$('.result8').html(ave);
console.log(ave);

//Get all the villains who acted in a movie having letter 'e' in their name
//each item is an object
const villainsE = villains.filter(v => v.movie.indexOf('e')>=0).map(vi => vi.villain + ' - ' + vi.movie).join('<br>');
$('.result9').html(villainsE);
console.log(villainsE);

//List all entries with a villain name longer than 15 characters
const villainsLong = villains.filter(v => v.villain.length > 15).map(vi => vi.villain).join('<br>');
$('.result10').html(villainsLong);
console.log(villainsLong);

//Create a modified JSON without numbers and years
const newVillains = villains.map(v => ({villain: v.villain, movie: v.movie}));
$('.result11').html(JSON.stringify(newVillains, null, 2).replace(/ /g, '&nbsp;').replace(/\n/g, '<br>'));
console.log(newVillains);
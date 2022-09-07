// LAB 11 - FEATURED TASKS
// Seed your database. Create at least three Book objects with all available attributes.

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Book = require('../models/book.js');

async function seedBooks() {
  console.log('seeding books...');

  await Book.create({
    title: 'The Silent Patient',
    description: 'a women may or may not have killed her husband and a theapist is determind to make her talk to discover her secrets.',
    status: 'LIFE-CHANGING',
    email: 'noone@codefellows.com' });

  await Book.create({
    title: 'The Growth Mindset',
    description: 'Dweck coined the terms fixed mindset and growth mindset to describe the underlying beliefs people have about learning and intelligence. When students believe they can get smarter, they understand that effort makes them stronger. Therefore they put in extra time and effort, and that leads to higher achievement.',
    status: 'FAVORITE FIVE',
    email: 'noone@codefellows.com'
  });

  await Book.create({
    title: 'The Blind Assassin',
    description: 'Margaret Atwood takes the art of storytelling to new heights in a dazzling novel that unfolds layer by astonishing layer and concludes in a brilliant and wonderfully satisfying twist. Told in a style that magnificently captures the colloquialisms and clichés of the 1930s and 1940s, The Blind Assassin is a richly layered and uniquely rewarding experience.',
    status: 'FAVORITE FIVE',
    email: 'hexx@codefellows.com'
  });

  await Book.create({
    title: 'The Fire Next Time',
    description: 'Described by The New York Times Book Review as “sermon, ultimatum, confession, deposition, testament, and chronicle…all presented in searing, brilliant prose,” The Fire Next Time stands as a classic of our literature.',
    status: 'LIFE-CHANGING',
    email: 'hexx@codefellows.com'
  });

  await Book.create({
    title:  'Harry Potter and the Sorcerer\'s Stone',
    description:   'Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!',
    status: 'read',
    email: 'hexx@codefellows.com'
  });

  await Book.create({
    title:  'Harry Potter and the Chamber of Secrets',
    description:   'Harry Potter\'s summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby\'s sinister predictions seem to be coming true.',
    status: 'read',
    email: 'hexx@codefellows.com'
  });

  console.log('done seeding!');

  mongoose.disconnect();
}

seedBooks();

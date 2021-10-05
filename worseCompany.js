const express = require('express')
const app = express()
const port = 3000
const path = require("path");

app.use(express.static(path.join(__dirname, '/views')));
app.use('/images', express.static(__dirname + '/Images'));
app.use('/css', express.static(__dirname + '/css'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
res.render('index.ejs');
})
app.get('/about', (req, res) => {
res.render('about');
})
app.get('/Riley', (req, res) => {
res.render('biography', {
  greeting: 'Riley Rorrer',
  imgtag: `<img src="images/richterB.png" alt="">`,
  bio: `<p>Hello! I am Riley Rorrer, pleasure to make your acquaintance!</p>
    <p>I am a freelance graphic designer and professional smash bros player known as "Revablaze". I main Richter and I used to be sponsered by GAD gaming before they disbanded.</p>
  <p>My main programming language is Python so I hope to expand my knowledge on JS and other languages throughout my time here.</p>
  <p>My favorite games are Street Fighter 2 Turbo, Terraria, Forager, Super Smash Bros Ult., Guilty Gear: Strive, Donkey Kong Country, and Mega Man X</p>`
});
})
app.get('/Jenna', (req, res) => {
res.render('biography', {
  greeting: 'Jenna Mellen',
  imgtag: '<img src="images/idk.jpg" alt="anime girl">',
  bio: `<p>Hello, this is my page! I am in Computer Programming and am part of the best team - Worse Company.</p>
        <p>I got into programming because of my interest in game development.<p>
        <p>My ambition is to be responsible
         for both the code and the art/design of a game. I plan on pursuing IT outside of York Tech because of this;
         that is my current career goal.</p>`
  });
});

app.get('/Dylan', (req, res) => {
  res.render('biography', {
    greeting: 'GREETINGS HUMANS!!!',
    imgtag: '<img src="images/images.png" alt="">',
    bio: `<p>I am Dylan (or NeosChampionX, depending on where you may know me from), your average, everyday, friendly person.</p><p>I like playing League of Legends, a Yu-Gi-Oh player, proficient in Javascript, and a fan of the Touhou Project.</p><p> I do like keeping to myself sometimes, but I am good at talking to people. </p>`
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use((req, res) => {
  res.render('404.ejs');

});

// Require Libraries
const express = require('express');

  // Require tenorjs near the top of the file
  const Tenor = require("tenorjs").client({
    // Replace with your own key
    "Key": "1E4J1W9J8SOW", // https://tenor.com/developer/keyregistration
    "Filter": "high", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
});



// App Setup
const app = express();

// Somewhere near the top
app.use(express.static('public'));

// Middleware
const {engine}  = require('express-handlebars');

app.engine('.handlebars', engine({defaultLayout: 'main', extname: '.handlebars'}))
app.set('view engine', '.handlebars');

// const hbs = exphbs.create({
//     defaultLayout: 'main',
// });
// app.engine('handlebars', hbs.engine);

// Routes

// app.get('/', (req, res) => {
//     // set the url of the gif
//     const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
//     // render the hello-gif view, passing the gifUrl into the view to be displayed
//     res.render('hello-gif.handlebars', { gifUrl })
//   });

app.get('/', (req, res) => {
    // Handle the home page when we haven't queried yet
    let term = "";
    if (req.query.term) {
        term = req.query.term
    }
    // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
    Tenor.Search.Query(term, "10")
    .then(response => {
        // store the gifs we get back from the search
        const gifs = response;
        // pass the gifs as an object into the home page
        res.render('home', { gifs })
    }).catch(console.error);
})

app.get('/greetings/:name', (req, res) => {
    // grab the name from the path provided
    const name = req.params.name;
    // render the greetings view, passing along the name
    res.render('greetings', { name });
})


  

// Start Server
const PORT = 3000;
app.listen(3000, () => {
  console.log(`Giffy App listening on port localhost: ${3000}!`);
});
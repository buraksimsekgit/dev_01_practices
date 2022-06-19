//## Task-1 The Recipe Card
var recipe = {
    servings: 2,
    title: "Mole",
    ingerediants: ["cinnamon", "cumin", "cocoa"],
  };
  
  console.log(recipe.title);
  console.log('Servings:', recipe.servings);

  for (var i = 0; i < recipe.ingerediants.length; i++) {
    console.log('Ingrediants :', recipe.ingerediants[i]);
  }
  
  //## Task-2 The Reading List
  var books = [
    { title: 'The Lord of the Rings', author: 'J. R. R. Tolkien', read: true },
    { title: 'Moby Dick', author: 'Herman Melville', read: false },
    { title: 'My Inventions', author: 'Nikola Tesla', read: true },
  ];
  
  for (var i = 0; i < books.length; i++) {
    if (books[i].read === true) {
      console.log('You already read', books[i].title, 'by', books[i].author);
    } else {
      console.log(
        'You still need to read',
        books[i].title,
        'by',
        books[i].author
      );
    }
  }
  
  //## Task-3 Your top choices
  var topChoices = ['Black', 'White', 'Red', 'Gray'];
  var suffix;
  
  for (var i = 0; i < topChoices.length; i++) {
    console.log('My #', i + 1, 'choice is', topChoices[i]);
  
    if (i + 1 === 1) suffix = 'st';
    else if (i + 1 === 2) suffix = 'nd';
    else if (i + 1 === 3) suffix = 'rd';
    else suffix = 'th';
  
    console.log('My', i + 1, suffix, 'choice is', topChoices[i]);
  }
  
  //## Task-4 What number's bigger?
  function maxNumber(num1, num2) {
    return Math.max(num1, num2);
  }
  
  var num1 = [
    [4, 9],
    [3, 5],
  ];
  
  for (var i = 0; i < num1.length; i++) {
    console.log(
      'The greater number of',
      num1[i],
      'is',
      maxNumber(num1[i][0], num1[i][1])
    );
  }
  
  //Instead of creating 2 different inputs to call function 2 times, I created multi-dimensional array with 2 different values and loop it through
  
  
  
  //## Task-5 The World Translator
  function helloWorld(language) {
    if (language === 'tr') return 'Merhaba Dunya';
    else if (language === 'de') return 'Hello Welt';
    else return 'Hello World';
  }
  
  console.log(helloWorld('tr'));
  
  
  
  //## Task-6 The Grade Assigner
  function assignGrade(score) {
    if (score >= 90) return 'A';
    else if (score >= 75) return 'B';
    else if (score >= 65) return 'C';
    else if (score >= 45) return 'D';
    else return 'F';
  }
  
  console.log('Your grade is =', assignGrade(90));
  console.log('Your grade is =', assignGrade(74));  
  
  
  //## Task-7 The Pluralize
  function pluralize(noun, number) {
      if (number > 1) 
          return number + ' ' + noun + 's';
  
          return number + ' ' + noun;
  }
  console.log('You got', pluralize('goose', 0));
  console.log('You got', pluralize('sheep', 1));
  console.log('You got', pluralize('lion', 2));   
  console.log('You got', pluralize('cat', 3));

  // I'm not totally sure about if I understand this task properly

  
  
  //## Task-8 The Fortune Teller
  function tellFortune(kids, location, name, title) { 
      if(kids < 2)
      console.log('You will be a', title, 'in', location, 'and married to',name, 'with', kids, 'kid.');
      else
      console.log('You will be a', title, 'in', location, 'and married to',name, 'with', kids, 'kids.');
  }
  
  tellFortune(1, 'Spain', 'Chuck', 'Developer');
  tellFortune(2, 'Italy', 'Carlo', 'Tech');
  tellFortune(3, 'Czech', 'Gregor', 'PO');
  
  //## Task-9 The Puppy Age Calculator
  function calculateDogAge(age) {
      console.log('Your doggie is', 7 * age, 'years old in dog years!');
  }
  
  calculateDogAge(1);
  calculateDogAge(6);
  calculateDogAge(9);
  
  //## Task-10  The Lifetime Supply Calculator
  function calculateSupply(age, amountPerDay) {
      var maxAge = 99;
      console.log('You will need', (maxAge - age) * (amountPerDay * 365) , 'coffee to last you until the ripe old age of', maxAge);
    }
    
    calculateSupply(31, 4);  
    calculateSupply(29, 2);
    calculateSupply(44, 1);
  
  
  
    //## Task-11  The Geometrizer
    function calcGeometry(radius) {
      console.log('The circumference is', 3.14 * 2 * radius);
      console.log('The area is', Math.PI * radius * radius); // I found out there is a math method so wanted to use on second one
    }
  
    calcGeometry(7);
  
  
     //## Task-12  Temperature Converter
    function celsiusToFahrenheit(celsius) {
      console.log(celsius, '°C is', (celsius*9)/5 + 32, '°F');
    }
    
    function fahrenheitToCelsius(fahrenheit) {
      console.log(fahrenheit, '°F is', ((fahrenheit - 32)*5)/9, '°C');
    }
    
    celsiusToFahrenheit(32);
    fahrenheitToCelsius(94);
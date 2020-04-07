const quoteArr = [
  {
    quote:
      "Let it be told in the future world, that in the depth of winter, when nothing but hope and virtue could survive, the city and the country, alarmed at one common danger, came forth to meet and to repulse it.",
    author: "Thomas Paine",
  },
  {
    quote:
      "In the middle of winter I at last discovered that there was in me an invincible summer.",
    author: "Albert Camus",
  },
  {
    quote:
      "Those who dream by night, in the dusty recesses of their minds wake in the day to find that all was vanity; but the dreamers of the day are dangerous men, for they may act their dream with open eyes, and make it possible.",
    author: "T. E. Lawrence",
  },
  {
    quote:
      'A man said to the universe: "Sir, I exist!" "However," replied the universe, "The fact has not created in me A sense of obligation."',
    author: "Stephen Crane",
  },
  {
    quote: "Better to sleep with a sober cannibal than a drunk Christian.",
    author: "Herman Melville",
  },
  {
    quote:
      "What good is the warmth of summer, without the cold of winter to give it sweetness?",
    author: "John Steinbeck",
  },
];

const colorsArr = [
  "#007bff",
  "#6610f2",
  "#6f42c1",
  "#e83e8c",
  "#dc3545",
  "#fd7e14",
  "#ffc107",
  "#28a745",
  "#20c997",
  "#17a2b8",
  "#BAB1AD",
  "#403734",
];

let currentQuote = "";
let currentAuthor = "";
let link = "";

const getQuoteObject = (quotes) => {
  const quoteObject = quotes[Math.floor(Math.random() * quotes.length)];
  return quoteObject;
};

const getColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const getQuote = (Function, quotes) => {
  const quoteObject = Function(quotes);
  const color = getColor(colorsArr);
  currentQuote = quoteObject.quote;
  currentAuthor = quoteObject.author;
  link =
    "http://twitter.com/intent/tweet?text=" +
    '"' +
    currentQuote +
    '" ' +
    currentAuthor;
  $("#text").text(quoteObject.quote);
  $("#author").text(quoteObject.author);
  $("#tweet-quote").attr("href", link);
  $("#quote-box").css("backgroundColor", color);
  $(".button").css("color", color);
  $("footer").css("color", color);
};

$(document).ready(function () {
  getQuote(getQuoteObject, quoteArr);
  $("#new-quote").on("click", function (e) {
    getQuote(getQuoteObject, quoteArr);
  });
});

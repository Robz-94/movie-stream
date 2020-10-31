const movies = [
  {
    _id: 1354686,
    title: "Alexa",
    category: { _id: "111", name: "Action" },
    Expense: "125 Milllion",
    Income: "800 Million",
    PublishedDate: "2018-01-01",
    RotenTomato: "91%",
    Pic: "",
    Description:
      "Alexa- movie by James Cameron about the future movie type. Action type- Drastic type, intense- highly engaging",
    Like: 36,
  },
  {
    _id: 1354686,
    title: "Bad Boys",
    category: { _id: "111", name: "Action" },
    Expense: "168 Million",
    Income: "365 Miilion",
    PublishedDate: "2018-01-01",
    RotenTomato: "89%",
    Pic: "",
    Description:
      " Bad boys fracnchise is back!! After a long time the boys are back at again. -intense interactive action",
    Like: 136,
  },
  {
    _id: 1354686,
    title: "Tenet",
    category: { _id: "111", name: "Action" },
    Expense: "250 Million",
    Income: "1.03 Million",
    PublishedDate: "2018-01-01",
    RotenTomato: "98%",
    Pic: "",
    Description:
      "Tenet- is Christoper Nolan's epidemic. Action is reputitive action and relative to its era.",
    Like: 98,
  },
  {
    _id: 1354686,
    title: "Free Guy",
    category: { _id: "111", name: "Comdey" },
    Expense: "60 Million",
    Income: "198 Million",
    PublishedDate: "2018-01-01",
    RotenTomato: "91%",
    Pic: "",
    Description:
      "Free Guy-Active game like role in the upcoming movie. Deadpool os back with yet staggering role in the design aofn the game.",
    Like: 63,
  },
  {
    _id: 1354686,
    title: "Wonder Woman 1897",
    category: { _id: "111", name: "Action" },
    Expense: "250 Million",
    Income: "862 Million",
    PublishedDate: "2018-01-01",
    RotenTomato: "76%",
    Pic: "",
    Description:
      "Wonder Woman has a sequel.Yes she meets a villan of her like with a power that levels the field of war.",
    Like: 23,
  },
  {
    _id: 1354686,
    title: "Mulan",
    category: { _id: "111", name: "Drama" },
    Expense: "80 Million",
    Income: "963 Million",
    PublishedDate: "2018-01-01",
    RotenTomato: "93%",
    Pic: "",
    Description:
      "Dramatic adventure intense watchout and now are back with 2020's one of the best watched movies in the season.Enjoy!!!",
    Like: 41,
  },
  {
    _id: 1354686,
    title: "Dolittle",
    category: { _id: "111", name: "Adventure" },
    Expense: 6,
    Income: 2.5,
    PublishedDate: "2018-01-01",
    RotenTomato: "91%",
    Pic: "",
    Description:
      "Adventure of Dolitle takes him to the world of humans, afraid to leave the comfort of the animals camp he has but to accept for his friend's lidfe depends on it",
    Like: 82,
  },
];
export function getmovies() {
  return movies;
}
export function getmoviesbyID(id) {
  return movies.find((m) => m._id === id);
}

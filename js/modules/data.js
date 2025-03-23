export const movies = [
  {
    title: "Аватар 2",
    year: 2022,
    genre: "Фантастика",
    rating: 7.8,
    description: "Продолжение эпической саги Джеймса Кэмерона",
    poster:
      "https://m.media-amazon.com/images/I/81ziYh43-LL._AC_UF1000,1000_QL80_.jpg",
    theaters: [
      { name: "Кинотеатр Prime", time: "18:00", price: 450 },
      { name: "IMAX Cinema", time: "20:30", price: 600 },
    ],
  },
  {
    title: "Оппенгеймер",
    year: 2023,
    genre: "Драма",
    rating: 8.5,
    description: "История создания атомной бомбы",
    poster: "https://i.playground.ru/e/bG0XtWgzN8dkU7_ET86w9g.png",
    theaters: [
      { name: "АртКино", time: "19:15", price: 400 },
      { name: "Космос Cinema", time: "21:45", price: 550 },
    ],
  },
  {
    title: "Крушение",
    year: 2023,
    genre: "Триллер",
    rating: 6.9,
    description: "Захватывающая история выживания после авиакатастрофы",
    poster:
      "https://static.okko.tv/images/v4/0bdcf83e-376b-43ca-a262-bb190b16aa91",
    theaters: [
      { name: "Синема Парк", time: "17:30", price: 350 },
      { name: "Киномакс", time: "20:00", price: 480 },
    ],
  },
];

export const promoCodes = {
  CINE10: { discount: 10, used: false },
  MOVIE20: { discount: 20, used: false },
  PREMIERE15: { discount: 15, used: false },
};

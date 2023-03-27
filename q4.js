const tvShows = [
  {
    title: 'Planet Earth II',
    score: 9.5,
    year: 2016,
    numRatings: 5000,
  },
  {
    title: 'Planet Earth',
    score: 9.4,
    year: 2006,
    numRatings: 5000,
  },
  {
    title: 'Breaking Bad',
    score: 9.4,
    year: 2008,
    numRatings: 6000,
  },
  {
    title: 'Band Of Brothers',
    score: 9.4,
    year: 2001,
    numRatings: 4900,
  },
  {
    title: 'Chernobyl',
    score: 9.3,
    year: 2019,
    numRatings: 4900,
  },
  {
    title: 'Jingle All The Way',
    score: 7.1,
    year: 1996,
    numRatings: 5000,
  },
  {
    title: 'The Wire',
    score: 9.3,
    year: 2002,
    numRatings: 6000,
  },
];

// Find the highest rated TV show
const highestRatedShow = tvShows.reduce(
  (acc, show) => {
    if (
      show.score > acc.score ||
      (show.score === acc.score && show.numRatings > acc.numRatings)
    ) {
      return show;
    }
    return acc;
  },
  { score: 0, numRatings: 0 }
);

console.log('The highest rated TV show is:', highestRatedShow.title);

// Find the second highest rated TV show
const secondHighestRatedShow = tvShows.reduce(
  (acc, show) => {
    if (show.score > acc.score) {
      if (
        show.score > highestRatedShow.score ||
        (show.score === highestRatedShow.score &&
          show.numRatings > highestRatedShow.numRatings)
      ) {
        return highestRatedShow;
      }
      return show;
    }
    if (show.score === acc.score && show.numRatings > acc.numRatings) {
      return show;
    }
    return acc;
  },
  { score: 0, numRatings: 0 }
);

console.log(
  'The second highest rated TV show is:',
  secondHighestRatedShow.title
);

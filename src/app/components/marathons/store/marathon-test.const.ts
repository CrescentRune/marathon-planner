import { Marathon } from "./marathon.interface";

export const marathons: Marathon[] = [
  {
    id: '1',
    title: 'Spooky Halloween 2020',
    description: '',
    startDate: '10-01-2020',
    endDate: '10-31-2020',
    movies: [
      { title: 'The Thing', dateWatched: '10-03-2020', imgUrl: 'https://artfiles.alphacoders.com/995/99557.jpg' },
      { title: 'The Endless', dateWatched: '10-18-2020', imgUrl: 'https://www.themoviedb.org/t/p/original/49sb3kEZplzudQBhJDSt0mNJm4V.jpg' },
      { title: 'Aliens', dateWatched: '10-12-2020', imgUrl: 'https://www.themoviedb.org/t/p/original/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg' },
      { title: 'American Psycho', dateWatched: '10-30-2020', imgUrl: 'https://www.themoviedb.org/t/p/original/d3U7k4hBYgFW7pv4hXUVwkMvum0.jpg' },
      { title: 'Death Becomes Her', dateWatched: '10-23-2020', imgUrl: 'https://www.themoviedb.org/t/p/original/vSPkbcDvXT5LKdc2rzZjxqWAPLm.jpg' },
    ]
  },
  {
    id: '2',
    title: 'Hal(low)f-marathon',
    description: '',
    startDate: '10-01-2022',
    endDate: '10-31-2022',
    movies: [
      { title: 'Riddick', dateWatched: '10-05-2022', imgUrl: '' },
      { title: 'Malignant', dateWatched: '10-07-2022', imgUrl: '' },
      { title: 'Jason X', dateWatched: '10-12-2022', imgUrl: '' },
      { title: 'Evil Dead II', dateWatched: '10-10-2020', imgUrl: '' },
      { title: 'Addams Family Values', dateWatched: '10-12-2020', imgUrl: '' },
    ]
  }
]

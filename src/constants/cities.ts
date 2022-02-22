export interface ICity {
  name: string,
  coordinates : number[],
  markers: Array<ICityMarker>,
}

interface ICityMarker {
  street: string,
  coordinates: number[],
}

export const listOfCities = [
  {
    name: 'Москва',
    coordinates: [55.753220, 37.622513],
    markers: [
      {
        street: '',
        coordinates: [],
      },
    ],
  },
  {
    name: 'Санкт-Петербург',
    coordinates: [59.939099, 30.315877],
    markers: [
      {
        street: '',
        coordinates: [],
      },
    ],
  },
  {
    name: 'Новосибирск',
    coordinates: [55.030204, 82.920430],
    markers: [
      {
        street: '',
        coordinates: [],
      },
    ],
  },
  {
    name: 'Екатеринбург',
    coordinates: [56.838011, 60.597474],
    markers: [
      {
        street: '',
        coordinates: [],
      },
    ],
  },
  {
    name: 'Казань',
    coordinates: [55.796127, 49.106414],
    markers: [
      {
        street: '',
        coordinates: [],
      },
    ],
  },
  {
    name: 'Самара',
    coordinates: [53.195878, 50.100202],
    markers: [
      {
        street: '',
        coordinates: [],
      },
    ],
  },
  {
    name: 'Уфа',
    coordinates: [54.735152, 55.958736],
    markers: [
      {
        street: '',
        coordinates: [],
      },
    ],
  },
  {
    name: 'Красноярск',
    coordinates: [56.010569, 92.852572],
    markers: [
      {
        street: '',
        coordinates: [],
      },
    ],
  },
  {
    name: 'Набережные Челны',
    coordinates: [55.741272, 52.403662],
    markers: [
      {
        street: '',
        coordinates: [],
      },
    ],
  },
];

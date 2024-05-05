import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  description: string
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Fuel Injection: Most Wanted",
    description: "Relive the excitement of clandestine racing with this playlist",
    color: colors.yellow,
    cover: "https://i.pinimg.com/564x/41/18/58/411858b8ceeca91a3556778ef1ee7c2f.jpg",
    artists: ["Juvenile", "Hush", "Dj Spooky", "Hyper", "Static-X", "Dieselboy + kaos", "Disturbed", "The Prodigy", "The Roots and BT y Stratus"],
  },
  {
    id: '2',
    albumId: 2,
    title: "+ Flow",
    description: "Sounds that capture the essence of reggaetón at its maximum splendor.",
    color: colors.green,
    cover:
      "https://i.pinimg.com/564x/e2/85/b6/e285b6f5d4db40a17a38141b1f3c9c02.jpg",
    artists: ["Daddy Yankee", "Wisin & Yandel"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Study Session",
    description: "Immerse yourself in a productive study session with this careful selection of music.",
    color: colors.rose,
    cover:
      "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Training Session",
    description: "Elevate your workout to the next level with this powerful playlist!",
    color: colors.blue,
    cover:
      "https://i.pinimg.com/564x/b1/8c/2d/b18c2d2c11cc0f48d519fffede31bb27.jpg",
    artists: ["Raimu", "Yasumu"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Nine Thou(Superstars Remix)",
    "image": `https://lastfm.freetls.fastly.net/i/u/770x0/8899928415184a50b58a65bfaa60855c.jpg#8899928415184a50b58a65bfaa60855c`,
    "artists": ["Styles Of Beyond"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:48"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Do Ya Thang",
    "image": `https://lastfm.freetls.fastly.net/i/u/770x0/f24b7bfdd21b408bbf1d7216a4fe8d89.jpg#f24b7bfdd21b408bbf1d7216a4fe8d89`,
    "artists": ["T.I. presenta The P$C"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Shapeshifter",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Celldweller", "Styles of Beyond"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Tilted",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Lupe Fiasco"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "I Am Rock",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Rock"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "4:20"
  },
  {
    "id": 6,
    "albumId": 1,
    "title": "In A Hood Near You",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Suni Clay"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 7,
    "albumId": 1,
    "title": "Let's Move",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["The Perceptionists"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 8,
    "albumId": 1,
    "title": "Sets Go Up",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Juvenile"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 9,
    "albumId": 1,
    "title": "Bulletproof",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Hush"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 10,
    "albumId": 1,
    "title": "B-Side Wins Again",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["DJ Spooky"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 11,
    "albumId": 1,
    "title": "One Good Reason",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Celldweller"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 12,
    "albumId": 1,
    "title": "We Control",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Hyper"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 13,
    "albumId": 1,
    "title": "Skinnyman",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Static-X"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 14,
    "albumId": 1,
    "title": "Barrier Break",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Dieselboy", "Kaos"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 15,
    "albumId": 1,
    "title": "Decadence",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Disturbed"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 16,
    "albumId": 1,
    "title": "You'll Be Under My Wheels",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["The Prodigy"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 17,
    "albumId": 1,
    "title": "Tao of the Machine",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["The Roots and BT"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  {
    "id": 18,
    "albumId": 1,
    "title": "You Must Follow",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["Stratus"],
    "album": "Fuel Injection: Most Wanted",
    "duration": "3:30"
  },
  /* + flow*/ 
  {
    "id": 1,
    "albumId": 2,
    "title": "Silent Rain",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Midnight Tales",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Lunar",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Lunar",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Go go go!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Keep focus!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
]
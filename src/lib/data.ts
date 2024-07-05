import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Electronic Party",
    color: colors.teal,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_1_yci5uf.jpg",
    artists: ["Avicii", "Alok"],
  },
  {
    id: "2",
    title: "Trance",
    color: colors.green,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_2_f9ymlx.jpg",
    artists: ["Tiesto", "Armin Van Buuren"],
  },
  {
    id: "3",
    title: "Trap Vibes",
    color: colors.rose,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_3_grshca.jpg",
    artists: ["Post Malone", "Travis Scott", "21 savage"],
  },
  {
    id: "4",
    title: "Beatles Classics",
    color: colors.red,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_4_ap5xnb.jpg",
    artists: ["The Beatles"],
  },
  {
    id: "5",
    title: "Electronic Dance",
    color: colors.pink,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_5_erjyb7.jpg",
    artists: ["Deadmau5"],
  },
  {
    id: "6",
    title: "Cow songs",
    color: colors.gray,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776474/spotify-astro/R-15112137-1586815179-1911_fsyl58.jpg",
    artists: ["Saint Hilda", "Canada Buffalo"],
  },
];

export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

interface Song {
  id: string;
  title: string;
  image: string;
  artists: string;
  album: string;
  duration: string;
  isInput?: boolean;
}
const songScale = "w_40,h_40,c_scale";
export const songs: Song[] = [
  {
    id: "1",
    title: "English",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_1_qitfwl.jpg`,
    artists: "EN",
    album: "The Days / Nights",
    duration: "2:56",
    isInput: true,
  },
  {
    id: "2",
    title: "France",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_2_cijs8v.jpg`,
    artists: "FR",
    album: "Hollywood's Bleeding",
    duration: "2:23",
    isInput: true,
  },
  {
    id: "3",
    title: "Italy",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_3_td9ncs.jpg`,
    artists: "IT",
    album: "ASTROWORLD",
    duration: "5:13",
    isInput: true,
  },
  {
    id: "4",
    title: "Espanyol",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_4_lwumgu.png`,
    artists: "ES",
    album: "After Hours",
    duration: "3:22",
    isInput: true,
  },
];

export type GenreList = {
  thumb: string;
  title: string;
  endpoint: string;
  chapter: string;
  score: string;
};
export type TypeGenre = {
  status: boolean;
  message: string;
  genre_list?: GenreType[];
};

export type GenreType = {
  genre: string;
  jumlah: number;
  endpoint: string;
};

export type TypeGenreID = {
  status: boolean;
  message: string;
  genre_list?: [];
};

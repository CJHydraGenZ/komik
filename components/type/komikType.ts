export type TypeChapter = {
  chapter_title: string;
  chapter_endpoint: string;
  chapter_time: string;
};
export type TypeGenreKomik = {
  genre_name: any;
};
export type TypeKomikID = {
  komik_endpoint: string;
  title: string;
  description: string;
  type: string;
  author: string;
  status: string;
  released: string;
  total_chapter: string;
  update_on: string;
  thumb: string;
  synopsis: string;
  genre_list: TypeGenreKomik[];
  chapter: TypeChapter[];
};

export type TypeKomik = {
  status: boolean;
  message?: string;
  komik_list?: string[];
};

export type TypeKomikList = {
  title: string;
  type: string;
  thumb: string;
  chapter: string;
  endpoint: string;
  last_upload_endpoint: string;
};

export type TypeChapterImage = {
  chapter_image_link: string;
  image_number: number;
};
export type TypeKomikChapter = {
  komik_endpoint: any;
  chapter_endpoint: any;
  chapter_name: string;
  title: string;
  chapter_page: number;
  chapter_image: TypeChapterImage[];
};

export type TextList = {
  title: string;
  endpoint: string;
};
export type TypeListText = {
  alphabet: string;
  text_list: TextList[];
};

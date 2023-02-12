export type TypeRelease = {
  status: boolean;
  message: string;
  release_list?: any[];
};

export type TypeChapterList = {
  chapter: number;
  chapter_endpoint: string;
  release: string;
};
export type TypeReleaseList = {
  thumb: string;
  title: string;
  endpoint: string;
  chapter_list: TypeChapterList[];
};

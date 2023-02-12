export type KomikData = {
  endpoint: string;
  thumb: string;
  title: string;
  last_upload_endpoint: string;
  chapter: string;
  rating: string;
};

export type Chapter = {
  endpoint: string;
  title: string;
  type: string;
  thumb?: string;
  chapter: string;
  last_upload_endpoint?: string;
  rating: string;
};

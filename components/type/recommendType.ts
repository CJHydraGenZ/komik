export type TypeRecommendList = {
  status: boolean;
  message: string;
  recommend_list: any[];
};

export type TypeRecommend = {
  endpoint: string;
  title: string;
  type: string;
  thumb: string;
  chapter: string;
  last_upload_endpoint: string;
  rating: string;
};

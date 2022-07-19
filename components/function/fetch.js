// export const getData = async () => {
//   try {
//     // setLoading(true);
//     const { data } = await AxiosAPP(`/api/komik`);
//     setData(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     // setLoading(false);
//   }
// };

export const fetcher = (url) => fetch(url).then((res) => res.json());
export const fetcherAPI = (url) => fetch(url).then((res) => res.text());

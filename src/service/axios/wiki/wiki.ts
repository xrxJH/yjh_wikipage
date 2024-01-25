import { publicApi } from '../fetcher';

export const getAllWikis = async (page = 0, size = 5) => {
  const { data } = await publicApi.get('/wiki', {
    params: { page, size },
  });
  return data;
};

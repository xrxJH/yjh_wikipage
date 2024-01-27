import { END_POINT } from '@/constants/endpoint';
import { publicApi } from '../fetcher';

export const getAllWikis = async (page = 1, size = 5) => {
  const response = await publicApi.get(END_POINT.allWiki, {
    params: { _page: page, _limit: size, _sort: 'date', _order: 'desc' },
  });

  const totalCount = parseInt(response.headers['x-total-count'], 10);

  return {
    data: response.data,
    totalCount,
  };
};

export const getWikiDetail = async (id: string) => {
  const { data } = await publicApi.get(END_POINT.wikiDetail(id));
  return data;
};

export const postWiki = async (body: { title: string; description: string }) => {
  const { data } = await publicApi.post(END_POINT.newWiki, body);
  return data;
};

export const putWiki = async (
  id: string,
  body: { title: string; description: string }
) => {
  const { data } = await publicApi.put(END_POINT.editWiki(id), body);
  return data;
};

export const deleteWiki = async (id: string) => {
  const { data } = await publicApi.delete(END_POINT.deleteWiki(id));
  return data;
};

import { QUERY_KEY } from '@/constants/queryKey';
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  deleteWiki,
  getAllWikis,
  getPaginatedWikis,
  getWikiDetail,
  postWiki,
  putWiki,
} from '../axios/wiki/wiki';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { AxiosError } from 'axios';

export const useGetPaginatedWikis = (page: number) => {
  const [totalItemCount, setTotalItemCount] = useState(0);

  const query = useQuery({
    queryKey: [QUERY_KEY.paginatedWiki, page],
    queryFn: async () => {
      const result = await getPaginatedWikis(page);
      setTotalItemCount(result.totalCount);
      return result.data;
    },
    placeholderData: keepPreviousData,
  });

  return {
    ...query,
    totalCount: totalItemCount,
  };
};

export const useGetAllwikis = () => {
  return useQuery({
    queryKey: [QUERY_KEY.allWiki],
    queryFn: getAllWikis,
    select: (data) =>
      data.map((wiki: WikiTitles) => ({
        id: wiki.id,
        title: wiki.title,
      })),
  });
};

export const useGetWikiDetail = (id: string) => {
  return useQuery<Wiki>({
    queryKey: [QUERY_KEY.wikiDetail, id],
    queryFn: () => getWikiDetail(id),
    enabled: !!id,
  });
};

export const useWikiEditor = (id?: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (body: NewWikiBody) => (id ? putWiki(id, body) : postWiki(body)),
    onSuccess: () => {
      if (id) {
        // edit 성공시 detail로 이동
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.wikiDetail, id] });
        navigate(`${PATH.WIKI_DETAIL}/${id}`, {
          replace: true,
        });
      } else {
        // post 성공시 home으로 이동
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.allWiki] });
        navigate(PATH.HOME, { replace: true });
      }
    },
    onError: (error: AxiosError) => {
      const errorData = error?.response?.data;
      console.log('wiki editor error: ', errorData);
    },
  });
};

export const useDeleteWiki = (id: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => deleteWiki(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.allWiki] });
      navigate(PATH.HOME, { replace: true });
    },
    onError: (error: AxiosError) => {
      const errorData = error?.response?.data;
      console.log('wiki delete error: ', errorData);
    },
  });
};

import { InputWithButton } from '@/components/common/InputWithButton';
import { PageNavigator } from '@/components/common/PageNavigator';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { PATH } from '@/constants/path';
import { useGetAllwikis } from '@/service/queries/wiki';
import { formatTime } from '@/utils/formatTimeStamp';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const { data: wikis, isPlaceholderData, totalCount } = useGetAllwikis(page);

  console.log(
    isPlaceholderData,
    'isPlaceholderData',
    wikis,
    'data',
    totalCount,
    'totalCount',
    page,
    'page',
    '홈 데이터`'
  );

  const handleNavigateToNew = () => {
    navigate(PATH.NEW);
  };

  const handleNavigateToDetail = (id: string) => {
    navigate(PATH.WIKI_DETAIL + '/' + id);
  };

  return (
    <div className="flex flex-col w-full h-full gap-9">
      <div className="flex flex-col w-full gap-1">
        <h2 className="text-xl font-medium">코딩허브 위키</h2>
        <p>강의와 관련된 정보를 자유롭게 나누어요</p>
      </div>
      <div className="w-full">
        <InputWithButton
          placeholder="궁금한 게시글을 검색해보세요!"
          buttonText="검색"
          onClick={() => {}}
        />
      </div>

      <div className="flex flex-col flex-grow w-full gap-3 ">
        <div className="flex justify-end w-full ">
          <Button onClick={handleNavigateToNew} className="flex w-36">
            추가하기
          </Button>
        </div>

        <div className="flex flex-col justify-between flex-grow w-full ">
          <ul className="grid w-full h-full grid-rows-5 gap-3 ">
            {wikis?.map((wiki: Wiki) => (
              <li
                key={wiki.id}
                onClick={() => {
                  handleNavigateToDetail(wiki.id);
                }}
                className="flex-grow cursor-pointer "
              >
                <Card className="flex items-center w-full h-full p-3 text-sm gap-7 ">
                  <p className="flex-grow overflow-hidden text-ellipsis">{wiki.title}</p>
                  <p className="">{formatTime(wiki.date)}</p>
                  <p className=" whitespace-nowrap">{wiki.author.name}</p>
                </Card>
              </li>
            ))}
          </ul>
          <PageNavigator
            onPageChange={(page) => setPage(page)}
            currentPageNumber={page}
            totalCount={totalCount}
          />
        </div>
      </div>
    </div>
  );
};

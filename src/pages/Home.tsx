import { InputWithButton } from '@/components/common/InputWithButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToNew = () => {
    navigate(PATH.NEW);
  };

  const handleNavigateToDetail = (id: string) => {
    navigate(PATH.WIKI_DETAIL + '/' + id);
  };

  return (
    <div className="w-full h-full border flex flex-col gap-9 border-green-600 rounded">
      <div className="w-full flex flex-col gap-1">
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

      <div className="w-full flex flex-col flex-grow gap-3">
        <div className="w-full flex justify-end ">
          <Button onClick={handleNavigateToNew} className=" w-36 flex">
            추가하기
          </Button>
        </div>

        <div className="w-full flex flex-col flex-1 justify-between  border border-red-600">
          <ul className="w-full  border border-red-600 flex flex-col  flex-grow   gap-3">
            {MOCK_DATA.map((data, index) => (
              <li
                key={data.id}
                onClick={() => {
                  handleNavigateToDetail(data.id);
                }}
                className="cursor-pointer"
              >
                <Card className="flex w-full items-center p-3 gap-7 text-sm ">
                  <p className=" flex-grow  border  border-red-200 text-ellipsis overflow-hidden">
                    {data.title + index}
                  </p>
                  <p className=" border border-red-200">2024.01.11</p>
                  <p className=" border border-red-200 whitespace-nowrap">
                    {data.author.name}
                  </p>
                </Card>
              </li>
            ))}

            {/* <li className="cursor-pointer">
              <Card className="flex  flex-grow  items-center w-full p-3  gap-7 text-sm ">
                <p className=" flex-grow border border-red-200">제목</p>
                <p className=" border border-red-200">2024.01.11</p>
                <p className=" border border-red-200">허비</p>
              </Card>
            </li>
            <li className="cursor-pointer">
              <Card className="flex  flex-grow  items-center w-full p-3  gap-7 text-sm ">
                <p className=" flex-grow border border-red-200">제목</p>
                <p className=" border border-red-200">2024.01.11</p>
                <p className=" border border-red-200">허비</p>
              </Card>
            </li> */}
          </ul>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

const MOCK_DATA = [
  {
    id: crypto.randomUUID(),
    title: '제목',
    date: '2021.01.01',
    description: '설명',
    author: {
      id: crypto.randomUUID(),
      name: '코비1',
    },
  },
  {
    id: crypto.randomUUID(),
    title: '제목',
    date: '2021.01.01',
    description: '설명',
    author: {
      id: crypto.randomUUID(),
      name: '코비1',
    },
  },

  {
    id: crypto.randomUUID(),
    title: '제목',
    date: '2021.01.01',
    description: '설명',
    author: {
      id: crypto.randomUUID(),
      name: '코비2',
    },
  },
  {
    id: crypto.randomUUID(),
    title: '제목',
    date: '2021.01.01',
    description: '설명',
    author: {
      id: crypto.randomUUID(),
      name: '코비3',
    },
  },
  {
    id: crypto.randomUUID(),
    title: '제목',
    date: '2021.01.01',
    description: '설명',
    author: {
      id: crypto.randomUUID(),
      name: '코비4',
    },
  },
];

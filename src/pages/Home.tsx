import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToNew = () => {
    navigate(PATH.NEW);
  };

  return (
    <div className="w-dvw h-dvh border border-red-600 flex flex-col justify-center items-center gap-7 p-4">
      <div className=" w-full flex flex-row justify-between items-center">
        <h1 className="text-4xl font-bold  cursor-pointer">WIKI</h1>
        <Avatar className=" w-10 h-10 cursor-pointer">
          <AvatarImage className=" rounded-full" src="https://github.com/shadcn.png" />
          <AvatarFallback className=" rounded-full">CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full h-full border flex flex-col gap-6 border-green-600 rounded">
        <div className="flex flex-row justify-between items-center w-full">
          <p className="text-xl font-medium">코딩허브 위키</p>
          <Button onClick={handleNavigateToNew}>추가하기</Button>
        </div>
        <div className="w-full flex flex-col flex-1 justify-between  border border-red-600">
          <ul className="w-full  border border-red-600 flex flex-col gap-3">
            <li className="cursor-pointer">
              <Card className="flex items-center w-full p-3 flex gap-7 text-sm ">
                <p className=" border border-red-200 ">1</p>
                <p className=" flex-grow border border-red-200">제목</p>
                <p className=" border border-red-200">2024.01.11</p>
                <p className=" border border-red-200">허비</p>
              </Card>
            </li>
            <li className="cursor-pointer">
              <Card className="flex items-center w-full p-3 flex gap-7 text-sm ">
                <p className=" border border-red-200 ">1</p>
                <p className=" flex-grow border border-red-200">제목</p>
                <p className=" border border-red-200">2024.01.11</p>
                <p className=" border border-red-200">허비</p>
              </Card>
            </li>
            <li className="cursor-pointer">
              <Card className="flex items-center w-full p-3 flex gap-7 text-sm ">
                <p className=" border border-red-200 ">1</p>
                <p className=" flex-grow border border-red-200">제목</p>
                <p className=" border border-red-200">2024.01.11</p>
                <p className=" border border-red-200">허비</p>
              </Card>
            </li>
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

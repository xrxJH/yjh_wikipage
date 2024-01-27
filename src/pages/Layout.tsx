import { PATH } from '@/constants/path';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Outlet, useNavigate } from 'react-router-dom';

export const Layout = () => {
  const navigate = useNavigate();
  const handleNavigateToHome = () => {
    navigate(PATH.HOME);
  };

  return (
    <div className="flex flex-col items-center justify-start p-4 overflow-x-hidden w-dvw h-dvh gap-7">
      <div className="flex flex-row items-center justify-between w-full ">
        <h1 onClick={handleNavigateToHome} className="text-4xl font-bold cursor-pointer">
          WIKI
        </h1>
        <Avatar className="w-10 h-10 cursor-pointer ">
          <AvatarImage className="rounded-full " src="https://github.com/shadcn.png" />
          <AvatarFallback className="rounded-full ">CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full h-full pl-5 pr-5">
        <Outlet />
      </div>
    </div>
  );
};

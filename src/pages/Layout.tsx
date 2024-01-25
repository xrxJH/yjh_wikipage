import { PATH } from '@/constants/path';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Outlet, useNavigate } from 'react-router-dom';

export const Layout = () => {
  const navigate = useNavigate();
  const handleNavigateToHome = () => {
    navigate(PATH.HOME);
  };

  return (
    <div className="w-dvw h-dvh border border-red-600 flex flex-col justify-between items-center gap-7 p-4 overflow-x-hidden">
      <div className=" w-full flex flex-row justify-between items-center">
        <h1 onClick={handleNavigateToHome} className="text-4xl font-bold  cursor-pointer">
          WIKI
        </h1>
        <Avatar className=" w-10 h-10 cursor-pointer">
          <AvatarImage className=" rounded-full" src="https://github.com/shadcn.png" />
          <AvatarFallback className=" rounded-full">CN</AvatarFallback>
        </Avatar>
      </div>
      <Outlet />
    </div>
  );
};

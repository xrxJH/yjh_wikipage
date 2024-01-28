import { InputWithButton } from '@/components/common/InputWithButton';
import { WikiContainer } from '@/components/home/WikiContainer';
import { Button } from '@/components/ui/button';
import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToNew = () => {
    navigate(PATH.NEW);
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
        <WikiContainer />
      </div>
    </div>
  );
};

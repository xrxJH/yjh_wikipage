import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DropdownCustom } from '@/components/wikiDetail/DropdownCustom';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useLocation, useNavigate } from 'react-router-dom';

export const NewAndEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditUrl = location.pathname.includes('/wiki/edit');

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-start w-full h-full gap-3">
      <Card>
        <CardHeader className="flex flex-col gap-5">
          <div className="w-full ">
            <div className="flex justify-between w-full gap-2">
              <Input value={'Card Title'}></Input>
              <CardTitle className="flex-grow text-2xl break-words break-all "></CardTitle>
              <div className="flex gap-2">
                <Button> {isEditUrl ? '수정' : '등록'} </Button>
                <Button variant="secondary" onClick={handleCancel}>
                  취소
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="flex h-2/3">
        <Card className="flex flex-col p-5 overflow-auto">
          <p className="break-words break-all">
            Card Content Card ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContententCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContententCard
            ContentCardContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContententCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContententCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContententCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard Content Card Content Card ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
          </p>
        </Card>
      </div>
    </div>
  );
};

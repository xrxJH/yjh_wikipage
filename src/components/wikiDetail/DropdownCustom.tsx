import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { useNavigate, useParams } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { useDeleteWiki } from '@/service/queries/wiki';

export const DropdownCustom = () => {
  const isLogin = true;
  const isAuthor = true;
  const navigate = useNavigate();

  const { id } = useParams() as { id: string };
  const { mutate: deleteMutate } = useDeleteWiki(id);

  const handleNavigateToEdit = () => {
    navigate(PATH.EDIT + '/' + id);
  };

  const handleDelete = () => {
    deleteMutate();
  };

  return (
    <>
      {isLogin && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">• • •</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white w-fit ">
            <Card className="flex flex-col gap-2 p-2">
              {isAuthor && (
                <>
                  <DropdownMenuItem onClick={handleNavigateToEdit}>
                    <Button variant="ghost" className="w-full">
                      수정하기
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleNavigateToEdit}>
                    <Button
                      variant="destructive"
                      className="w-full"
                      onClick={handleDelete}
                    >
                      삭제하기
                    </Button>
                  </DropdownMenuItem>
                </>
              )}
              {!isAuthor && (
                <DropdownMenuItem>
                  <Button variant="destructive" className="w-full">
                    신고하기
                  </Button>
                </DropdownMenuItem>
              )}
            </Card>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

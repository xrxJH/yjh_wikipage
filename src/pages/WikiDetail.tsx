import { DropdownCustom } from '@/components/wikiDetail/DropdownCustom';
import { InputWithButton } from '@/components/common/InputWithButton';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export const WikiDetail = () => {
  const isUpdated = true;

  return (
    <div className="flex flex-col justify-between w-full h-full gap-3">
      <Card>
        <CardHeader className="flex flex-col gap-5">
          <div className="w-full ">
            <div className="flex justify-between w-full">
              <CardTitle className="flex-grow text-2xl break-words break-all ">
                Card Title
              </CardTitle>
              <DropdownCustom />
            </div>
            <CardDescription className="break-words break-all ">
              {'2023.1.20'} 작성 {isUpdated && '• 수정됨'}
            </CardDescription>
          </div>

          <div className="flex w-full">
            <div className="flex items-center gap-4">
              <Avatar className="cursor-pointer min-w-10 min-h-10 max-w-10 max-h-10">
                <AvatarImage
                  className="rounded-full "
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback className="rounded-full ">CN</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-3">
                <p className="font-semibold">게시글작성자</p>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="flex flex-grow h-4/6 max-h-900">
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
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContententCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContententCard ContentCardContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContententCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContententCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContententCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard
            Content
          </p>
        </Card>
      </div>

      <div className="flex gap-2 ">
        <p className="font-semibold ">댓글</p>
        <p className="font-semibold ">{3}</p>
      </div>
      <Card>
        <CardHeader>
          <InputWithButton placeholder="댓글" buttonText="게시" onClick={() => {}} />
        </CardHeader>
        <ul className="flex flex-col gap-3">
          <li className="border border-red-200 ">
            <CardContent className="flex flex-col items-start justify-center w-full gap-2 text-sm ">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-start gap-4">
                  <Avatar className="cursor-pointer min-w-10 min-h-10 max-w-10 max-h-10">
                    <AvatarImage
                      className="rounded-full "
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback className="rounded-full ">CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <p className="font-semibold">댓글작성자</p>
                      <p className="border border-red-200 ">2024.01.11</p>
                    </div>
                    <p className="break-words break-all border border-red-200 ">
                      ContentCard ContentCard ContententCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard ContentCard
                      ContentCard ContentCard ContentCard ContentCard
                    </p>
                  </div>
                </div>
                <DropdownCustom />
              </div>
            </CardContent>
          </li>
        </ul>
      </Card>
    </div>
  );
};

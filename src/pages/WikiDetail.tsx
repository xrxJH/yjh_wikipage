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
    <div className="w-full h-full  flex flex-col justify-between gap-3">
      <Card>
        <CardHeader>
          <div className="w-full flex justify-between">
            <CardTitle className=" flex-grow break-all break-words text-2xl border border-green-600 ">
              Card Title
            </CardTitle>
            <DropdownCustom />
          </div>
          <CardDescription className=" break-all break-words">
            {'2023.1.20'} 작성 {isUpdated && '• 수정됨'}
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="flex flex-col h-4/6 max-h-900 p-5  overflow-auto">
        <p className="break-all break-words">
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
          ContentCard ContentCard ContentCard ContentCard ContentCard ContentCard Content
        </p>
      </Card>

      <div className=" flex gap-2">
        <p className=" font-semibold">댓글</p>
        <p className=" font-semibold ">{3}</p>
      </div>
      <Card>
        <CardHeader>
          <InputWithButton placeholder="댓글" buttonText="게시" onClick={() => {}} />
        </CardHeader>
        <ul className="flex flex-col gap-3">
          <li className="border border-red-200 ">
            <CardContent className="flex flex-col w-full justify-center  items-start gap-2 text-sm  ">
              <div className="flex w-full justify-between items-start">
                <div className="flex items-start gap-4">
                  <Avatar className="min-w-10 min-h-10 max-w-10 max-h-10  cursor-pointer">
                    <AvatarImage
                      className=" rounded-full"
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback className=" rounded-full">CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <p className="font-semibold">댓글작성자</p>
                      <p className=" border border-red-200">2024.01.11</p>
                    </div>
                    <p className=" break-all break-words border border-red-200 ">
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

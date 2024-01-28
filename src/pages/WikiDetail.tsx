import { DropdownCustom } from '@/components/wikiDetail/DropdownCustom';
import { InputWithButton } from '@/components/common/InputWithButton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { DescriptionContent } from '@/components/wikiDetail/DescriptionContent';

export const WikiDetail = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full gap-3">
      <DescriptionContent />

      <div className="flex gap-2 ">
        <p className="font-semibold ">댓글</p>
        <p className="font-semibold ">{3}</p>
      </div>
      <Card>
        <CardHeader>
          <InputWithButton placeholder="댓글" buttonText="게시" onClick={() => {}} />
        </CardHeader>
        <ul className="flex flex-col gap-3">
          <li className="">
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
                      <p className="">2024.01.11</p>
                    </div>
                    <p className="break-words break-all ">
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

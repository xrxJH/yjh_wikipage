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
import { useGetAllwikis, useGetWikiDetail } from '@/service/queries/wiki';
import { useParams } from 'react-router-dom';
import { formatTime } from '@/utils/formatTimeStamp';
import { Link } from 'react-router-dom';
import { BASE_URL, PATH } from '@/constants/path';

export const WikiDetail = () => {
  const isUpdated = true;
  const { id } = useParams() as { id: string };
  const { data } = useGetWikiDetail(id);
  const { data: allWikis } = useGetAllwikis(); // 얘를 로더로?
  console.log(data?.description);
  console.log(allWikis);

  const replacedContent = () => {
    if (!data?.description || !allWikis) return <p>{data?.description}</p>;

    const output = [];
    let processedIndex = 0; // 현재까지 처리된 description 문자열의 인덱스

    allWikis.forEach((wiki: WikiTitles) => {
      const regex = new RegExp(`(${wiki.title})`, 'g');
      let match;

      while ((match = regex.exec(data.description)) !== null) {
        const matchStart = match.index;
        const matchEnd = regex.lastIndex;

        // 이전 match와 현재 match 사이의 텍스트를 span으로 추가함
        if (matchStart > processedIndex) {
          output.push(
            <span key={`text-${processedIndex}`}>
              {data.description.slice(processedIndex, matchStart)}
            </span>
          );
        }

        // 현재 match를 Link 컴포넌트로 추가
        output.push(
          <Link
            key={`link-${matchStart}`}
            to={`${BASE_URL}${PATH.WIKI_DETAIL}/${wiki.id}`}
            className="inline-block text-blue-500 underline "
          >
            🔗{match[0]}
          </Link>
        );

        // 처리된 인덱스 업데이트함
        processedIndex = matchEnd;
      }
    });

    // 마지막 match 이후의 남은 텍스트를 처리
    if (processedIndex < data.description.length) {
      output.push(<span key={`text-end`}>{data.description.slice(processedIndex)}</span>);
    }

    return output;
  };

  return (
    <div className="flex flex-col justify-between w-full h-full gap-3">
      <Card>
        <CardHeader className="flex flex-col gap-5">
          <div className="w-full ">
            <div className="flex justify-between w-full">
              <CardTitle className="flex-grow text-2xl break-words break-all ">
                {data?.title}
              </CardTitle>
              <DropdownCustom />
            </div>
            <CardDescription className="break-words break-all ">
              {formatTime(data?.date)} 작성 {isUpdated && '• 수정됨'}
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
                <p className="font-semibold">{data?.author.name}</p>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="flex flex-grow w-full h-4/6 max-h-900">
        <Card className="flex flex-col w-full p-5 overflow-auto ">
          <p className="break-words break-all">{replacedContent()}</p>
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

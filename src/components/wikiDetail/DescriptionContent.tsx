import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { DropdownCustom } from './DropdownCustom';
import { Link, useParams } from 'react-router-dom';
import { BASE_URL, PATH } from '@/constants/path';
import { useGetAllwikis, useGetWikiDetail } from '@/service/queries/wiki';
import { formatTime } from '@/utils/formatTimeStamp';

export const DescriptionContent = () => {
  const isUpdated = true;
  const { id } = useParams() as { id: string };
  const { data } = useGetWikiDetail(id);
  const { data: allWikis } = useGetAllwikis();

  const replacedContent = () => {
    if (!data?.description || !allWikis) return <p>{data?.description}</p>;

    const output = [];
    let processedIndex = 0;

    allWikis.forEach((wiki: WikiTitles) => {
      const regex = new RegExp(`(${wiki.title})`, 'g');
      let match;

      while ((match = regex.exec(data.description)) !== null) {
        const matchStart = match.index;
        const matchEnd = regex.lastIndex;

        if (matchStart > processedIndex) {
          output.push(
            <span key={`text-${processedIndex}`}>
              {data.description.slice(processedIndex, matchStart)}
            </span>
          );
        }

        output.push(
          <Link
            key={`link-${matchStart}`}
            to={`${BASE_URL}${PATH.WIKI_DETAIL}/${wiki.id}`}
            className="inline-block text-blue-500 underline "
          >
            🔗{match[0]}
          </Link>
        );

        processedIndex = matchEnd;
      }
    });

    if (processedIndex < data.description.length) {
      output.push(<span key={`text-end`}>{data.description.slice(processedIndex)}</span>);
    }

    return output;
  };

  return (
    <>
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
          <pre className="font-sans break-words break-all">{replacedContent()}</pre>
        </Card>
      </div>
    </>
  );
};

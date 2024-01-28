import { formatTime } from '@/utils/formatTimeStamp';
import { Card } from '../ui/card';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

type Props = {
  wiki: Wiki;
};

export const WikiListItem = ({ wiki }: Props) => {
  const navigate = useNavigate();

  const handleNavigateToDetail = (id: string) => {
    navigate(PATH.WIKI_DETAIL + '/' + id);
  };

  return (
    <li
      onClick={() => {
        handleNavigateToDetail(wiki.id);
      }}
      className="flex-grow cursor-pointer "
    >
      <Card className="flex items-center w-full h-full p-3 text-sm gap-7 ">
        <p className="flex-grow overflow-hidden font-semibold text-ellipsis">
          {wiki.title}
        </p>
        <p className="">{formatTime(wiki.date)}</p>
        <p className="font-semibold whitespace-nowrap">{wiki.author.name}</p>
      </Card>
    </li>
  );
};

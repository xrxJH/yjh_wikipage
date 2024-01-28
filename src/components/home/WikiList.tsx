import { WikiListItem } from './WikiListItem';

type Props = {
  wikis: Wiki[];
};

export const WikiList = ({ wikis }: Props) => {
  return (
    <ul className="grid w-full h-full grid-rows-5 gap-3 ">
      {wikis?.map((wiki: Wiki) => (
        <WikiListItem key={wiki.id} wiki={wiki} />
      ))}
    </ul>
  );
};

import { useWikiPageStore } from '@/zustand/wiki';
import { PageNavigator } from '../common/PageNavigator';
import { WikiList } from './WikiList';
import { useGetPaginatedWikis } from '@/service/queries/wiki';

export const WikiContainer = () => {
  const { currentPage } = useWikiPageStore();

  const { data: wikis, totalCount } = useGetPaginatedWikis(currentPage);

  return (
    <main className="flex flex-col justify-between flex-grow w-full gap-3">
      <WikiList wikis={wikis} />
      <PageNavigator currentPageNumber={currentPage} totalCount={totalCount} />
    </main>
  );
};

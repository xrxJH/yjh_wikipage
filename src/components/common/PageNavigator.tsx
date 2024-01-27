import { useWikiPageStore } from '@/zustand/wiki';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

type Props = {
  currentPageNumber: number;
  totalCount: number;
};

export const PageNavigator = ({ currentPageNumber, totalCount }: Props) => {
  const { prevPage, nextPage, selectPage } = useWikiPageStore();

  const WIKIS_PER_PAGE = 5;
  const length = Math.ceil(totalCount / WIKIS_PER_PAGE);

  const handlePreviousPage = () => {
    if (currentPageNumber > 1) {
      prevPage();
    }
  };

  const handleNextPage = () => {
    if (currentPageNumber < length) {
      nextPage();
    }
  };

  const handlePage = (page: number) => {
    selectPage(page);
  };

  return (
    <Pagination>
      <PaginationContent>
        {currentPageNumber !== 1 && (
          <PaginationItem onClick={handlePreviousPage}>
            <PaginationPrevious />
          </PaginationItem>
        )}

        {Array.from({ length }, (_, i) => i + 1).map((page, i) => (
          <PaginationItem key={page} onClick={() => handlePage(page)}>
            <PaginationLink isActive={i + 1 === currentPageNumber}>{page}</PaginationLink>
          </PaginationItem>
        ))}

        {length !== currentPageNumber && (
          <PaginationItem onClick={handleNextPage}>
            <PaginationNext />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

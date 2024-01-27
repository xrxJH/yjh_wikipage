import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

type Props = {
  onPageChange: (page: number) => void;
  currentPageNumber: number;
  totalCount: number;
};

export const PageNavigator = ({ onPageChange, currentPageNumber, totalCount }: Props) => {
  const WIKIS_PER_PAGE = 5;

  const length = Math.ceil(totalCount / WIKIS_PER_PAGE);

  const handlePreviousPage = () => {
    if (currentPageNumber > 1) {
      onPageChange(currentPageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPageNumber < length) {
      onPageChange(currentPageNumber + 1);
    }
  };

  const handlePage = (page: number) => {
    onPageChange(page);
  };

  return (
    <Pagination>
      <PaginationContent>
        {currentPageNumber !== 1 && (
          <PaginationItem onClick={handlePreviousPage}>
            <PaginationPrevious href="#" />
          </PaginationItem>
        )}

        {Array.from({ length }, (_, i) => i + 1).map((page, i) => (
          <PaginationItem key={page} onClick={() => handlePage(page)}>
            <PaginationLink href="#" isActive={i + 1 === currentPageNumber}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {length !== currentPageNumber && (
          <PaginationItem onClick={handleNextPage}>
            <PaginationNext href="#" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

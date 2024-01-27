import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

type Props = {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  fetchPreviousPage: () => void;
  fetchNextPage: () => void;
  currentPageNumber: number;
  totalCount: number;
};

export const PageNavigator = ({
  hasPreviousPage,
  hasNextPage,
  fetchPreviousPage,
  fetchNextPage,
  currentPageNumber,
  totalCount,
}: Props) => {
  const WIKIS_PER_PAGE = 5;

  const length = Math.ceil(totalCount / WIKIS_PER_PAGE);

  return (
    <Pagination>
      <PaginationContent>
        {hasPreviousPage && (
          <PaginationItem onClick={fetchPreviousPage}>
            <PaginationPrevious href="#" />
          </PaginationItem>
        )}
        {Array.from({ length }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href="#" isActive={page === currentPageNumber}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem> */}

        {hasNextPage && (
          <PaginationItem onClick={fetchNextPage}>
            <PaginationNext href="#" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

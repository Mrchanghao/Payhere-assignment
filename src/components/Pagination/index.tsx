import styled from "styled-components";
import { DOTS, usePagination } from "../../hooks/usePagination";
import { v4 as uuidv4 } from "uuid";

interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  siblingCount?: number;
}

export function Pagination({
  total,
  limit,
  page,
  setPage,
  siblingCount,
}: Props) {
  const paginationRange = usePagination({
    currentPage: page,
    totalCount: total,
    siblingCount,
    pageSize: limit,
  });

  if (page === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    setPage(page + 1);
  };

  const onPrevious = () => {
    setPage(page - 1);
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  return (
    <>
      <Nav>
        <Button onClick={onPrevious} disabled={page === 1}>
          &lt;
        </Button>
        {paginationRange?.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <Button key={uuidv4()}>...</Button>;
          }
          return (
            <Button
              key={uuidv4()}
              active={page === pageNumber}
              onClick={() => setPage(pageNumber as number)}>
              {pageNumber}
            </Button>
          );
        })}
        <Button onClick={onNext} disabled={page === lastPage}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button<{ active?: boolean }>`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: ${({ active }) => (active ? "tomato" : "black")};
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
`;

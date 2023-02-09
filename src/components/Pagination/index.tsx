import { Stack, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountRegisters: number;
  registersPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblinsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountRegisters,
  registersPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountRegisters / registersPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblinsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage - lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblinsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        {" "}
        <strong>
          {" "}
          {currentPage * registersPage - registersPage + 1}{" "}
        </strong> -{" "}
        <strong>
          {" "}
          {currentPage === lastPage
            ? totalCountRegisters
            : registersPage * currentPage}{" "}
        </strong>{" "}
        de <strong> {totalCountRegisters} </strong>{" "}
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblinsCount && (
          <>
            <PaginationItem number={1} />
            {currentPage > 2 + siblinsCount && <Text color='gray.300' width="8" text-align="center">...</Text>}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return <PaginationItem number={page} key={page} />;
          })}

        <PaginationItem number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <PaginationItem number={page} key={page} />;
          })}

        {currentPage + siblinsCount < lastPage && (
          <>
            {currentPage + 1 + siblinsCount < lastPage && <Text color="gray.300" width="8" text-align="center">...</Text>}
            <PaginationItem number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}

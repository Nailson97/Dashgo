import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Thead,
  Td,
  Checkbox,
  Th,
  Tbody,
  Tr,
  Text,
  useBreakpointValue,
  Spinner,
  LinkBox,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Form/Header";
import { Sidebar } from "../../components/Form/Header/Sidebar";
import { Pagination } from "../../components/Pagination";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

interface userProps {
  id: string,
  name: string,
  email: string,
  createdAt: string
}

export default function UserList() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error } = useUsers(page)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefectUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)

      return response.data
    }, {
      staleTime: 1000 * 60 * 10
    })
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1280} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              { !isLoading && isFetching && <Spinner size="sm" color='gray.500' ml="4" />}
            </Heading>

            <Button
              as={Link}
              size="sm"
              fontSize="small"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              href="/users/create"
            >
              Criar novo
            </Button>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                 
                {data?.users.map((user: userProps ) => (
                    <Tr key={user.id}>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <LinkBox color="purple.400" onMouseEnter={() => handlePrefectUser(user.id)}>
                          <Text fontWeight="bold">{user.name}</Text>
                        </LinkBox>
                        <Text fontSize="sm" color="gray.300">{user.email}</Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>{user.createdAt}</Td>}
                    {isWideVersion && (
                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="small"
                          colorScheme="blue"
                          leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                        >
                          Editar
                        </Button>
                      </Td>
                    )}
                  </Tr>
                ))}
                </Tbody>
              </Table>

              <Pagination totalCountRegisters={data.totalCount} currentPage={page} onPageChange={setPage} />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
 }

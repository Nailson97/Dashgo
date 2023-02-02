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
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Form/Header";
import { Sidebar } from "../../components/Form/Header/Sidebar";
import { Pagination } from "../../components/Pagination";
import { useQuery } from "react-query";
import { number } from "yup/lib/locale";

interface userProps {
  id: number,
  name: string,
  email: string,
  createdAt: string
}

export default function UserList() {
  const { data, isLoading, isFetching, error } = useQuery("users", async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();

    const users = data.users.map((user: userProps ) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        } )
      }
    })

    return users
  }, {
    staleTime: 1000 * 5,
  })


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
                 
                {data.map((user: userProps ) => (
                    <Tr key={user.id}>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">{user.name}</Text>
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

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

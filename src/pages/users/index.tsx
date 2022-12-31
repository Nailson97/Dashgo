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
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Form/Header";
import { Pagination } from "../../components/Form/Pagination";
import { Sidebar } from "../../components/Form/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1280} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="small"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Nailson Soares</Text>
                    <Text fontSize="sm" color="gray.300">
                      nailsonsoares45@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>30 de dezembro, 2022</Td>
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
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Nailson Soares</Text>
                    <Text fontSize="sm" color="gray.300">
                      nailsonsoares45@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>30 de dezembro, 2022</Td>
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
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Nailson Soares</Text>
                    <Text fontSize="sm" color="gray.300">
                      nailsonsoares45@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>30 de dezembro, 2022</Td>
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
              </Tr>
            </Tbody>
          </Table>
          
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}

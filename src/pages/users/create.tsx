import { Box,Divider,Flex, Heading, SimpleGrid, Stack, HStack, Button, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Form/Header";
import { Sidebar } from "../../components/Form/Header/Sidebar";
import { Input } from "../../components/Form/Input";

  export default function CreateUser() {
    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
    })

    return (
      <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1280} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bgColor="gray.800" p={["6", "8"]}>
            <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

            <Divider my="6" borderColor="gray.700" />

            <Stack direction={!isWideVersion ? "column": 'row' } spacing="8">
               <SimpleGrid minChildWidth="240" spacing={["6", "8"]} w="100%">
                  <Input name="name" label="Nome completo" />  
                 {isWideVersion ? <Input name="password" type="password" label="Senha" /> : <Input name="email" type="email" label="E-mail" /> }
               </SimpleGrid> 

               <SimpleGrid minChildWidth="240" spacing={["6", "8"]} w="100%">
                  {isWideVersion ?  <Input name="email" type="email" label="E-mail" /> : <Input name="password" type="password" label="Senha" /> } 
                  <Input name="password_confirmation" type="password" label="Confirmação da senha" />  
               </SimpleGrid> 
            </Stack>

            <Flex mt="8" justify="flex-end">
               <HStack spacing="4">
                 <Button colorScheme="whiteAlpha">Cancelar</Button>
                 <Button colorScheme="pink">Salvar</Button>
               </HStack>
            </Flex>
            
          </Box>
        </Flex>
      </Box>
    );
  }
  
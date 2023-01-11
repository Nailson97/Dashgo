import { Button, Flex, Stack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

export default function Signin() {
  const {register, handleSubmit } = useForm()

  const handleSignIn: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex 
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        border={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input type="email" label="E-mail" {...register("email")} />
          <Input type="password" label="Senha" {...register("password")}/>
        </Stack>
        <Button type="submit" mt="6" colorScheme={"pink"} size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

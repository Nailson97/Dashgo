import { Button, Flex, Stack } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const formSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
})

export default function Signin() {
  const {register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema)
  })

  const errors = formState.errors

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
          <Input type="email" label="E-mail" {...(register("email"))} error={errors.email}/>
          <Input type="password" label="Senha" {...(register("password"))} error={errors.password}/>
        </Stack>
        <Button type="submit" mt="6" colorScheme={"pink"} size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

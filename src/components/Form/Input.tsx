import React from "react";
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  label?: string
  error?: Partial<FieldError>
}

export const Input = React.forwardRef<HTMLInputElement, InputProps> (({label, error = null, ...props}, ref) =>
{
    return (
      <FormControl isInvalid={!!error}>
        { !!label && <FormLabel htmlFor="password">{label}</FormLabel> }
      
        <ChakraInput 
      {...props}
        id={props.name}
        ref={ref} 
        focusBorderColor="pink.500" 
        bgColor="gray.900"
         variant="filled" 
        _hover={{ bgColor: 'gray.900' }}
        size="lg"/>

        { !!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    );
});
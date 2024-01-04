import React from 'react'
import { Box, Container,Flex,Image, VStack} from '@chakra-ui/react'
import AuthForm from '../../components/AuthoForm/AuthForm'

function AuthPage() {
  return (
    <>
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4} paddingBottom={3}>
        <Container maxW={"container.md"} padding={0} >
          <Flex
          justifyContent={"center"} alignItems={'center'} gap={10}>
            <Box display={{base:"none" , md:"block"}}>
                <Image src="../public/auth.png"/>
            </Box>

            <VStack spacing={4} align={"stretch"}>
              <AuthForm />
              <Box textAlign={"center"}>Get the App</Box>
              <Flex gap={10} justifyContent={"center"}>
                <Image src="/playstore.png" h={10} />
                <Image src="/microsoft.png" h={10} />
              </Flex>
            </VStack>
          </Flex>
        </Container>
    </Flex>
    </>
  )
}

export default AuthPage
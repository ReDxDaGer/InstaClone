import { Box, VStack , Image ,Input, Button, Flex, Text, Center } from '@chakra-ui/react';
// import { color } from 'framer-motion';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const [isLogin,setLogin] = useState(true)
    const [inputs,setInputs] = useState({
        email:"",
        password:"",
        ConfirPmassword:""
    });
    const authHandel = () => {
        if(!inputs.email || !inputs.password ){
            alert("Please fill all the required fields")
            return;
        }
        Navigate("/");
    }
    const Navigate = useNavigate();
  return (
    <>
    <Box  border={"1px solid #333"} borderRadius={10} padding={5} bgColor={"#ffff"}>
        <VStack>
            <Image src="/logo.png" h={24} cursor={"pointer"}/>
            <Input 
            placeholder='Email' 
            _placeholder={{opacity:0.5,color:"#222"}}
            border={"1px solid #333"} 
            color={"#000"}
            fontSize={14}
            type='email'
            value={inputs.email}
            onChange={(e) => setInputs({...inputs,email:e.target.value})}
            />
            <Input 
            placeholder='Password'
            _placeholder={{opacity:0.5,color:"#222"}}
            border={"1px solid #333"} 
            color={"#000"}
            fontSize={14}
            type='password'
            value={inputs.password}
            onChange={(e) => setInputs({...inputs,password:e.target.value})}
            />

            {!isLogin ? <Input placeholder='Confirm Password' 
            border={"1px solid #333"} 
            _placeholder={{opacity:0.5,color:"#222"}}
            fontSize={14} 
            type="password"
            color={"#000"}
            value={inputs.ConfirPmassword}
            onChange={(e) => setInputs({...inputs,ConfirPmassword:e.target.value})}
            /> : null}

            <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14} onClick={authHandel}>
                {isLogin? "Log in" : "Sign Up"}
            </Button>
            
            
            
            {/* -------------------OR--------------------------- */}
            <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"}>
                <Box flex={2} h={"1px"} bg={"gray.400"} />
                <Text mx={1} color={"#000"}>OR</Text>
                <Box flex={2} h={"1px"} bg={"gray.400"} />
            </Flex>
            {/* -----------------Google Acoount----------------------- */}
            <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                <Image src="/public/google.png" w={6} alt='google logo'/>
                <Text mx={2} color={'blue.600'}>Log in with Google</Text>
            </Flex>
        </VStack>
    </Box>

    <Box border={"1px solid #333"} borderRadius={10} padding={5} bgColor={"white"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={15} color={"#000"}>

                {isLogin ? "Don't have an account ?" : "Already have an account?"}
            </Box>
            <Box onClick={() => setLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                {isLogin ? "Sign Up" : "Sign in"}
            </Box>
        </Flex>
    </Box>
    </>
  )
}

export default AuthForm;
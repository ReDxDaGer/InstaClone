import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const PostHeader = () => {
  return (
    <>
    <Flex justifyContent={'space-between'} 
    alignItems={'center'}
    w={'full'}
    my={3}
    >
        <Flex alignItems={'center'} gap={3}>
            <Avatar src='/img1.png'size={'sm'}/>
            <Flex 
            fontSize={12} 
            fontWeight={'bold'} 
            gap={2}
            >
            Aditi Asthana
            <Box
            color={'gray.500'}
            >
                1w
            </Box>
            </Flex>
        </Flex>
        <Box
        cursor={'pointer'}
        >
            <Text fontSize={12}
            color={'blue.500'}
            fontWeight={'bold'}
            _hover={{
                color:'white'
            }}
            transition={'0.2s ease-in-out'}
            >
            Unfollow
            </Text>
        </Box>
    </Flex>
    </>
  )
}

export default PostHeader
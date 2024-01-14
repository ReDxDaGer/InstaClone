import { Avatar, Box, Flex, Text , Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
const SuggestedHeader = () => {
  return (
    <>
        <Flex justifyContent={'space-between'}
        alignItems={'center'}
        w={'full'}
        >
            <Flex alignItems={'center'} gap={2}>
                <Avatar name='user' size={'md'} src='/profilepic.png' />
                <Text 
                fontSize={16}
                fontWeight={'bold'}
                >
                    Yash
                </Text>
            </Flex>
            <Link
            as={RouterLink}
            to={'/Auth'}
            fontSize={14}
            fontWeight={'medium'}
            color={'blue.500'}
            style={{textDecoration:'none'}}
            _hover={{textDecoration:'underline'}}
            cursor={'pointer'}
            >
            Log Out
            </Link>
        </Flex>
    </>
  )
}

export default SuggestedHeader
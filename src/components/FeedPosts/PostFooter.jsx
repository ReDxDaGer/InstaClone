import { Box, Button, Flex ,Input,InputGroup,InputRightElement,Text} from '@chakra-ui/react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import { useState } from 'react'

const PostFooter = ({username}) => {
    const [liked,setLiked]=useState(false)
    const [likes,setLikes]=useState(1000)

    const handelLikes = () =>{
        if(liked){
            setLiked(false)
            setLikes(likes-1)
        }
        else{
            setLiked(true)
            setLikes(likes+1)
        }
    }

    return (
    <>
    <Box my={10}>
    <Flex 
    alignItems={'center'} 
    gap={4} 
    w={'full'} 
    pt={0} 
    mt={5}
    >
        <Box
        cursor={'pointer'}
        fontSize={18}
        onClick={handelLikes}
        >
            {!liked ? (<NotificationsLogo/>):(<UnlikeLogo/>)}
        </Box>
        <Box
        cursor={'pointer'}
        fontSize={18}

        >
            <CommentLogo />
        </Box>
    </Flex>
    <Text 
    fontWeight={600}
    fontSize={'small'}
    >
        {likes} likes
    </Text>
    <Text fontSize='sm' fontWeight={700}>
        {username}{" "}
        <Text 
        as='span' 
        fontWeight={400}
        >
            Feeling Good
        </Text>
    </Text>
    <Text
        fontSize={'small'}
        color={'gray'}
        >
            View all 1000 comments
    </Text>

    <Flex 
    alignItems={'center'}
    gap={2}
    w={'full'}
    justifyContent={'space-between'}
    >
        <InputGroup>
            <Input 
            variant={'flushed'} 
            placeholder='Add a comment ...'
            fontSize={14}
            />
            <InputRightElement>
             <Button
             fontSize={14}
             color={'blue.500'}
             fontWeight={600}
             cursor={'pointer'}
             _hover={{
                color:'white'}}
            bg={'transparent'}
             >
                Post
             </Button>
            </InputRightElement>
        </InputGroup>
    </Flex>
    </Box>
    </>
  )
}

export default PostFooter
import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

const FeedPost = ({img ,username,avatar}) => {
  return (
    <>
    <PostHeader username={username} avatar={avatar} />
      <Box 
        my={3}
        borderRadius={6}
        overflow={'hidden'}
        >
          <Image src={img}/>
      </Box>
    <PostFooter username={username}/>
    </>
  )
}

export default FeedPost;
import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

const FeedPost = () => {
  return (
    <>
    <PostHeader />
    <Box my={3}>
        <Image src='/img1.png'/>
    </Box>
    <PostFooter />
    </>
  )
}

export default FeedPost
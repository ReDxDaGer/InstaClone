import React from 'react'
import { Container , Flex ,Box} from '@chakra-ui/react'
import FeedPosts from '../components/FeedPosts/FeedPosts'
import SuggestedUsers from '../components/SuggestedUsers/SuggestedUsers'
// import {SuggestedUsers} from '../components/SuggestedUsers/SuggestedUsers'
function HomePage() {
  return (
    <>
        <Container maxWidth={'Container.lg'}>
          <Flex gap={20}>
            <Box flex={2} py={20}
            // border={'1px solid blue'}
            >
              <FeedPosts />
            </Box>
            <Box flex={3} mr={20}
            display={{base:"none",lg:"block"}}
            maxWidth={'300px'}
            // border={'1px solid red'}
            >
              <SuggestedUsers />
            </Box>
          </Flex>           
        </Container>
    </>
  )
}

export default HomePage

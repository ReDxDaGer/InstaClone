import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useEffect, useState } from 'react'
const FeedPosts = () => {
  const [isLoading,setisLoading] =useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setisLoading(false)
    },2000)
  },[])
  return (
    <Container maxWidth={'container.sm'} py={10} px={2}>
      {isLoading && [0,1,2,3].map((_,idx)=>(
        <VStack 
        key={idx}
        gap={4}
        alignItems={'flex-start'}
        mb={10}
        >
          <Flex gap={2} alignItems={'center'}>
            <SkeletonCircle size={10}/>
            <Flex
            gap={2}
            alignItems={'flex-start'}
            >
              <Skeleton 
              height={"10px"}
              w={'200px'} />

              <Skeleton 
              height={"10px"}
              w={'100px'} 
              ml={'250px'}
              />


            </Flex>

          </Flex>
 
          <Skeleton w={'full'}>
            <Box h={'500px'}>
              Content Wrapped
            </Box>
          </Skeleton>
 
        </VStack>
      ))}
      {!isLoading && (
        <>
          <FeedPost 
            img='/img1.png' 
            username='aditi_Asthana' 
            avatar='/img1.png'
          />
          <FeedPost 
            img='/img2.png' 
            username='m_y_a_s_h_11' 
            avatar='/img2.png'
          />
          <FeedPost 
            img='/img3.png' 
            username='madhav_shankdh@r' 
            avatar='/img3.png'
          />
          <FeedPost 
            img='/img4.png' 
            username='enderBoi' 
            avatar='/img4.png'
          />
      </>
      )}
        
        {/* <FeedPost />
        <FeedPost />
        <FeedPost /> */}
    </Container>
  )
}

export default FeedPosts
import { Container } from '@chakra-ui/react'
import FeedPost from './FeedPost'
const FeedPosts = () => {
  return (
    <Container maxWidth={'container.sm'} py={10} px={2}>
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
        {/* <FeedPost />
        <FeedPost />
        <FeedPost /> */}
    </Container>
  )
}

export default FeedPosts
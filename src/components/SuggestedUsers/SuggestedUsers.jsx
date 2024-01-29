import { Flex, Text, VStack , Box , Link } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser.jsx"

const SuggestedUsers = () => {
  return (
    <>
    <VStack 
    py={8} 
    px={6} 
    gap={4}
    >
      <SuggestedHeader />

      <Flex alignItems={'center'}
      justifyContent={'space-between'}
      w={'full'}
      >
        <Text fontSize={12} fontWeight={"bold"} color={'gray.500'}>
          Suggested For you
        </Text>
        <Text fontSize={12} fontWeight={"bold"} color={'blue.500'} cursor={'pointer'}
        _hover={{
          textDecoration:"underline"
        }}
        >
          See all
        </Text>
      </Flex>
	  <SuggestedUser name="Abhinav Bindra" followers={1392} avatar = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
	  <SuggestedUser name= "Jagdish Bhagat" followers={1000} avatar='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
	  <SuggestedUser name= "Berzi Bholenath" followers={2000} avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

	  <Box
	    fontSize={12}
	    color={"gray.500"}
	    mt={5}
	  >
           © 2024 Built By {""}

	  </Box>
	  <Link href="https://github.com/ReDxDaGer" traget='_blank' color='blue.500' fontSize={14}>
	  Yash Mehrotra
	  </Link>
    </VStack>
    </>
  )
}

export default SuggestedUsers

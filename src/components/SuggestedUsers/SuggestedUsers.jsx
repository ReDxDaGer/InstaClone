import { Flex, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"

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
    </VStack>
    </>
  )
}

export default SuggestedUsers
import React from 'react'
import {Flex , Button , Avatar} from '@chakra-ui/react'
const SuggestedUser = ({followers,name,avatar}) => {
  return (
    	<>
	<Flex justifyContent={"spcae-between"} alignItems={'center'} w={'full'}>
	   <Flex alignItems={'center'} gap={2}>
	     <Avatar src={avatar} name={name} size={'md'}/>
	  </Flex>
	   <Button></Button>
	</Flex>

	</>
  )
}

export default SuggestedUser

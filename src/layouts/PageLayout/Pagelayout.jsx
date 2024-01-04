import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'

const Pagelayout = ({children}) => {
    const {pathname} =useLocation();
  return (
    <>
        <Flex>
            {pathname !== "/Auth" ? (
                <Box w={{base:"70px" ,md:"240px"}}>
                <Sidebar/>
            </Box>
            ) : null}
            <Box flex={1} w={{base:"calc(100% - 70px)", md:"calc(100% - 240px)"}} mx={"auto"}>
                {children}
            </Box>
        </Flex>
    </>
  )
}

export default Pagelayout
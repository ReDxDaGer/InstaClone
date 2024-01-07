import { Avatar, Box, Flex , Link, Tooltip} from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants'
import {AiFillHome} from "react-icons/ai"
import { BiLogOut } from "react-icons/bi";
const Sidebar = () => {
  const sidebarItems =[
    {
      icons: <AiFillHome size={25} />,
      text: "Home",
      link:"/"
    },
    {
      icons: <SearchLogo size={25} />,
      text: "Search",
      link:"Search"
    },
    {
      icons: <NotificationsLogo size={25} />,
      text: "Notification",
      link:"Notification"
    },
    {
      icons: <CreatePostLogo  />,
      text: "Create Post",
      link:"Create"
    },
    {
      icons: <Avatar size={"sm"} />,
      text: "Profile",
      link:""
    }

  ]
  return (
    <>
    <Box h={"100vh"}
    borderRight={"1px solid"}
    borderColor={"WhiteAlpha.500"}
    py={0}
    top={0}
    left={0}
    position={"sticky"}
    px={{base:2,md:4}}
    >
        <Flex direction={"column"} gap={10} w={"full"} height={"100vh"}>
            <Link to="/" as={RouterLink} pl={2} display={{base:"none" , md:"block"}} cursor="pointer" marginTop={3}>
                <InstagramLogo />
            </Link>
            <Link to="/" as={RouterLink} pl={2} display={{base:"block" , md:"none"}} cursor="pointer"
            borderRadius={6}
            _hover={{bg:"whiteAlpha.200"}}
            w={10}>
                <InstagramMobileLogo />
            </Link>
            <Flex direction={"column"} gap={5} cursor={"pointer"}>
              {sidebarItems.map((item,index) => (
                <Tooltip
                key={index}
                hasArrow
                label = {item.text}
                placement='right'
                ml={1}
                openDelay={500}
                display={{base:"block",md:"none"}}
                >
                  <Link display={"flex"}
                  to={item.link || null}
                  as={RouterLink}
                  alignItems={"center"}
                  gap={4}
                  _hover={{bg:"whiteAlpha.500"}}
                  borderRadius={6}
                  p={2}
                  w={{base:10,md:"full"}}
                  justifyContent={{base:'center',md:"flex-start"}}
                 >
                  {item.icons}
                  <Box display={{base:"none",md:'block'}}>
                    {item.text}
                  </Box>
                  </Link>
                </Tooltip>
              ))}
            </Flex>
            <Tooltip
                hasArrow
                label = {"Log Out"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{base:"block",md:"none"}}
                >
                  <Link display={"flex"}
                  to={"/Auth"}
                  as={RouterLink}
                  alignItems={"center"}
                  gap={4}
                  _hover={{bg:"whiteAlpha.500"}}
                  borderRadius={6}
                  p={2}
                  w={{base:10,md:"full"}}
                  mt={"auto"}
                  justifyContent={{base:'center',md:"flex-start"}}
                 >
                  <BiLogOut size={25}/>
                  <Box display={{base:"none",md:'block'}}>
                    Log Out
                  </Box>
                  </Link>
                </Tooltip>
        </Flex> 
    </Box>
    </>
  )
}

export default Sidebar;
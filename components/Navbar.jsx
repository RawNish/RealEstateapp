import {Link} from "next/link"
import {Menu,MenyButton,MenuList,MenuItem,IconButton,Flex,Box ,Spacer, Icon} from "@chakra-ui/react"
import {FcMenu,FcHome,FcAbout} from "react-icons/fc"
import { BsSearch } from "react-icons/bs"


const NavBar = ()=>{
return(
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingLeft="2">For Real</Link>
        </Box>
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.400"/>
            </Menu>
        </Box>
    </Flex>
)
}


export default Navbar;
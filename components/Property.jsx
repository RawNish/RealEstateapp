import Link from "next/link";
import Image from "next/image";
import millify from "millify";
import GoVerified from "react-icons/go"
import {FaBed,FaBath} from "react-icons/fa"
import BsGridFill from "react-icons/bs"
import{Box ,Flex,Text,Avatar} from "@chakra-ui/react"
import defaultHouse from "../assets/images/sample house.jpg"

export const  Property = ({property: {title,externalID,coverPhoto ,isVerified,price,rentFrequency,agency ,rooms ,baths,area}})=>{
    
    return(
        <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start">
            <Box>
                <Image src={coverPhoto ? coverPhoto.url :defaultHouse } width={400} height={260} alt = "Image not available at the moment"/>
            </Box>
            <Box w="full">
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        {/* <Box padding="3" color="green.400">{isVerified && <GoVerified/>}</Box> */}
                        <Box fontWeight="bold" fontSize="lg">AED {millify(price)} {rentFrequency? rentFrequency : `/-`}</Box>
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url}/>   
                    </Box>
                </Flex>
                <Flex alignItems="center" p='1' justifyContent="space-between" w="250px" color="blue.400">
                 {rooms}<FaBed/> {baths}<FaBath/> | {millify(area) } sqft 
                </Flex>
                <Text fontSize="lg">
                   {title.length > 30 ? `${title.substring(0,30)}....` : title} 
                </Text>

            </Box>


        </Flex>
        </Link>
    )
}

import Link from "next/link";
import Image from "next/image";
import millify from "millify";
import GoVerified from "react-icons/go"
import {FaBed,FaBath} from "react-icons/fa"
import BsGridFill from "react-icons/bs"
import{Box ,Flex,Text,Avatar} from "@chakra-ui/react"


export const Property = ({property: { coverPhoto,price,rentFrequency,rooms,title,baths,area,agency,isVerified,externalID}})=>{
    return(
        <Link href={`/property/${externalID}`} passHref>
        <h1>This is the better option</h1>
        </Link>
    )
}
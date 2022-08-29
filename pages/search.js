import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image"
import {Flex,Box,Text,Icon} from "@chakra-ui/react"
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import { Property } from "../components/Property";
import noresult from "../assets/images/noresult.svg"
import {fetchApi,baseUrl} from "../utils/fetchApi"


const Search = ({properties}) =>{
    const[searchFilter,setSearchFilter]= useState(false);
    const router = useRouter();

    return(
        <Box>
            <Flex
            cursor="pointer"
            bg="gray.100"
            borderColor="gray.200"
            p="2"
            fontWeight="black"
            fontSize="lg"
            justifyContent="center"
            alignItems="center"
            onClick={()=>setSearchFilter((prevFilters)=>!prevFilters)}
            >
            <Text>Search Property by filters</Text>
            <Icon paddingLeft="7" w="7" as={BsFilter}/>
            </Flex>
            {searchFilter && <SearchFilters/>}
            <Text fontSize = "2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>

            <Flex flexWrap='wrap'>
                {properties.map((property)=><Property property={property} key={property.id}/>)}
            </Flex>
            {properties.length===0 && (
                <Flex justifyContent="center" flexDirection="column" alignItems="center">
                    <Image height="300px" alt="no result" src= {noresult} />

                    <Text justifyContent="center" fontSize="25" fontWeight="bold">Oppsie Invalid Search</Text>
                </Flex>
            )}
        </Box>
        

    )
}

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      },
    };
  }

export default Search;


//     return{
//       props:{
//         propertiesForSale:propertyForSale?.hits,
//       }
//     }
//   }


// export default Search;

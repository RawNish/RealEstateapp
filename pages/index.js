import styles from '../styles/Home.module.css'
import {Flex , Box , Text , Button} from "@chakra-ui/react"
import Link from 'next/link'
import Image from "next/image"
import { baseUrl,fetchApi } from '../utils/fetchApi'


const Banner = ({purpose,title1,title2,desc1,desc2,linkName,buttonText,imgUrl}) =>{
  return(
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m ="10">
      
      <Image src={imgUrl} alt="banner" width={500} height={300} />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
        <Text fontSize="lg" color="gray.700" paddingTop="3" paddingBottom="3">{desc1}<br/>{desc2}</Text>     
        <Button bgColor="blue" fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button> 
      </Box>
    </Flex>
  )
}



export default function Home({propertiesForRent,propertiesForSale}) {
  console.log(propertiesForRent)
  return (
    <Box>
      <Banner 
      purpose="Buy a Home"
      title1="Not just a house"
      title2="but a HOME"
      desc1="Explore all types of premises"
      desc2="Apartments , Bunglows , Conduits and more..."
      buttonText="Explore Buying"
      linkName="/search?purpose=for-sale"
      imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4" 
      />
      <Flex flexWrap="wrap">
      




      </Flex>
      <Banner 
      purpose="for rent"
      title1="Your search for a rented house"
      title2="STOPS HERE!!!!"
      desc1="Explore all types of premises"
      desc2="Apartments , Bunglows , Conduits and more...."
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">




      </Flex>
    </Box>
  )
}


export async function getStaticProps (){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  

  return{
    props:{
      propertiesForSale:propertyForSale?.hits,
      propertiesForRent:propertyForRent?.hits,
    }
  }
}

// export async function getStaticProps() {
//     const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
//     const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

//   return {
//     props: {
//       propertiesForSale: propertyForSale?.hits,
//       propertiesForRent: propertyForRent?.hits,
//     },
//   };
// }
 
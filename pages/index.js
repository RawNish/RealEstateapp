import styles from '../styles/Home.module.css'
import {Flex , Box , Text , Button} from "@chakra-ui/react"
import Link from 'next/link'

const Banner = ({purpose,title1,title2,desc1,desc2,linkName,buttonText,imgUrl}) =>{
  return(
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m ="10">
      {purpose}
      <Image src={imgUrl} alt="banner" width={500} height={300}/>
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
        <Text fontSize="lg" color="gray.700" paddingTop="3" paddingBottom="3">{desc1}<br/>{desc2}</Text>     
        <Button bg="blue.300" color="white" fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button> 
      </Box>
    </Flex>
  )
}



export default function Home() {
  return (
    <div className={styles.container}>
      <Banner purpose={"for Sale"}/>
      <Banner purpose={"for rent"}/>
    </div>
  )
}

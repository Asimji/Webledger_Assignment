import { Box, Button, Center, Grid, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
const [product,setProduct]=useState([]);
const [inptValue,setinptValue]=useState("")

const handleSearch=()=>{
    fetch(`${process.env.REACT_APP_URL}/recipe/get?query=${inptValue}`).then(res=>res.json()).then((res)=>{setProduct(res.data);console.log(res)}).catch((e)=>console.log(e))
}


    console.log(inptValue)

  return (
    <Box>
        <Box 
        display="flex"
        justifyContent="center"  
        alignItems="center"     
        gap="5vh"
        m={{xl:'2vh 50vh 0 50vh'}}
        >
     <Input placeholder='Search for Item' onChange={(e)=>setinptValue(e.target.value)} />
     <Button onClick={handleSearch}>Search</Button>
        </Box>
        <Grid gridTemplateColumns={'repeat(4,1fr)'}>
       {product.length>0 && product.map((item)=>{
        return <Box key={item.id} mt={'10vh'} ml={'5vh'}>
            <Box h={'25vh'} w={'20vw'} >
            <Image w={'100%'} h={'100%'} src={item.image} alt={'hello'} borderRadius={'5vh'}/>
            </Box>
            <Text>Title: {item.title}</Text>
            <Link to={`/${item.id}`}>View Detail</Link>
        </Box>
       })}
        </Grid>
    </Box>
  )
}

export default HomePage

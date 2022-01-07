// import styled from "styled-components";
import Card from "../Card/Card";
import { StyledWrapper } from "./styles";


// fetch request
// export const getStaticProps = async () =>{
//     const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
//     const data = await res.json();
//     console.log(data);

//     return {
//         props: {nasaimages: data}
//     }
// }

const CardList = ({ nasaimages }) => {
    return (
        <StyledWrapper>
            {/* {
                nasaimages.map((Nasaimage, i) =>(
                    <Card key={i} image={}/>
                ))
            } */}
            
            <Card/>
            <Card/>
            <Card/>
        </StyledWrapper>
    );
}
 
export default CardList;
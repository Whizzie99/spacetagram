// import { useLocalStorage } from "../../Hooks/useLocalStorage";
import Image from "next/image";
import { CalendarIcon, HeartIcon } from '@heroicons/react/outline'
import { StyledCard, StyledImageDiv, StyledBody, StyledHead, StyledTitle, StyledDate, StyledContent } from "./styles";

import sample from '../../public/images/1.jpg'
import { useState } from "react";


const Card = () => {

    const [liked, setLiked] = useState(false);
    const changeFill = liked ? 'red' : 'none';
    const changeStroke = liked ? 'red' : 'black';

    const isLiked = () =>{
        setLiked(!liked);
    }

    return (
        <StyledCard>
            <StyledImageDiv>
                <Image src={sample} layout="fill" placeholder="blur" objectFit="cover" alt="sample image"/>
            </StyledImageDiv>
            <StyledBody>
                <StyledHead>
                    <div>
                        <StyledTitle>some shit</StyledTitle>
                        <StyledDate>
                            <CalendarIcon/>
                            <span>2021-02-01</span>
                        </StyledDate>
                    </div>
                    <div>
                        {liked ? 
                        <HeartIcon onClick={isLiked} style={{fill: changeFill, stroke: changeStroke}}/> : 
                        <HeartIcon onClick={isLiked} style={{fill: changeFill, stroke: changeStroke}}/>}
                    </div>
                </StyledHead>
                <StyledContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, assumenda ipsam quas magnam voluptatibus voluptatem laboriosam, repellat aperiam ut, vitae explicabo sed! Cum ducimus sunt voluptatum nesciunt recusandae, quis facere.</p>
                </StyledContent>
            </StyledBody>
        </StyledCard>
    );
}
 
export default Card;
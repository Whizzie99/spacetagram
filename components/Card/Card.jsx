import Image from "next/image";
import { CalendarIcon, HeartIcon } from '@heroicons/react/outline'
import { StyledCard, StyledImageDiv, StyledBody, StyledHead, StyledTitle, StyledDate, StyledContent } from "./styles";
import { useState } from "react";


const Card = ({title, image, date, description}) => {

    const [liked, setLiked] = useState(false);
    const changeFill = liked ? 'red' : 'none';
    const changeStroke = liked ? 'red' : 'black';

    const isLiked = () =>{
        setLiked(!liked);
    }

    return (
        <StyledCard>
            <StyledImageDiv>
                <Image src={image} layout="fill" objectFit="cover" alt={title}/>
            </StyledImageDiv>
            <StyledBody>
                <StyledHead>
                    <div>
                        <StyledTitle>{title}</StyledTitle>
                        <StyledDate>
                            <CalendarIcon/>
                            <span>{date}</span>
                        </StyledDate>
                    </div>
                    <div>
                        {liked ? 
                        <HeartIcon onClick={isLiked} style={{fill: changeFill, stroke: changeStroke}}/> : 
                        <HeartIcon onClick={isLiked} style={{fill: changeFill, stroke: changeStroke}}/>}
                    </div>
                </StyledHead>
                <StyledContent>
                    <p>{description}</p>
                </StyledContent>
            </StyledBody>
        </StyledCard>
    );
}
 
export default Card;
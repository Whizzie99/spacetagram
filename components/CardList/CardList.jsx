import { useAxios } from 'use-axios-client';
import Card from "../Card/Card";
import Spinner from '../Spinner/Spinner';
import { StyledWrapper } from "./styles";


const CardList = () => {
    // fetch request
    const { data, loading, error } = useAxios({
        url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}&count=3`
    })

    return (
        <StyledWrapper>
            {loading && <Spinner/>}
            {error && <div>unable to fetch</div>}
            {
                data &&
                data.map((apod,i) =>(
                    <Card key={i} title={apod.title} image={apod.url} date={apod.date} description={apod.explanation}/>
                ))
            }
        </StyledWrapper>
    );
}
 
export default CardList;
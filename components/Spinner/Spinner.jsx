import Image from "next/image";
import { StyledWrapper } from "./styles";

// import test from '../../public/images/test.gif'

const Spinner = () => {
    return (
        <StyledWrapper>
            <div>
                <Image src="https://media0.giphy.com/media/hoIcq8JGrUeYHoUHuR/giphy.gif?cid=790b761161004beb73d84db3ec529f02c9809f62a05bce8e&rid=giphy.gif&ct=s" objectFit="cover" layout="fill" alt="loading space rocket" priority="true" />
            </div>
        </StyledWrapper>
    );
}
 
export default Spinner;
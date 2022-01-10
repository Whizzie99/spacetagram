import Image from "next/image";
import { StyledWrapper } from "./styles";

import test from '../../public/images/test.gif'

const Spinner = () => {
    return (
        <StyledWrapper>
            <div>
                <Image src={test} objectFit="cover" layout="fill" alt="testing" priority="true" />
            </div>
        </StyledWrapper>
    );
}
 
export default Spinner;
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Container = ({children}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}
 
export default Container;

// PROPTYPE
Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ])
}


// STYLES
const StyledContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`
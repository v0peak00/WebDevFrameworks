import styled from "styled-components";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
import Product5 from "./Product5";
import Product6 from "./Product6";

const Container = styled.div`
`
const Flex = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`

display: flex;
flex-wrap: wrap;
width: 75%;
height: 80%;
`

const Products = () => {
    return (
        <Container>
            <Flex>
            <Wrapper>
                <Product1/>
                <Product2/>
                <Product3/>
                <Product4/>
                <Product5/>
                <Product6/>
            </Wrapper>
            </Flex>
        </Container>
    )
}

export default Products

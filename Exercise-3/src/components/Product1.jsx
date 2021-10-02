import styled from "styled-components"
import { products } from "./Data";



const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 300px;

`
const Image = styled.img`
height: 30%;

`
const Desc = styled.div`
`
const Title = styled.h1`
margin-top: 10px;
font-weight: 350;
font-size: 11px;
`
const Rating = styled.div`

`
const RatingsStars = styled.span`
`
const Ratings = styled.span`
font-size: 10px;

`
const Price = styled.div`

`
const PriceSpan1 = styled.span`
font-size: 13;
font-weight: 400;
`

const PriceSpan2 = styled.span`
font-size: 10px;

`
const Shipping = styled.div``

const ShippingDesc = styled.span`
color: #565959;
font-weight: 300;
font-size: 11px;
margin-right: 3px;`

const ShippingDate = styled.span`
color: #565959;
font-weight: 500;
font-size: 11px;
`
const ShippingPrice = styled.div`
color: #565959;
font-weight: 300;
font-size: 11px;
`
const Product1 = () => {
    return (
        
        <Container>
            
            <Image src="/images/product-1.png"/>
            
            <Desc>
                <Title>
                     {products[0].title}
                </Title>
            <Rating>
                <Ratings>{products[0].ratingCount}</Ratings>
            </Rating>
            <Price> 
                $
                <PriceSpan1>{products[0].priceWhole}</PriceSpan1>
                <PriceSpan2>{products[0].priceFraction}</PriceSpan2>
            </Price>
            <Shipping>
                <ShippingDesc>
                {products[0].shippingDef}
                </ShippingDesc>
            <ShippingDate>
                {products[0].shippingDate}
            </ShippingDate>
            </Shipping> 
            <ShippingPrice>${products[0].shippingPrice} shipping</ShippingPrice>
            </Desc>
             
        </Container>
        
    )
}

export default Product1

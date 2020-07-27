import React, { Component } from 'react';
import styled from 'styled-components';
// import hola from '../../../public/images/product.jpeg'

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: grey;
    align-items: center;
    

    img{
        width: 60%;
        margin: 0% 0%;
        box-shadow: 3px 3px #68686841;
    }
    p{
        margin: 2%;
    }
`

const Name = styled.h1`
    margin: 10px 0px 0px 0px;
`

const Price = styled.p`
    font-weight: bold;
    font-size: 19px;
    margin: 10% 0%;
`
const Brand = styled.p`
    font-size: 17px;
    margin: 0;
    font-weight: bold;
`
const Address = styled.p`
    margin: 0;
    font-weight: bold;
`

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: " ",
      price: " ",
      brand: " ",
      address: " ",
      image: './product.jpeg'
    };

  }
    componentDidMount(){
        fetch(`http://localhost:8000/product/${this.state.id}`, {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json'}})
            .then(res => res.json())
            .then(Product => {
                this.setState({
                    ...this.state,
                    name: Product[0].name,
                    price: Product[0].price,
                    brand: Product[0].brand,
                    address: Product[0].address

                })
                console.log('Detalle')
            })
    }

  render() {
    return (
      <DetailContainer>
          <img src='../images/product.jpeg'/>
          <Name>{this.state.name}</Name>
          <Price>{`€ ${this.state.price}`}</Price>
          <p>Fabricado por:</p>
          <Brand>{`${this.state.brand}`}</Brand>
          <p>Encuéntralo en:</p>
          <Address>{this.state.address}</Address>
      </DetailContainer>
    );
  }
}

export default ProductDetail;
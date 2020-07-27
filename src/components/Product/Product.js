import React, { Component } from 'react'
import './Product.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fafbfc;
  box-shadow: 3px 3px #68686841;
  margin: 20px 15%;
  border-radius: 5px;
  padding: 5% 3%;
`;

const Name = styled.h1`
  text-decoration: none;
  text-align: left;
  font-size: 12px;
`;

const Price = styled.p`
  text-align: center;
  font-weight: bold;
`;

const Relevance = styled.p`
  text-align: center;
`;

const Image = styled.img`
  width: 20%;
  border: 1px solid grey;
`

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            Name: null,
            Price: null,
            Relevance: null,
            Image: null,
            Id: null

        }
    }

    componentDidMount(){
      console.log("El id de cada item", this.props.num)
    }

    render() {
        return (
          <Link to={ `/prodDetail/${this.props.num}` } className="links">
            <Card className="card">
                <Image src='./images/product.jpeg' />
                {/* <div id='rectangle'/> */}
                <Name>{this.props.title}</Name>
                <Price>{`€ ${this.props.price}`}</Price>
                <Relevance>{this.props.relevance}</Relevance> 
            </Card>
          </Link>
        )
    }
}

export default Product

import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.div`
    color: grey;
    font-size: 2em;
    font-weight: bold;
    margin: 20px 0px;
`


export default class Header extends Component {
    render() {
        return (
            <Title>
                TIENDA DE MASCARILLAS
            </Title>
        )
    }
}

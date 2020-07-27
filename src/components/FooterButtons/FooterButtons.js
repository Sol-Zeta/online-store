import React, { Component } from 'react'
import styled from 'styled-components'
import PageContext from '../../contexts/pageContext.js'

const FooterButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fafbfc;

    button{
        margin: 5%;
        display: flex;
        justify-content: space-around;
        background: grey;
        color: white;
        margin: 10px 0.5%;
        border-radius: 2px;
        border: none;
        padding: 2% 10%;
        font-size: 10px;
        font-weight: bold;
    }
`

class FooterButtons extends Component {
    static contextType = PageContext
    render() {
        return (
            <FooterButtonsContainer>
                <PageContext.Consumer>
                    {(context)=>
                    <button onClick={() => context.prevPage()}>Anterior</button>
                    }
                </PageContext.Consumer>
                <PageContext.Consumer>
                    {(context)=>
                    <button onClick={() => context.nextPage()}>Siguiente</button>
                    }
                </PageContext.Consumer>
            </FooterButtonsContainer>
        )
    }
}

export default FooterButtons

import React, { Component } from 'react'
import PageContext from '../../contexts/pageContext.js'

class NextButton extends Component {
    static contextType = PageContext
    render() {
        return (
            <div>
                <PageContext.Consumer>
                    {(context)=>
                    <button onClick={() => context.nextPage()}>Siguiente</button>
                    }
                </PageContext.Consumer>
                
            </div>
        )
    }
}


export default NextButton
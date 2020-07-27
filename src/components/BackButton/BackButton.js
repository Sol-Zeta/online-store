import React, { Component } from 'react'
import PageContext from '../../contexts/pageContext.js'

class BackButton extends Component {
    static contextType = PageContext
    render() {
        return (
            <div>
                <PageContext.Consumer>
                    {(context)=>
                    <button onClick={() => context.prevPage()}>Anterior</button>
                    }
                </PageContext.Consumer>
                
            </div>
        )
    }
}


export default BackButton
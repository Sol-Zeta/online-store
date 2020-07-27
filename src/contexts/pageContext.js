import React, {createContext} from 'react'

const PageContext = createContext()

export const PageProvider = PageContext.Provider
export const PageConsumer = PageContext.Consumer

export default PageContext
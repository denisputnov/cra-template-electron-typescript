import React from 'react'
import { HeaderWrapper, Root } from './styled'
import { LayoutProps } from './types'

function Layout({ 
    header, 
    content, 
    footer, 
    headerless, 
    footerless
    }: LayoutProps) {
    
  const displayHeader = (() => {
    if (headerless) return null
    if (header) return header
    return <HeaderWrapper />
  })()

  const displayFooter = (() => {
    if (footerless) return null
    return footer
  })()

  return (
    <Root>
      {displayHeader}
      {content}
      {displayFooter}
    </Root>  
  )
}

export default Layout
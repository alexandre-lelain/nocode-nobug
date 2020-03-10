import React, { useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min'

import { Code } from 'styles'

const GlobalStyle = createGlobalStyle`
  ${Code};
`

const CodeBlock = ({ language = 'jsx', value }: CodeBlockProps) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <GlobalStyle />
      <pre>
        <code className={'language-' + language}>{value}</code>
      </pre>
    </>
  )
}

interface CodeBlockProps {
  language: string
  value: string
}

export default CodeBlock

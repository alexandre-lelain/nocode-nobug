import React from 'react'

const CodeBlock: React.FC<CodeBlockProps> = ({ language = 'jsx', value }: CodeBlockProps) => {
  return (
    <pre>
      <code className={'language-' + language}>{value}</code>
    </pre>
  )
}

interface CodeBlockProps {
  language: string
  value: string
}

export default CodeBlock

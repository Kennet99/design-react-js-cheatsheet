import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

export function SyntaxHighlightedCode({ code, language = 'javascript', explanation }) {
  const codeRef = useRef(null)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [code])

  // Force JSX language detection for React code
  const detectedLanguage = code.includes('<') && code.includes('>') 
    ? 'javascript' 
    : language

  return (
    <div className="code-example">
      <pre>
        <code ref={codeRef} className={`language-${detectedLanguage}`} style={{ color: '#d4d4d4' }}>
          {code}
        </code>
      </pre>
      {explanation && (
        <div className="explanation">
          <strong>💡 Explanation:</strong> {explanation}
        </div>
      )}
    </div>
  )
}

export function CodeExample({ code, explanation, language = 'javascript' }) {
  // Force JSX language detection for React code
  const detectedLanguage = code.includes('<') && code.includes('>') 
    ? 'javascript' 
    : language
  
  return <SyntaxHighlightedCode code={code} language={detectedLanguage} explanation={explanation} />
}

export function SyntaxExample({ code, language = 'javascript' }) {
  const codeRef = useRef(null)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [code])

  // Force JSX language detection for React code
  const detectedLanguage = code.includes('<') && code.includes('>') 
    ? 'javascript' 
    : language

  return (
    <pre className="syntax-code">
      <code ref={codeRef} className={`language-${detectedLanguage}`} style={{ color: '#d4d4d4' }}>
        {code}
      </code>
    </pre>
  )
}

export function ReferenceCode({ code, language = 'javascript' }) {
  const codeRef = useRef(null)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <pre className="reference-code">
      <code ref={codeRef} className={`language-${language}`} style={{ color: '#d4d4d4' }}>
        {code}
      </code>
    </pre>
  )
} 
import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'

export function SyntaxHighlightedCode({ code, language = 'javascript', explanation }) {
  const codeRef = useRef(null)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <div className="syntax-highlighted-code">
      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
      {explanation && (
        <div className="code-explanation">
          <p>{explanation}</p>
        </div>
      )}
    </div>
  )
}

export function CodeExample({ code, explanation, language = 'javascript' }) {
  return (
    <div className="code-example">
      <SyntaxHighlightedCode code={code} language={language} explanation={explanation} />
    </div>
  )
}

export function SyntaxExample({ code, language = 'javascript' }) {
  return (
    <div className="syntax-example">
      <SyntaxHighlightedCode code={code} language={language} />
    </div>
  )
}

export function ReferenceCode({ code, language = 'javascript' }) {
  return (
    <div className="reference-code">
      <SyntaxHighlightedCode code={code} language={language} />
    </div>
  )
} 
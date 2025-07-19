import React from 'react'

// Code Example Component
function CodeExample({ code, explanation }) {
  return (
    <div className="code-example">
      <pre><code>{code}</code></pre>
      <div className="explanation">
        <strong>💡 Explanation:</strong> {explanation}
      </div>
    </div>
  )
}

export default CodeExample 
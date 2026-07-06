import { Fragment } from 'react'
import { Highlight } from 'prism-react-renderer'

// Tokens are styled by src/styles/prism.css via `.token.*` classes. The empty
// theme is the documented v2 way to opt out of inline theme styles (v1's
// `theme={undefined}` + defaultProps equivalent).
const cssOnlyTheme = { plain: {}, styles: [] }

export function Fence({ children, language }) {
  return (
    <Highlight
      code={children.trimEnd()}
      language={language}
      theme={cssOnlyTheme}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className} style={style}>
          <code>
            {tokens.map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                {'\n'}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}

import Prism from 'prismjs'

const Code = ({ children, language = 'javascript' }) => {
  return (
    <>
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              children,
              Prism.languages[language.toLowerCase()] ||
                Prism.languages.javascript
            ),
          }}
        />
      </pre>

      <style jsx>{`
        pre {
          tab-size: 2;
        }

        code {
          overflow: auto;
          display: block;
          padding: 0.8rem;
          line-height: 1.5;
          background: #f5f5f5;
          border-radius: var(--radius);
          font-family: Dankmono, DankMono-it, source-code-pro, Menlo, Monaco,
            Consolas, Courier New, monospace;
          font-variant-ligatures: common-ligatures;
        }
      `}</style>
    </>
  )
}

export default Code

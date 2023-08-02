import { importLocale } from '@/utils/index';
import { evaluateSync } from '@mdx-js/mdx';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import { makeTheme } from '@theme-ui/css/utils';
import { useThemedStylesWithMdx } from '@theme-ui/mdx';
import { base } from '@theme-ui/presets';
import Prism from '@theme-ui/prism';
import pre from '@theme-ui/prism/presets/dracula.json';
import * as runtime from 'react/jsx-runtime';
import remarkGfm from 'remark-gfm';
import { ThemeUIProvider } from 'theme-ui';

const theme = makeTheme({
  ...base,
  // colors: {
  //   text: '#383838',
  //   primary: '#a862ea'
  // },
  styles: {
    ...base.styles,
    code: {
      fontFamily: 'monospace',
      fontSize: 1
    },
    blockquote: {
      margin: 0,
      borderLeft: '4px solid #c0c0c0',
      padding: '10px 15px',
      color: '#777777',
      backgroundColor: '#fff',
      p: {
        margin: 0
      }
    },
    pre: {
      p: 3,
      fontSize: 3,
      lineHeight: 'body',
      ...pre
    }
  }
});
const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism
};

function Provider({ path, children }) {
  const EvaluateFun = evaluateSync(importLocale(path), {
    ...runtime,
    // format: 'mdx',
    remarkPlugins: [remarkGfm]
  });
  const MdTag = EvaluateFun.default;
  const componentsWithStyles = useThemedStylesWithMdx(
    useMDXComponents(components)
  );

  return (
    <ThemeUIProvider theme={theme}>
      <MdTag components={componentsWithStyles} />
      <MDXProvider components={componentsWithStyles}>{children}</MDXProvider>
    </ThemeUIProvider>
  );
}
export default Provider;

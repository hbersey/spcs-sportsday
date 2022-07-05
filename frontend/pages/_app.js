import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from "@mantine/modals"
import Particles from '../components/particles'

import "../styles.css"
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


function MyApp({ Component, pageProps }) {
  return <MantineProvider withGlobalStyles withNormalizeCSS>
    <Particles />
    <ModalsProvider>
      <Component {...pageProps} />
    </ModalsProvider>
  </MantineProvider>
}

export default MyApp

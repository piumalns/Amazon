import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import {providers as AuthProvider} from "next-auth/client"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

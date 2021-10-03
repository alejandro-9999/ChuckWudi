import type { NextPage } from 'next'
import Head from 'next/head'
import SignInScreen from '../components/main/main';
import store from '../Redux/store';
import { Provider } from 'react-redux';

const Home: NextPage = () => {
  return (
    <div>
      <Provider store={store}>
        <SignInScreen/>
      </Provider>
    </div>
  )
}

export default Home

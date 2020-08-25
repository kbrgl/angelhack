import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Home from './pages/Home'
import configureStore from './store'

const { store, persistor } = configureStore()

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Home path="/" />
      </Router>
    </PersistGate>
  </Provider>
)

export default App

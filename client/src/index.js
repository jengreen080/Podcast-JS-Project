import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.taddy.org',
  // does the above change? Would this be localhost
  cache: new InMemoryCache(),
  headers: {
    "X-USER-ID": 420,
    "X-API-KEY": "73cb0e88964ec9a366654f8a9b48a1b145ec922e6918fc6d1e74fe2bd6268e0b7f46b4bb2dae0199816e0ceadf00f5c020"
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

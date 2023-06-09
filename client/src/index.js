import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
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
    "X-USER-ID": 440,
    "X-API-KEY": "9e394effe2152c24b7382130f9e9f587c894099539260e24db752173ea2c55bb114acaf4c288d7ca901e09e0b50f7f8d4c"
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  <Router>
    <App />
    </Router>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

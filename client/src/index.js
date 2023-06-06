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
    "X-USER-ID": 432,
    "X-API-KEY": "d9cca0df12000a1c787d210ea08dc369e31814b1db056398d8a1ed7d0d5687fca8bb27e568de595737980c0731f25c7be5"
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

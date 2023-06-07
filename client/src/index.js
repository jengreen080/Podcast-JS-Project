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
    "X-USER-ID": 438,
    "X-API-KEY": "fc365a9f910d04cbcd255cbedfe73159cbd36d5d7c8f7feafa4ec829816af52c81006e0a0c5a4f69ccd721c50f5f79d895"
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

import './styles/index.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/Stores/store';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: 'https://ny-apollo-server-9xeh.vercel.app/graphql',
});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
);
``;

reportWebVitals();

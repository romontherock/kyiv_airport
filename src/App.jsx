import React from 'react';
import InteractInfo from './flights/components/InteractInfo';
import { Provider } from 'react-redux';
import store from './store';

// const App = () => {
//   return <InteractInfo />;
// };

const App = () => (
  <Provider store={store}>
    <InteractInfo />
  </Provider>
);

export default App;

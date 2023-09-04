import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
    <MemoryRouter>
      <App />
    </MemoryRouter>
    </Provider>
  );
});

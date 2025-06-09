import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './routes';
import store, { persistor } from './store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStandaloneToast } from '@chakra-ui/toast';

const { ToastContainer, toast } = createStandaloneToast();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </StrictMode>
);

toast({
  title: 'Teste de Toast',
  description: 'Está funcionando o Toast',
  status: 'success',
  duration: 3000,
});

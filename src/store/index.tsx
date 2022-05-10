import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    stories: reducer,
  },
  middleware: [ReduxThunk],
});

export default store;

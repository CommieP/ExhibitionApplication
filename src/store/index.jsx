import { configureStore } from '@reduxjs/toolkit'
import IndexSlicer from './reducers/IndexSlicer';

const store =  configureStore({
  reducer: {
    IndexReducer : IndexSlicer
  },
})

export default store;
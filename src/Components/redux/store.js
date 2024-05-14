import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './features/tasks/tasksSlice';
// import userSlice from './features/user/userSlice';
// import baseApi from './features/api/baseApi';

const store = configureStore({
    reducer: {

        tasks: tasksSlice,

    },
    //   middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(baseApi.middleware),
});


export default store;
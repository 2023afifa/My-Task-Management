import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import auth from "../../../Firebase/firebase.config"

const initialState = {
    name: '',
    email: '',
    isLoading: true,
    isError: false,
    error: "",
};

export const createUser = createAsyncThunk("userSlice/createUser", async ({ email, password, name, photo }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
    })
    console.log(data);

    return {
        email: data.user.email,
        name: data.user.displayName,
        photo: data.user.photoURL,
    };
})


export const loginUser = createAsyncThunk("userSlice/loginUser", async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password)
    console.log(data);

    return {
        email: data.user.email,
    };
})


export const googleLoginUser = createAsyncThunk("userSlice/googleLoginUser", async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider);

    return {
        email: data.user.email,
    };
})

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.name = payload.name;
            state.email = payload.email;
            state.photo = payload.photo;
        },
        toggleLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        logout: (state) => {
            state.name = "";
            state.email = "";
            state.photo = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.email = "";
                state.name = "";
                state.photo = "";
                state.error = "";
            })
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.email = payload.email;
                state.name = payload.name;
                state.photo = payload.photo;
                state.error = "";
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.email = "";
                state.name = "";
                state.photo = "";
                state.error = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.email = "";
                state.error = "";
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.email = payload.email;
                state.error = "";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.email = "";
                state.error = action.error.message;
            })
            // .addCase(googleLoginUser.pending, (state) => {
            //     state.isLoading = true;
            //     state.isError = false;
            //     state.email = "";
            //     state.error = "";
            // })
            // .addCase(googleLoginUser.fulfilled, (state, { payload }) => {
            //     state.isLoading = false;
            //     state.isError = false;
            //     state.email = payload.email;
            //     state.error = "";
            // })
            // .addCase(googleLoginUser.rejected, (state, action) => {
            //     state.isLoading = false;
            //     state.isError = true;
            //     state.email = "";
            //     state.error = action.error.message;
            // })
    },
})


export const { setUser, toggleLoading, logout } = userSlice.actions;

export default userSlice.reducer;
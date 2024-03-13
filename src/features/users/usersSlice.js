import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateUser, fetchDeleteUser, fetchSingleUser, fetchUpdateUser, fetchUsers } from "./usersThunk";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: 'idle',
        error: null,
        user: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

        builder
            .addCase(fetchSingleUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchSingleUser.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.user = action.payload;
            })
            .addCase(fetchSingleUser.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

        builder
            .addCase(fetchCreateUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchCreateUser.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.users.push(action.payload);
                console.log(state)
            })
            .addCase(fetchCreateUser.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

        builder
            .addCase(fetchUpdateUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchUpdateUser.fulfilled, (state, action) => {
                const updatedUser = action.payload;
                state.status = 'fulfilled';
                state.users.map((user) => (
                    user.id === updatedUser.id ? updatedUser : user
                ));
            })
            .addCase(fetchUpdateUser.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
        builder
            .addCase(fetchDeleteUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchDeleteUser.fulfilled, (state, action) => {
                const id = action.payload;
                state.status = 'fulfilled';
                state.users.filter((user) => (
                    user.id !== id
                ))
            })
            .addCase(fetchDeleteUser.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })

    }
})

export const getUsersList = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;
export const getSingleUser = (state) => state.users.user;

export default usersSlice.reducer;
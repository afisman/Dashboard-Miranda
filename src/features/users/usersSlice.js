import { createSlice, isAnyOf } from "@reduxjs/toolkit";
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
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.users = action.payload;
            })
            .addCase(fetchSingleUser.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.user = action.payload;
            })
            .addCase(fetchCreateUser.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.users.push(action.payload);
            })
            .addCase(fetchUpdateUser.fulfilled, (state, action) => {
                const updatedUser = action.payload;
                state.status = 'fulfilled';
                state.users.map((user) => {
                    return user.id == updatedUser.id ? updatedUser : user
                });
            })
            .addCase(fetchDeleteUser.fulfilled, (state, action) => {
                const id = action.payload;
                state.status = 'fulfilled';
                state.users.filter((user) => (
                    user.id !== id
                ));
            })
            .addMatcher(isAnyOf(
                fetchUsers.pending,
                fetchCreateUser.pending,
                fetchSingleUser.pending,
                fetchDeleteUser.pending,
                fetchUpdateUser.pending
            ), (state) => {
                state.status = 'pending'
            })
            .addMatcher(isAnyOf(
                fetchUsers.rejected,
                fetchCreateUser.rejected,
                fetchSingleUser.rejected,
                fetchDeleteUser.rejected,
                fetchUpdateUser.rejected
            ), (state, action) => {
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
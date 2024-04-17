import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCreateUser, fetchDeleteUser, fetchSingleUser, fetchUpdateUser, fetchUsers } from "./usersThunk";
import { UserInterface } from "../../interfaces/user/userInterface";
import { RootState } from "../../app/store";

interface UserInitialStateInterface {
    data: UserInterface[]
    status: "idle" | "pending" | "fulfilled" | "rejected"
    error: string | null
    user: UserInterface

}

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
        user: {} as UserInterface
    } as UserInitialStateInterface,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(fetchSingleUser.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.user = action.payload;
            })
            .addCase(fetchCreateUser.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data.push(action.payload);
                state.status = 'idle';
            })
            .addCase(fetchUpdateUser.fulfilled, (state, action) => {
                const updatedUser = action.payload;
                state.status = 'fulfilled';
                state.data.map((user) => {
                    return user._id == updatedUser.id ? updatedUser : user
                });
                state.status = 'idle';
            })
            .addCase(fetchDeleteUser.fulfilled, (state, action) => {
                const id = action.payload;
                state.status = 'fulfilled';
                state.data.filter((user) => (
                    user._id !== id
                ));
                state.status = 'idle';
            })
            .addMatcher(isAnyOf(
                fetchUsers.pending,
                fetchCreateUser.pending,
                fetchSingleUser.pending,
                fetchDeleteUser.pending,
                fetchUpdateUser.pending
            ), (state) => {
                state.status = 'pending';
            })
            .addMatcher(isAnyOf(
                fetchUsers.rejected,
                fetchCreateUser.rejected,
                fetchSingleUser.rejected,
                fetchDeleteUser.rejected,
                fetchUpdateUser.rejected
            ), (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || null;
            })
    }
})

export const getUsersList = (state: RootState) => state.users.data;
export const getUsersStatus = (state: RootState) => state.users.status;
export const getUsersError = (state: RootState) => state.users.error;
export const getSingleUser = (state: RootState) => state.users.user;

export default usersSlice.reducer;
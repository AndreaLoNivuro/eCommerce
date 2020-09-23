import { Action, createReducer, on } from '@ngrx/store';
import { Address } from 'src/app/core/model/address.interface';
import { User } from 'src/app/core/model/user.interface';
import { addAddressInfo, initUser, loginUserFailure } from './login.action';

export interface UsersState {
    currentUser: User;
    errorMessage: string | null;
    usersAddress: Address[];
}

export const initialState: UsersState = {
    currentUser: JSON.parse(sessionStorage.getItem('utente')),
    errorMessage: null,
    usersAddress: []
};

const usersReducerFun = createReducer(
    initialState,
    on(initUser, (state, { user }) => ({ ...state, currentUser: user })),
    on(loginUserFailure, (state, {error}) => ({...state, user: null, errorMessage: error})),
    on(addAddressInfo, (state, {address}) => ({...state, usersAddress:[...state.usersAddress, address]})),
);

export function usersReducer(state: UsersState | undefined, action: Action) {
    return usersReducerFun(state, action);
}
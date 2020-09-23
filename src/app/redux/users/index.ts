import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectRouteParams } from '../router';
import { UsersState } from './login.reducers';

export const selectUsersState = (state: AppState) => state.usersState;
export const selectAddressState = (state: AppState) => state.usersState.usersAddress;

export const getCurrentUser = createSelector(
    selectUsersState,
    (state: UsersState) => state.currentUser
);

export const selectErrorMessage = createSelector(
    selectUsersState,
    (state: UsersState) => state.errorMessage
);

export const getCurrentNavigatedUserAddress = createSelector(
    selectUsersState,
    selectRouteParams,
    (state: UsersState, params: Params) => state.usersAddress.find(item => item.id === Number(params['id']))
);
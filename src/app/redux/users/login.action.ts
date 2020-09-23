import { createAction, props } from '@ngrx/store';
import { Address } from 'src/app/core/model/address.interface';
import { User } from 'src/app/core/model/user.interface';

//login
export const initUser = createAction('[User] init', props<{user: User}>());
export const loginUser = createAction('[Auth] Login', props<{username: string, password: string}>());
export const loginUserSuccess = createAction('[Auth] Login Success', props<{user: User}>());
export const loginUserFailure = createAction('[Auth] Login Failure', props<{error: string}>());

//registrazione
export const signUpUser = createAction('[Auth] signUp', props<{username: string, name: string, surname: string, password: string}>());
export const signUpUserSuccess = createAction('[Auth] signUp Success', props<{user: User}>());

//address
// export const addAddressInfo = createAction('[Auth] add address info', props<{cellulare?: string, citta?: string, cap?: string, indirizzo?: string, numerocivico?: string, informazioni?: string}>());
// export const addAddressInfoSuccess = createAction('[Auth] add address info', props<{cellulare?: string, citta?: string, cap?: string, indirizzo?: string, numerocivico?: string, informazioni?: string}>());

export const addAddressInfo = createAction('[Auth] add address info', props<{address: Address}>());
export const addAddressInfoSuccess = createAction('[Auth] add address info', props<{address: Address}>());
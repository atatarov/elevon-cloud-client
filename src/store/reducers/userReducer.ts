import { createReducer } from '@reduxjs/toolkit';

interface IDefaultState {}

export const defaultState: IDefaultState = {};

export const userReducer = createReducer(defaultState, (builder) => {});

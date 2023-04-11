
import { Action } from "@ngrx/store";
import { actionTypes } from "./user.actions";
import { User } from "../models/user.model";
 interface InitialState {
  users: User[];
 }

 interface extendedAction extends Action {
  payload?: any;
 }

const initialState: InitialState = {

  users: [],

}

export function usersReducer(state = initialState, action: extendedAction) {
  switch(action.type) {
    case actionTypes.getUsers:
      return {
        ...state,
        users: [...action.payload]
      }
    case actionTypes.updateUsers:
      const newUsers = state.users.map(user=> {
        console.log(user)
        if (user.id === action.payload) {
          user.isActive = !user.isActive;
        }
        return user;
      })
      return {
        ...state,
        users: newUsers,
      }
    default:
      return state;
  }
}
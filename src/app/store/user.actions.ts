import { Action } from "@ngrx/store";
import { User } from "../models/user.model";
import { Injectable } from "@angular/core";
import { HttpService } from "../service/http.service";

export const actionTypes = {
  getUsers: 'GET_USERS',
  updateUsers: 'UPDATE_USERS',
}

export class ChangeActiveStatus implements Action {
  readonly type = actionTypes.updateUsers;
  constructor(public payload: number ) {}
}

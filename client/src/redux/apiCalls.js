import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess, logoutStart,} from "./userRedux";
import { publicRequest,userRequest } from "../requestMethods";
import { addOrderStart, addOrderFailure,addOrderSuccess } from "./orderRedux";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
export const logout = async (dispatch) => {
  dispatch(logoutStart());
};

export const addOrder = async (dispatch, order) => {
  dispatch(addOrderStart());
  try {
    const res = await userRequest.post(`/orders`, order);
    dispatch(addOrderSuccess(res.data));
  } catch (err) {
    dispatch(addOrderFailure());
  }
};
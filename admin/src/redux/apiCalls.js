import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import {
  getClientFailure,
  getClientStart,
  getClientSuccess,
  deleteClientFailure,
  deleteClientStart,
  deleteClientSuccess,
  updateClientFailure,
  updateClientStart,
  updateClientSuccess,
  addClientFailure,
  addClientStart,
  addClientSuccess,
} from "./clientRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/clients`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const getClients = async (dispatch) => {
  dispatch(getClientStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getClientSuccess(res.data));
  } catch (err) {
    dispatch(getClientFailure());
  }
};

export const deleteClient = async (id, dispatch) => {
  dispatch(deleteClientStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteClientSuccess(id));
  } catch (err) {
    dispatch(deleteClientFailure());
  }
};

export const updateClient = async (id, client, dispatch) => {
  dispatch(updateClientStart());
  try {
    // update
    dispatch(updateClientSuccess({ id, client }));
  } catch (err) {
    dispatch(updateClientFailure());
  }
};
export const addClient = async (client, dispatch) => {
  dispatch(addClientStart());
  try {
    const res = await userRequest.post(`/clients`, client);
    dispatch(addClientSuccess(res.data));
  } catch (err) {
    dispatch(addClientFailure());
  }
};
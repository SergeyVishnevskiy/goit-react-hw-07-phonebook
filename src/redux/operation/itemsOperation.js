import { axios } from "axios";
import { usersGet, userAdd, userDelete } from "../actions/itemsAction";

const options = {
  headers: { "Content-Type": "application/json" },
};
export const getUserOperation = () => async (dispatch) => {
  try {
    const result = await axios.get("http://localhost:2000/contacts");
    dispatch(usersGet(result.data));
  } catch (error) {
    console.log("Something went wrong");
  }
};
export const postUserOperation = (item) => async (dispatch) => {
  try {
    const result = await axios.post(
      "http://localhost:2000/contacts",
      item,
      options
    );
    dispatch(userAdd(result.data));
  } catch (error) {
    console.log("Something went wrong");
  }
};
export const deleteUserOption = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:2000/contacts/${id}`);
    dispatch(userDelete(id));
  } catch (error) {
    console.log("Something went wrong");
  }
};

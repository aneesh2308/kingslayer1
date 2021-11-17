import { createSlice } from "@reduxjs/toolkit";
import { getAccessToken } from "../../api/user.service";

export const initialState = {
  loading: false,
  error: null,
  userId: "",
  userName: "",
  isAuthenticated: false,
  userEmail: "",
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setUser(state, action) {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    authFailure(state, action) {
      state.loading = false;
      state.error = action.payload || "Could not authorize client.";
    },
    authComplete(state) {
      state.loading = false;
    },
  },
});

export const {
  authStart,
  setUserId,
  setIsAuthenticated,
  setUser,
  setAccessToken,
  authFailure,
  authComplete,
} = authSlice.actions;

export default authSlice.reducer;

export const authorizeClient = () => async dispatch => {
  try {
    dispatch(authStart());
    const response = await getAccessToken();
    dispatch(response.accessToken);
    dispatch(authComplete());
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      dispatch(authFailure(data));
    }
  }
};

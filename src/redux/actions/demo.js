import {
	CREATE_DEMO,
	DELETE_DEMO,
	GET_DEMOS,
	GET_DEMO,
	UPDATE_DEMO,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getDemos = () => async (dispatch) => {
	try {
		const { data } = await api.fetchDemos();
		dispatch({ type: GET_DEMOS, data });
	} catch (error) {
		console.log(error);
	}
};

export const getDemo = (id) => async (dispatch) => {
	try {
		const { data } = await api.fetchDemo(id);
		dispatch({ type: GET_DEMO, data: [data] });
	} catch (error) {
		console.log(error);
	}
};

export const createDemo = (formData, navigate) => async (dispatch) => {
	try {
		const { data } = await api.createDemo(formData);
		dispatch({ type: CREATE_DEMO, data });
		navigate("/teachers");
	} catch (error) {
		console.log(error);
	}
};

export const updateDemo = (id, demo) => async (dispatch) => {
	try {
		const { data } = await api.updateDemo(id, demo);
		dispatch({ type: UPDATE_DEMO, id, data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteDemo = (id) => async (dispatch) => {
	try {
		await api.deleteDemo(id);
		dispatch({ type: DELETE_DEMO, id });
	} catch (error) {
		console.log(error);
	}
};

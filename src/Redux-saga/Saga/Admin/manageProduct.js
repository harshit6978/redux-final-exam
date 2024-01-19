import { call, put } from "redux-saga/effects";
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../../Admin/action/action";
import { get_product } from "../../Admin/api/api";

export function* handle_Get_product_api(action) {
    try {
        const res = yield call(get_product, action);
        console.log(res, "from manageProduct");
        const status = res.status;
        const data = res.data;

        if (status === 200 || status === 201) {
            yield put({ type: GET_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: GET_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: GET_PRODUCT_ERROR, e });
    }
}
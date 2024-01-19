import { takeLatest } from "@redux-saga/core/effects";
import { GET_PRODUCT_PROGRESS } from "../../Admin/action/action";
import { handle_Get_product_api } from "../Admin/manageProduct";

export function* get_product_saga() {
    yield takeLatest(GET_PRODUCT_PROGRESS, handle_Get_product_api);
}

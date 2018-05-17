import {SIGNED_IN,SET_GOALS} from "../constants";

export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    };
    return action;
}


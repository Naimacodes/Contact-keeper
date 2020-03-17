import { REGISTER_SUCCESS } from '../types'

export default (state, action) => {
switch (action.type) {
case REGISTER_SUCCESS:
return {
...state,
something: action.payload,
};
default:
return {
...state
};
}
};
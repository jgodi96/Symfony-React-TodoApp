import {
    START_REQUEST,
    END_REQUEST,
    MOBILE_NAV_SHOW,
    MOBILE_NAV_HIDE,
    START_SUCCESS_MESSAGE,
    END_SUCCESS_MESSAGE
  } from "./actions";
  
  const reducer = (state, action) => {
    if (action.type === START_REQUEST) {
      return { ...state, isSubmitting: true };
    }
    if (action.type === END_REQUEST) {
      return { ...state, isSubmitting: false };
    }
    if (action.type === MOBILE_NAV_SHOW) {
      return { ...state, showMobileNav: true };
    }
    if (action.type === MOBILE_NAV_HIDE) {
      return { ...state, showMobileNav: false };
    }
    if(action.type === START_SUCCESS_MESSAGE)
    {
      return {...state,showMessage:true}
    }
    if(action.type === END_SUCCESS_MESSAGE){
      return {...state,showMessage:false}
    }
  };
  export default reducer;
  
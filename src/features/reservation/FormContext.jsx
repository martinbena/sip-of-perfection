import { format } from "date-fns";
import { createContext, useContext, useReducer } from "react";
import { MIN_DATE } from "../../config/constants";

const FormContext = createContext();

function FormProvider({ children }) {
  const ACTIONS = {
    CHANGE_DATE: "change-date",
    SELECT_TIME: "select-time",
    SET_GUESTS: "set-guests",
    CHOOSE_DURATION: "choose-duration",
    TOGGLE_AVAILABILITY: "toggle-availability",
    TOGGLE_CHECK: "toggle-check",
    FORM_TOUCHED: "form-touched",
  };

  const initialState = {
    date: MIN_DATE,
    selectedTime: "",
    numGuests: "",
    duration: "",
    isAvailable: false,
    isChecking: false,
    isTouched: false,
    message: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.CHANGE_DATE:
        return { ...state, date: action.payload, selectedTime: "" };
      case ACTIONS.SELECT_TIME:
        return { ...state, selectedTime: action.payload };
      case ACTIONS.SET_GUESTS:
        return { ...state, numGuests: action.payload };
      case ACTIONS.CHOOSE_DURATION:
        return { ...state, duration: action.payload };
      case ACTIONS.FORM_TOUCHED:
        return { ...state, isTouched: action.payload };
      case ACTIONS.TOGGLE_CHECK:
        return { ...state, isChecking: action.payload };
      case ACTIONS.TOGGLE_AVAILABILITY:
        return {
          ...state,
          isAvailable: action.payload.isAvailable,
          message: action.payload.message,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const formattedDate = format(state.date, "EEEE, MMMM d");

  return (
    <FormContext.Provider value={{ ACTIONS, state, dispatch, formattedDate }}>
      {children}
    </FormContext.Provider>
  );
}

function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("FormContext was used outside the FormContextProvider");
  return context;
}

export { FormProvider, useFormContext };

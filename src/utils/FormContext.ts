import { createContext, useContext } from "react";
import { TformData } from "./types";


export const FormContext = createContext<TformData>({
                name: '',
                email: '',
                phoneNumber: '',
                plan: '',
                yearly: false,
                adons:[]
              });

export const useFormContext = () => {
  return useContext(FormContext);
};

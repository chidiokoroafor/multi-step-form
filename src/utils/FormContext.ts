import { createContext, useContext, useState } from "react";
import { FieldValues } from "react-hook-form";
import { TformData } from "./types";
type formContextDefaultValue = {
    formData: object
    updateFormData: (updatedData: FieldValues)=>void
}

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

// export const FormProvider = ({ children }) => {
//     const [formData, setFormData] = useState({});

//     const updateFormData = (updatedData: FormData) => {
//         setFormData((prevData) => ({ ...prevData, ...updatedData }));
//     };

//     return (
//         <FormContext.Provider value= {{ formData, updateFormData }} >
//         { children }
//       </FormContext.Provider>
//   )
    
// };
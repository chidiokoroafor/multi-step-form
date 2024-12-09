import { useField } from "formik"
import { useFormContext } from "../utils/FormContext";

const AddOns = ({ ...props }) => {
    const formData = useFormContext();
     const [field, meta] = useField({...props, name:props.name, type:'checkbox'})
  return (
      <div>
          <label className={`${field.checked?'bg-Magnolia border-PurplishBlue ':""} border-2 hover:border-PurplishBlue cursor-pointer border-CoolGray flex justify-between items-center p-2 md:p-4 rounded-lg`} htmlFor={props.id || props.addonName}>
              <div className="flex gap-2 md:gap-8 items-center" >
                  <input {...field} {...props} id={props.addonName} value={props.addonName} className="size-3 md:size-5 accent-PurplishBlue" type="checkbox" />
                    <div>
                        <h4 className="text-MarineBlue mb-0 text-sm md:text-lg font-bold">{props.addonName} </h4>
                        <p className="text-CoolGray mt-0 text-xs md:text-sm">{props.description} </p>
                    </div>
              </div>
             
              <p className="text-PurplishBlue">
                  +${formData.yearly?`${props.yAmount}/yr`:`${props.mAmount}/mo`}
              </p>
          </label>
    </div>
  )
}

export default AddOns
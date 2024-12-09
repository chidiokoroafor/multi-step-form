import {  useField } from "formik"

const Plan = ({ ...props }) => {
  
  const [field, meta] = useField({...props, name:"plan", type:'radio'})
  return (
    <div className="flex w-full md:w-1/3">
      <input {...field} {...props} className="cursor-pointer plan-input border-2" id={props.planName}  type="radio" />
      <label className={`${field.checked?'bg-Magnolia border-PurplishBlue ':""} w-full md:h-52 rounded-lg border-2 p-4 plan-label hover:border-PurplishBlue  flex flex-row gap-5 items-center md:items-start border-CoolGray md:flex-col md:justify-betweeen space-y-6`} htmlFor={props.id || props.planName}>
      
            <img src={props.icon} className="block size-12" alt="arcade icon" />
            <div className="mt-auto  border-rd-500">
                <h4 className="text-MarineBlue font-bold">{ props.planName }</h4>
                <p className="text-CoolGray text-xs md:text-[14px]">${props.mAmount}/mo</p>
                <hr className="my-1" />
                <p className="text-CoolGray text-xs md:text-[14px]">${props.yAmount}/yr</p>
                <p className="text-CoolGray text-xs md:text-[14px]">{props.yearDiscount}</p>
        </div>
      </label>
      
      </div>
                  
  )
}

export default Plan
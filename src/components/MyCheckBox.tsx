import { useField } from "formik"

const MyCheckBox = ({ ...props }) => {
    
    const [field, meta] = useField({...props, name:props.name, type:'checkbox'})
  return (
      <div className="bg-Magnolia rounded bg-P mt-14 flex justify-center py-3">
                  
        <label className="inline-flex items-center cursor-pointer">
            <span className="me-3 text-sm font-bold text-MarineBlue">Monthly</span>

            <input type="checkbox"  {...field} {...props}  className="sr-only peer" />
            
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            
        <span className="ms-3 text-sm font-bold text-CoolGray">Yearly</span>
    </label>

    </div>
  )
}

export default MyCheckBox
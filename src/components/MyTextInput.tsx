import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
     const [field, meta] = useField(props);
  return (
      <div>
          <div className="flex justify-between">
              <label className="text-MarineBlue" htmlFor={props.id || props.label}>{ label }</label>
            {meta.touched && meta.error ? <p className="text-StrawberryRed text-sm">{`${meta.error}` }</p> : null}
        </div>
        <input {...field} {...props} className="px-4 py-3 outline-CoolGray rounded-lg border-2 mt-1 border-CoolGray w-full" type="text"  />
    </div>
  )
}

export default MyTextInput
import MyTextInput from "./MyTextInput"

const PersonalInfoForm = () => {
    
  return (
      <div className="mt-6">
          <h2 className="text-MarineBlue font-bold text-3xl mb-1">Personal info</h2>
          <p className="text-CoolGray">Please provide your name, email address, and phone number.</p>
          <div className="mt-6 space-y-8">
              <MyTextInput
                  label="First Name"
                name="name"
                type="text"
                placeholder="e.g. Stephen King"
              />
              
              <MyTextInput
                  label="Email Address"
                name="email"
                type="email"
                placeholder="e.g. stephenking@mail.com"
              />
              
              <MyTextInput
                  label="Phone Number"
                name="phoneNumber"
                type="text"
                placeholder="e.g. +1 234 567 890"
              />
              
          </div>
    </div>
  )
}

export default PersonalInfoForm
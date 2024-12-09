
import Plan from "./Plan"
import {  useState } from "react"
import MyCheckBox from "./MyCheckBox"
import { allPlans } from "../utils/data"


const PlanForm = () => {
    const [formPlan, ] = useState(allPlans)
    
  return (
      <div className="mt-6">
          <h2 className="text-MarineBlue font-bold text-3xl mb-1">Select your plan</h2>
          <p className="text-CoolGray font-[500]">You have the option of monthly or yearly billing.</p>
          <div className="mt-11">
              <div className="flex flex-col gap-4 md:flex-row">
                  
                  {formPlan.map((plan) => {
                      return (
                            <Plan key={plan.name} planName={plan.name} value={plan.name} mAmount={plan.mAmount} yAmount={plan.yAmount} duration={plan.duration} yearDiscount={plan.yearDiscount} icon={plan.icon} checked={plan.checked}  />
                        )
                    })}

              </div>

              <MyCheckBox name="yearly" />
              
          </div>
    </div>
  )
}

export default PlanForm
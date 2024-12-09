
import Plan from "./Plan"
import {  useState } from "react"
import MyCheckBox from "./MyCheckBox"
import { allPlans } from "../utils/data"


const PlanForm = () => {
    const [planDuration, setPlanDuration] = useState("monthly")
    const [formPlan, setFormPlan] = useState(allPlans)

    function handleClick(data) {
        setFormPlan(prev => {
            return prev.map((pr) => {

                if (pr.name === data?.name) {
                    pr.checked = true
                } else {
                    pr.checked = false
                }
                 
                return pr
            })
        })
    }

    
  return (
      <div className="mt-6">
          <h2 className="text-MarineBlue font-bold text-3xl mb-1">Select your plan</h2>
          <p className="text-CoolGray font-[500]">You have the option of monthly or yearly billing.</p>
          <div className="mt-11">
              <div className="flex flex-col gap-4 md:flex-row">
                  
                  {formPlan.map((plan) => {
                      plan.duration = planDuration
                      return (
                            <Plan key={plan.name} planName={plan.name} value={plan.name} mAmount={plan.mAmount} yAmount={plan.yAmount} duration={plan.duration} yearDiscount={plan.yearDiscount} icon={plan.icon} checked={plan.checked} onClick={()=>handleClick(plan)} />
                        )
                    })}

              </div>

              <MyCheckBox name="yearly" />
              
          </div>
    </div>
  )
}

export default PlanForm
import {   useFormContext } from '../utils/FormContext';
import { allAddons, allPlans } from "../utils/data";
import { TaddOns } from "../utils/types";

const FinishingUp = () => {
    const formData  = useFormContext();
    const selectedPlan = allPlans.filter((p) => {
        return p.name == formData.plan
    })[0]
                         
    const cAdons = formData.adons.map((fd) => {
        const aData = allAddons.filter((ad:TaddOns) => {
           return fd == ad.name
       })
        return  aData[0]
    })

    const addonsAmount = cAdons.map((cd) => {
        return formData.yearly ? Number(cd.yAmount) : Number(cd.mAmount)
    })

    addonsAmount.push(formData.yearly ? Number(selectedPlan.yAmount) : Number(selectedPlan.mAmount))

    const total = addonsAmount.reduce((a, b) => {
        return a+b
    },0)

  return (
      <div className="mt-6">
          <h2 className="text-MarineBlue font-bold text-3xl mb-1">Finishing up</h2>
          <p className="text-CoolGray font-[500]">Double-check everything looks OK before confirming.</p>
          <div className="mt-11 " >
              <div className="bg-Magnolia rounded-lg p-4">
                  
                  <div className="flex justify-between items-center py-4">
                      <div >
                          <h4 className="text-MarineBlue font-bold">{formData.plan} ({formData.yearly?'Yearly':'Monthly'})</h4>
                          <p className="text-CoolGray underline">Change</p>
                      </div>
                      <p className="text-MarineBlue font-bold">${formData.yearly?`${selectedPlan.yAmount}/yr`:`${selectedPlan.mAmount}/mo`}</p>
                  </div>

                  <hr />

                  <div>
                      {cAdons.map((ad) => {
                          return <div className="flex justify-between py-3">
                              <p className="text-CoolGray">{ad.name }</p>
                              <p className="text-MarineBlue">+${formData.yearly?`${ad.yAmount}/yr`:`${ad.mAmount}/mo`}</p>
                          </div>
                      })}
                     
                  </div>

              </div>

              <div className="flex justify-between mt-6 px-4">
                  <p className="text-CoolGray">Total (per {formData.yearly?'year':'month'})</p>
                  <p className="text-PurplishBlue font-bold">+${`${total}/${formData.yearly?'yr':'mo'}` }</p>
              </div>
              
          </div>
    </div>
  )
}

export default FinishingUp
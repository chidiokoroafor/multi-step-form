import { useState } from "react"
import AddOns from "./AddOns"
import { allAddons } from "../utils/data"

const AddOnsForm = () => {
    const [addOns, ] = useState(allAddons)

  return (
      <div className="mt-6">
          <h2 className="text-MarineBlue font-bold text-2xl md:text-3xl mb-1">Pick add-ons</h2>
          <p className="text-CoolGray font-[500]">Add-ons help enhance your gaming experience.</p>
          <div className="mt-11 " >
              <div className="space-y-4">
                  {addOns.map((ad,i)=>{
                      return (
                        <AddOns  name="adons" addonName={ad.name} value={ad.name} description={ad.description} mAmount={ad.mAmount} yAmount={ad.yAmount} key={i} />
                      )
                  })}
              </div>
              
          </div>
    </div>
  )
}

export default AddOnsForm
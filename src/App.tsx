import SubscriptionForm from "./components/SubscriptionForm"

function App() {
 
  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-Magnolia">
      {/* <div className="max-w-[950px] w-[95%] md:h-[65vh] bg-Magnolia pb-6 md:bg-White text-[16px] rounded-xl p-0 md:p-4 flex flex-col md:items-cente md:flex-row font-Ubuntu">
        
        <div className="w-full h-72  md:w-1/3 bg-mobile md:bg-desktop bg-no-repeat bg-cover bg-center md:h-full rounded-lg">
            <div className="mt-8 space-y-4 mx-auto flex flex-row justify-center items-baseline md:flex-col gap-3 text-white w-[50%] border-red-500">
            {formSteps.map((stp,i) => {
              return (
                <Step stepNum={stp.step} currentIndex={currentStepIndex} stepName={stp.name}  key={i} />
              )
            })}
              </div>
        </div>

        <div  className="w-[95%] mx-auto md:h-auto  md:mx-0 md:w-2/3 py-4 px-12 md:mt-0 -mt-32 rounded-lg bg-White">
          
          <div className="mb-auto"> */}
              {/* {step}  */}
               <SubscriptionForm  />
          {/* </div> */}
          

        {/* </div> */}
        {/* </div> */} 
    </main>
  )
}

export default App

import { Formik, Form } from 'formik';
import { useMultiStepForm } from '../useMultiStepForm';
import PersonalInfoForm from './PersonalInfoForm';
import PlanForm from './PlanForm';
import AddOnsForm from './AddOnsForm';
import FinishingUp from './FinishingUp';
import { useState } from 'react';
import Step from './Step';
import { schemas } from '../utils/validation';
import { allSteps } from '../utils/data';
import { FormContext } from '../utils/FormContext';
import ThankYou from './ThankYou';
import { toast } from 'sonner';

const SubscriptionForm = () => {
    const [formSteps, ] = useState(allSteps)
    const [hasSubmitted, setHasSubmitted] = useState(false)

    const [formData, setFormData] = useState({
                name: '',
                email: '',
                phoneNumber: '',
                plan: '',
                yearly: false,
                adons:[]
    })

    const { currentStepIndex, step, isFirstStep, next,  back, isLastStep } = useMultiStepForm([
    <PersonalInfoForm  />,
    <PlanForm   />,
    <AddOnsForm />,
    <FinishingUp />
    ])
    
    return (
       <FormContext.Provider value={formData} >
         <div className="max-w-[925px] w-[95%] md:h-[80vh] bg-Magnolia pb-6 md:bg-White text-[16px] rounded-xl p-0 md:p-4 flex flex-col md:items-cente md:flex-row font-Ubuntu">
        
            <div className="w-full h-72  md:w-[30%] bg-mobile md:bg-desktop bg-no-repeat bg-cover bg-center md:h-full rounded-lg">
                <div className="mt-8 space-y-4 mx-auto flex flex-row justify-center items-baseline md:flex-col gap-3 text-white w-[50%] border-red-500">
                {formSteps.map((stp,i) => {
                return (
                    <Step stepNum={stp.step} currentIndex={currentStepIndex} stepName={stp.name}  key={i} />
                )
                })}
                </div>
            </div>

            <div  className="w-[95%] mx-auto md:h-auto relative   md:mx-0 md:w-[70%] py-4 px-4 md:px-20 md:mt-0 -mt-32 rounded-lg bg-White">
            
            {/* <div className="mb-auto"></div> */}

                    
                {/* start */}
                    {hasSubmitted ? <ThankYou /> : <div>
                        <Formik
                            initialValues={formData}
                            validationSchema={schemas[currentStepIndex]}
                            onSubmit={(values, { setSubmitting }) => {
                                setFormData(prev => {
                                    return { ...prev, ...values }
                                })
                            
                                if (!isLastStep) return next()
                                setHasSubmitted(true)
                                setTimeout(() => {
                                toast.success("Message sent successfully!")
                                    console.log(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            
                            }
                            }
                        >
                            <Form>
                                
                                {step}
                                
                                <div className={`flex mt-6 md:absolute md:left-0 md:right-0 px-4 md:px-20 bottom-0 ${isFirstStep ? 'justify-end' : 'justify-between'}  gap-2`}>
                                    {(!isFirstStep && !hasSubmitted) && <button type="button" className=" text-CoolGray hover:text-MarineBlue py-1 px-2 rounded-md" onClick={back}>Go Back</button>}
                                    
                                    {!hasSubmitted && <button type="submit" className={`py-2 ${isLastStep ? 'bg-PurplishBlue' : 'bg-MarineBlue'} bg-MarineBlue text-White px-4 rounded-lg `} >
                                        {isLastStep ? 'Confirm' : 'Next Step'}
                                    </button>}
                                </div>

                            </Form>
                        </Formik>
                    </div>}
                    
                {/* end */}

            </div>
        </div>
    </FormContext.Provider>
  )
}

export default SubscriptionForm
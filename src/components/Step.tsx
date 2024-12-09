import { StepProps } from "../utils/types"


const Step = ({ stepNum, stepName,currentIndex}: StepProps) => {
    return (
      <div className="flex items-center gap-3  ">
          <div className={`size-10 rounded-full ${stepNum<=currentIndex+1 ? 'bg-LightBlue text-gray-800':'bg-transparent text-White'} font-bold  border-2 border-White  flex justify-center items-center`}>{stepNum }</div>
          <div className="hidden md:block">
              <p className="text-xs font-thin text-CoolGray flex-1">STEP {stepNum }</p>
              <p className="text-xs">{ stepName } </p>
          </div>
    </div>
  )
}

export default Step

export type StepProps = {
    stepNum: number
    stepName: string
    currentIndex:number
}

export type TformData= {
    name : string
    email: string
    phoneNumber: string
    plan: string
    yearly: boolean
    adons: never[]
}

export type TaddOns = {
    name: string
    description: string
    mAmount: string
    yAmount: string
    selected: boolean
}

export type TextInputProp = {
    label: string,
    name: string,
    type: string,
    placeholder: string
}
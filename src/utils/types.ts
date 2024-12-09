
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
    amount: string
    selected: boolean
}
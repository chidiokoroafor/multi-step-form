import * as Yup from 'yup';

export const schemas = [
        Yup.object({
            name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            phoneNumber: Yup.string().required("Phone number is required."),
        }),
        
        Yup.object({
            plan: Yup.string().oneOf(
                    ['Arcade', 'Advanced','Pro'],
                    'Invalid Job Type'
                    )
                .required('Required'),
            yearly: Yup.boolean().required()
        }),
        Yup.object({
            adons: Yup.array().min(1).of(Yup.string())
            
        })
]
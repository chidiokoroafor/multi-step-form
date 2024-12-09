import thankyouIcon from '../assets/images/icon-thank-you.svg'

const ThankYou = () => {
  return (
      <div className="flex justify-center items-center min-h-full border-red-500">
          <div className='text-center p-8'>
               <img className='block mx-auto mb-6' src={thankyouIcon} alt="" />
              <h2 className='text-MarineBlue font-bold text-3xl mb-5'>Thank you!</h2>
              <p className='text-CoolGray'>
                  Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
              </p>
          </div>
         
      </div>
  )
}

export default ThankYou
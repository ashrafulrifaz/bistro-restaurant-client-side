import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
import signInImage from '../../../assets/others/authentication2.png'
import verifyIcon from '../../../assets/icon/check-circle.png'

const SignIn = () => {
    const captchaRef = useRef(null)
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(true)
    console.log(isCaptchaVerified);

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleVerifyCaptcha = (e) => {
        e.preventDefault()
        const user_captcha_value = captchaRef.current.value
        if(validateCaptcha(user_captcha_value)) {
            setIsCaptchaVerified(false)
        } else {
            setIsCaptchaVerified(true)
        }
    }

    return (        
        <div className='bg-[#eaebed] min-h-screen'>
            <div className="grid grid-cols-2 gap-16 items-center max-w-[1000px] mx-auto py-12">
                <div>
                    <img src={signInImage} alt="" />
                </div>
                <div className='px-12'>
                    <h2 className="text-center text-2xl font-semibold">Sign In</h2>
                    <form className='mt-5 space-y-3'>
                        <div className='space-y-2'>
                            <label htmlFor="" className='block font-semibold'>Email</label>
                            <input type="text" placeholder='Enter your email' className='focus:outline-none border border-[#D0D0D0] py-2.5 px-5 w-full rounded'/>
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="" className='block font-semibold'>Password</label>
                            <input type="password" placeholder='Enter your password' className='focus:outline-none border border-[#D0D0D0] py-2.5 px-5 w-full rounded'/>
                        </div>
                        <div>
                            <LoadCanvasTemplate />
                        </div>
                        <div>                            
                            <div className='flex justify-between bg-white border border-[#D0D0D0] py-2.5 pl-5 pr-2 mt-3 rounded'>
                                <input ref={captchaRef} type="text" className='focus:outline-none' placeholder='captcha' />
                                <img onClick={handleVerifyCaptcha} className='w-6 h-auto cursor-pointer' src={verifyIcon} alt="" />
                            </div>
                        </div>
                        <button disabled={isCaptchaVerified} className='text-white bg-[#d9b782] font-semibold py-2.5 rounded w-full'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
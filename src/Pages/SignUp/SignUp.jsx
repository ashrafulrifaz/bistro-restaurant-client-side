import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import signInImage from '../../../assets/others/authentication2.png'
import verifyIcon from '../../../assets/icon/check-circle.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const captchaRef = useRef(null)
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(true)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors },} = useForm()

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

    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(() => {
            navigate('/')
        })
        .catch(error => console.log(error.message))
    }
 
    return (
        <div className='bg-[#eaebed] min-h-screen'>
            <div className="grid grid-cols-2 gap-16 items-center max-w-[1000px] mx-auto py-12">
                <div>
                    <img src={signInImage} alt="" />
                </div>
                <div className='px-12'>
                    <h2 className="text-center text-2xl font-semibold">Create an Account</h2>
                    <form className='mt-5 space-y-3' onSubmit={handleSubmit(onSubmit)}>
                        <div className='space-y-2'>
                            <label htmlFor="" className='block font-semibold'>Image</label>
                            <input {...register("image", { required: true })} type="text" placeholder='Enter your Image url' className='focus:outline-none border border-[#D0D0D0] py-2.5 px-5 w-full rounded'/>
                            {errors.image && <span className='text-red-500'>Image is required</span>}
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="" className='block font-semibold'>Email</label>
                            <input {...register("email", { required: true })} type="text" placeholder='Enter your email' className='focus:outline-none border border-[#D0D0D0] py-2.5 px-5 w-full rounded'/>
                            {errors.email && <span className='text-red-500'>Email is required</span>}
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="" className='block font-semibold'>Password</label>
                            <input {...register("password", { required: true })} type="password" placeholder='Enter your password' className='focus:outline-none border border-[#D0D0D0] py-2.5 px-5 w-full rounded'/>
                            {errors.password && <span className='text-red-500'>Password is required</span>}
                        </div>
                        <div>
                            <LoadCanvasTemplate />
                        </div>
                        <div>                            
                            <div className='flex justify-between items-center bg-white border border-[#D0D0D0] py-2.5 pl-5 pr-2 mt-3 rounded'>
                                <input ref={captchaRef} type="text" className='focus:outline-none' placeholder='captcha' />
                                <img onClick={handleVerifyCaptcha} className='w-5 h-5 cursor-pointer' src={verifyIcon} alt="" />
                            </div>
                        </div>
                        <button disabled={isCaptchaVerified} className='text-white bg-[#d9b782] font-semibold py-2.5 rounded w-full'>Sign Up</button>
                        <div>
                            <h3 className='text-center mt-2 text-[#D1A054]'>Already have an account <Link to="/sign-in" className='text-[#D1A054] font-semibold'>Sign in</Link></h3>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
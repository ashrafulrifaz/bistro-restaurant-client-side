import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import signInImage from '../../../assets/others/authentication2.png'
import verifyIcon from '../../../assets/icon/check-circle.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {
    const captchaRef = useRef(null)
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(true)
    const {signInUser, googleLogin} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors },} = useForm()
    const navigate = useNavigate()

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
        signInUser(data.email, data.password)
        .then(() => {
            navigate('/')
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider()
        googleLogin(provider)
        .then(() => navigate('/'))
        .catch(error => console.log(error.message))
    }

    return (        
        <div className='bg-[#eaebed] min-h-screen'>
            <div className="grid grid-cols-2 gap-16 items-center max-w-[1000px] mx-auto py-12">
                <div>
                    <img src={signInImage} alt="" />
                </div>
                <div className='px-12'>
                    <h2 className="text-center text-2xl font-semibold">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-5 space-y-3'>
                        <div className='space-y-2'>
                            <label htmlFor="" className='block font-semibold'>Email</label>
                            <input {...register("email", { required: true })} type="text" placeholder='Enter your email' className='focus:outline-none border border-[#D0D0D0] py-2.5 px-5 w-full rounded'/>
                            {errors.email && <span>Email is required</span>}
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="" className='block font-semibold'>Password</label>
                            <input {...register("password", { required: true })} type="password" placeholder='Enter your password' className='focus:outline-none border border-[#D0D0D0] py-2.5 px-5 w-full rounded'/>
                            {errors.password && <span>Password is required</span>}
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
                        <button disabled={isCaptchaVerified} className='text-white bg-[#d9b782] font-semibold py-2.5 rounded w-full'>Sign In</button>
                        <div>
                            <h3 className='text-center mt-2 text-[#D1A054]'>New here? <Link to="/sign-up" className='text-[#D1A054] font-semibold'>Create a New Account</Link></h3>
                        </div>
                        <div className="flex gap-6 justify-center">
                            <div className="border border-[#444] rounded-full w-7 h-7 p-3 flex items-center justify-center">
                                <FontAwesomeIcon icon={faFacebookF} className='text-[#444] cursor-pointer' />
                            </div>
                            <div className="border border-[#444] rounded-full w-7 h-7 p-3 flex items-center justify-center">
                                <FontAwesomeIcon onClick={handleGoogleLogin} icon={faGoogle} className='text-[#444] cursor-pointer' />
                            </div>
                            <div className="border border-[#444] rounded-full w-7 h-7 p-3 flex items-center justify-center">
                                <FontAwesomeIcon icon={faGithub} className='text-[#444] cursor-pointer' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
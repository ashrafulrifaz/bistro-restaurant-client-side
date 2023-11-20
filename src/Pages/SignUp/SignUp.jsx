import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import signInImage from '../../../assets/others/authentication2.png'
import verifyIcon from '../../../assets/icon/check-circle.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SignUp = () => {
    const {createUser, googleLogin} = useContext(AuthContext)
    const captchaRef = useRef(null)
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(true)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const location = useLocation()

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
        const userInfo = {
            email: data.email, 
            password: data.password,
            name: data.name
        }
        createUser(data.email, data.password)
        .then(() => { 
            axiosPublic.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            title: "Sign up successfully",
                            imageUrl: "https://i.ibb.co/P96LKHm/right-decision.gif",
                            imageWidth: 100,
                            imageHeight: 100,
                            imageAlt: "good",
                            showConfirmButton: false,
                            timer: 1500
                          });
                        navigate(location.state ? location.state : '/')
                    }
                })
        })
        .catch(error => console.log(error.message))
    }

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider()
        googleLogin(provider)
        .then(result => {
            const userInfo = {
                email: result?.user?.email, 
                name: result?.user?.displayName
            }          
            axiosPublic.post('/users', userInfo)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    title: "Sign up successfully",
                    imageUrl: "https://i.ibb.co/P96LKHm/right-decision.gif",
                    imageWidth: 100,
                    imageHeight: 100,
                    imageAlt: "good",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate(location.state ? location.state : '/')
            })
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
                            <label htmlFor="" className='block font-semibold'>Name</label>
                            <input {...register("name", { required: true })} type="text" placeholder='Enter your name' className='focus:outline-none border border-[#D0D0D0] py-2.5 px-5 w-full rounded'/>
                            {errors.image && <span className='text-red-500'>Name is required</span>}
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

export default SignUp;
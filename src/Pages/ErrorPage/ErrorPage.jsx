import { Link } from 'react-router-dom';
import errorImage from '../../../assets/icon/404.gif'

const ErrorPage = () => {
    return (
        <div className='text-center py-5'>
            <img src={errorImage} alt="404" className='w-1/2 mx-auto' />
            <Link to="/">
                <button className='bg-[#E8E8E8] text-[#BB8506] py-1.5 px-5 rounded-md border-b-2 border-[#BB8506] hover:scale-95 transition-all'>Back to home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;
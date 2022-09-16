import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaBasketballBall } from 'react-icons/fa';
import Header from '../../components/Header';
import {Formik} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required')
});

const AuthForm = ({errors, handleSubmit, handleChange})=> {
    return (
        <form className='w-full max-w-sm' onSubmit={handleSubmit}>
            <div className='flex items-center border-b border-teal-500 py-2'>
                <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='email' placeholder='Your Email' aria-label='Full name'  name='name' onChange={handleChange} isInvalid={!!errors.email} />
                <div type='invalid'>{errors.email}</div>
                <Link href='#'><a>
                    <button className='flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded' type='button'>
                    Subscribe
                    </button>
                </a></Link>
            </div>
        </form>
    );
};

function Comingsoon() {
    return (
        <div className='bg-black text-white'>
            <Header />
            <div className='mx-20 py-10'>
                <div className='my-20'>
                    <h3 className='text-5xl'>We’re Building <br />Something New</h3>
                    <div className='flex gap-4 my-20'>
                        <div>
                            <h3 className='text-3xl'>09</h3>
                            <small className='text-center text-xs'>Days</small>
                        </div>
                        <div>
                            <h3 className='text-3xl'>18</h3>
                            <small className='text-center text-xs'>Hours</small>
                        </div>
                        <div>
                            <h3 className='text-3xl'>09</h3>
                            <small className='text-center text-xs'>Days</small>
                        </div>
                        <div>
                            <h3 className='text-3xl'>09</h3>
                            <small className='text-center text-xs'>Secs</small>
                        </div>
                    </div>
  
                    <Formik
                        initialValues={{email: ''}}
                        validationSchema={loginSchema}>
                        {(props)=><AuthForm {...props} />}
                    </Formik>
                </div>

                <footer className='flex gap-96'>
                    <div className='flex gap-5'>
                        <div className='text-4xl'>Parabot</div>
                        <div>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. <br /> Quisque a nunc vel diam auctor commodo.</div>
                    </div>
                    <div className='flex gap-5 text-2xl'>
                        <Link href='https://web.facebook.com'><a target='_blank'>
                            <FaFacebookF className='mx-auto text-5xl border-2 border-current rounded-full p-2' />
                        </a></Link>
                        <Link href='https://web.twitter.com'><a target='_blank'>
                            <FaTwitter className='mx-auto text-5xl border-2 border-current rounded-full p-2' />
                        </a></Link>
                        <Link href='https://web.youtube.com'><a target='_blank'>
                            <FaYoutube className='mx-auto text-5xl border-2 border-current rounded-full p-2' />
                        </a></Link>
                        <Link href='https://wikipedia.or.id'><a target='_blank'>
                            <FaBasketballBall className='mx-auto text-5xl border-2 border-current rounded-full p-2' />
                        </a></Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Comingsoon;
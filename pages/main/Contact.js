import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Formik} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    name: Yup.string().min(4, 'Minimum 4 characters').required('Required'),
    email: Yup.string().email('Invalid email address format').required('Required'),
    website: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
    plan: Yup.string().min(8, 'Minimum 8 characters').required('Required'),
    message: Yup.string().min(8, 'Minimum 8 characters').required('Required')
});

const AuthForm = ({errors, handleSubmit, handleChange})=> {
    return (
        <form className='w-full max-w-sm flex flex-col gap-8' onSubmit={handleSubmit}>
            <div className='flex items-center border-b border-teal-500 py-2'>
                <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='text' placeholder='Name *' aria-label='Full name' name='name' onChange={handleChange} isInvalid={!!errors.name} />
                <div type='invalid'>{errors.name}</div>
            </div>
            <div className='flex items-center border-b border-teal-500 py-2'>
                <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='email' placeholder='Your Email *' aria-label='Full name' name='email' onChange={handleChange} isInvalid={!!errors.email} />
                <div type='invalid'>{errors.email}</div>
            </div>
            <div className='flex items-center border-b border-teal-500 py-2'>
                <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='text' placeholder='You Website' aria-label='Full name' name='website' onChange={handleChange} isInvalid={!!errors.website} />
                <div type='invalid'>{errors.website}</div>
            </div>
            <div className='flex items-center border-b border-teal-500 py-2'>
                <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='text' placeholder='Business Plan' aria-label='Full name' name='plan' onChange={handleChange} isInvalid={!!errors.plan} />
                <div type='invalid'>{errors.plan}</div>
            </div>
            <div className='flex flex-col border-b border-teal-500 py-2'>
                <span className='mb-8 text-gray-400 ml-3'>Message</span>
                <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='text' aria-label='Full name' placeholder='type here' name='message' onChange={handleChange} isInvalid={!!errors.message} />
                <div type='invalid'>{errors.message}</div>
            </div>
    
            <button className='bg-black text-white h-12' type='button'>
        Send Message
            </button>
        </form> 
    );
};

function Contact() {
    return (
        <>
            <Header />
            <div className='pattern py-10'>
                <nav className='flex ml-10' aria-label='Breadcrumb'>
                    <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                        <li>
                            <div className='flex items-center'>
                                <a href='#' className='ml-1 mr-2 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white'>FAQ</a>
                                <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd'></path></svg>
                                <a href='#' className='ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white'>Contact Us</a>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className='text-center'>
                    <h3 className='text-4xl'>Contact Us</h3>
                </div>
            </div>
            <div className='flex mx-14 my-8 justify-center gap-10'>
                <div>
                    <Image
                        src='/map.png'
                        alt='connor'
                        width={450}
                        height={520} /> <br />
                </div>
              
                <Formik
                    initialValues={{name: '', email: '', website: '', plan: '', message:''}}
                    validationSchema={loginSchema}>
                    {(props)=><AuthForm {...props} />}
                </Formik>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
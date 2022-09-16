import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import {Formik} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    order: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
    billing: Yup.string().min(8, 'Minimum 8 characters').required('Required')
});

const AuthForm = ({errors, handleSubmit, handleChange})=> {
    return (
        <form className='bg-white rounded my-auto' onSubmit={handleSubmit}>
            <div className='text-center mb-8'>
                        To track your order please enter your Order ID in the box below and press the <br /> &quot;Track&quot; button. This was given to you on your receipt and in the confirmation <br /> email you should have received.
            </div>
            <div className='mb-8'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username' >
                    Order ID
                </label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Found in your order confirmation email.' name='order' onChange={handleChange} isInvalid={!!errors.order} />
                <div type='invalid'>{errors.order}</div>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username' >
                    Billing Email
                </label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='number' placeholder='Email you used during checkout' name='billing' onChange={handleChange} isInvalid={!!errors.billing} />
                <div type='invalid'>{errors.billing}</div>
            </div>
            <div className='flex items-center justify-center'>
                <Link href='#'><a>
                    <button className='text-white bg-black h-16 w-48 mt-5 text-center mx-auto'>
                        Track Now
                    </button>
                </a></Link>
            </div>
        </form>
    );
};

function OrderTracking() {
    return (
        <>
            <Header />
            <div className='pattern py-10'>
                <nav className='flex ml-10' aria-label='Breadcrumb'>
                    <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                        <li>
                            <div className='flex items-center'>
                                <a href='#' className='ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white'>Tracking</a>
                            </div>
                        </li>
                        <li aria-current='page'>
                            <div className='flex items-center'>
                                <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd'></path></svg>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className='text-center'>
                    <h3 className='text-4xl'>Order Tracking</h3>
                    <small>Track where your order arrived</small>
                </div>
            </div>
            <div className='flex mx-14 my-8 justify-center gap-20'>
                <div>
                    <Image
                        src='/map.png'
                        alt='connor'
                        width={500}
                        height={520} /> <br />
                </div>
                
                <Formik
                    initialValues={{order: '', billing: ''}}
                    validationSchema={loginSchema}>
                    {(props)=><AuthForm {...props} />}
                </Formik>
                
            </div>
            <Footer />
        </>
    );
}

export default OrderTracking;
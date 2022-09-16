
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Link from "next/link";
import { Formik, Field } from "formik";
import * as Yup from "yup"

export default function ForgotPassword(){
    const forgotSchema = Yup.object().shape({
        email: Yup.string().required('Required')
    })

    const onForgot = (props) => {
        const error = Object.keys(props.errors).length
        if(!error){
            console.log('aman')
        }else{
            console.log('masih error');
        }
    }

    return(
        <>
            <Header />
            <Banner titleBanner="My Account" subtitleBanner="Register and log in with your account to be able to shop at will"/>
            <main className="flex justify-center">
                <Formik
                    initialValues={{email: ''}}
                    validationSchema={forgotSchema}>
                    {(props)=>
                        <div className="flex bg-gray-50 flex-col items-center w-full">
                            <div className="max-w-[1400px] w-full p-5 flex justify-center gap-16">
                                <div className="flex flex-col gap-3 max-w-[350px] w-full">
                                    <span className="text-2xl font-semibold">Forgot your Password?</span>
                                    <span className="text-sm">Don’t worry! Just fill in your email and we’ll send you a link</span>
                                    <div className="flex flex-col max-w-[350px] w-full">
                                        <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                            <div className="w-24 flex items-center justify-center border-r-[1px]">
                                                <span className="text-xs">Email *</span>
                                            </div>
                                            <input className="outline-none flex flex-1 bg-transparent" type='text' name="email" onChange={props.handleChange} />
                                        </div>
                                        <span className="text-xs pl-1 text-red-500" type="invalid">{props.errors.email}</span>
                                    </div>
                                    <div>
                                        <button className="bg-gray-800 w-[120px] h-[40px] text-white" onClick={() => onForgot(props)}>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </Formik>
            </main>
            <Footer />
        </>
    )
}
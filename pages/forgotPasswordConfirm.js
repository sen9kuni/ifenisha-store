
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Link from "next/link";
import { Formik, Field } from "formik";
import * as Yup from "yup"

export default function ForgotPasswordConfirm(){
    const forgotSchema = Yup.object().shape({
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().required('Required'),
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
                    initialValues={{password: '', confirmPassword: ''}}
                    validationSchema={forgotSchema}>
                    {(props)=>
                        <div className="flex bg-gray-50 flex-col items-center w-full">
                            <div className="max-w-[1400px] w-full p-5 flex justify-center gap-16">
                                <div className="flex flex-col gap-3 max-w-[350px] w-full">
                                    <span className="text-2xl font-semibold">Reset your Password</span>
                                    <div className="flex flex-col max-w-[350px] w-full">
                                        <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                            <div className="w-24 flex items-center justify-center border-r-[1px]">
                                                <span className="text-xs">Password *</span>
                                            </div>
                                            <input className="outline-none flex flex-1 bg-transparent" type='password' name="password" onChange={props.handleChange} />
                                        </div>
                                        <span className="text-xs pl-1 text-red-500" type="invalid">{props.errors.password}</span>
                                    </div>
                                    <div className="flex flex-col max-w-[350px] w-full">
                                        <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                            <div className="w-24 flex items-center justify-center border-r-[1px]">
                                                <span className="text-xs">Confirm<br/>password *</span>
                                            </div>
                                            <input className="outline-none flex flex-1 bg-transparent" type='password' name="confirmPassword" onChange={props.handleChange} />
                                        </div>
                                        <span className="text-xs pl-1 text-red-500" type="invalid">{props.errors.confirmPassword}</span>
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
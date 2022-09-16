
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Menu from "../components/Menu";
import { SiVisa } from "react-icons/si";
import { Formik, Field } from "formik";
import * as Yup from "yup"

let arrImage = []
const onChangeImage = (props) =>{
    arrImage.push(props)
    console.log(arrImage);
}

const GetImage = () => {
    return(
        <>
            <Formik
                initialValues={{image: ''}}>
                {(props)=>
                    <div>
                        <input type={'file'} onChange={((e)=> onChangeImage(e.target.files[0]))} />
                    </div>
                }
            </Formik>
        </>
    )
}

export default function Order(){
    const checkoutSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        phone_region: Yup.string().required('Required'),
        card: Yup.string().required('Required'),
    })

    const onCheckout = (props) => {
        const error = Object.keys(props.errors).length
        if(!error){
            console.log('aman')
        }else{
            console.log('masih error');
        }
    }

    return(
        <div>
            <Header />
            <Banner titleBanner="Check Out" subtitleBanner="See your notifications for the latest updates"/>
            <main className="flex flex-col justify-center w-full pb-20">
                <Menu />
                <Formik
                    initialValues={{name: '', address: '', phone: '', card: 'visa', phone_region: 'indo'}}
                    validationSchema={checkoutSchema}>
                    {(props)=>
                        <div className="flex flex-col items-center w-full">
                            <div className="bg-gray-50 max-w-[1400px] w-full p-5 flex flex-col items-center gap-2">
                                <span className="text-2xl font-semibold">Self Information</span>
                                <div className="flex flex-col max-w-[350px] w-full">
                                    <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                        <div className="w-24 flex items-center justify-center border-r-[1px]">
                                            <span className="text-xs">Your Name *</span>
                                        </div>
                                        <input className="outline-none flex flex-1 bg-transparent" name="name" onChange={props.handleChange} />
                                    </div>
                                    <span className="text-xs pl-1 text-red-500" type="invalid">{props.errors.name}</span>
                                </div>
                                <div className="flex flex-col max-w-[350px] w-full">
                                    <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                        <div className="w-24 flex items-center justify-center border-r-[1px]">
                                            <span className="text-xs">Address *</span>
                                        </div>
                                        <input className="outline-none flex flex-1 bg-transparent" name="address" onChange={props.handleChange} />
                                    </div>
                                    <span className="text-xs pl-1 text-red-500" type="invalid">{props.errors.address}</span>
                                </div>
                                <div className="flex flex-col max-w-[350px] w-full">
                                    <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                        <div className="w-24 flex items-center justify-center border-r-[1px]">
                                        <Field as="select" name="phone_region" className="browser-default custom-select bg-transparent outline-none text-xs w-[60px]" onChange={props.handleChange}>
                                            <option value="indo">+62</option>
                                            <option value="ngawi">+96</option>
                                        </Field>
                                        </div>
                                        <input className="outline-none flex flex-1 bg-transparent" name="phone" onChange={props.handleChange} />
                                    </div>
                                    <span className="text-xs pl-1 text-red-500" type="invalid">{props.errors.phone}</span>
                                </div>
                                <div className="flex flex-col max-w-[350px] w-full">
                                    <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                        <div className="w-24 flex items-center justify-center border-r-[1px]">
                                            <SiVisa className="text-[40px]" />
                                        </div>
                                        <Field as="select" name="card" className="browser-default custom-select bg-transparent outline-none text-xs flex flex-1" onChange={props.handleChange}>
                                            <option value="visa">Pay with Visa</option>
                                            <option value="gopay">Pay with Gopay</option>
                                        </Field>
                                    </div>
                                    <span className="text-xs pl-1 text-red-500" type="invalid">{props.errors.card}</span>
                                </div>
                                <div>
                                    <button className="bg-gray-800 w-[120px] h-[40px] text-white" onClick={() => onCheckout(props)}>Check Out</button>
                                </div>
                                
                                {/* <GetImage /> */}
                            </div>
                        </div>
                    }
                </Formik>
            </main>
            <Footer />
        </div>
    )
}
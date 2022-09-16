
import Header from "../components/Header"
import Footer from "../components/Footer"
import { TbChevronDown } from "react-icons/tb";
import Link from "next/link";
import Banner from "../components/Banner";
import Image from "next/image";
import blogImage from "../public/images/blog-image.png"
import default_image from "../public/images/default.jpg";

export default function LandingPage(){
    return(
        <div>
            <Header />
            <main className="w-full flex flex-col items-center -z-10">
                <Banner titleBanner="How to open interior shop?" subtitleBanner="Read and enjoy content from us"/>
                <div className="max-w-[900px] w-full p-5 flex flex-col items-center gap-7">
                    <div className="w-full h-fit flex justify-center">
                        <Image src={blogImage} layout={"fixed"} />
                    </div>
                    <span className="text-3xl font-semibold">How to open interior shop?</span>
                    <span className="text-justify">
                        Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibuDonec non velit ut nisl ultrices lobortis eget et odio. Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.
                        <br/>
                        <br/>
                        Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque. Maecenas molestie vitae risus vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce ut metus sodales, pellentesque diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus interdum condimentum non et odio. Nam magna tortor, vulputate in venenatis et, porta ac orci. Sed venenatis scelerisque scelerisque. Nullam ut neque sed libero feugiat fermentum et non odio. Aenean et justo elementum, volutpat arcu vitae, tincidunt lorem.
                    </span>
                    <span className="h-[1px] w-full bg-gray-300" />
                    <div className="flex w-full gap-2">
                        <div className='border-2 border-gray-600 w-[50px] h-[50px]' onClick={(e)=> pageProfile(e)}>
                            <Image className="w-fit h-fit" src={default_image} width={50} height={50} alt='user' />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="font-semibold">Bima Armedianto</span>
                            <span className="text-xs text-gray-400">24 Apr 2019, 45 mins ago</span>
                        </div>
                    </div>
                </div>  
            </main>
            <Footer />
        </div>
    )
}
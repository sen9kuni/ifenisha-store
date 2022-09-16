
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { TbChevronDown } from "react-icons/tb";
import Link from "next/link";
import Banner from "../../components/Banner";
import Image from "next/image";
import blogImage from "../../public/images/blog-image.png"
import default_image from "../../public/images/default.jpg";

export default function LandingPage(){
    return(
        <div>
            <Header />
            <main className="w-full flex flex-col items-center -z-10">
                <Banner titleBanner="Our Blog" subtitleBanner="Read and enjoy content from us"/>
                <div className="max-w-[900px] w-full p-5 flex flex-col items-center gap-7">
                    <div className="w-full h-fit flex justify-center">
                        <Image src={blogImage} layout={"fixed"} />
                    </div>
                    <span className="text-3xl font-semibold w-full">How to open interior shop?</span>
                    <span className="text-justify overflow-hidden h-[70px]">
                        Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibuDonec non velit ut nisl ultrices lobortis eget et odio. Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.
                        <br/>
                        <br/>
                        Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque. Maecenas molestie vitae risus vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce ut metus sodales, pellentesque diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus interdum condimentum non et odio. Nam magna tortor, vulputate in venenatis et, porta ac orci. Sed venenatis scelerisque scelerisque. Nullam ut neque sed libero feugiat fermentum et non odio. Aenean et justo elementum, volutpat arcu vitae, tincidunt lorem.
                    </span>
                    <div className="flex w-full items-center font-semibold">
                        <Link href={'/detail-blog'}>
                            <span className="w-[100px] cursor-pointer">Read More</span>
                        </Link>
                        <span className="h-[1px] flex flex-1 bg-gray-300" />
                    </div>
                </div>  
                <div className="max-w-[900px] w-full p-5 flex flex-col items-center gap-7">
                    <div className="w-full h-fit flex justify-center">
                        <Image src={blogImage} layout={"fixed"} />
                    </div>
                    <span className="text-3xl font-semibold w-full">How to open interior shop?</span>
                    <span className="text-justify overflow-hidden h-[70px]">
                        Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibuDonec non velit ut nisl ultrices lobortis eget et odio. Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.
                        <br/>
                        <br/>
                        Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque. Maecenas molestie vitae risus vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce ut metus sodales, pellentesque diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus interdum condimentum non et odio. Nam magna tortor, vulputate in venenatis et, porta ac orci. Sed venenatis scelerisque scelerisque. Nullam ut neque sed libero feugiat fermentum et non odio. Aenean et justo elementum, volutpat arcu vitae, tincidunt lorem.
                    </span>
                    <div className="flex w-full items-center font-semibold">
                        <Link href={'/detail-blog'}>
                            <span className="w-[100px] cursor-pointer">Read More</span>
                        </Link>
                        <span className="h-[1px] flex flex-1 bg-gray-300" />
                    </div>
                </div>  
                <div className="max-w-[900px] w-full p-5 flex flex-col items-center gap-7">
                    <div className="w-full h-fit flex justify-center">
                        <Image src={blogImage} layout={"fixed"} />
                    </div>
                    <span className="text-3xl font-semibold w-full">How to open interior shop?</span>
                    <span className="text-justify overflow-hidden h-[70px]">
                        Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibuDonec non velit ut nisl ultrices lobortis eget et odio. Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.
                        <br/>
                        <br/>
                        Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque. Maecenas molestie vitae risus vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce ut metus sodales, pellentesque diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus interdum condimentum non et odio. Nam magna tortor, vulputate in venenatis et, porta ac orci. Sed venenatis scelerisque scelerisque. Nullam ut neque sed libero feugiat fermentum et non odio. Aenean et justo elementum, volutpat arcu vitae, tincidunt lorem.
                    </span>
                    <div className="flex w-full items-center font-semibold">
                        <Link href={'/detail-blog'}>
                            <span className="w-[100px] cursor-pointer">Read More</span>
                        </Link>
                        <span className="h-[1px] flex flex-1 bg-gray-300" />
                    </div>
                </div>  
                <div className="max-w-[900px] w-full p-5 flex flex-col items-center gap-7">
                    <div className="w-full h-fit flex justify-center">
                        <Image src={blogImage} layout={"fixed"} />
                    </div>
                    <span className="text-3xl font-semibold w-full">How to open interior shop?</span>
                    <span className="text-justify overflow-hidden h-[70px]">
                        Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibuDonec non velit ut nisl ultrices lobortis eget et odio. Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.
                        <br/>
                        <br/>
                        Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque. Maecenas molestie vitae risus vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce ut metus sodales, pellentesque diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus interdum condimentum non et odio. Nam magna tortor, vulputate in venenatis et, porta ac orci. Sed venenatis scelerisque scelerisque. Nullam ut neque sed libero feugiat fermentum et non odio. Aenean et justo elementum, volutpat arcu vitae, tincidunt lorem.
                    </span>
                    <div className="flex w-full items-center font-semibold">
                        <Link href={'/detail-blog'}>
                            <span className="w-[100px] cursor-pointer">Read More</span>
                        </Link>
                        <span className="h-[1px] flex flex-1 bg-gray-300" />
                    </div>
                </div>  
            </main>
            <Footer />
        </div>
    )
}
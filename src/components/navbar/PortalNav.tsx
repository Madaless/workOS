import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/outline';
const PortalNav = () => {
    return (
        <header className='bg-white w-full z-10 h-[65px]'>
            <div className='absolute flex flex-col items-center justify-center text-center top-0  mt-2 '>
                <div className='bg-white bg-opacity-95 rounded-full'>
                    <img src='untitled.svg' className=" w-64 py-2 px-4 object-cover"></img>
                </div>
            </div>
            <div className='absolute right-4 top-0 block'>
                <Link href={"/add-offer"} passHref legacyBehavior>
                    <button className=' mx-2 my-4 py-2 px-4 bg-orangeCP text-white rounded-lg font-bold text-base'>
                        <div className='flex items-center'>
                            <span className="mr-2">Add offer</span>
                            <span><PlusIcon className='h-5 w-5 fill-current' /></span>
                        </div>
                    </button>
                </Link>

                <Link href={"/login"} passHref legacyBehavior>
                    <button className='mx-2 my-4 py-2 px-4 bg-black text-white rounded-lg font-bold text-base'>Log in</button>
                </Link>
                <Link href={"/login"} passHref legacyBehavior>

                    <button className='mx-2 my-4 py-2 px-4 bg-white text-black rounded-lg font-bold text-base'>For employee</button>
                </Link>

            </div>
        </header>
    )
}

export default PortalNav
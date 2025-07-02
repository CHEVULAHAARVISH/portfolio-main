import Logo from './../assets/logo.png';

function Header() {
    return (
        <div className="flex flex-1 justify-between mb-14">
            <div className='flex items-center  font-semibold gap-3 text-2xl'>
                Greetings! 🌟
            </div>
            <div className='flex items-center font-bold gap-3 text-lg'>
                <div className='w-12 h-12 bg-[#2c2c2d] text-xl rounded-full text-center items-center flex justify-center font-extrabold text-white'>
                    CH
                </div>
                <div>
                    <div className='text-md mb-0 font-semibold'>Chevula Haarvish</div>
                    <div className='text-sm mt-0 font-medium'>SWE Full Stack</div>
                </div>
            </div>
        </div>
    );
}

export default Header;

import Logo from './../assets/logo.png';

function Header() {
    return (
      <div className="flex flex-col max-md:items-start md:flex-row justify-between mb-14 gap-4 md:gap-0">
        {/* Left Section - Greetings */}
        <div className="text-2xl font-semibold">
          Greetings! 🌟
        </div>

        {/* Right Section - Name & Initials */}
        <div className="flex items-center gap-3 text-lg font-bold">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2c2c2d] text-lg md:text-xl rounded-full flex items-center justify-center font-extrabold text-white">
            CH
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold">Chevula Haarvish</div>
            <div className="text-sm font-medium text-gray-600">SWE Full Stack</div>
          </div>
        </div>
      </div>

    );
}

export default Header;

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

const LINK = require('../assets/shareicon.json');
const LOCATION = require('../assets/locationpin.json');

function HeaderBox() {

    const playerRef = useRef(null);
    const locationRef = useRef(null);

    useEffect(() => {
        playerRef.current?.playFromBeginning();
        locationRef.current?.playFromBeginning();
    }, [])


    return (
        <div className="flex flex-1 flex-col lg:flex-row justify-between">
            <div className="flex gap-5 flex-shrink flex-row items-center justify-center">
                <div className="lg:w-20 lg:h-20 p-5 rounded-full border border-[#b4b4b4] flex justify-center items-center text-2xl font-semibold">
                    1.9
                </div>
                <div className="items-center">
                    <div className='text-md mb-0 font-semibold'>years,</div>
                    <div className='text-md mt-0 font-semibold'>experience</div>
                </div>
                <div className="border-r border-r-[#b4b4b4] h-10 justify-self-center items-center self-center mx-3"></div>
                {/* For medium and larger screens */}
                <a
                  href="https://drive.google.com/file/d/1HiZcNMDKlqkjE7APl7WmvzFo2agEu_03/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex gap-3 text-sm justify-center items-center px-5 py-4 bg-[#E16349] font-semibold rounded-full text-[#fcfcfc] cursor-pointer hover:scale-105 hover:font-bold"
                >
                    View Resume
                    <Player
                      ref={playerRef}
                      size={26}
                      icon={LINK}
                      onComplete={() => playerRef.current?.playFromBeginning()}
                    />
                </a>

                {/* For small devices only (icon button) */}
                <a
                  href="https://drive.google.com/file/d/1HiZcNMDKlqkjE7APl7WmvzFo2agEu_03/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex md:hidden justify-center items-center p-3 bg-[#E16349] rounded-full text-[#fcfcfc] hover:scale-105"
                >
                    <Player
                      ref={playerRef}
                      size={22}
                      icon={LINK}
                      onComplete={() => playerRef.current?.playFromBeginning()}
                    />
                </a>
            </div>
            <div className="flex gap-24 items-center justify-center">
                <div className="items-center font-medium text-4xl">
                    <div className='mb-0 font-medium'>Hey, Good to see you <span className="shake-animation cursor-pointer inline-block">👋</span></div>
                    <div className='mt-0 text-[#b4b4b4] flex'>
                        <div className="hidden md:block border-r border-r-black h-7 self-center mx-2"></div>
                        Let's dive in then!</div>
                </div>
                <a id="aboutme" className="w-24 h-24 bg-[#ffffff] hidden rounded-full  md:flex lg:flex justify-center items-center text-sm flex-col cursor-pointer">
                    <Player
                        ref={locationRef}
                        size={28}
                        icon={LOCATION}
                        onComplete={() => locationRef.current?.playFromBeginning()}
                    />

                    B'lore, IN
                </a>
                <Tooltip anchorSelect="#aboutme" place="top">
                    Location
                </Tooltip>
            </div>
        </div>
    );
}

export default HeaderBox;

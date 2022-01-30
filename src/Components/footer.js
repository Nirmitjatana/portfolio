import React from 'react';

const Footer = () =>{

    // dynamic year in footer, cant change again and again XD
    
    const timestamp = Date().toLocaleString()
    const year = timestamp.length > 0 ? timestamp.substring(11,15) : 2022
    return(
        <div className='flex flex-row w-full justify-between lg:px-[110px] px-2 py-4 lg:py-6'>
            <a className="text-neutral-400 font-bold text-[11px] lg:text-sm" href={"https://github.com/Nirmitjatana/portfolio"} target="_blank" rel='noreferrer'>
                Designed and developed by Nirmit Jatana
            </a>
            <a className="font-bold text-neutral-400 text-[11px] lg:text-sm" href={"https://github.com/Nirmitjatana"} target="_blank" rel='noreferrer'>
            © {year} | Nirmit Jatana
            </a>
        </div>
    )
}

export default Footer;
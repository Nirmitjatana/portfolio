import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tanu = () => {
    let navigate = useNavigate();
    const [name, setName] = useState("");
    return(
        <div className='text-white flex flex-row justify-center'>
            <div className='pt-72 text-xl'>
                Password:
                <div className='py-6'>
                    <input type="password" className='h-10 w-[230px] text-slate-800 outline-none px-5 py-3'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button 
                    className='text-black rounded-lg w-[230px] h-[55px] border-white border-2 bg-white'
                    onClick={()=>{
                        if(name === "ilovetanu2302")
                            navigate('/secret')
                        }
                    }
                >
                    Get In
                </button>
            </div>
        </div>
    )
}


export default Tanu
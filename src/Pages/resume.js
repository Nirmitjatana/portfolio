import React, { useState, useEffect } from 'react';
import WhiteButton from '../Components/whiteButton';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Footer from '../Components/footer'
import Highlight from '../Components/highlight'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {

    const [width, setWidth] = useState(787);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
            // console.log("updating height", newWidth);
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions) 

    }, []);


    const pdf = "https://raw.githubusercontent.com/Nirmitjatana/portfolio/main/src/data/Nirmit_Jatana_Resume.pdf"
    return(
        <div className='flex flex-col justify-between h-screen'>
            <div className='ml-11 pt-32 lg:pt-[150px] lg:flex flex-row lg:justify-between lg:px-[110px]'>
                <h1 className='text-white text-xl lg:text-4xl font-extrabold'>Resume 📝</h1>
                <div className='flex flex-row justify-center -ml-11 mt-8 lg:mt-0'>
                    <WhiteButton text="Download PDF" download={pdf}/>
                </div>
            </div>
            <div className='flex flex-row justify-center mt-[80px] mb-[30px]'>
                <Document file={pdf} 
                loading={ <div className='text-white'>Loading PDF...</div> }
                error={ <div className='text-white'>Error fetching the PDF. Try downloading.</div>}
                >
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} style={{ color: 'white' }}/>
                </Document>
            </div>
            <Highlight text='Resume'/>
            <Footer/>
        </div>
    )
}


export default Resume
import React from 'react';
import WhiteButton from '../components/whiteButton';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {
    const pdf = "https://raw.githubusercontent.com/Nirmitjatana/portfolio/main/src/data/Nirmit_Jatana_Resume.pdf"
    return(
        <>
            <div className='pt-[150px] flex flex-row justify-between px-[110px]'>
                <h1 className='text-white text-4xl font-extrabold'>Resume 📝</h1>
                <WhiteButton text="Download PDF" download={pdf}/>
            </div>
            <div className='flex flex-row justify-center mt-[80px] mb-[30px]'>
                <Document file={pdf} 
                loading={ <div className='text-white'>Loading PDF...</div> }
                error={ <div className='text-white'>Error fetching the PDF. Try downloading.</div>}
                >
                    <Page pageNumber={1} scale={1.7} style={{ color: 'white' }}/>
                </Document>
            </div>
        </>
    )
}


export default Resume
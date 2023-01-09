import React, { useEffect, useState } from 'react';
import './Options.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// let selected=false;
const Options = ({ option, correctAnswer }) => {
    const [selected, setSelected] = useState(false);
    //  console.log( 'hello')
    const CheakValue = (event) => {
         
        // console.log(selected)
        if(selected){
            return
        }
        
        if (option === correctAnswer) {

            event.currentTarget.classList.add(
                'css2',

            );
           ;
        }
        else {
            
            event.currentTarget.classList.add(
                'css1'

            );
            toast.warn('🦄 Wrong Answer!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
       setSelected(true);
    }
    // console.log('hello')

    useEffect(()=>{
        console.log(selected);
    },[selected])
    return (

        <div onClick={ CheakValue} className={`option-container`}>
            <p >{option}</p>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>

    );

};

export default Options;
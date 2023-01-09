import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizs.css'

const Quizs = () => {
    const quizs=useLoaderData()
    const quizsData=quizs.data.questions;
    // console.log(quizs.data)
    const {name}=quizs.data
     
    return (
        <div className='quiz-main'>
           
           <h1> Quiz of {name}</h1>
            
           <div className='all-quiz-container'>
           {
                quizsData.map(data=><Quiz data={data} key={data.id}/>)
            }
           </div>

        </div>
    );
};

export default Quizs;
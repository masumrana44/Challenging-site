import React from 'react';
import Options from '../Options/Options';
import './Quiz.css'
const Quiz = ({data}) => {
    const {id,name,question,correctAnswer,options}=data
     console.log('quiz')
    return (
        <div className='quiz-container'>
            <div className='quistion'>
            <h3>Quiz- {question}</h3>
            </div>
            <div className='options-container'>
             {
                options.map((option,index)  =><Options correctAnswer={correctAnswer} key={index} 
                 option={option}/>)
             }
            </div>
        </div>
    );
};

export default Quiz;
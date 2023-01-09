import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../../Topic/Topic';
import './Topics.css'
const Topics = () => {
    const data=useLoaderData();
    const topics=data.data;
     
    return (
 
        <div className='topics-parent-container'>
             <div className='topics-container'>
            {
                topics.map(topic=><Topic key={topic.id} topic={topic}/>)
            }
        </div>
        </div>
     
    );
};

export default Topics;
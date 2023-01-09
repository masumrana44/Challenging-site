import React from 'react';
import './Topic.css'
import { ArrowDownIcon, ArrowLongRightIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
const Topic = ({topic}) => {
    
    const {id,name,logo,total}=topic
    return (
        <div className='topic-card'>
            <img src={logo} alt=""/>
            <div className='card-info'>
                <h3>{name}</h3>
               <Link to={`/quiz/${id}`}> <button className='' type="">Start Practice <ArrowSmallRightIcon
                 className='arrow-icon'/></button></Link>
            </div>
        </div>
    );
};

export default Topic;
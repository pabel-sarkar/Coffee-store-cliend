import React from 'react';
import image from '../../assets/404.gif'


const Error = () => {
    return (
        <div className='flex justify-center'>
           <img className=' object-cover' src={image} alt="" />
        </div>
    );
};

export default Error;
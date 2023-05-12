import React from 'react';

const Footer = () => {
    return (
        <div className='w-fit mx-auto '>
            <p className='text-center text-sm'>© <a target='_blank' rel='noreferrer' className='text-xl' href="https://github.com/wanna-be-pro">Mahmudul Hasan </a><br /> Department of Computer Science and Engineering <br /> Independent University, Bangladesh <br />
            </p>
            <div className="flex w-fit mx-auto mt-3">
                <a href='https://portfolio-32df2.web.app/' rel='noreferrer' target="_blank"><img className='w-5 mx-3' src="https://img.icons8.com/?size=1x&id=1349&format=png" alt="" /></a>
                <a href='https://www.facebook.com/mahmudulhasaniub' rel='noreferrer' target="_blank"><img className='w-5 mx-3' src="https://img.icons8.com/?size=1x&id=118467&format=png" alt="" /></a>
                <a href='https://www.linkedin.com/in/mahmudul-hasan-030a31228/' rel='noreferrer' target="_blank"><img className='w-5 mx-3' src="https://img.icons8.com/?size=1x&id=8808&format=png" alt="" /></a>
                <a href='https://github.com/wanna-be-pro' rel='noreferrer' target="_blank"><img className='w-5 mx-3' src="https://img.icons8.com/?size=1x&id=3tC9EQumUAuq&format=png" alt="" /></a>
            </div>
        </div>
    );
};

export default Footer;
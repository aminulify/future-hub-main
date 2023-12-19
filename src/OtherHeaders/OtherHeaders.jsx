import React from 'react';
import './OtherHeader.css';

const OtherHeaders = ({children}) => {
    return (
        <div>
            <section className="viewJobTop relative top-0">
                <div className='absolute top-0 right-0'>
                    <img src="bg2.png" alt="" />
                </div>
                {children}
                <div className='absolute bottom-0 left-0'>
                    <img src="bg1.png" alt="" />
                
                </div>
            </section>
        </div>
    );
};

export default OtherHeaders;
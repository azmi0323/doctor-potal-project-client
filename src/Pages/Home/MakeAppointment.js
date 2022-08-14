import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex mt-24 mb-12  justify-center items-center px-5'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-200px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 pb-12'>
                <h3 className='text-xl text-primary py-6 font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white font-bold py-5'>Make an Appointment Today</h2>
                <p className='text-white py-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton></PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
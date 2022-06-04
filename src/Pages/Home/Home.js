import React from 'react';
import Banner from './Banner';
import Info from './Info';
import InputForm from './InputForm';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';


const Home = () => {
    return (
       <div>
            <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
        </div>
        <div>
            <MakeAppointment></MakeAppointment>
        </div>
        <div className='px-12'>
            <Testimonials></Testimonials>
        </div>
        <div>
            <InputForm></InputForm>
        </div>
       </div>
    );
};

export default Home;
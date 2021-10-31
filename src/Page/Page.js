import React from 'react';
import { Link } from 'react-router-dom';
import About from '../Components/About/About';
import Banner from '../Components/Header/Banner';
import Services from '../Components/Services/Services';
import SpecialServices from '../SpecialServices/SpecialServices';



const Page = () => {
    return (
        <div>

            <Banner></Banner>
            <About></About>
            <Services></Services>
            <SpecialServices></SpecialServices>
            <Link to="/addservices"><button>SEE NEW ADDITION</button></Link>
        </div>
    );
};

export default Page;
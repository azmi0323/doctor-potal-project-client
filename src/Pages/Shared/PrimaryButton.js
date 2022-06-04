import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = () => {
    return (
        <div>
            <Link to='/appointment' className="btn btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</Link>
        </div>
    );
};

export default PrimaryButton;
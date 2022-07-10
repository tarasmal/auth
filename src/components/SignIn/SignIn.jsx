import React from 'react';
import Button from "../Button";

const SignIn = () => {
    return (
        <div className={'main row row-cols-1 d-flex justify-content-center'}>
            <div className={'col'}>
                <h1>Join the movement</h1>
            </div>
            <div className={'col d-flex justify-content-center'}>
                <h2 className={'description'}>Bring Change with your Code. Contribute to the open-source community.</h2>
            </div>
            <Button text={'Sign in'} btnStyle={'sign-in'} textStyle={'sign-in-text'}/>

        </div>
    );
};

export default SignIn;
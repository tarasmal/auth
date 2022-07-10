import React, {useEffect, useState} from 'react';
import Input from "../Input";
import Button from "../Button";

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        console.log(firstName, lastName)
    }, [firstName, lastName])
    return (
        <>
            <div className={'form-row row row-cols-2 d-flex justify-content-center'}>
                <div className={'form-group d-inline-flex justify-content-center'}>
                    <Input styling={'credentials form-control'}
                           placeholder={'First name'}
                           onChange={setFirstName}
                           name={'First name'}
                           value={firstName}
                           type={'text'}

                    />
                    <Input styling={'credentials form-control'}
                           placeholder={'Last name'}
                           onChange={setLastName}
                           name={'Last name'}
                           value={lastName}
                           type={'text'}

                    />
                </div>
            </div>
            <div className={'row row-cols-1'}>
                <div className={'col d-flex justify-content-center'}>
                    <Input styling={'input-data'}
                           value={email}
                           name={'email'}
                           type={'text'}
                           placeholder={'Email'}
                           onChange={setEmail}
                    />

                </div>
                <div className={'col d-flex justify-content-center'}>
                    <Input styling={'input-data'}
                           value={password}
                           type={'password'}
                           name={'password'}
                           onChange={setPassword}
                           placeholder={'Password'}
                    />
                </div>
            </div>
            <div className={'row d-flex justify-content-center'}>
                <Button text={'Create new account'}
                        textStyle={'create-account-text'}
                        btnStyle={'create-account-btn d-flex justify-content-center'}
                        fnc={() => alert('sraka')}
                />
            </div>
            <div className={'d-flex justify-content-center'}>
                <p className={'agreements'}>By joining, you agree to our Terms of Service and Privacy Policy</p>
            </div>
        </>
    );
};

export default SignUp;
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Buttons from '../components/common/Buttons';
import GoogleIconSvg from '../assets/svgs/googleIcon.svg?react';
import FacebookIconSvg from '../assets/svgs/facebookIcon.svg?react';
import SignupIconSvg from '../assets/svgs/signup.svg?react';

export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');
    const [showEmailTooltip, setShowEmailTooltip] = useState(false);
    const [showAgeTooltip, setShowAgeTooltip] = useState(false);
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    const emailTooltipRef = useRef<HTMLDivElement>(null);
    const ageTooltipRef = useRef<HTMLDivElement>(null);

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setError('');
        setShowAdditionalFields(true);
    };

    const handleFullSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (!password || password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        if (!firstName || !lastName || !age) {
            setError('Please fill in all the fields');
            return;
        }

        console.log('Form submitted with:', { email, password, firstName, lastName, age });
        setError('');
        navigate('/dashboard');
    };

    const toggleEmailTooltip = () => {
        setShowEmailTooltip((prevState) => !prevState);
    };

    const toggleAgeTooltip = () => {
        setShowAgeTooltip((prevState) => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const emailTooltipElement = emailTooltipRef.current;
            const ageTooltipElement = ageTooltipRef.current;

            if (
                emailTooltipElement &&
                !emailTooltipElement.contains(event.target as Node) &&
                ageTooltipElement &&
                !ageTooltipElement.contains(event.target as Node)
            ) {
                setShowEmailTooltip(false);
                setShowAgeTooltip(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex justify-evenly grid-cols-2 gap-20 h-screen w-screen'>
            <div className='lg:flex col-span-1 self-center w-full justify-end hidden'>
                <SignupIconSvg className='w-96 self-center'/>
            </div>

            <div className='col-span-1 self-center w-full grid justify-center lg:justify-start'>
                <div className='flex justify-center text-center text-2xl font-bold my-6'>
                    Create a free account to 
                    <br />
                    discover your personalized 
                    <br />
                    learning path
                </div>
                <div className='flex justify-between gap-4 my-2 w-full'>
                    <div className='w-1/2'>
                        <Buttons btnType="type2" color='white' className='w-full'>
                            <GoogleIconSvg className='w-5 py-0'/>
                        </Buttons>
                    </div>
                    <div className='w-1/2'>
                        <Buttons btnType='type2' color='white' className='w-full'>
                            <FacebookIconSvg className='w-5'/>
                        </Buttons>
                    </div>
                </div>
                <div className="py-3 flex items-center text-xs font-semibold text-gray-500 uppercase before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6">
                    Or
                </div>
                <div className='my-4'>
                    <form onSubmit={showAdditionalFields ? handleFullSubmit : handleEmailSubmit} className="space-y-4">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                                disabled={showAdditionalFields}
                            />
                            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                                <div
                                    className="w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer"
                                    onClick={toggleEmailTooltip}
                                >
                                    <span className="text-gray-500 text-sm">?</span>
                                    {showEmailTooltip && (
                                        <div className='grid grid-flow-row absolute z-10 bg-white text-black p-4 rounded-md border w-48 text-xs font-normal left-8 top-1/2 -translate-y-1/2 info-tooltip gap-4'>
                                            <p>
                                                We need your email address for essential product functions like resetting your password and notifications.
                                            </p>
                                            <p>
                                                Notifications about comments and other activity, new problems and the very occasional newsletter from the staff at Brilliant; you may unsubscribe at any point.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {!showAdditionalFields && (
                            <div className='my-4'>
                                <Buttons btnType="type2" color='allBlack' className='w-full'>
                                    Continue
                                </Buttons>
                            </div>
                        )}

                        {showAdditionalFields && (
                            <>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>

                                <div className="flex space-x-0">
                                    <div className="w-1/2">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded-l-md"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded-r-md"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <input
                                        type="number"
                                        placeholder="Age"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        min="1"
                                        required
                                    />
                                    <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                                        <div
                                            className="w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer"
                                            onClick={toggleAgeTooltip}
                                        >
                                            <span className="text-gray-500 text-sm">?</span>
                                            {showAgeTooltip && (
                                                <p className='grid grid-flow-row absolute z-10 bg-white text-black p-4 rounded-md border w-48 text-xs font-normal -left-8 -top-1/2 lg:left-8 lg:top-1/2 -translate-y-1/3 info-tooltip gap-4'>
                                                    Filling in your age lets us customize the problem solving experience for you (and stay in compliance with local regulations). For more detail, check out the privacy policy.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className='my-4'>
                                    <Buttons btnType="type2" color='allBlack' className='w-full'
                                        onClick={() => {
                                            navigate('/home')
                                        }}
                                    >
                                        Sign Up
                                    </Buttons>
                                </div>
                            </>
                        )}

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="flex flex-row text-xs justify-center text-gray-500">
                            <p className="text-center">
                                By clicking up, I agree to Brillian's <span className="underline">Terms</span> and <span className="underline">Privacy Policy</span>
                            </p>
                        </div>

                        <div className="text-center pt-2">
                            <p className="text-md">
                                Existing User?{' '}
                                <Link to="/signin" className="underline underline-offset-4 decoration-blue-500">Sign In</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
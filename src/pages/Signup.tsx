import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';


export default function Signup () {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');
  
    // Validate email
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
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

    // Proceed with sign-up logic (e.g., call Firebase API or custom handler)
    console.log('Form submitted with:', { email, password, firstName, lastName, age });
    setError(''); // Clear error message
    // Redirect to another page after successful form submission, e.g., a welcome page
    navigate('/dashboard');
    }

    return (
        <div className='flex justify-evenly grid-cols-2 gap-20 h-screen w-screen'>
            <div className='flex col-span-1 self-center w-full justify-end'>
                <img src="/assets/svgs/signup.svg" alt="signup" className='w-[64%]' />
            </div>

            {/* signup section */}
            <div className='col-span-1 self-center w-full grid justify-start'>
                <div className='flex justify-center text-center text-2xl font-bold my-6'>
                    Create a free account to 
                    <br />
                    discover your personalized 
                    <br />
                    learning path
                </div>
                <div className='flex justify-between gap-4 my-2'>
                    <div className='w-1/2'>
                        <Buttons btnType="type2" color='white'>
                            <svg className="shrink-0 size-5" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4132_5805adfqfqdq121)">
                                <path d="M32.2566 16.36C32.2566 15.04 32.1567 14.08 31.9171 13.08H16.9166V19.02H25.7251C25.5454 20.5 24.5866 22.72 22.4494 24.22L22.4294 24.42L27.1633 28.1L27.4828 28.14C30.5189 25.34 32.2566 21.22 32.2566 16.36Z" fill="#4285F4"></path>
                                <path d="M16.9166 32C21.231 32 24.8463 30.58 27.5028 28.12L22.4694 24.2C21.1111 25.14 19.3135 25.8 16.9366 25.8C12.7021 25.8 9.12677 23 7.84844 19.16L7.66867 19.18L2.71513 23L2.65521 23.18C5.2718 28.4 10.6648 32 16.9166 32Z" fill="#34A853"></path>
                                <path d="M7.82845 19.16C7.48889 18.16 7.28915 17.1 7.28915 16C7.28915 14.9 7.48889 13.84 7.80848 12.84V12.62L2.81499 8.73999L2.6552 8.81999C1.55663 10.98 0.937439 13.42 0.937439 16C0.937439 18.58 1.55663 21.02 2.63522 23.18L7.82845 19.16Z" fill="#FBBC05"></path>
                                <path d="M16.9166 6.18C19.9127 6.18 21.9501 7.48 23.0886 8.56L27.6027 4.16C24.8263 1.58 21.231 0 16.9166 0C10.6648 0 5.27181 3.6 2.63525 8.82L7.80851 12.84C9.10681 8.98 12.6821 6.18 16.9166 6.18Z" fill="#EB4335"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_4132_5805adfqfqdq121">
                                <rect width="32" height="32" fill="white" transform="translate(0.937439)"></rect>
                                </clipPath>
                            </defs>
                            </svg>
                        </Buttons>
                    </div>
                    <div className='w-1/2'>
                        <Buttons btnType='type2' color='white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#316FF6" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                        </Buttons>
                    </div>
                </div>
                <div className="py-3 flex items-center text-xs font-semibold text-gray-500 uppercase before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6">
                    Or
                </div>
                <div className='my-4'>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                        {error && !isValidEmail(email) && <p className="text-red-500 text-sm">{error}</p>}
                        </div>

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

                        <div>
                        <input
                            type="number"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                        </div>

                        {/* Error message */}
                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        {/* CHANGE TO OTHER CUSTOM BUTTON ---- Sign up button */}
                        <div className='my-4'>
                            <Buttons btnType="type2" color='black' onClick={ () => {
                                navigate('/home')
                            }
                            }>Sign Up</Buttons>
                        </div>

                        {/* Policy warning */}
                        <div className="flex flex-row text-xs justify-center text-gray-500">
                            <p className=" text-center">
                                By clicking up, I agree to Brillian's <span className="underline">Terms</span> and <span className="underline">Privacy Policy</span>
                            </p>
                        </div>

                        {/* Sign In link */}
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
    )
}
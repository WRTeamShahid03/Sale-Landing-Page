'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import img from '../../../Assets/Images/newsLetterImg.png';
// import bg from '../../../Assets/Images/newsLetterBG.jpg';
import bg from '../../../Assets/Images/newsletterBg.png';
import toast from 'react-hot-toast';
import FormLoader from '@/Components/FormLoader';

const NewsLetter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const brevoApiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY; // Warning: Exposing API key is risky!

        try {
            const response = await fetch('https://api.brevo.com/v3/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': brevoApiKey,
                },
                body: JSON.stringify({
                    email: email,
                    attributes: {
                        FIRSTNAME: name,
                    },
                    listIds: [84],
                    updateEnabled: true, // Updates the contact if it already exists
                }),
            });

            const data = await response.json();
            console.log('response', response)
            
            if (response.ok) {
                toast.success(`Great, We've Sent You Source Code In Mail!`);
                setName('')
                setEmail('')
            }
            else {
                toast.error('Something went wrong.');
            }
        } catch (error) {
            toast.error('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='newsLetterSect container' style={{ background: `url(${bg.src})`, backgroundSize: '100% 160%', backgroundRepeat: 'no-repeat' }}>
            <div className="row commonRowGap">
                <div className="col-12 col-lg-7">
                    <div className="leftDiv flexCenter justify-content-start">
                        <Image src={img} height={0} width={0} alt='newsLetterImg' />
                        <div className='d-flex flex-column gap-3 '>
                            <span className='title'>Grab Free Source Code of Quiz Online iOS</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5">
                    <div className='h-100'>
                        <form onSubmit={handleSubmit} className='flexColumnCenter h-100'>
                            <input
                                type="text"
                                placeholder='Your Full Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder='Your Email Address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button className='btnSubmit' type="submit" disabled={loading}>
                                {
                                    loading ? <FormLoader /> : 'Submit'
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;

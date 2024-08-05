import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import styles from './AnimatedText.module.css';

const countries = ["USA", "Canada", "UK", "Germany", "Australia", "India"];
const timeAgo = ["1 hours", "12 hours", "5 day", "2 day", "2 hours", "4 hours"];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const AnimatedText = () => {
    const [country, setCountry] = useState(getRandomElement(countries));
    const [time, setTime] = useState(getRandomElement(timeAgo));
    const [key, setKey] = useState(0);
    const [show, setShow] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setCountry(getRandomElement(countries));
            setTime(getRandomElement(timeAgo));
            setKey(prevKey => prevKey + 1);
            setShow(false)
        }, 8000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setInterval(() => {
            setShow(true)
        }, 10000);

    }, [show])
    useEffect(() => {
        console.log(show)

    }, [show])


    return (
        show &&
        <div >
            <AnimatePresence >
                <motion.div
                    key={key}
                    initial={{ x: -600, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={'aniTextContainer'}
                >
                    <div className="aniTextContent">
                        <span className='country'>Someone in the <span>{`${country}`}</span> subscribed</span>
                        <span className=''> {`${time} ago`}</span>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default AnimatedText;

import React from 'react'
import { motion } from 'framer-motion'

const Terms = () => {
    const date = new Date().getDate()
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1 // Month is 0-indexed, add 1
    
    const formattedDate = () => {
        return (
            <div className='flex items-center text-2xl'>
                {date}/{month}/{year}
            </div>
        )
    }
    
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeIn" }} 
            className='p-3 text-white space-y-2'
        >
            <h1 className='font-bold text-5xl'>Terms and Conditions</h1>
            <h2>{formattedDate()}</h2>
            <p className='text-xl'>
                At GrabPizza, your privacy is very important to us. This Privacy Policy explains how we collect, 
                use, and protect your personal information when you visit our website, place an order, or interact 
                with our services. By using our website, you agree to the terms of this Privacy Policy.
            </p>
            <ol className='list-decimal list-inside items-start flex flex-col p-2 space-y-5'>
                <li className='font-semibold text-3xl'>
                    Information We Collect
                    <p className='font-normal text-lg'>
                        We collect information to process your orders, improve our services, and provide a better customer experience.
                    </p>
                </li>
                <li className='font-semibold text-3xl'>
                    How We Use Your Information
                    <p className='font-normal text-lg'>Your data is used to:</p>
                    <ul className='list-disc list-inside text-lg font-normal'>
                        <li>Process and deliver pizza orders accurately</li>
                        <li>Communicate with you about your order status</li>
                        <li>Improve website functionality and user experience</li>
                    </ul>
                </li>
                <li className='font-semibold text-3xl'>
                    How We Protect Your Data
                    <p className='font-normal text-lg'>
                        We collect information to process your orders, improve our services, and provide a better customer experience.
                    </p>
                    <ul className='list-disc list-inside text-lg font-normal'>
                        <li>SSL encryption for all data transfers</li>
                        <li>Secure payment gateways (we never store your credit/debit card details)</li>
                        <li>Regular system updates and vulnerability monitoring</li>
                    </ul>
                </li>
                <li className='font-semibold text-3xl'>
                    Cookies and Tracking
                    <p className='font-normal text-lg'>
                        We collect information to process your orders, improve our services, and provide a better customer experience.
                    </p>
                    <ul className='list-disc list-inside text-lg font-normal'>
                        <li>Keep your cart active during browsing</li>
                        <li>Remember your preferences for faster checkout</li>
                        <li>Analyze website traffic through Google Analytics or similar tools</li>
                    </ul>
                </li>
            </ol>
        </motion.div>
    )
}

export default Terms
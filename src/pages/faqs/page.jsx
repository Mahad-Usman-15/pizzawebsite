import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const pizzaFaqs = [
    {
        id: 0,
        question: "How can I customize my pizza order?",
        answer:
            "You can easily customize your pizza by choosing your crust, sauce, cheese, and toppings during checkout. We also allow half-and-half pizzas for mixed topping preferences."
    },
    {
        id: 1,
        question: "Do you offer gluten-free or vegan options?",
        answer:
            "Yes! We offer gluten-free crusts and vegan cheese options. You can select these from the customization menu while placing your order."
    },
    {
        id: 2,
        question: "How long does delivery usually take?",
        answer:
            "Delivery time depends on your location and order size, but it typically takes between 25 to 40 minutes. You’ll receive live tracking updates once your order is out for delivery."
    },
    {
        id: 3,
        question: "Can I schedule a pizza delivery in advance?",
        answer:
            "Absolutely! You can schedule your order for a specific time and date at checkout. Just choose the 'Schedule Delivery' option before confirming your order."
    },
    {
        id: 4,
        question: "What payment methods do you accept?",
        answer:
            "We accept all major credit and debit cards, cash on delivery, and online payment options such as PayPal and Apple Pay."
    },
    {
        id: 5,
        question: "How do I apply a discount or promo code?",
        answer:
            "Enter your promo code in the 'Discount Code' field at checkout before completing your payment. The discount will be applied automatically if valid."
    },
    {
        id: 6,
        question: "What should I do if my pizza arrives cold or incorrect?",
        answer:
            "If your pizza arrives cold or incorrect, please contact our customer support immediately. We’ll either replace your order or issue a refund depending on the situation."
    },
    {
        id: 7,
        question: "Do you have a loyalty or rewards program?",
        answer:
            "Yes! Our loyalty program lets you earn points for every order. You can redeem those points for free pizzas, sides, or exclusive discounts."
    },
    {
        id: 8,
        question: "Can I order multiple pizzas with different toppings in one order?",
        answer:
            "Of course! You can add as many customized pizzas as you like to your cart, each with its own unique toppings and crust preferences."
    },
    {
        id: 9,
        question: "How do I track my pizza order?",
        answer:
            "Once your order is confirmed, you’ll receive a tracking link via SMS or email. You can use it to see real-time updates from preparation to delivery."
    }
];

const FAQS = () => {
    const [isFaqid, setisfaqid] = useState(null)
    const handlefaqopen = (id) => {
        setisfaqid(isFaqid === id ? null: id )
    }
const firstcolumn = pizzaFaqs.slice(0, 5);
const secondcolumn = pizzaFaqs.slice(5, 10);
    return (
        <div className="px-6 py-12">
            <div className="grid lg:grid-cols-2 gap-6">
              {firstcolumn.map((faq) => (
                    <div className="space-y-6" key={faq.id}>
                        <div
                            className="border border-white shadow-md rounded-lg transition-all"
                            role="accordion"
                            key={faq.id}
                        >
                            <button
                                type="button"
                                onClick={()=>handlefaqopen(faq.id)}
                                className=" cursor-pointer  w-full text-[15px] font-medium text-left p-6 text-white flex items-center justify-between"
                            >
                                <span className="mr-4">
                                    {faq.question}
                                </span>
                                {isFaqid === faq.id ? <FaMinus /> : <FaPlus />}

                            </button>
                            {
                                isFaqid===faq.id && (
                                       <div className=" overflow-hidden  transition-all duration-300 ease-in-out">
                                <div className="pb-6 px-6">
                                    <p className="text-sm text-white leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                                )
                            }
                         
                        </div>

                    </div>
                ))}
          {secondcolumn.map((faq) => (
                    <div className="space-y-6" key={faq.id}> 
                        <div
                            className="border border-white shadow-md rounded-lg transition-all"
                            role="accordion"
                            
                        >
                            <button
                                type="button"
                                onClick={()=>handlefaqopen(faq.id)}
                                className="accordion-button cursor-pointer text-white  w-full text-[15px] font-medium text-left p-6 text-white flex items-center justify-between"
                            >
                                <span className="mr-4 ">
                                    {faq.question}
                                </span>
                                {isFaqid === faq.id ? <FaMinus /> : <FaPlus />}

                            </button>
                            {
                                isFaqid===faq.id && (
                                       <div className=" overflow-hidden transition-all duration-300 ease-in-out">
                                <div className="pb-6 px-6">
                                    <p className="text-sm text-white leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                                )
                            }
                         
                        </div>

                    </div>
                ))}




            </div>
        </div>

    )
}

export default FAQS
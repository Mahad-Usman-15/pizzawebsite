import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Contacts = () => {
    const [reviews, setIsReviews] = useState([])

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/Contacts", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                })
                if (response) {
                    setIsReviews(response.data)
                    console.log("Contact=>", response.data)
                }
            } catch (error) {
                console.log("Error fetching reviews=>", error)
            }


        }
        fetchReviews()
    }, [])
    const formatdate = (date) => {
        let commentedday = new Date(date).getDay()
        let today = new Date().getDay()
        return commentedday - today
    }
    return (
        <div className="py-6 px-4">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold text-white !leading-tight mb-3">
                    All reviews {reviews.length}
                </h3>
                <div>
                    {
                        reviews.map((review, index) => (
                            <div key={index} className="flex items-start max-md:flex-col gap-4 md:gap-8 py-6">
                                <div className="flex items-start gap-4 w-full max-w-56">
                                    <div className="shrink-0">
                                        <img
                                            src="https://readymadeui.com/team-2.webp"
                                            className="object-cover rounded-full w-12 h-12 border-2 border-gray-400"
                                            alt="customer-img-1"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[15px] text-white font-semibold">
                                            {review.name}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-green-600/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-2 h-2 fill-green-700"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M9.225 20.656a1.206 1.206 0 0 1-1.71 0L.683 13.823a1.815 1.815 0 0 1 0-2.566l.855-.856a1.815 1.815 0 0 1 2.567 0l4.265 4.266L19.895 3.14a1.815 1.815 0 0 1 2.567 0l.855.856a1.815 1.815 0 0 1 0 2.566z" />
                                                </svg>
                                            </span>
                                            <p className="text-white text-xs">Verified Buyer</p>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <div className="flex items-center space-x-0.5 text-yellow-400 mt-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[18px] h-[18px] fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[18px] h-[18px] fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[18px] h-[18px] fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[18px] h-[18px] fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[18px] h-[18px] fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
                                        </svg>
                                        <p className="text-white text-sm !ml-2">{formatdate(review.createdAt) <= 1 ? "Yesterday" : `${formatdate(review.createdAt)} Days ago`}</p>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-white text-[15px] leading-relaxed">
                                            {review.message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>

    )
}

export default Contacts
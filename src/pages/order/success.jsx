import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../components/loader'
const Success = () => {
    const { orderId } = useParams()
    const [order, setOrder] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/order/${orderId}`)
                const data = await response.json()
                if (response.ok) {
                    setOrder(data.order)
                }
            } catch (error) {
                console.error("Failed to fetch order:", error)
            } finally {
                setLoading(false)
            }
        }

        if (orderId) {
            fetchOrder()
        }
    }, [orderId])

    if (loading) {
        return <Loader/>
    }

    if (!order) {
        return <div className="text-center py-10">Order not found.</div>
    }
    
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-2xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
                    Thanks for your order, {order.user.firstname}!
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
                    Your order{" "}
                    <a
                        href="#"
                        className="font-medium text-gray-900 dark:text-white hover:underline"
                    >
                        #{order.orderId}
                    </a>
                </p>
                <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
                    <dl className="sm:flex items-center justify-between gap-4">
                        <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                            Date
                        </dt>
                        <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                            {new Date(order.createdAt).toLocaleString()}
                        </dd>
                    </dl>
                    <dl className="sm:flex items-center justify-between gap-4">
                        <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                            Payment Method
                        </dt>
                        <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                            {order.paymentMethod}
                        </dd>
                    </dl>
                    <dl className="sm:flex items-center justify-between gap-4">
                        <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                            Name
                        </dt>
                        <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                            {order.user.firstname} {order.user.lastname}
                        </dd>
                    </dl>
                    <dl className="sm:flex items-center justify-between gap-4">
                        <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                            Address
                        </dt>
                        <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                            {order.shippingAddress.street}, {order.shippingAddress.city}
                        </dd>
                    </dl>
                    <dl className="sm:flex items-center justify-between gap-4">
                        <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                            Phone
                        </dt>
                        <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                            {order.user.phone}
                        </dd>
                    </dl>
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href="#"
                        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                        Track your order
                    </a>
                    <Link
                        to="/"
                        className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Return to shopping
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default Success
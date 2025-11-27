import React from 'react'
const Sidebar = ({ setActiveView }) => {
    return (
        <nav className="hidde    bg-[#121e31] sticky  h-screen  top-0 left-0 min-w-[250px] py-6 px-4 tracking-wide overflow-auto inset-[-1]">
            <ul className="space-y-3">
                <li>
                    <button
                        href=""
                        onClick={() => setActiveView('dashboard')}
                        className="text-white text-[15px] font-normal flex items-center hover:bg-gray-700 rounded px-4 py-2 transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-[18px] h-[18px] mr-3"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M19.56 23.253H4.44a4.051 4.051 0 0 1-4.05-4.05v-9.115c0-1.317.648-2.56 1.728-3.315l7.56-5.292a4.062 4.062 0 0 1 4.644 0l7.56 5.292a4.056 4.056 0 0 1 1.728 3.315v9.115a4.051 4.051 0 0 1-4.05 4.05zM12 2.366a2.45 2.45 0 0 0-1.393.443l-7.56 5.292a2.433 2.433 0 0 0-1.037 1.987v9.115c0 1.34 1.09 2.43 2.43 2.43h15.12c1.34 0 2.43-1.09 2.43-2.43v-9.115c0-.788-.389-1.533-1.037-1.987l-7.56-5.292A2.438 2.438 0 0 0 12 2.377z"
                                data-original="#000000"
                            />
                            <path
                                d="M16.32 23.253H7.68a.816.816 0 0 1-.81-.81v-5.4c0-2.83 2.3-5.13 5.13-5.13s5.13 2.3 5.13 5.13v5.4c0 .443-.367.81-.81.81zm-7.83-1.62h7.02v-4.59c0-1.933-1.577-3.51-3.51-3.51s-3.51 1.577-3.51 3.51z"
                                data-original="#000000"
                            />
                        </svg>
                        <span>Dashboard</span>
                    </button>
                </li>
                <li>
                    <button

                        onClick={() => setActiveView('orders')}
                        className="text-white text-[15px] font-normal flex items-center hover:bg-gray-700 rounded px-4 py-2 transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-[18px] h-[18px] mr-3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M13 .5H3A2.503 2.503 0 0 0 .5 3v10A2.503 2.503 0 0 0 3 15.5h10a2.503 2.503 0 0 0 2.5-2.5V3A2.503 2.503 0 0 0 13 .5ZM14.5 13a1.502 1.502 0 0 1-1.5 1.5H3A1.502 1.502 0 0 1 1.5 13v-.793l3.5-3.5 1.647 1.647a.5.5 0 0 0 .706 0L10.5 7.207V8a.5.5 0 0 0 1 0V6a.502.502 0 0 0-.5-.5H9a.5.5 0 0 0 0 1h.793L7 9.293 5.354 7.647a.5.5 0 0 0-.707 0L1.5 10.793V3A1.502 1.502 0 0 1 3 1.5h10A1.502 1.502 0 0 1 14.5 3Z"
                                data-original="#000000"
                            />
                        </svg>
                        <span>Orders</span>
                    </button>
                </li>

                <li>
                    <button

                        onClick={() => setActiveView('products')}
                        className="text-white text-[15px] font-normal flex items-center hover:bg-gray-700 rounded px-4 py-2 transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-[18px] h-[18px] mr-3"
                            viewBox="0 0 511.414 511.414"
                        >
                            <path
                                d="M497.695 108.838a16.002 16.002 0 0 0-9.92-14.8L261.787 1.2a16.003 16.003 0 0 0-12.16 0L23.639 94.038a16 16 0 0 0-9.92 14.8v293.738a16 16 0 0 0 9.92 14.8l225.988 92.838a15.947 15.947 0 0 0 12.14-.001c.193-.064-8.363 3.445 226.008-92.837a16 16 0 0 0 9.92-14.8zm-241.988 76.886-83.268-34.207L352.39 73.016l88.837 36.495zm-209.988-51.67 71.841 29.513v83.264c0 8.836 7.164 16 16 16s16-7.164 16-16v-70.118l90.147 37.033v257.797L45.719 391.851zM255.707 33.297l55.466 22.786-179.951 78.501-61.035-25.074zm16 180.449 193.988-79.692v257.797l-193.988 79.692z"
                                data-original="#000000"
                            />
                        </svg>
                        <span>Products</span>
                    </button>
                </li>
                <li>
                    <button

                        onClick={() => setActiveView('users')}
                        className="text-white text-[15px] font-normal flex items-center hover:bg-gray-700 rounded px-4 py-2 transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            stroke="currentColor"
                            className="w-[18px] h-[18px] mr-3"
                            viewBox="0 0 682.667 682.667"
                        >
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                <path
                                    fill="none"
                                    strokeMiterlimit={10}
                                    strokeWidth={40}
                                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                    data-original="#000000"
                                />
                                <path
                                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                    data-original="#000000"
                                />
                            </g>
                        </svg>
                        <span>Users</span>
                    </button>
                </li>
                <li>
                    <button

                        onClick={() => setActiveView('contacts')}
                        className="text-white text-[15px] font-normal flex items-center hover:bg-gray-700 rounded px-4 py-2 transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            stroke="currentColor"
                            className="w-[18px] h-[18px] mr-3"
                            viewBox="0 0 682.667 682.667"
                        >
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                <path
                                    fill="none"
                                    strokeMiterlimit={10}
                                    strokeWidth={40}
                                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                    data-original="#000000"
                                />
                                <path
                                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                    data-original="#000000"
                                />
                            </g>
                        </svg>
                        <span>Reviews</span>
                    </button>
                </li>

            </ul>
        </nav>

    )
}   

export default Sidebar
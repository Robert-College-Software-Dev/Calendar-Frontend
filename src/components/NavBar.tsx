import React, { useState } from 'react';
import { useDarkMode } from 'usehooks-ts';

const NavBar: React.FC = () => {
    const { isDarkMode, toggle, enable, disable } = useDarkMode()


    return (
        <div>
            <nav className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out">
                <div className="flex justify-between p-4">
                    <div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-black dark:text-white">
                        Kalender
                    </div>
                    <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
                        <button
                            className="px-6 py-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black"
                        >Giriş Yap</button>
                        <button
                            className="px-6 py-2 text-white transition duration-500 ease-out bg-blue-700 rounded-lg hover:bg-blue-800 hover:ease-in hover:underline"
                        >Kaydol</button>
                    </div>
                </div>
            </nav>

            <div className="flex items-center justify-center mt-40">
                <button onClick={toggle} className="flex items-center px-5 py-3 font-semibold border text-black dark:bg-[#0c1015] rounded-lg bg-white border-black dark:border-black transition duration-700 dark:text-white">
                    <span className="mr-2">
                        {!isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" >
                                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                            </svg>) : (
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                <path
                                    d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
                                /></svg>)}
                    </span>
                    Tema {!isDarkMode ? 'Koyu' : 'Açık'}</button>
            </div>

        </div >
    );
};

export default NavBar;
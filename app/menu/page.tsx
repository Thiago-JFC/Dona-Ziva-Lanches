'use client';
import Image from 'next/image'
import {useEffect, useState} from 'react'

export default function MenuPage() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('/api/menuItems')
            .then((res) => res.json())
            .then(setMenuItems)
    }, []);

    return(
        <>
            <header className="bg-primary-400 text-gray-100 py-6">
                <div className='max-w-300 m-auto flex justify-between'>
                    <nav >
                        <ul className="flex items-center text-xl font-medium gap-16"> 
                            <li>
                                <button>
                                    <Image src="/ziva-logo-head.png" width={48} height={57} alt='go to main menu' />
                                </button>
                            </li>
                            <li className="cursor-pointer">Salgados</li>
                            <li className="cursor-pointer">Bebidas</li>
                            <li className="cursor-pointer">Petiscos</li>
                            <li className="cursor-pointer">Bolos de pote</li>
                        </ul>
                    </nav>

                    <button className='border-2 rounded-4xl py-4 px-16 cursor-pointer font-bold text-xl hover:bg-gray-50 hover:text-primary-400 transition-all'>
                        Entrar
                    </button>
                </div>
                
            </header>
            
            <main>
                <div className='max-w-300 m-auto mt-16'>
                    <h2 className='text-3xl font-bold mb-6'>Salgados</h2>

                    <ul className='grid grid-cols-2 gap-5'>
                        {
                            menuItems.map((item) => (
                                <li key={item.id} className='bg-light-card w-full drop-shadow-sm rounded-lg px-4 py-8'>
                                    <div className='flex justify-between gap-16'>
                                        <article>
                                            <h3 className='font-medium text-xl mb-2'>{item.title}</h3>
                                            <p className='text-gray-500 leading-7'>{item.description}</p>
                                        </article>

                                        <Image src="/unknow.png" width={128} height={128} alt='.'/>
                                    </div>

                                    <footer className='flex justify-end items-center gap-16 mt-6'>
                                            <p className='font-bold text-xl'>R${item.price}</p>

                                            <button className='bg-primary-400 cursor-pointer text-xl font-medium text-light-card py-2 w-32 rounded-4xl'>Pedir</button>
                                        
                                    </footer>
                                </li>
                            ))  
                        }
                    </ul>
                </div>

            </main>
        </>
    )
}
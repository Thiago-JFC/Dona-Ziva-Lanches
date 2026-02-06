import Image from 'next/image'

export default function MenuPage() {
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

            </main>
        </>
    )
}
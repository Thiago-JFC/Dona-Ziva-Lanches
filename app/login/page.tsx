import Image from "next/image";

export default function LoginPage(){
    return (
        <main className="h-screen lg:grid lg:grid-cols-[700px_1fr]">
            <div className="hidden bg-[url(/login-banner.svg)] bg-no-repeat bg-light-login-bg lg:flex lg:items-end lg:justify-center pb-16">
                <Image src='/ziva-logo-full.png' width={280} height={204} alt="" />
            </div>
            <div className="bg-[#FEF4F0] flex items-center justify-center h-screen">
                <div className="w-[90%] max-w-100 bg-[#FEF9F9] drop-shadow-lg rounded-2xl p-7 flex items-center flex-col">
                    <Image src='/ziva-logo-full.png' width={102} height={68} alt="" />
                    <h1 className="font-bold text-xl mt-2">Entrar na plataforma</h1>

                    <button className=" mt-4 border cursor-pointer border-gray-300 rounded-md w-full p-2 bg-[url(/google-icon.png)] bg-no-repeat bg-size-[24px_24px] bg-position-[8px] transition-colors hover:bg-stone-100">
                        {/* <Image src='/google-icon.png' width={24} height={24} alt=""/> */}
                        <p className="text-[12px] sm:text-[14px] font-medium">Fazer Login com o Google</p>
                    </button>
                </div>
            </div>
        </main>
    )
}
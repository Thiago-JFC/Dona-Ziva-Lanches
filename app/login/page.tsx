import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="h-screen lg:grid lg:grid-cols-[700px_1fr]">
      <div className="bg-light-login-bg hidden bg-[url(/login-banner.svg)] bg-no-repeat pb-16 lg:flex lg:items-end lg:justify-center">
        <Image src="/ziva-logo-full.png" width={280} height={204} alt="" />
      </div>
      <div className="flex h-screen items-center justify-center bg-[#FEF4F0]">
        <div className="flex w-[90%] max-w-100 flex-col items-center rounded-2xl bg-[#FEF9F9] p-7 drop-shadow-lg">
          <Image src="/ziva-logo-full.png" width={102} height={68} alt="" />
          <h1 className="mt-2 text-xl font-bold">Entrar na plataforma</h1>

          <button className="mt-4 w-full cursor-pointer rounded-md border border-gray-300 bg-[url(/google-icon.png)] bg-size-[24px_24px] bg-position-[8px] bg-no-repeat p-2 transition-colors hover:bg-stone-100">
            {/* <Image src='/google-icon.png' width={24} height={24} alt=""/> */}
            <p className="text-[12px] font-medium sm:text-[14px]">
              Fazer Login com o Google
            </p>
          </button>
        </div>
      </div>
    </main>
  );
}

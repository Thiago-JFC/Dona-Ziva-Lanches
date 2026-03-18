import Image from "next/image";
import Link from "next/link";

export default function CategoriasPage() {
  return (
    <div className="xl:flex xl:items-center">
      <div className="bg-[url(/categories-banner.png)] xl:block xl:h-screen xl:w-71" />

      <main className="flex h-screen flex-1 flex-col items-center gap-8 pt-16">
        <div className="text-center">
          <Image
            className="m-auto"
            src="/ziva-logo-head.png"
            width={90}
            height={90}
            alt="."
          />
          <h1 className="text-5xl font-bold">Cardápio</h1>
          <p>Selecione uma de nossas categorias</p>
        </div>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Link href="/menu">
            <li className="flex h-64 w-64 cursor-pointer items-end justify-center bg-[url(/unknow.png)] bg-cover pb-2 text-2xl font-bold text-gray-100 shadow-[inset_0_-80px_80px_-20px_rgba(0,0,0,0.7)]">
              Salgados
            </li>
          </Link>
          <Link href="/menu">
            <li className="flex h-64 w-64 cursor-pointer items-end justify-center bg-[url(/unknow.png)] bg-cover pb-2 text-2xl font-bold text-gray-100 shadow-[inset_0_-80px_80px_-20px_rgba(0,0,0,0.7)]">
              Bebidas
            </li>
          </Link>
          <Link href="/menu">
            <li className="flex h-64 w-64 cursor-pointer items-end justify-center bg-[url(/unknow.png)] bg-cover pb-2 text-2xl font-bold text-gray-100 shadow-[inset_0_-80px_80px_-20px_rgba(0,0,0,0.7)]">
              Petiscos
            </li>
          </Link>
          <Link href="/menu">
            <li className="flex h-64 w-64 cursor-pointer items-end justify-center bg-[url(/unknow.png)] bg-cover pb-2 text-2xl font-bold text-gray-100 shadow-[inset_0_-80px_80px_-20px_rgba(0,0,0,0.7)]">
              Bolos de pote
            </li>
          </Link>
        </ul>
      </main>

      <div className="bg-[url(/categories-banner.png)] xl:block xl:h-screen xl:w-71" />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-primary-400 flex h-screen items-center justify-center">
      <section className="bg-light-card relative rounded-full p-20 pb-10 text-center shadow-sm">
        <Image
          className="absolute -top-55 left-1/2 -translate-x-1/2"
          src="/ziva-404.png"
          width={273}
          height={299}
          alt=""
        />
        <h1 className="mb-4 text-4xl font-bold">Página não encontrada</h1>
        <p className="text-gray-600">
          Parece que a página que você tentou acessar <br /> foi removida ou
          está indisponível
        </p>

        <Link
          href="/menu"
          className="bg-primary-400 mt-5 inline-block cursor-pointer rounded-3xl p-4 font-bold text-gray-100 shadow-sm"
        >
          Voltar ao menu principal
        </Link>
      </section>
    </main>
  );
}

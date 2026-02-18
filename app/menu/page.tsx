"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/api/menuItems")
      .then((res) => res.json())
      .then(setMenuItems);
  }, []);

  return (
    <>
      <header className="bg-primary-400 px-5 py-6 text-gray-100">
        {/* DESKTOP NAV */}
        <div className="m-auto hidden max-w-300 justify-between lg:flex">
          <nav>
            <ul className="flex items-center gap-16 text-xl font-medium">
              <li>
                <button>
                  <Image
                    src="/ziva-logo-head.png"
                    width={48}
                    height={57}
                    alt="go to main menu"
                  />
                </button>
              </li>
              <li className="cursor-pointer">Salgados</li>
              <li className="cursor-pointer">Bebidas</li>
              <li className="cursor-pointer">Petiscos</li>
              <li className="cursor-pointer">Bolos de pote</li>
            </ul>
          </nav>

          <button className="hover:text-primary-400 cursor-pointer rounded-4xl border-2 px-16 py-4 text-xl font-bold transition-all hover:bg-gray-50">
            Entrar
          </button>
        </div>
        {/* MOBILE NAV */}
        <div className="flex items-center justify-between lg:hidden">
          <button>
            <Image
              src="/ziva-logo-head.png"
              width={48}
              height={57}
              alt="go to main menu"
            />
          </button>
          {/*TODO: MOBILE HAMBUER NAVIGATION */}
          <div>burger button</div>
        </div>
      </header>

      <main className="px-5 py-8">
        <div className="m-auto mt-16 max-w-300 sm:p-0">
          <h2 className="mb-6 text-3xl font-bold">Salgados</h2>

          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {menuItems.map((item: Product) => (
              <li
                key={item.id}
                className="bg-light-card w-full rounded-lg px-4 py-8 drop-shadow-sm"
              >
                <div className="flex justify-between gap-1 sm:gap-16">
                  <article>
                    <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                    <p className="text-[12px] leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </article>

                  <Image
                    src="/unknow.png"
                    className="h-41.25 w-full sm:h-32 sm:w-32"
                    width={128}
                    height={128}
                    alt="."
                  />
                </div>

                <footer className="mt-6 flex items-center justify-end gap-16">
                  <p className="text-xl font-bold">R${item.price}</p>

                  <Link
                    href={`/menu/${item.id}`}
                    className="bg-primary-400 text-light-card w-32 cursor-pointer rounded-4xl py-2 text-center text-xl font-medium"
                  >
                    Pedir
                  </Link>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

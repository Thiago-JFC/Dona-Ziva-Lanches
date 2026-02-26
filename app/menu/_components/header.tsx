import Image from "next/image";
import Link from "next/link";

export function HeaderMenu() {
  return (
    <header className="bg-primary-400 sticky top-0 left-0 z-5 px-5 py-6 text-gray-100 shadow-md">
      {/* DESKTOP NAV */}
      <div className="m-auto hidden max-w-300 items-center justify-between lg:flex">
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

        <DesktopCartNavigator />
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
        <Link href="/menu/carrinho">ver carrinho</Link>
      </div>
    </header>
  );
}

function DesktopCartNavigator() {
  /* logged in user mock */
  const isUserLoggedIn = true;
  return (
    <>
      {isUserLoggedIn ? (
        <Link href="/menu/carrinho">ver carrinho</Link>
      ) : (
        <button className="hover:text-primary-400 cursor-pointer rounded-4xl border-2 px-16 py-4 text-xl font-bold transition-all hover:bg-gray-50">
          Entrar
        </button>
      )}
    </>
  );
}

import { MenuItem } from "@/app/lib/menu";
import Image from "next/image";
import Link from "next/link";

type MenuItemsProps = {
  item: MenuItem;
};

export function MenuProduct({ item }: MenuItemsProps) {
  return (
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
  );
}

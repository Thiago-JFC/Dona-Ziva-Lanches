export type MenuItem = {
  id: string;
  title: string;
  description: string;
  price: number;
};

const mockedMenuItems: MenuItem[] = [
  {
    id: "1",
    title: "Coxinha com requeijão",
    description:
      "Coxinha crocante por fora, recheada com frango desfiado e requeijão cremoso. Irresistível do começo ao fim.",
    price: 6.99,
  },
  {
    id: "2",
    title: "Quibe",
    description:
      "Quibe crocante por fora e macio por dentro, feito com carne temperada e trigo de qualidade. Um clássico que conquista todos.",
    price: 6.99,
  },
  {
    id: "3",
    title: "Joelho",
    description:
      "Pão recheado com presunto e queijo, assado até dourar. Uma combinação irresistível e perfeita para qualquer lanche.",
    price: 7.99,
  },
  {
    id: "4",
    title: "Risole de carne",
    description:
      "Massa fina e crocante, recheada com carne moída temperada na medida certa. Ideal para petiscos ou lanche rápido.",
    price: 5.99,
  },
  {
    id: "5",
    title: "Risole de camarão",
    description:
      "Risole recheado com camarão suculento e temperos especiais, frito até ficar dourado. Sabor sofisticado e irresistível.",
    price: 9.99,
  },
  {
    id: "6",
    title: "Bolinho de aipim",
    description:
      "Bolinho macio feito com aipim e recheio de carne ou frango, frito até dourar. Crocante por fora e saboroso por dentro.",
    price: 6.75,
  },
];
export async function getAllMenuItems(): Promise<MenuItem[]> {
  await new Promise((r) => setTimeout(r, 200)); // simulate latency
  return mockedMenuItems;
}

export async function getMenuItemById(
  id: string,
): Promise<MenuItem | undefined> {
  await new Promise((r) => setTimeout(r, 200));
  return mockedMenuItems.find((item) => item.id === id);
}

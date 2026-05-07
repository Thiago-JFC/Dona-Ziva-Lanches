import Image from "next/image";
import { MouseEventHandler } from "react";

export function EditFieldButton({
  handleEditing,
}: {
  handleEditing: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={handleEditing} className="cursor-pointer">
      <Image src="./icons/edit.svg" width={18} height={18} alt="" />
    </button>
  );
}

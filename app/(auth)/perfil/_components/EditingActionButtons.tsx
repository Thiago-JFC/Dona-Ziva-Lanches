import { MouseEventHandler } from "react";

export function EditingActionButtons({
  handleCancel,
  handleConfirm,
}: {
  handleCancel: MouseEventHandler<HTMLButtonElement>;
  handleConfirm: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <footer className="flex justify-end gap-2">
      <button className="cursor-pointer" onClick={handleCancel}>
        Cancelar
      </button>
      <button className="cursor-pointer" onClick={handleConfirm}>
        Confirmar
      </button>
    </footer>
  );
}

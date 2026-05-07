"use client";
import { ReactNode, useState } from "react";
import { EditFieldButton } from "./EditFieldButton";
import { EditingActionButtons } from "./EditingActionButtons";
import { NewFieldValueInput } from "./NewFieldValueInput";
import { Tables } from "@/database.types";
import { useUpdateUserProfileField } from "@/hooks/useUpdateUserProfileField";
import { EditUserAddressModal } from "./editUserAddressModal";

export function EditProfileFieldContainer({
  children,
  fieldValue,
  fieldType,
  editingType = "inline",
  address = null,
}: {
  children: ReactNode;
  fieldValue: string;
  fieldType: keyof Tables<"profiles"> | "address";
  editingType?: "inline" | "modal";
  address?: Tables<"addresses"> | null;
}) {
  const [isUserEditing, setIsUserEditing] = useState<boolean>(false);
  const [editedValue, setEditedValue] = useState<string>(fieldValue);
  const { updateUserCellphone, updateUserFullname } =
    useUpdateUserProfileField();

  function handleStartEditingMode() {
    setIsUserEditing(true);
  }

  function handleCancelEditingMode() {
    setIsUserEditing(false);
  }

  function handleConfirmEdition() {
    if (fieldType === "cellphone") {
      updateUserCellphone(editedValue);
      setIsUserEditing(false);
    }

    if (fieldType == "full_name") {
      updateUserFullname(editedValue);
      setIsUserEditing(false);
    }
  }

  function handleContainerStyles() {
    if (isUserEditing) return "space-y-2";
    return "flex justify-between";
  }

  function handleEditedValue(e: string) {
    setEditedValue(e);
  }

  return (
    <li
      className={`${handleContainerStyles()} rounded-lg border border-gray-400 p-5`}
    >
      <div>
        {children}
        <span className="text-sm text-gray-500">
          {!isUserEditing && editedValue}
        </span>
      </div>

      {isUserEditing ? (
        editingType === "inline" ? (
          <>
            <NewFieldValueInput
              fieldValue={fieldValue}
              handleEditedValue={handleEditedValue}
            />
            <EditingActionButtons
              handleCancel={handleCancelEditingMode}
              handleConfirm={handleConfirmEdition}
            />
          </>
        ) : (
          <EditUserAddressModal
            address={address as Tables<"addresses">}
            handleEditing={handleCancelEditingMode}
          />
        )
      ) : (
        <EditFieldButton handleEditing={handleStartEditingMode} />
      )}
    </li>
  );
}

export function EditProfileFieldTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-medium">{children}</h3>;
}

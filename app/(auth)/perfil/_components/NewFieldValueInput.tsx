export function NewFieldValueInput({
  fieldValue,
  handleEditedValue,
}: {
  fieldValue: string;
  handleEditedValue: (value: string) => void;
}) {
  return (
    <input
      type="text"
      defaultValue={fieldValue}
      onChange={(e) => handleEditedValue(e.target.value)}
      autoFocus
      className="focus:border-b-primary-400 border-b border-b-gray-300 outline-none focus:border-b-2"
    />
  );
}

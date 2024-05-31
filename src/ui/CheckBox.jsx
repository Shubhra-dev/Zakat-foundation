function CheckBox({ name, label, checked, handleChange }) {
  return (
    <div className="flex gap-2 w-full">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        className="accent-slate-500"
      />
      <label className="text-base">{label}</label>
    </div>
  );
}

export default CheckBox;

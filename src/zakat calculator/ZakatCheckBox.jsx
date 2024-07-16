function ZakatCheckBox({ name, item, label, handleChange }) {
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        name={name}
        checked={item[name].active}
        onChange={handleChange}
        className="accent-slate-500"
      />
      <label className="capitalize" onClick={handleChange}>
        {label}
      </label>
    </div>
  );
}

export default ZakatCheckBox;

function ZakatCheckBox({ name, label, items, handleChange }) {
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        name={name}
        checked={items[name]}
        onChange={handleChange}
        className="accent-slate-500"
      />
      <label
        className="capitalize"
        onClick={() => handleChange({ name, checked: !items[name] })}
      >
        {label}
      </label>
    </div>
  );
}

export default ZakatCheckBox;

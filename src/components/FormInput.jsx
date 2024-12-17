function FormInput({ type, label, placeholder, name, value, onChange }) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="input input-bordered w-full"
      />
    </label>
  );
}

export default FormInput;

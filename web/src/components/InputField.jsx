export default function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gh-gray">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`mt-1 p-2 block w-72 text-base rounded-lg bg-gray-100 focus:border-blue-700 focus:ring-blue-700 ${
          error ? "border-red-500" : ""
        } ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

import React from 'react';

const InputField = ({
  label,
  id,
  type = 'text',
  placeholder = '',
  name,
  required = false,
  value,
  onChange, }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name || id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;
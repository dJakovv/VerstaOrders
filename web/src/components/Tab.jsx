export default function Tab({ label, isActive, onClick }) {
  return (
    <li className="me-2" role="presentation">
      <button
        className={`inline-block p-4 border-b-2 rounded-t-lg ${
          isActive
            ? "border-blue-700 text-black"
            : "border-gray-400 text-blue-700"
        }`}
        onClick={onClick}
        role="tab"
      >
        {label}
      </button>
    </li>
  );
}

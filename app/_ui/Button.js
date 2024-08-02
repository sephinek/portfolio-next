export default function Button({ children }) {
  return (
    <button className="bg-gradient-button flex items-center justify-center rounded-full px-[1px] py-[1px] transition-all duration-300 hover:scale-[102%] hover:shadow-sm">
      <span className="text-accent-900 text-2xs rounded-full bg-primary-50 px-4 py-[7px] font-bold uppercase tracking-wider">
        {children}
      </span>
    </button>
  );
}

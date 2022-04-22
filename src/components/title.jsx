export default function Title({ text, children }) {
  return (
    <div className="flex items-center gap-x-16px">
      <span>{children}</span>
      <h4 className="text-h4 font-semibold text-dark-blue">{text}</h4>
    </div>
  );
}
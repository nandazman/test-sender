export default function Title({ text, children, description }) {
  return (
    <div>
      <div className="flex items-center gap-x-16px mb-5px">
        <span>{children}</span>
        <h4 className="text-h4 font-semibold text-dark-blue">{text}</h4>
      </div>
      <p className="text-semi-normal mb-0 text-placeholder">
        {description}
      </p>
    </div>
  );
}
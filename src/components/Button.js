const Button = ({ onClick, text }) => {
  return (
    <button
      style={{ backgroundColor: 'green' }}
      className="btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

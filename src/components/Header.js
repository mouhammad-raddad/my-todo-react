import Button from "./Button"

const Header = ({ onAdd, showAdd }) => {
  return (
    <div className="header">
      <h1>My Todos</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />{' '}
    </div>
  );
};

export default Header

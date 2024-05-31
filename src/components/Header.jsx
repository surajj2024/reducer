const Header = () => {
  const generateItems = (count) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(
        <div className="item" key={i}>
          Todo App
        </div>
      );
    }
    return items;
  };

  const items = generateItems(10);
  return (
    <div id="container">
      <div className="scroll">{items}</div>
      <div className="fade"></div>
    </div>
  );
};

export default Header;

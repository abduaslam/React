function Navbar({ title, menus }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul style={{display:"flex",gap:"20px",borderRadius:"8px", backgroundColor:"blueviolet", height:"40px", width:"780px"}}>
        {menus.map((menu, index) => (
          <li key={index}>{menu}</li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;

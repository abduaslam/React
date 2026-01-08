import Navbar from "./componets/Navbar-Component"
import Card from "./componets/Card-Component";
import User from "./componets/User-Component";

function App() {
  const menus = ["Home", "About", "Contact"];

  return (
    <>
      <Navbar title="My Website" menus={menus} />

      <User
        name="Abdalsalam"
        email="abdu@gmail.com"
        role="Help users to achieve their goals"/>

      <Card
        title="Users website"
        description="We provide good services to you"
        buttonText="Submit"
      />
    </>
  );
}

export default App;

import { Route, BrowserRouter, Routes } from "react-router-dom";
// import SignIn from "./pages/signin";
// import Login from "./pages/login";
// import Profile from "./pages/profile";
// import ModificarPerfil from "./pages/modifProfile";
import AddProduct from "./pages/addProduct";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/signIn" element={<SignIn />} />
    //     <Route path="/perfil" element={<Profile />} />
    //     <Route path="/modificarPerfil" element={<ModificarPerfil />} />
    //   </Routes>
    // </BrowserRouter>

    //  <Profile/>
    // <ModificarPerfil/>
    // <SignIn/>
    <AddProduct />
  );
}

export default App;

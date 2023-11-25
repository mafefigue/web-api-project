/*
import { AiOutlineSmile } from "react-icons/ai";
<AiOutlineSmile className="max-w-md mx-auto" />

*/

import React from "react";

function Profile() {
  return (
    <div className="m-4">
      <div className="bg-amber-300 p-10 mb-4 rounded-xl authButtons basis-1/4 border-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-white mb-3 text-center">
          Mi perfil
        </h1>
        <div className="bg-slate-800 p-10 mb-4 rounded-xl authButtons basis-1/4 border-4 flex flex-col items-center justify-center">
          <h3 className="text-base font-bold text-white text-center">
            nombre usuario
          </h3>
          <img></img>
          <h3 className="text-base font-bold text-white text-center">
            correo usuario
          </h3>
          <button className="bg-indigo-500 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-lime-500">Contactame </button>
          <div className="flex flex-wrap align-items-center">
            <button className="bg-lime-600 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-lime-500">
              +1
            </button>
            <button className="bg-red-600 px-3 py-3 text-white font-bold rounded-lg m-2 self-center justify-center mb-4  hover:bg-red-700">
              -1
            </button>
          </div>
        </div>
        <div className="bg-slate-400 p-10 mb-4 rounded-xl authButtons basis-1/4 border-4 flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold text-white text-center">
            información de contacto
          </h2>
          <p>aqui iría la info que el usuario ingrese </p>
        </div>
        <div className="bg-lime-600 p-10 mb-4 rounded-xl authButtons basis-1/4 border-4 flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold text-white text-center">
            Mis publicaciones
          </h2>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

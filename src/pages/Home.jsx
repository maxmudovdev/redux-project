import React from "react";
import { useAuth } from "../context/AuthContext"; 
import { Navigate } from "react-router-dom"; 
function Home() {
  const currentUser = useAuth(); 


  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="h-screen grid place-items-center w-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">
          Salom,  {currentUser.displayName}!
        </h1>
        <p className="text-lg">
          Bizning saytimizdan ro'yxatdan o'tganingiz bilan tabriklaymiz addushi !
        </p>
      </div>
    </div>
  );
}

export default Home;

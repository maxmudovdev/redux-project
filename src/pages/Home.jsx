import React from "react";
import { useAuth } from "../context/AuthContext"; 
import { Navigate } from "react-router-dom"; 
function Home() {
  const currentUser = useAuth(); 


  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-teal-600 via-teal-500 to-blue-400 text-white">
  <div className="text-center bg-white bg-opacity-20 backdrop-blur-lg p-10 rounded-lg shadow-lg">
    <h1 className="text-5xl font-bold mb-5">
      Salom, {currentUser.displayName}!
    </h1>
    <p className="text-xl">
      Bizning saytimizdan ro'yxatdan o'tganingiz bilan tabriklaymiz!
    </p>
  </div>
</div>

  );
}

export default Home;

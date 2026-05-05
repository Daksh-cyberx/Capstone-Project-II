import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState("login"); // "login" | "signup"

  const openLogin = () => {
    setModalTab("login");
    setIsModalOpen(true);
  };

  const openSignup = () => {
    setModalTab("signup");
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <AuthContext.Provider value={{ isModalOpen, modalTab, setModalTab, openLogin, openSignup, closeModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
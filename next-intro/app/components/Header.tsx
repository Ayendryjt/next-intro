import React from "react";
import { NavButton } from "./NavButton";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full mx-auto my-4 max-w-6xl">
      <h2 className="text-black text-xl font-bold">🗳️Vota.dev</h2>
      <div className="flex justify-between items-center">
        <NavButton buttonLabel='Sign In' borderColor='border-white' buttonBg='bg-white' textColor='text-dark'/>
        <NavButton buttonLabel='Sign Up' borderColor='border-black' buttonBg='bg-black' textColor='text-white'/>
      </div>
    </header>
  );
};
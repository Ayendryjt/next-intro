import React from 'react';

function NavButton(props: { buttonLabel: string, borderColor: string, buttonBg: string, textColor: string }) {
  const { buttonLabel, borderColor, buttonBg, textColor } = props;

  const buttonStyle = {
    border: `2px solid ${borderColor}`,
    backgroundColor: buttonBg,
    color: textColor,
  };

  return (
    <button style={buttonStyle}>{buttonLabel}</button>
  );
}

function App() {
  return (
    <div>
      <NavButton buttonLabel='Sign In' borderColor='black' buttonBg='black' textColor='white' />
      <NavButton buttonLabel='Sign Up' borderColor='blue' buttonBg='white' textColor='blue' />
      {/* Agrega más botones según sea necesario */}
    </div>
  );
}

export default App;

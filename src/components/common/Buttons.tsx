import { ReactNode } from "react";

type BtnProp = {
  children?: ReactNode;
  color?: 'white' | 'gray' | 'green' | 'black' | 'allBlack'; // Define accepted colors
  btnType: 'type1' | 'type2'; // Define accepted button types
  onClick?: () => void; // Optional onClick handler
  className?: string; // Add a className prop
};

const Buttons = ({ children, btnType = 'type2', color = 'white', onClick, className }: BtnProp) => {
  // Base styles for Type 1 button
  const baseClassType1 =
    "py-2.5 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border-2 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  // Base styles for Type 2 button
  const baseClassType2 =
    "py-2.5 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border-b-4 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  // Color variants for Type 1 button (empty for now, could be customized)
  const colorVariantsType1 = {
    white: 'border-gray-300 bg-white text-gray-800 shadow-sm hover:border-black focus:border-black ',
    gray: 'border-gray-300 bg-white text-gray-800 shadow-sm hover:border-black focus:border-black ',
    green: 'border-green-600 bg-white text-green-600 hover:shadow-sm ',
    black: 'border-gray-300 bg-white text-gray-800 shadow-sm hover:border-black focus:border-black ',
    allBlack: 'border-gray-900 bg-gray-900 text-white shadow-sm hover:bg-gray-800 focus:shadow-none ',
  };

  // Color variants for Type 2 button
  const colorVariantsType2 = {
    white: 'border-gray-300 bg-white text-gray-800 shadow-sm hover:border-gray-400 focus:border-gray-400 border-2',
    gray: 'border-gray-200 bg-gray-200 text-gray-500 shadow-sm hover:bg-gray-400 hover:border-gray-400 focus:shadow-none',
    green: 'border-green-700 bg-green-500 text-white shadow-sm hover:bg-green-400 focus:shadow-none',
    black: 'border-black bg-gray-700 text-white shadow-sm hover:bg-gray-600 focus:shadow-none',
    allBlack: 'border-black bg-gray-800 text-white shadow-sm hover:bg-gray-700 focus:shadow-none ',
  };

  // Combine base styles with color variants and the provided className
  const btnClassType1 = `${baseClassType1} ${colorVariantsType1[color]} ${className}`;
  const btnClassType2 = `${baseClassType2} ${colorVariantsType2[color]} ${className}`;

  // Render button based on btnType
  if (btnType === "type1") {
    return <button className={btnClassType1} onClick={onClick}>
      {children}
    </button>;
  } else {
    return <button className={btnClassType2} onClick={onClick}>
      {children}
    </button>;
  }
};

export default Buttons;
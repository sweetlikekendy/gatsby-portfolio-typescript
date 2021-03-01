import React from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  isSmall?: boolean;
};

const SecondaryButton: React.FC<Props> = ({ children, isSmall, ...rest }) => {
  if (isSmall) {
    return (
      <span
        className="w-full flex items-center justify-center px-4 py-2 shadow-sm rounded-md border border-transparent text-base font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 hover:shadow-md active:shadow-xl active:bg-blue-300"
        {...rest}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className="w-full flex items-center justify-center px-8 py-3 shadow-sm rounded-md border border-transparent text-base font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 hover:shadow-md active:shadow-xl active:bg-blue-300 md:py-4 "
      {...rest}
    >
      {children}
    </span>
  );
};

export default SecondaryButton;

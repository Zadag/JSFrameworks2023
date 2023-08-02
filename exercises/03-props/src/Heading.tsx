import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

const Heading = (props: HeadingProps) => {
  return <h1>{props.children}</h1>;
};

export default Heading;

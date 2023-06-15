import { useState } from "react";

const AccordianSection = ({ accordian }) => {
  const { title, content, accordianOpen } = accordian;
  const [isOpen, setIsOpen] = useState(accordianOpen); // takes a bool
  console.log("accord", accordian);
  return isOpen ? (
    <>
      <div class="title active" onClick={() => setIsOpen(!isOpen)}>
        <i class="dropdown icon"></i>
        {title}
      </div>
      <div class="content active">
        <p class="transition visible">{content}</p>
      </div>
    </>
  ) : (
    <>
      <div class="title" onClick={() => setIsOpen(!isOpen)}>
        <i class="dropdown icon"></i>
        {title}
      </div>
      <div class="content">
        <p class="transition hidden">{content}</p>
      </div>
    </>
  );
};

export default AccordianSection;

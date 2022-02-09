import React, { useEffect, useRef, useState } from "react";

import "./Accordion.css";

interface AccordionProps {
  title: React.ReactNode;
  content: any;
  changeChild: Function;
  changeValue: number;
  Active: boolean;
}

export const Accordion: React.FC<
  AccordionProps & React.HTMLAttributes<HTMLDivElement>
> = ({ title, content, changeChild, changeValue, Active, ...props }) => {
  const [active, setActive] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");

  const contentSpace = useRef(null);
  const buttonRef = useRef(null);

  // @ts-ignoreif
  function toggleAccordion(e) {
    e.stopPropagation(true);
    setActive(active === false ? true : false);
    // @ts-ignoreif (active)
    buttonRef.current.style.pointerEvents = true;
    // changeChild();
  }

  useEffect(() => {
    // @ts-ignoreif (active)
    setMaxHeight(!active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    // @ts-ignoreif (active)
    if (active)
      // @ts-ignoreif (active)
      contentSpace.current.addEventListener(
        "transitionend",
        // @ts-ignore
        function (e) {
          e.stopPropagation(true);
          // @ts-ignoreif (active)
          if (this.style.maxHeight !== "0px") this.style.maxHeight = "none";
          // @ts-ignoreif (active)
          buttonRef.current.style.pointerEvents = false;
        },
        {
          once: true
        }
      );
  }, [active]);

  return (
    <div className="accordion__section">
      <button
        ref={buttonRef}
        className="accordion__title"
        onClick={toggleAccordion}
      >
        {title}
      </button>
      <div
        className="accordion__content"
        ref={contentSpace}
        style={{ maxHeight: `${maxHeight}` }}
      >
        {content}
      </div>
    </div>
  );
};

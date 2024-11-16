import React from "react";
import PropTypes from "prop-types";

// Import the Download icon from lucide-react
import { Download } from "lucide-react";

const CvButton = ({ href, target = "_self", label, classes }) => {
  return (
    <a
      href={href}
      target={target}
      className={
        "cursor-pointer text-white max-w-max h-9 flex items-center gap-2 px-4 rounded-xl font-medium text-sm ring-1 ring-zinc-50/5 ring-inset transition-[background-color] btn-primary h-25 " +
        (classes || "") + // Allows custom classes to be passed as props
        "  hover:bg-white hover:text-black " // White background with black text on hover
      }
    >
      {label}
      <span className="ml-2" aria-hidden="true">
        <Download size={18} /> {/* Always show the Download icon */}
      </span>
    </a>
  );
};

CvButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  classes: PropTypes.string,
};

export { CvButton };

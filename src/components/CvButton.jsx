import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Download } from "lucide-react";

const CvButton = ({ href, target = "_self", label, classes }) => {
  const handleDownload = () => {
    toast.info("Your download is starting...");
  };

  return (
    <a
      href={href}
      target={target}
      download="Mustaham_Resume.pdf" // Suggested filename
      onClick={handleDownload}
      className={`cursor-pointer text-white max-w-max h-9 flex items-center gap-2 px-4 rounded-xl font-medium text-sm ring-1 ring-zinc-50/5 ring-inset transition-[background-color] btn-primary ${
        classes || ""
      } hover:bg-white hover:text-black`}
    >
      {label}
      <span className="ml-2" aria-hidden="true">
        <Download size={18} />
      </span>
    </a>
  );
};

CvButton.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export { CvButton };

import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import Cube from "../components/Cube.jsx";
import GitHubLogo from "../components/GitHubLogo.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Button from "../components/Button.jsx";
import Target from "../components/Target.jsx";
import CanvasLoader from "../components/Loading.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import { HackerRoom } from "../components/HackerRoom.jsx";
import Laptop from "../components/Laptop.jsx";
import Rings from "../components/Rings.jsx";
import Avatar from "../../public/assets/avatar.png";
import { CvButton } from "../components/CvButton.jsx";
import { Download } from "lucide-react"; // Import the download icon from lucide-react

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="c-space pt-28 lg:pt-18">
      <div className="container-fluid lg:grid lg:grid-cols-2 items-center lg:gap-5">
        <div>
          <h2 className="headline-1 max-w-[55ch] sm:max-w-[20ch] lg:max-w-[50ch] mt-5 mb-5 lg:mb-10">
            Passionate Developer
            <br />
            Turning Ideas into Web Solutions
          </h2>
          <div className="flex items-center gap-3">
            <CvButton
            label="Download CV"
            icon="download" />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-white/10 via-white/29 to-45% rounded-[50px] overflow-hidden">
            <img
              src={Avatar}
              alt=""
              height={400}
              width={556}
              className="rounded-[20px]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;

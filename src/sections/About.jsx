import Globe from "react-globe.gl";
import {useEffect, useRef, useState} from "react";
import * as THREE from 'three';
import Button from "../components/Button.jsx";

const About = () => {
    const globeEl = useRef();

    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("micahmustaham@gmail.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }
    const [isDayTime, setIsDayTime] = useState(true);

    useEffect(() => {
        const checkDayTime = () => {
            const currentHour = new Date().getHours();
            setIsDayTime(currentHour >= 6 && currentHour < 18); // Daytime between 6 AM and 6 PM
        };

        checkDayTime();
        const interval = setInterval(checkDayTime, 60 * 60 * 1000); // Check every hour

        return () => clearInterval(interval); // Cleanup interval
    }, []);


    useEffect(() => {
        if (globeEl.current) {
            const ZAMBOANGA_COORDS = {lat: 6.9214, lng: 122.0790};

            // Adjust the globe's camera to focus on Zamboanga City
            const {lat, lng} = ZAMBOANGA_COORDS;
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lng + 180) * (Math.PI / 180);
            const radius = 200; // Adjust as necessary for zoom

            // Set camera position based on Zamboanga coordinates
            globeEl.current.controls().target = new THREE.Vector3(
                radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.cos(phi),
                radius * Math.sin(phi) * Math.sin(theta)
            );

            // Manually update the globe's camera controls to apply the changes
            globeEl.current.controls().update();
        }
    }, []);

    const globeImageUrl = isDayTime
        ? "//unpkg.com/three-globe/example/img/earth-day.jpg"
        : "//unpkg.com/three-globe/example/img/earth-night.jpg";

    const zamboangaCity = {lat: 6.9214, lng: 122.0790, text: 'Zamboanga City, Philippines'};
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-pan-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Micah</p>
                            <p className="grid-subtext">
                                I'm a System Developer with over 2 years of experience building web applications and
                                university systems. My primary focus is backend development, but I'm continually
                                enhancing my frontend skills through personal projects and collaborations.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <ul className="grid-subtext" style={{listStyleType: "disc", paddingLeft: "20px"}}>
                                <li>Backend development with PHP (Laravel, Django)</li>
                                <li>Frontend development with Bootstrap, learning React and Next.js</li>
                                <li>Proficient in C++, Python, Java</li>
                                <li>Experienced with databases (MySQL, PostgreSQL)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl={globeImageUrl}
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: zamboangaCity.lat,
                                    lng: zamboangaCity.lng,
                                    text: zamboangaCity.text,
                                    color: 'white',
                                    size: 15
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Remote Collaboration</p>
                            <p className="grid-subtext">
                                I work remotely from the Philippines, delivering backend and full-stack solutions
                                globally. Let’s connect to discuss how I can help bring your projects to life!
                            </p>
                            <a href="#contact"><Button name="Let’s build something great together!" isBeam containerClass="w-full mt-10"></Button></a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                Coding is more than just a job—it’s my craft. I love solving complex problems and
                                turning ideas into impactful solutions. Each project is a chance to learn, push
                                boundaries, and create systems that make a real difference. For me, coding isn’t just
                                about completing tasks; it’s about building value and striving for excellence.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4"
                             className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Get in Touch</p>
                            <p className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="l:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    micahmustaham@gmail.com
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About

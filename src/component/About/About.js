import React from "react";
import TabsRender from "./Tabs";
import { Element } from "react-scroll";
import picture from "../../images/picture.jpg"
import { Slide } from "react-awesome-reveal"

const About = () => {
    return (
        <Element className="about" id="about" name="about">
                <div className="title right-title dark:text-gray-50 pr-10 text-3xl">
                    about me
                </div>
            <Slide delay={200} duration={700} direction={"up"} triggerOnce>
                <div className="mb-3 md:mr-5 pb-5 px-7 text-justify md:flex gap-4">
                    <div className="flex-none md:mr-7">
                        <img src={picture} alt="my picture" loading="lazy" className="shadow-lg w-56 mx-auto" />
                    </div>
                    <div className="flex-none md:flex-1">
                        <p className="text-xl dark:text-gray-300 mt-8 md:mt-0  rotate-180 before:bg-blue-500"
                        > 
                            Hello! My name's Diafra Soumare, a passionate software developer. 
                            I develop web applications and design databases. 
                            My core skill is based on PHP and JavaScript and I love to do most of the things using 
                            Symfony. I love to make the web more open to the world. I have graduated with 
                            a bachelor's degree in Computer Science Engineering from Gaston Berger University at 
                            Saint-Louis, Senegal in 2020. I am available for any kind of job opportunity that suit my interests.
                        </p>
                    </div>
                </div>
                <TabsRender />
            </Slide>
        </Element>
    )
}

export default About;
import React from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile-pic.jpg"

const About = () => {
  return (
    <div className="w-fill md:h-screen p-4 flex items-center py-16">
      <div className="max-w-3xl m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 p-4">
          <h2 className="pb-4">About Me</h2>
          <p>
            Hi there! I&#39;m a Web Developer with a strong background in
            Computer Science and a passion for creating beautiful and functional
            websites. I specialize in front-end development using HTML, CSS, and
            JavaScript, and have experience with React and TailwindCSS
            framework. I&#39;m also well-versed in user experience design
            principles and usability testing, which allows me to create websites
            that are both visually appealing and easy to use.
          </p>
        </div>
        <div className="p-4 md:pt-12 w-full h-auto">
            <Image className="rounded-full mx-auto" width={300} height={300} src={profilePic} alt="profilePic"></Image>
        </div>
      </div>
    </div>
  );
};

export default About;

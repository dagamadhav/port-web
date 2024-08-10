import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Myself, Madhav Daga Undergraduate with proficiency in MERN stack, knowledgeable about API integration, database administration and full-stack development.
             I am devoted to keeping up with upcoming technologies. Strong team player and communicator who excels at surpassing expectations and addressing problems.
             Looking forward to gain experience to further professional development in a team setting and contribute to creative ideas.  
          </p>
          <p>
            I have always been close to sports and ,{" "}
            <span className="text-textGreen">
              currently leading our collage football team with active participation in national level games.
            </span>
            {" "}
            
          </p>
          <p>
            
          I would like to highlight my postion 
          {" "}
          <span className="text-textGreen">
              Teachinal Lead (Appintech Club ) 
            </span>
            that is our department club to host technical events and seminars.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              AWS Cloud Platform
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Selenium (Testing Tool)
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
        <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
                height={600}
                width = {350}
              />
              </div>
      </div>
    </section>
  );
};

export default About;

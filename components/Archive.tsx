import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Some Additional Courses
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          Description & Certificates
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Full Stack Development Course"
          des=" Completed a 72 on-demand course from Udemy by Colt Steele, gained 
          some insights on web development and related activities."
          listItem={["MERN", "Deployement", "GIT"]}
          link="https://drive.google.com/file/d/1Wgp1K4fxUD5bvRsRDFhKPsVTOBrjYCpx/view?usp=sharing"
        />
        <ArchiveCard
          title="DevOps Associate"
          des=" Through Linkedin learning platform, I have succesully completed a 
          certification course which give me better understanding of DevOps in sofwtare development cycle."
          listItem={["Software engg", "JIRA", "DevOps"]}
          link="https://drive.google.com/file/d/1TRW0x1YF0NeiPJHwZ2DLIvL5hT6Tv_JF/view?usp=sharing"
        />
        <ArchiveCard
          title="100x devs(Harkirat Singh)"
          des=" Its a 100 day long development run which had active learning about open souce contiributions and related activites"
          listItem={["GIT", "AWS", "Next.js"]}
          link="https://100xdevs.com/"
        />
        <ArchiveCard
          title="Alpha Course"
          des=" I have successfully completed a Data Structures and Algorithm course offered by apna collage. Thus grasped the DSA concepts."
          listItem={["JAVA", "Leetcode", "HakerRank"]}
          link="https://drive.google.com/file/d/1VL9Gw7Geixb6sR2dzQBKUbTJ3LfC4Tk3/view?usp=sharing"
        />
        <ArchiveCard
          title="Football Winner(Revels)"
          des=" Our football team participated in the annnual fest REVELS 2024 hosted by MIT,Manipal and finished at first position"
          listItem={[""]}
          link="https://drive.google.com/file/d/1cWOCndHQdQxmMhrHf-rnM3UKmQhZduvF/view?usp=sharing"
        />
        
        
      </div>
      
    </div>
  );
};

export default Archive;

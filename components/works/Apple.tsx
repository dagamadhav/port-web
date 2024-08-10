import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        BTECH CSE 
        <span className="text-textGreen tracking-wide">Software Engineering</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        2021-2025
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Pursing my undergraduate degree from Jain University, Bangalore with software engineering as my specialization
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Gained some valuable knowledge on subjects like software engg, DevOps, Cloud computing, Operating System and many more
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Have been department topper from the start with an average of 9.3 SGPA up until 6th Sem
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;

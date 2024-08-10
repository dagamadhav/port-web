import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Board - Cbse  
        
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        2018 - 2019
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Complete my 10th standard from St. micheal's sen. sec. school, Satna(MP)
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Had my  major subjects as Science, Maths, Computer and additional language as English and second additonal as Hindi
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Secured a total of 89.8%
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;

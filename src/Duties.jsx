import { FaAngleDoubleRight } from "react-icons/fa";
import { nanoid } from "nanoid";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uuidv4();
        const newId = nanoid();
       // console.log(id);
        //console.log(newId);
        return (
          <div key={newId} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;

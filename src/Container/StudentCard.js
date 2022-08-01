import React, { useState } from "react";
import { AddIcon, MinusIcon } from "../Icons";

const StudentCard = ({
  firstName,
  lastName,
  email,
  company,
  skill,
  pic,
  grades,
}) => {

  let average = grades.map(Number).reduce((x, y) => x + y) / 2;

	const [open, setOpen] = useState(false);
	const [tag, setTag] = useState([]);

  const buttonChange = () => {
    setOpen(!open);
  };

  const plusbtn = (
    <button className="stu-btn" onClick={buttonChange}>
      <AddIcon />
    </button>
  );

  const minusbtn = (
    <button className="stu-btn" onClick={buttonChange}>
      <MinusIcon />
    </button>
  );

  return (
    <div className="card-container">
      <div className="inner-card">
        <div className="img-contain">
          <img src={pic} alt="profile" className="img" />
        </div>
        <div className="text-contain">
          <div className="text-1-contain">
            <div className="h-contain">
              <h2 className="h-2">{firstName}</h2>
              <h2 className="h-2-1">{lastName}</h2>
            </div>

            <div>
              <div>
                <p className="p-tag">Email: {email}</p>
                <p className="p-tag">Company: {company}</p>
                <p className="p-tag">Skill: {skill}</p>
                <p className="p-tag">Average: {average}%</p>
              </div>
              <div>
                {open &&
                  grades.map((grade, index) => {
                    return (
                      <span className="" key={index}>
                        <p>
                          Test {index + 1}{" "}
                          <span className="grade-space">{grade}%</span>
                        </p>
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
          <div>
            <button className="stu-btn" onClick={buttonChange}>
              {open ? minusbtn : plusbtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;

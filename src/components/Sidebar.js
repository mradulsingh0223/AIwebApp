import React from 'react'
import AssessmentIcon from '@mui/icons-material/Assessment';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Avatar from '@mui/material/Avatar';

const Sidebar = () => {
  return (
    <div>
         <div>
            <Avatar
              alt="Remy Sharp"
              src={"https://unsplash.com/photos/ZHvM3XIOHoE"}
              sx={{ width: 100, height: 100, marginTop: "20px", marginLeft: "8px", padding: "15px" }}
            />
          </div>
          <div className="wrapper-1">
            <div className="icon-1">
              <AssessmentIcon />
            </div>
            <h4 className="firsthead">Asses</h4>
          </div>
          <div className="wrapper-2">
            <div className="icon-2">
              <HourglassBottomIcon />
            </div>
            <h4 className="secondhead">Generate</h4>
          </div>
          <div className="wrapper-3">
            <div className="icon-3">
              <QuestionAnswerIcon />
            </div>
            <h4 className="thirdhead">Result</h4>
          </div>
    </div>
  )
}

export default Sidebar
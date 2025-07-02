
import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { FeedbackType } from "../types/sections";
const positiveEmojis = ["🥳", "😄", "🎉", "✨", "💫", "👍", "🌟", "🙌", "😎"];


const FeedbackCard = ({ name, role, feedback }: FeedbackType) => {

  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    const e = positiveEmojis[Math.floor(Math.random() * positiveEmojis.length)];
    setEmoji(e);
  }, []);


  return (
    <Card className="border-0 shadow-sm rounded-4 p-4 feedback-card bg-white shadow">
      <CardBody>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className="fw-bold text-primary mb-1">{name}</h5>
            <p className="text-muted mb-2 small">{role}</p>
          </div>
          <div className="fs-4">
            {emoji} <i className="fa fa-quote-right text-primary ms-1" />
          </div>
        </div>
        <hr />
        <p className="text-dark lh-lg mb-0">{feedback}</p>
      </CardBody>
    </Card>
  );
};

export default FeedbackCard;

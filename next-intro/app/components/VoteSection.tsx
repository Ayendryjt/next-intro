import React from "react";
import { VoteButton } from "./VoteButton";

export const VoteSection = ({ section }) => {
  return (
    <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
      {section.map((button) => {
        return (
          <VoteButton key={button.name} buttonLabel={button.name}>
            {button.element}
          </VoteButton>
        );
      })}
    </ul>
  );
};
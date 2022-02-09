import { Accordion } from "../components/Accordion";
import React, { useState } from "react";

interface QuestionsGroup {
  id: number;
  title: string;
  content: Array<Question>;
}

interface Question {
  id: number;
  title: string;
  answer: string;
}

const PAGE_SIZE = 1;

interface AccordionGroupProps {
  data: Array<QuestionsGroup>;
}
export const AccordionGroup: React.FC<
  AccordionGroupProps & React.HTMLAttributes<HTMLDivElement>
> = ({ data, ...props }) => {
  const [childChangeValue, setChildChangeValue] = useState(0);
  const [currentData, setCurrentData] = useState(data);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);

  const changeChild = () => {
    setChildChangeValue(childChangeValue + 1);
  };

  const filterData = (searchWord: string) => {
    if (!searchWord || searchWord === "") return setCurrentData(data);
    setCurrentData(() =>
      data.filter((group) => {
        let isFound = group.title.toLowerCase().includes(searchWord);
        if (isFound) return isFound;
        group.content.forEach((question) => {
          if (
            question.title.toLowerCase().includes(searchWord) ||
            question.answer.toLowerCase().includes(searchWord)
          )
            return (isFound = true);
        });
        return isFound;
      })
    );
  };

  return (
    <div className="groups-box">
      <input
        className="accordion__search"
        type="text"
        onChange={(e) => filterData(e.target.value)}
      />
      {currentData?.slice(0, pageSize)?.map((group) => {
        return (
          <Accordion
            key={group.id}
            changeChild={changeChild}
            changeValue={childChangeValue}
            title={<p>{group.title}</p>}
            content={
              <div className="questions-box">
                <ul>
                  {group?.content?.map((question) => {
                    return (
                      <li>
                        <Accordion
                          key={question.id}
                          changeChild={changeChild}
                          changeValue={childChangeValue}
                          title={<p>{question.title}</p>}
                          content={<div>{question.answer}</div>}
                        ></Accordion>
                      </li>
                    );
                  })}
                </ul>
              </div>
            }
          ></Accordion>
        );
      })}
      {currentData.length > pageSize && (
        <button onClick={() => setPageSize(() => pageSize + PAGE_SIZE)}>
          LoadMore
        </button>
      )}
    </div>
  );
};

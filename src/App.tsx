import "./styles.css";
import { AccordionGroup } from "../components/AccordionGroup";

const data = [
  {
    id: 1,
    title: "Demo Question Of The Accordion ?",
    content: [
      {
        id: 2,
        title: "Demo nested question ?",
        answer: "The full Answer of the Question."
      },
      {
        id: 7,
        title: "Demo nested question ?",
        answer: "The full Answer of the Question."
      },
      {
        id: 9,
        title: "Demo nested question ?",
        answer:
          "The full Answer of the Question.The full Answer of the Question.The full Answer of the Question.The full Answer of the Question.The full Answer of the Question.The full Answer of the Question.The full Answer of the Question."
      }
    ]
  },
  {
    id: 3,
    title: "Demo Question Of The Accordion ?",
    content: [
      {
        id: 4,
        title: "Demo nested question ?",
        answer: "The full Answer of the Question."
      }
    ]
  },
  {
    id: 5,
    title: "Demo Question Of The Accordion ?",
    content: [
      {
        id: 6,
        title: "Demo nested question ?",
        answer: "The full Answer of the Question."
      }
    ]
  }
];

export default function App() {
  return (
    <div className="App">
      <AccordionGroup data={data} />
    </div>
  );
}

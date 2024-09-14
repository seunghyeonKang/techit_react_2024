import { useState } from "react";
import DetailInfo from "./components/Detail";
import DetailQnA from "./components/QnA";
import DetailReview from "./components/Review";

function ContentsComponent({ listName }) {
  if (listName === "detail") {
    return <DetailInfo />;
  } else if (listName === "qna") {
    return <DetailQnA />;
  } else if (listName === "review") {
    return <DetailReview />;
  }
}

export default function ConditionalRendering() {
  let [listItem, setListItem] = useState("detail");

  function ChangeContents(event) {
    setListItem(event.target.id);
  }

  return (
    <nav>
      <ul>
        <li
          id="detail"
          onClick={ChangeContents}
          style={{ color: listItem === "detail" ? "red" : "black" }}
        >
          상세정보
        </li>
        <li
          id="qna"
          onClick={ChangeContents}
          style={{ color: listItem === "qna" ? "red" : "black" }}
        >
          Q&A
        </li>
        <li
          id="review"
          onClick={ChangeContents}
          style={{ color: listItem === "review" ? "red" : "black" }}
        >
          Review
        </li>
      </ul>

      <ContentsComponent listName={listItem} />
    </nav>
  );
}

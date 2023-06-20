import React from "react";

function card(props) {
  return (
    <div class="card">
      <h1 class="card-title">{props.title}</h1>
      <h1 class="card-content">{props.content}</h1>
    </div>
  );
}

export default card;

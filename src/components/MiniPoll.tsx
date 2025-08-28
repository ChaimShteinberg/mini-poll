import { useState } from "react";

function MiniPoll() {
  const [options, setOptions] = useState(["React", "Vue", "Svelte"]);
  const [votes, setVotes] = useState({
    React: 0,
    Vue: 0,
    Svelte: 0,
  });
  return <></>;
}

export default MiniPoll;

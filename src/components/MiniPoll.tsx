import { useState } from "react";

function MiniPoll() {
  const [_options, _setOptions] = useState(["React", "Vue", "Svelte"]);
  const [_votes, _setVotes] = useState({
    React: 0,
    Vue: 0,
    Svelte: 0,
  });
  const [_showResults, _setShowResults] = useState(false);
  return <></>;
}

export default MiniPoll;

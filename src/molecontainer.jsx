import { useState } from "react";
import Mole from "./mole";
import EmptySlot from "./emptyslot";

function MoleContainer(props) {
  let [displayMole, setDisplayMole] = useState(false);

  const handleClick = (e) => {
    props.setScore(props.score + 1);
    setDisplayMole(false);
  };

  let displayTheMole = displayMole ? (
    <Mole
      setScore={props.setScore}
      toggle={setDisplayMole}
      handleClick={handleClick}
    />
  ) : (
    <EmptySlot toggle={setDisplayMole} />
  );
  return (
    <div style={{ display: "inline-block", width: "30vw" }}>
      {displayTheMole}
    </div>
  );
}

export default MoleContainer;
import React from "react";

export const Incrementar = React.memo(({ incrementarPadre }) => {
  return <button onClick={() => incrementarPadre(5)}>+1</button>;
});

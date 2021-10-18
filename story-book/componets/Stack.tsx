import {CSSProperties} from "react";

type Props = {
  children: JSX.Element,
  spacing: number,
  direction: 'row' | 'column',
  wrap: boolean
};

const Stack = ({direction = 'row', spacing = 2, wrap = false, children}: Props) => {
 const style: CSSProperties = {
   display: "flex",
   gap: `${(spacing * 0.25).toString()}rem`,
   flexWrap: wrap ? 'wrap' : 'nowrap',
 }

  return <div style={style}>{children}</div>;
};

export default Stack
import { PropsWithChildren } from "react";

export default function MdxLayout({ children }: PropsWithChildren) {
  // Create any shared layout or styles here
  return (
    <div style={{ color: "blue", border: "10px dotted red" }}>
      foo{children}
    </div>
  );
}

import * as React from "react"

const GridItemWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="relative flex flex-col items-center justify-center border-[0.5px] p-10">
    {children}
  </div>
)

export default GridItemWrapper
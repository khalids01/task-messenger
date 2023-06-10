import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  right?: React.ReactElement,
  rightWidth?: number
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, right = null, rightWidth = 60, ...props } , ref) => {
    if (right) {
      return (
        <div className="relative">
          <input
            type={type}
            className={cn(
              "flex relative w h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ",
              ` w-[${rightWidth}px] `,
              className
            )}
            ref={ref}
            {...props}

          />

          <div
            className="absolute right-0 top-0 w-max h-max"
          >
            {right}
          </div>
        </div>

      )
    }
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

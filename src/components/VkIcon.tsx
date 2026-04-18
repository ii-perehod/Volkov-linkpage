import { forwardRef } from "react";
import type { SVGProps } from "react";

interface VkIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VkIcon = forwardRef<SVGSVGElement, VkIconProps>(
  ({ size = 24, strokeWidth: _strokeWidth, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.07 14.27h-1.45c-.55 0-.72-.44-1.7-1.44-.86-.83-1.24-.94-1.45-.94-.3 0-.38.08-.38.49v1.31c0 .35-.11.56-1.04.56-1.54 0-3.24-.93-4.44-2.66-1.8-2.53-2.3-4.43-2.3-4.82 0-.21.08-.4.49-.4h1.45c.37 0 .51.17.65.56.72 2.08 1.92 3.9 2.41 3.9.19 0 .27-.08.27-.56V9.93c-.06-.96-.57-1.04-.57-1.38 0-.16.13-.33.35-.33h2.28c.31 0 .42.17.42.54v2.98c0 .31.14.42.23.42.19 0 .35-.11.7-.46 1.08-1.21 1.85-3.08 1.85-3.08.1-.23.27-.44.64-.44h1.45c.44 0 .54.23.44.54-.18.85-2 3.4-2 3.4-.15.25-.21.36 0 .64.15.21.66.65 1 1.04.62.71 1.1 1.31 1.23 1.72.12.4-.08.6-.48.6z" />
    </svg>
  ),
);
VkIcon.displayName = "VkIcon";

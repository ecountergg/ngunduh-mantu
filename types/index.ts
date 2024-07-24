import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  filled?: boolean;
  size?: number;
};

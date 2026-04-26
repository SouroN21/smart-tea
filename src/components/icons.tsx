import { Sparkles, Menu, X, ArrowRight } from "lucide-react";
import type { SVGProps } from "react";

export function IconSparkle(props: SVGProps<SVGSVGElement>) {
  return <Sparkles {...props} />;
}

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return <Menu {...props} />;
}

export function IconClose(props: SVGProps<SVGSVGElement>) {
  return <X {...props} />;
}

export function IconArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return <ArrowRight {...props} />;
}
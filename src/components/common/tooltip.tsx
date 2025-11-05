"use cleint";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tooltip: string;
};

const ToolTip = ({ children, tooltip }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger className="bg-transparent">{children}</TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ToolTip;

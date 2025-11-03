import { Loader2Icon } from "lucide-react";
import { FaSpinner } from "react-icons/fa";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

const Loader = () => {
  return (
    <div className="animate-spin">
      <FaSpinner />
    </div>
  );
};

export { Spinner ,Loader};

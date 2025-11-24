import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function GetStartedButton({ children = "Get Started" }: { children?: React.ReactNode }) {
  return (
    <Button className="group relative overflow-hidden bg-black hover:bg-black/90 text-white border border-border w-full sm:min-w-[260px] px-6 sm:px-8 py-3 h-auto text-base whitespace-nowrap" size="lg">
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
        {children}
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary/20 group-hover:w-[calc(100%-0.5rem)] lg:group-active:scale-95">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" className="text-primary" />
      </i>
    </Button>
  );
}

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
}: // header,
// icon,
{
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento  hover:shadow-x1 transition duration-200 shadow-input border-4 shadow-2xl bg-white p-4 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {/* {header} */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {/* {icon} */}
        <div className="mt-2 mb-2 font-sans text-2xl font-bold ">{title}</div>
        <div className="font-sans text-lg font-bold ">{description}</div>
      </div>
    </div>
  );
};

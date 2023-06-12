const Container = ({
  size = "lg",
  children,
  className,
}: {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  children: any;
  className?: string;
}) => {
  return (
    <div className={`container px-4 md:px-8 relative z-10 max-w-screen-${size} ${className}`}>
      {children}
    </div>
  );
};

export default Container;

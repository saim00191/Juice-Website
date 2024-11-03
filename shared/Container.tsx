interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`${className} max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8`}>
      {children}
    </div>
  );
};
export default Container;

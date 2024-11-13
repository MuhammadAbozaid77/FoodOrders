export default function WrapperSection({ children }) {
  return (
    <div className="lg:px-[80px] md:px-[50px] sm:px-[30px]  px-[20px]">
      {children}
    </div>
  );
}

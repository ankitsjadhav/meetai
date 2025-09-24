const Layout = ({ children }) => {
  return (
    <div className="bg-muted flex justify-center flex-col items-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">{children}</div>
    </div>
  );
};

export default Layout;

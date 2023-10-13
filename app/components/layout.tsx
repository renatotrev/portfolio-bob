const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='block bg-black h-full'>
        { children }
    </section>
  );
};

export default Layout;
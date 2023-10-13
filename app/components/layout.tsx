const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='block h-screen'>
        { children }
    </section>
  );
};

export default Layout;
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='block bg-black'>
        { children }
    </section>
  );
};

export default Layout;
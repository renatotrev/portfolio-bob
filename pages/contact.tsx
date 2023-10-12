import Nav from '@/app/components/nav';

export default function Contact() {
  return (
    <section>
      <Nav></Nav>
      <main className="flex flex-col items-center justify-between p-24 h-[1000px]">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          Contact!
        </div>
      </main>
    </section>
  )
}
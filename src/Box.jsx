export default function Box({children}) {
    return (
        <section className="w-full absolute top-[350px] flex justify-center">
        <div className="w-[1000px] h-[500px] bg-white flex justify-center items-center">
            {children}
        </div>
      </section>
    )
}
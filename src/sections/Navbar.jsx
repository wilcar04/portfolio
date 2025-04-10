import { navLinks } from "./../constants/index";

export default function Navbar() {
  return (
    <div className="fixed z-40 top-10 left-1/2 -translate-x-1/2 h-[4rem] border border-stroke-2 bg-n-1/70 backdrop-blur-sm rounded-full">
      <div className="flex justify-center items-center mx-16 h-full gap-14 text-t-2">
        {navLinks.map((item) => (
          <a
            key={item.id}
            className="hover:text-one duration-300 ease-in-out shrink-0"
            href={item.href}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

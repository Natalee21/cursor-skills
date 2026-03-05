import Link from "next/link";

export default function Navbar() {
  const menuItems = [
    { name: "Главная", href: "/" },
    { name: "Обо мне", href: "/about" },
    { name: "Проекты", href: "/projects" },
    { name: "Статьи", href: "/articles" },
    { name: "Контакты", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">

        {/* ЛОГО */}
        <Link
          href="/"
          className="text-sm font-semibold text-neutral-900"
        >
          Борисова Натали
        </Link>

        {/* МЕНЮ */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* КНОПКА */}
        <Link
          href="/contact"
          className="px-5 py-2 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition"
        >
          Написать мне
        </Link>

      </div>
    </nav>
  );
}
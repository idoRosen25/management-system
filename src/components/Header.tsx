export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto rounded-full sm:h-10"
              src='https://i.ibb.co/FwPwQm4/logo.png'
              alt="tailwind marker"
            />
          </a>
        </div>
      </nav>
      {/* <div className="hidden lg:block" role="dialog" aria-modal="true">
        <div className="inset-0"></div>
        <div className="inset-y-0 left-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"></div>
      </div> */}
    </header>
  );
}

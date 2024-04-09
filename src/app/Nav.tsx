import Link from "../../node_modules/next/link";
import Image from "../../node_modules/next/image";

export default function Nav() {
  return (
    <>
      {/* <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href={"/"} className="flex items-center">
            <Image
              src={"/assets/img/logo-fix.png"}
              width={32}
              height={43}
              alt="logo"
            />
            <span className="self-center lg:text-2xl md:text-xl xs:text-xs font-semibold whitespace-nowrap dark:text-white">
              Desa Maju Bersama
            </span>
          </Link>
          <div className="flex">
            <div className="mx-3">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </button>
            </div>
            <div>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            </div>
          </div>
        </div>
      </nav> */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="flex items-center">
              <Image
                src={"/assets/img/logo-fix.png"}
                width={32}
                height={43}
                alt="logo"
              />
              <span className="self-center lg:text-2xl md:text-xl xs:text-xs font-semibold whitespace-nowrap dark:text-white">
                Desa Maju Bersama
              </span>
            </Link>
            <div className="flex">
              <div className="mx-3">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Register
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </div>
            </div>
            {/* <div className="hidden md:block">
              <Link href="/">
                <a className="mr-4">Home</a>
              </Link>
              <Link href="/about">
                <a className="mr-4">About</a>
              </Link>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

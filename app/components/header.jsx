"use client";
import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { account } from "../appwrite";
import { useState , useContext } from "react";
import { AuthContext } from "../hooks/authContext";
import Link from "next/link";
const navigation = [
  { name: "Contrate", href: "#", current: true },
  { name: "Meus projetos", href: "#", current: false },
  { name: "Minhas finanças", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const router = useRouter();
  const {session,menageSession} = useContext(AuthContext)
  const role = "client";
  const user = JSON.parse(localStorage.getItem("user"));
  const [select,setSelect] = useState('Inicio')


  const logout = async () => {
    await account.deleteSession("current");
    menageSession(null);
    localStorage.clear('user')

    router.push('/')
  };

  const getUser = async () => {
    const user =  account.getSession("current");
    user.then(function (response) {

      console.log(response); 
      
      menageSession(response);

      // Success
  }, function (error) {
      console.log(error); // Failure
  });
   
  };

  console.log(session)

  useEffect(() => {
    getUser();
  }, []);



  return (
    <Disclosure
      as="nav"
      className="bg-[#fcfcfc] border-b-[#e2e2e2] border-b-[1px]"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <a href="/" className="flex w-auto h-auto cursor-pointer">
                  <img
                    alt=""
                    className="h-8"
                    src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f6989c3835d327b838/view?project=65f63eb7a14355c1ee4e&mode=admin"
                  />
                </a>
                <div className="hidden sm:ml-6 sm:block">
                  <div
                    className={classNames(
                      session ? "flex" : "hidden",
                      "  space-x-4"
                    )}
                  >
                    {navigation.map((item) => (
                      <Link
                      onClick={()=>setSelect(item.name)}
                        href={item.href}
                        className={classNames(
                          item.name == select
                          ? " text-[#404040]   "
                          : "text-[#898989]  hover:text-[#404040]",
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {session ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => logout()}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sair{" "}
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <Link
                  href={"/login"}
                  className="ml-6 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login{" "}
                </Link>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-4 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
? " text-[#404040]   "
: "text-[#898989]  hover:text-[#404040]",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              <div className="flex justify-center !mt-8 gap-2 w-full items-center">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className={classNames(
                    role == "client"
                      ? " text-[#fff] bg-[#5746af]  "
                      : "text-[#898989]  hover:text-[#5746af]",
                    "block rounded-[24px] text-center px-4 py-3 text-base font-medium w-1/2 "
                  )}
                >
                  Quero contratar
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href={"#"}
                  className={classNames(
                    role == "worker"
                      ? " text-[#fff] bg-[#5746af]  "
                      : "text-[#898989]  hover:text-[#5746af]",
                    "block rounded-[24px] text-center px-4 py-3 text-base font-medium w-1/2"
                  )}
                >
                  Quero trabalhar
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

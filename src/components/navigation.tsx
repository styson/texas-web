import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Logo } from './logo';
// import { Profile } from './profile';
// import { useAuthenticator } from '@aws-amplify/ui-react';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Tournament', href: '/tournament', current: false },
  { name: 'Game Days', href: '/game-days', current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

function toggleTheme() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    localStorage.theme = 'light';

    document.getElementById('theme-toggle-dark-icon')?.classList.add('hidden');
    document.getElementById('theme-toggle-light-icon')?.classList.remove('hidden');
  } else {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    document.getElementById('theme-toggle-dark-icon')?.classList.remove('hidden');
    document.getElementById('theme-toggle-light-icon')?.classList.add('hidden');
  }
}

export function Navigation() {
  // const { authStatus, signOut } = useAuthenticator((context) => [context.user]);
  const authStatus: string = 'authenticated';
  const lightHidden = localStorage.theme === 'dark' ? 'hidden w-5 h-5' : 'w-5 h-5';
  const darkHidden = localStorage.theme !== 'dark' ? 'hidden w-5 h-5' : 'w-5 h-5';

  return (
    <Disclosure as="nav" className="bg-slate-200 dark:bg-slate-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-5 w-5" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Logo />
                <div className="hidden sm:ml-3 sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'text-amber-300 dark:text-amber-300 bg-slate-900 dark:bg-slate-500'
                            : 'text-slate-300 dark:text-slate-200 bg-slate-900 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-500 hover:text-white dark:hover:text-slate-800',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  id="theme-toggle"
                  type="button"
                  className="rounded-lg text-sm p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 
                  focus:outline-none focus:ring-4 focus:ring-slate-500 dark:focus:ring-slate-900"
                  onClick={toggleTheme}
                  title="Click to toggle theme">
                  <svg
                    id="theme-toggle-dark-icon"
                    className={darkHidden}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    className={lightHidden}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="relative rounded-lg p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-500 dark:focus:ring-slate-900">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-5 w-5" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full text-sm bg-slate-200 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800">
                      <span className="sr-only">Open user menu</span>
                      {/* <Profile /> */}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 
                      bg-slate-200 dark:bg-slate-800">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/profile"
                            className={classNames(
                              authStatus === 'authenticated' ? '' : 'hidden',
                              active ? 'text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700' : '',
                              'block px-4 py-2 text-sm text-slate-500 dark:text-slate-200 text-slate-700 dark:text-slate-200',
                            )}>
                            Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/settings"
                            className={classNames(
                              authStatus === 'authenticated' ? '' : 'hidden',
                              active ? 'text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700' : '',
                              'block px-4 py-2 text-sm text-slate-500 dark:text-slate-200 text-slate-700 dark:text-slate-200',
                            )}>
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <>
                            {authStatus === 'authenticated' ? (
                              <a
                                href="/"
                                // onClick={signOut}
                                className={classNames(
                                  active ? 'text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700' : '',
                                  'block px-4 py-2 text-sm text-slate-500 dark:text-slate-200 text-slate-700 dark:text-slate-200',
                                )}>
                                Sign Out
                              </a>
                            ) : (
                              <a
                                href="/sign-in"
                                className={classNames(
                                  active ? 'text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700' : '',
                                  'block px-4 py-2 text-sm text-slate-500 dark:text-slate-200 text-slate-700 dark:text-slate-200',
                                )}>
                                Sign In
                              </a>
                            )}
                          </>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

import { Link } from "react-router-dom"

export function Footer() {
    return (
      <footer className="w-full py-6 md:py-12">
        <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
          <nav className="flex gap-4">
            <Link
              className="flex items-center text-sm font-medium space-x-2 text-gray-500 transition-colors hover:text-gray-900 "
              to={"/blogs"}
            >
              <HomeIcon className="w-4 h-4" />
              Home
            </Link>
            <Link
              className="flex items-center text-sm font-medium space-x-2 text-gray-500 transition-colors hover:text-gray-900 "
              to={"/blogs"}
            >
              <BookIcon className="w-4 h-4" />
              Blog
            </Link>
            <Link
              className="flex items-center text-sm font-medium space-x-2 text-gray-500 transition-colors hover:text-gray-900 "
              to={"/blogs"}
            >
              <UserIcon className="w-4 h-4" />
              About
            </Link>
            <Link
              className="flex items-center text-sm font-medium space-x-2 text-gray-500 transition-colors hover:text-gray-900"
              to={"/blogs"}
            >
              <MailIcon className="w-4 h-4" />
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500 dark:text-gray-400">© 2023 Acme Blog</span>
            <div className="flex items-center gap-2 ml-auto">
              <Link className="text-gray-500 hover:text-gray-900 " to={'/blogs'}>
                Follow us
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 " to={'/blogs'}>
                Share
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  function BookIcon(props : {className:string}) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    )
  }
  
  
  function HomeIcon(props : {className:string}) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  
  function MailIcon(props : {className:string}) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
  
  
  function UserIcon(props : {className:string}) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }
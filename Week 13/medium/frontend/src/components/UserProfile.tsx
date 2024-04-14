export default function Component() {
    return (
      <div className="w-full max-w-3xl px-0">
        <div className="space-y-6">
          <div className="flex items-center space-x-6">
            <div className="w-12 h-12 relative">
              <img
                alt="Profile picture"
                className="rounded-full object-cover"
                height="128"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "128/128",
                  objectFit: "cover",
                }}
                width="128"
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold leading-none">User.displayName</h1>
                <button className="text-sm font-medium text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-600">
                  Edit
                </button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">User.email</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
              <h3 className="text-lg font-medium leading-none">Account information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-0.5">
                <label className="text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="display-name">
                  Display name
                </label>
                <input
                  className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1.5 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="display-name"
                  value="User.displayName"
                />
              </div>
              <div className="space-y-0.5">
                <label className="text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="email">
                  Email
                </label>
                <input
                  className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1.5 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-600"
                  disabled
                  id="email"
                  type="email"
                  value="User.email"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-50" htmlFor="bio">
              Bio
            </label>
            <div>
              <p className="text-sm text-gray-900 dark:text-gray-50">Bacon ipsum dolor amet shankle pork chop</p>
            </div>
            <button className="text-sm font-medium text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1.5 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-600">
              Edit Bio
            </button>
          </div>
          <hr className="mx-0 border-t border-gray-200 dark:border-gray-700" />
          <div className="flex justify-end space-x-2">
            <button className="text-sm font-medium text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-600">
              Cancel
            </button>
            <button className="text-sm font-medium text-gray-50 bg-gray-900 dark:bg-gray-800 rounded-md px-3 py-1.5 hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-600">
              Save
            </button>
          </div>
        </div>
        <div className="p-4">
          <button className="w-full text-sm font-medium text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-600">
            Sign out
          </button>
        </div>
      </div>
    )
  }
export const BlogSkeleton = () => {
  return (
    <div className="flex justify-center my-3">
      <div role="status" className="animate-pulse">
        <div className="border-b p-4 grid grid-cols-12 w-screen max-w-screen-md gap-4 mt-2">
          <div className="col-span-7 sm:col-span-9">
            <div className="flex">
              <div>
                <div className="h-6 bg-gray-200 rounded-full w-6 mb-2.5"></div>
              </div>
              <div className="pl-2 flex flex-col justify-center">
               <div className="flex">
               <div className="h-2 bg-gray-200 rounded-full w-20 mx-2"></div>
                <div className="h-2 bg-gray-200 rounded-full w-24 mx-2"></div>
               </div>
              </div>
              
            </div>
            <div className="pt-2">
              <div className="h-4 bg-gray-200 rounded-full w-52 mb-4"></div>
            </div>
            <div className="hidden sm:block">
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5 w-96"></div>
              <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
            </div>
            <div className="text-slate-500 font-thin font-mono text-sm pt-4">
              <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-24"></div>
            </div>
          </div>
          <div className="col-span-5 sm:col-span-3">
            <div>
              <div className="flex items-center  p-1 h-32 w-40 sm:h-40 sm:w-48 justify-center bg-gray-300 rounded">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

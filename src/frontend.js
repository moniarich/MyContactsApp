const Frontend = () =>{

    return(
        <div className="container-fixed sm:container-fixed">
        <div className="flex flex-col">
          <div className="w-auto items-center sticky top-0">
          <div className="flex bg-slate-900 h-24 w-auto">
            <div className="flex relative xl:mx-40 sm:mx-5 sm:text-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 text-gray-100"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <h1 className="text-gray-200 px-2 py-10 sm:py-auto text-2xl sm:mx-5 sm:text-center ">My Contacts</h1>
            </div>
          </div>
          <div className="flex flex-col bg-gray-100 h-40">
            <div className="flex flex-row my-auto">
              <h2 className="m-auto w-64 text-center">Search</h2>
              <input
                type="search"
                id="site-search "
                className="lg:grow h-14 mr-10 tracking-widest px-10 text-xl"
              />
            </div>
            <div className="flex flex-row my-auto">
              <h2 className="m-auto w-64 text-center"> Sort</h2>
              <input
                type="sort"
                placeholder="First Name"
                id="site-sort"
                className="lg:grow h-14 mr-10 tracking-widest px-10 text-xl"
              />
            </div>
          </div>
          </div>
          
          <div className="flex flex-col bg-gray-50 h-auto overflow-y-scroll">
            <div className="flex w-auto h-64 bg-gray-50 border border-b-gray-200 ">
              <img
                src="mbac.jpg"
                alt="me"
                className="rounded-full w-56 h-56  mx-5  my-auto"
              />
              <div className="flex flex-col mx-10  my-auto text-2xl">
                <h1 className="text-black font-medium">Firstname Surname</h1>
                <p className="text-pink-500">State / Country </p>
              </div>
              <button className="text-gray-500 flex-none mr-20 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="flex w-auto h-64 bg-gray-50 border border-b-gray-200 ">
              <img
                src="mbac.jpg"
                alt="me"
                className="rounded-full w-56 h-56 mx-5 my-auto"
              />
              <div className="flex flex-col mx-10 my-auto text-2xl">
                <h1 className="text-black font-medium">Firstname Surname</h1>
                <p className="text-pink-500">State / Country </p>
              </div>
              <button className="text-gray-500 flex-none mr-20 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="flex w-auto h-64 bg-gray-50 border border-b-gray-200 ">
              <img
                src="mbac.jpg"
                alt="me"
                className="rounded-full w-56 h-56 mx-5 my-auto"
              />
              <div className="flex flex-col mx-10 my-auto text-2xl">
                <h1 className="text-black font-medium">Firstname Surname</h1>
                <p className="text-pink-500">State / Country </p>
              </div>
              <button className="text-gray-500 flex-none mr-20 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="flex w-auto h-64 bg-gray-50 border border-b-gray-200 ">
              <img
                src="mbac.jpg"
                alt="me"
                className="rounded-full w-56 h-56 mx-5 my-auto"
              />
              <div className="flex flex-col mx-10 my-auto text-2xl">
                <h1 className="text-black font-medium">Firstname Surname</h1>
                <p className="text-pink-500">State / Country </p>
              </div>
              <button className="text-gray-500 flex-none mr-20 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    
}
export default Frontend;
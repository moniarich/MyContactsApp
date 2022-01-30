const ContactListSearch = ({ searchTerm, setSearchTerm, sort, setSort }) => {
  return (
    <div className="w-auto items-center sticky top-0">
      <div className="flex flex-col bg-gray-100 h-40">
        <div className="flex flex-row my-auto static">
          <h2 className="m-auto w-64 text-center">Search</h2>
          <div className="flex relative">
          <input
            value={searchTerm}
            type="search"
            id="site-search "
            className="lg:grow h-14 mr-10 tracking-widest px-10 text-xl "
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-5 left-96 h-16 w-16 stroke-gray-300 fill-transparent float-right"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          </div>
        </div>
        <div className="flex flex-row my-auto">
          <h2 className="m-auto w-64 text-center"> Sort</h2>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="lg:grow h-14 mr-10 tracking-widest bg-white px-10 text-xl flex justify-end items-center
             py-2 pr-5 w-full font-medium text-gray-700 border-b border-gray-100"
          >
         
            <svg
              className="ml-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            id="dropdownNavbar"
            className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul className="py-1" aria-labelledby="dropdownLargeButton">
              <li>
                <p>{sort}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default ContactListSearch;

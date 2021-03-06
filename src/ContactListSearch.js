const ContactListSearch = ({ searchTerm, setSearchTerm, sort, setSort }) => {
  return (
    <div className="flex-fixed items-center sticky top-24 overflow:hidden">
      <div className="flex flex-col bg-gray-100 h-40">
        <div className="flex w-full my-auto">
          <h2 className="my-auto m-5 lg:text-center sm:text-right">Search</h2>
          <div className="flex relative w-full my-auto">
            <input
              value={searchTerm}
              type="search"
              id="site-search "
              className=" h-14 text-xl w-full mr-10"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-5 mx-2 h-16 w-16 stroke-gray-300 fill-transparent"
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
        <div className="flex relative my-auto w-full">
          <h2 className="my-auto m-7 lg:text-center sm:text-right"> Sort</h2>
          <select
            name="name"
            id="name"
            className="lg:grow h-14 mr-10 bg-white px-5 text-xl flex justify-end items-center
             py-2 pr-5 w-full font-medium text-gray-500 border-b border-gray-100"
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="first name">First Name</option>
            <option value="last name">Last Name</option>
          </select>

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

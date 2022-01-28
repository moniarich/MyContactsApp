const ContactListSearch = () => {
  return (
    <div className="w-auto items-center sticky top-0">
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
  );
};
export default ContactListSearch;

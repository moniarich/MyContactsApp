const ContactList = () => {
  return (
    <div className="flex flex-col bg-gray-50 h-auto overflow-y-scroll">
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
  );
};
export default ContactList;

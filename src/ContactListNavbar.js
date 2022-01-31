const ContactListNavbar = ({setCurentContact, curentContact}) => {
  return (
    <div className="flex-fixed w-auto items-center sticky top-0">
      <div className="bg-slate-900 h-24">
        <div className="flex mx-40 ">
          {!curentContact ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 text-gray-100"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          ) : (
            <button onClick={() => setCurentContact()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-200 ml-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          )}
          {!curentContact ? (
            <h1 className="text-gray-200 px-2 py-10 text-2xl ">My Contacts</h1>
          ) : (
            <h1 className="text-gray-200 px-2 py-10 text-2xl ">Contacts</h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default ContactListNavbar;

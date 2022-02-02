const ContactList = ({ contacts, setCurentContact }) => {
  // .map((r) => ({
  //   img: r.picture.large,
  //   fullname: `${r.name.first} ${r.name.last}`,
  //   location: `${r.location.state} / ${r.location.city}`,
  // })
  console.log(contacts);
  return (
    <div className="fixed w-full h-full">
      <div className="bg-gray-50 h-full flex-grow-0 overflow-y-auto">
        <div class="flex flex-col">
          <ul>
            {contacts.map((v, k) => (
              <li key={k}>
                <button onClick={() => setCurentContact(v)} className="w-full">
                  <div className="flex h-64 bg-gray-50 border border-b-gray-200 w-auto">
                    <img
                      src={v.picture.large}
                      alt="me"
                      className="rounded-full lg:w-56 lg:h-56 lg:mx-5 my-auto ml-2"
                    />
                    <div className="flex flex-col m-auto pl-7 pr-7 lg:text-2xl sm:text-base">
                      <h1 className="text-black font-medium">
                        {v.name.firs} {v.name.last}
                      </h1>
                      <p className="text-pink-500">
                        {v.location.state} / {v.location.city}
                      </p>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="lg:h-6 lg:w-6 sm:h-2 w-10 my-20 ml-15 text-right stroke-slate-600 fill-transparent"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ContactList;

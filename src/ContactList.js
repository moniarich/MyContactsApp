const ContactList = ({ contacts, setCurentContact, curentContact }) => {


// .map((r) => ({
//   img: r.picture.large,
//   fullname: `${r.name.first} ${r.name.last}`,
//   location: `${r.location.state} / ${r.location.city}`,
// })
  console.log(contacts);
  return (
    <div className="flex flex-col bg-gray-50 h-auto overflow-y-scroll">
      <ul>
        {contacts.map((v, k) => (
          <li key={k}>
            <button onClick={() => setCurentContact(v)}>
            <div className="flex w-screen h-64 bg-gray-50 border border-b-gray-200 ">
              <img
                src={v.picture.large}
                alt="me"
                className="rounded-full w-56 h-56 mx-5 my-auto"
              />
              <div className="flex flex-col mx-10 my-auto text-2xl">
                <h1 className="text-black font-medium">{v.name.firs} {v.name.last}</h1>
                <p className="text-pink-500">{v.location.state} / {v.location.city}</p>
              </div>
             
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 flex-none mr-20 ml-auto"
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
              
            </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;

const Backend = () => {
  return (
    <div className="container-fixed">
      <div className="flex flex-col">
        <div className="bg-slate-900 h-24">
          <div className="flex mx-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 my-auto stroke-gray-200 mx-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <h1 className="text-gray-200 mx-2 my-auto py-10 text-2xl ">
              Contact
            </h1>
          </div>
        </div>
        <div className="flex flex-col bg-gray-50">
          <div className="w-full h-64">
            <img src="" alt="photoContact" />
          </div>
          <div className="flex">
            <table className="table-fixed w-96 mx-10 mb-5">
              <tbody>
                <tr>
                  <td className="text-pink-500">Age</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td className="text-pink-500">Email</td>
                  <td>email@domain.com</td>
                </tr>
                <tr>
                  <td className="text-pink-500">Mobile</td>
                  <td>07891234567</td>
                </tr>
                <tr>
                  <td className="text-pink-500">Phone</td>
                  <td>01234567890</td>
                </tr>
                <tr>
                  <td className="text-pink-500">Address</td>
                  <td> 123 Name of Streat</td>
                </tr>
                <tr>
                  <td></td>
                  <td> Name of City</td>
                </tr>
                <tr>
                  <td></td>
                  <td> Name of State</td>
                </tr>
                <tr>
                  <td></td>
                  <td> Postcode</td>
                  <td>Name of Country</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-start border border-t-gray-200 h-24 items-center">
            <a href="tel:123-456-7890">
              <button className="text-blue-700 px-2 py-auto">Call</button>
            </a>
            <a target="”_blank”" href="mailto:email@domain.com">
              <button className="text-blue-700 px-2 py-auto">Email</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Backend;

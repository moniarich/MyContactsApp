const Backend = () => {
  return (
    <div className="container-fixed">
      <div className="flex flex-col">
        <div className="bg-slate-900 h-24">
          <div className="flex mx-48" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
              
          className="w-8 text-gray-200 my-auto">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <h1 className="text-gray-200 px-10  my-auto py-10 text-2xl ">
              Contact
            </h1>
          </div>
        </div>
        <div className="flex flex-col bg-gray-50 h-auto">
          <div></div>
          <div className="flex">
            <table className="table-fixed w-96 mx-10">
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
                  <td className="text-pink-500" >Address</td>
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
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Backend;

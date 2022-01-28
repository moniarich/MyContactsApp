const ContactDetails = () => {
  return (
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
  );
};
export default ContactDetails;

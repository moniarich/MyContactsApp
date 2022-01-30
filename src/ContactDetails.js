const ContactDetails = (contactDetails,setContactDetails) => {
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
              <td>{contactDetails.age}</td>
            </tr>
            <tr>
              <td className="text-pink-500">Email</td>
              <td>{contactDetails.email}</td>
            </tr>
            <tr>
              <td className="text-pink-500">Mobile</td>
              <td>{contactDetails.cell}</td>
            </tr>
            <tr>
              <td className="text-pink-500">Phone</td>
              <td>{contactDetails.phone}</td>
            </tr>
            <tr>
              <td className="text-pink-500">Address</td>
              <td>{contactDetails.street}</td>
            </tr>
            <tr>
              <td></td>
              <td>{contactDetails.city}</td>
            </tr>
            <tr>
              <td></td>
              <td>{contactDetails.state}</td>
            </tr>
            <tr>
              <td></td>
              <td>{contactDetails.postcode}</td>
              <td>{contactDetails.country}</td>
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

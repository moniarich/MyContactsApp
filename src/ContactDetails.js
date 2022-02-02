const ContactDetails = ({ contactDetails, setContactDetails }) => {
  console.log(contactDetails, "c");
  return (
    <div className="flex flex-col bg-gray-50">
      <div>
        <img className="w-full sm:w-64" src={contactDetails.picture.large} alt="photoContact" />
      </div>
      <div className="flex w-full h-full mt-5 ml-5">
        <table className="table-fixed lg:w-64 sm:w-32 mx-10 sm:mx-5 mb-5 text-start lg:text-lg sm:text-sm">
          <tbody>
            <tr>
              <td className="text-pink-500">Age</td>
              <td>{contactDetails.dob.age}</td>
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
              <td className="pt-4">
                <p>{`${contactDetails.location.street.number} ${contactDetails.location.street.name}`}</p>
                <p>{`${contactDetails.location.city}`}</p>
                <p>{`${contactDetails.location.state}`}</p>
                <p>{`${contactDetails.location.postcode} ${contactDetails.location.country}`}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex w-full border justify-between border-t-gray-200">
        <a href={contactDetails.cell}>
          <button className="text-blue-700 ml-2" >Call</button>
        </a>
        <a target="”_blank”" href={contactDetails.email}>
          <button className="text-blue-700 mr-2">Email</button>
        </a>
      </div>
    </div>
  );
};
export default ContactDetails;

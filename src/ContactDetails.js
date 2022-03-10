const ContactDetails = ({ contactDetails }) => {
  console.log(contactDetails.cell, "c");
  return (
    <div className="flex flex-col bg-gray-50 h-screen justify-between">
      <div>
        <img
          className="w-full sm:w-64"
          src={contactDetails.picture.large}
          alt="photoContact"
        />
      </div>
      <div className="flex mt-10 lg:pt-10 pb-24 pl-10 bg-gray-50">
        <table className="table-fixed sm:mx-5 mb-5 text-left lg:text-2xl sm:text-sm">
          <tbody>
            <tr>
              <td className="text-pink-500 pr-2">Age</td>
              <td className="pl-10 lg:py-2 sm-py-1">
                {contactDetails.dob.age}
              </td>
            </tr>
            <tr>
              <td className="text-pink-500 pr-2">Email</td>
              <td className="pl-10 lg:py-2 sm-py-1">{contactDetails.email}</td>
            </tr>
            <tr>
              <td className="text-pink-500 pr-2">Mobile</td>
              <td className="pl-10 lg:py-2 sm-py-1">{contactDetails.cell}</td>
            </tr>
            <tr>
              <td className="text-pink-500 pr-2">Phone</td>
              <td className="pl-10 lg:py-2 sm-py-1">{contactDetails.phone}</td>
            </tr>
            <tr>
              <td className="text-pink-500 pr-2 ">Address</td>
              <td className="pt-4 pl-10">
                <p className="lg:py-2 sm-py-1">{`${contactDetails.location.street.number} ${contactDetails.location.street.name}`}</p>
                <p className="lg:py-2 sm-py-1">{`${contactDetails.location.city}`}</p>
                <p className="lg:py-2 sm-py-1">{`${contactDetails.location.state}`}</p>
                <p className="lg:py-2 sm-py-1">{`${contactDetails.location.postcode} ${contactDetails.location.country}`}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex static bottom-0 lg:p-4 md:p-2 border justify-between border-t-gray-200 ">
        <a className="text-blue-700 ml-10" href={`tel:${contactDetails.cell}`}>
          Call
        </a>
        <a
          className="text-blue-700 mr-10"
          target="”_blank”"
          href={`mailto:${contactDetails.email}`}
        >
          Email
        </a>
      </div>
    </div>
  );
};
export default ContactDetails;

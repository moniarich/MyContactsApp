import { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import ContactDetails from "./ContactDetails";
import ContactList from "./ContactList";
import ContactListNavbar from "./ContactListNavbar";
import ContactListSearch from "./ContactListSearch";
import axios from "axios";

const url = "https://randomuser.me/api/?results=50&nat=gb";
const App = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [curentContact, setCurentContact] = useState(undefined);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      setResources(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <ContactListNavbar
        setCurentContact={setCurentContact}
        curentContact={curentContact}
      />

      {!curentContact ? (
        <>
          <ContactListSearch
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            setSort={setSort}
            sort={sort}
          />
          <ContactList
            setCurentContact={setCurentContact}
            contacts={resources
              .filter((r) =>
                `${r.name.first} ${r.name.last} ${r.location.state} ${r.location.city}`
                  .toLowerCase()
                  .includes(searchTerm)
              )
              .sort((a, b) => {
                if (sort === "first name") {
                  if (a.name.first < b.name.first) {
                    return -1;
                  }
                  if (a.name.first > b.name.first) {
                    return 1;
                  }
                  return 0;
                }
                if (sort === "last name") {
                  if (a.name.last < b.name.last) {
                    return -1;
                  }
                  if (a.name.last > b.name.last) {
                    return 1;
                  }
                  return 0;
                }
                return 0;
              })}
          />
        </>
      ) : (
        <ContactDetails contactDetails={curentContact} />
      )}
    </Fragment>
  );
};

export default App;

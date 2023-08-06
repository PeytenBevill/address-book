import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Item({ person }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <li className={`mosaic-item ${showInfo ? 'expanded' : ''}`}
      onClick={() => {
        showInfo ? setShowInfo(false) : setShowInfo(true);
      }}
    >
      {showInfo ? (
        <>
          <img src={person.picture.large} alt="" />
          <h2>
            {person.name.first} {person.name.last}
          </h2>
          <p className="smaller">
            <FaMapMarkerAlt />
            {person.location.country}
          </p>
          <div className="bio">
            <p>About me:</p>
            <p> Age: {person.dob.age}</p>
            <p>{person.email}</p>
            <p>Phone Number: {person.cell}</p>
          </div>
        </>
      ) : (
        <>
          <img src={person.picture.large} alt="" />
          <h2>
            {person.name.first} {person.name.last}
          </h2>
          <p className="smaller">
            <FaMapMarkerAlt />
            {person.location.country}
          </p>
        </>
      )}
    </li>
  );
}

export default Item;

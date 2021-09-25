import { useState } from "react";

export default function NewEmployee() {
  const [name, setName] = useState();
  const [secondName, setSecondName] = useState();
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState([]);
  const [birthDate, setBirthDate] = useState();
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [photo, setPhoto] = useState();

  File.prototype.convertToBase64 = function (callback) {
    var FR = new FileReader();
    FR.onload = function (e) {
      callback(e.target.result);
    };
    FR.readAsDataURL(this);
  };

  async function sendEmployee() {
    let newEmployee = {
      name: name,
      secondName: secondName,
      addresses: addresses,
      birthDate: new Date(birthDate),
      phoneNumbers: phoneNumbers,
      photo: photo,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(newEmployee),
      headers: {
        "Content-Type": "application/json",
      },
    };

    await fetch("http://localhost:8080/employees", options);
  }

  return (
    <div>
      <div>
        <div>
          <div>Name</div> <input onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <div>Second Name</div>{" "}
          <input onChange={(e) => setSecondName(e.target.value)} />
        </div>

        <div>
          <div>Addresses</div>
          <div>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button
              onClick={(e) => {
                setAddresses((addresses) => [...addresses, address]);
                setAddress("");
              }}
            >
              Add
            </button>
          </div>
          {addresses?.map((address) => {
            return (
              <div style={{ display: "flex" }}>
                <div key={addresses.indexOf(address)}>{address}</div>
                <button
                  onClick={(e) => {
                    setAddresses(addresses.filter((item) => item !== address));
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <div>Birth Date</div>{" "}
          <input
            placeholder="yyy-mm-dd"
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div>
          <div>
            <div>Phone Numbers</div>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                setPhoneNumbers((phoneNumbers) => [
                  ...phoneNumbers,
                  phoneNumber,
                ]);
                setPhoneNumber("");
              }}
            >
              Add
            </button>
          </div>
          {phoneNumbers?.map((number) => {
            return (
              <div style={{ display: "flex" }}>
                <div key={phoneNumbers.indexOf(number)}>{number}</div>
                <button
                  onClick={(e) => {
                    setPhoneNumbers(
                      phoneNumbers.filter((item) => item !== number)
                    );
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>

        <div>
          <div>Photo </div>
          <input
            type="file"
            id="file-input"
            onChange={(e) => {
              let src = e.target.files[0];
              src.convertToBase64(function (base64) {
                setPhoto(base64.split(",")[1]);
              });
            }}
          />
        </div>
        {photo ? (
          <img
            alt="Foto"
            width={100}
            height={150}
            src={`data:image/jpeg;base64,${photo}`}
          />
        ) : (
          <></>
        )}

        <div style={{ display: "flex" }}>
          <button onClick={sendEmployee}>Create</button>
        </div>
      </div>
    </div>
  );
}

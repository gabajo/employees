export default function EmployeeInfo({ employee }) {
  return (
    <div>
      <div>{employee?.name}</div>
      <div>{employee?.secondName}</div>
      <div>
        Addresses:
        {employee?.addresses.map((address) => {
          return <div>{address}</div>;
        })}
      </div>
      <div>{employee?.birthDate}</div>
      <div>
        Phone Numbers:
        {employee?.phoneNumbers.map((phone) => {
          return <div>{phone}</div>;
        })}
      </div>
      <img
        alt="Foto"
        width={100}
        height={150}
        src={`data:image/jpeg;base64,${employee?.photo}`}
      />
    </div>
  );
}

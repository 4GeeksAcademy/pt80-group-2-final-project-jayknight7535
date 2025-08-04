const RenterFormPage = () => {

  const [data, setData] = useState({}); // <- You need a state to hold your data

  useEffect(() => {
    const loadData = async () => {
      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/renter/form`);
      const result = await resp.json();
      setData(result);
    };

    loadData();
  }, []);

  const rating = () => {
    if (data.credit_score > 700 || data.income > 70000) {
      return <div style={{ color: "green" }}>High</div>;
    } else if (data.credit_score < 600 || data.income < 40000) {
      return <div style={{ color: "yellow" }}>Low</div>;
    } else {
      return <div style={{ color: "red" }}>Medium</div>;
    }
  };

  return (
    <div>
      <div>
        <h2>Chance of approval</h2>
        {rating()}
      </div>

      <div className="mb-3">
        <h2>Email:</h2>
        <p>{data.email}</p>
      </div>
      <div className="mb-3">
        <h2>Full Name:</h2>
        <p>{data.name}</p>
      </div>
      <div className="mb-3">
        <h2>Date of birth:</h2>
        <p>{data.dob}</p>
      </div>
      <div className="mb-3">
        <h2>Zip Code:</h2>
        <p>{data.zip_code}</p>
      </div>
      <div className="mb-3">
        <h2>Max Budget:</h2>
        <p>{data.budget}</p>
      </div>
      <div className="mb-3">
        <h2>Bedrooms:</h2>
        <p>{data.bedroom}</p>
      </div>
      <div className="mb-3">
        <h2>Credit Score:</h2>
        <p>{data.credit_score}</p>
      </div>
      <div className="mb-3">
        <h2>Move in date:</h2>
        <p>{data.move_in_form}</p>
      </div>
      <div className="mb-3">
        <h2>Pets:</h2>
        <p>{data.pets}</p>
      </div>
      <div className="mb-3">
        <h2>Yearly Income:</h2>
        <p>{data.income}</p>
      </div>
      <div className="mb-3">
        <h2>Criminal Record:</h2>
        <p>{data.criminal_record}</p>
      </div>
      <div className="mb-3">
        <h2>Parking:</h2>
        <p>{data.parking}</p>
      </div>
      <div className="mb-3">
        <h2>Phone Number:</h2>
        <p>{data.phone_number}</p>
      </div>

      <button type="button" className="btn btn" onClick={editRenterForm}>
        <i className="fa-solid fa-pencil"></i>
      </button>
      <button type="button" className="btn btn" onClick={deleteRenterForm}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default RenterFormPage;

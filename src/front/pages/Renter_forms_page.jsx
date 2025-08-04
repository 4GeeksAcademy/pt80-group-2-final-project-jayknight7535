export const renterFormPage = () => {
    const loadData = async () => {
      const resp = await fetch (`import.meta.env.VITE_BACKEND_URL/renter/form`)
      const data = await resp.json()
    }

    const editRenterForm = async () => {
    const resp = await fetch(
      `import.meta.env.VITE_BACKEND_URL`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(renter_form),
      }
    );
    const data = await resp.json();
  };

  const deleteRenterForm = async () => {
    const resp = await fetch(
      `import.meta.env.VITE_BACKEND_URL`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (resp.ok) {
      nav("/");
    }
  };
    return (
        		<div> 
            <div>
              <h2>Chance of approval</h2>
              <p>const rating() => {
                if data.credit_score >  || data.income > 
                  return <div style={{color:green}}> High</div>
                else if data.credit_score <  || data.income <
                  return <div style={{color:yellow}}>Low</div>
                else 
                  return <div style={{color:red}}>Medium</div>
              }</p>
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
            <button type="button" class="btn btn" onClick={editRenterForm}><i class="fa-solid fa-pencil"></i></button>
            <button type="button" class="btn btn" onClick={deleteRenterForm}><i class="fa-solid fa-trash-can"></i></button>
        </div>	
    )}
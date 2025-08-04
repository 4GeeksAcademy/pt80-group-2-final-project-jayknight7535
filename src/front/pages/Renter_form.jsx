export const renterForm = () => {
    const handleSubmit = async(ev) => {
        ev.preventDefault();
        const resp = await fetch(
            `import.meta.env.VITE_BACKEND_URL`,
            {
                meathod: "POST",
                headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(renterForm),
      }
        )
    }

    return(
       <form>
            <div class="mb-3">
                <label  class="form-label">Email address</label>
                <input type="email" class="form-control" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Full name</label>
                <input class="form-control" placeholder="John Doe"/>
            </div>
			<div class="mb-3">
                <label class="form-label">What is your phone number?</label>
                <input class="form-control" id="exampleFormControlInput1" placeholder="111 111 1111"/>
            </div>
            <div class="mb-3">
                <label class="form-label">what is the zip code of where you want to rent?</label>
                <input class="form-control" id="exampleFormControlInput1" placeholder="00000"/>
            </div>
			
            <div class="mb-3">
                <label class="form-label">how many bedrooms do you need?</label>
                <input class="form-control" id="exampleFormControlInput1" placeholder="1"/>
            </div>
            <div class="mb-3">
                <label class="form-label">What is your credit score?</label>
                <input class="form-control" id="exampleFormControlInput1"/>
            </div>

            <div class="mb-3">
                <label class="form-label">When are you hoping to move in?</label>
                <input class="form-control" id="exampleFormControlInput1" placeholder="11/11/1111"/>
            </div>
            <div>Do you have pets?</div>
            <div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label class="form-check-label" for="inlineCheckbox1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label class="form-check-label" for="inlineCheckbox2">No</label>
                </div>
            </div>
            <div>    
                <label class="form-label">Are you employed?</label>
                <input type="text" class="form-control"/>
            </div>
			<div>what is your yearly income?</div>
            <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control"/>
            </div>
           
            <div>Do you have a criminal record?</div>
            <div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label class="form-check-label" for="inlineCheckbox1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label class="form-check-label" for="inlineCheckbox2">No</label>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Do you need parking?</label>
                <input class="form-control" id="exampleFormControlInput1"/>
            </div>
            <div>what is your max budget?</div>
            <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control"/>
            </div>
            <button type="button" class="btn btn-primary" onSubmit={handleSubmit}>Submit</button>

        </form>
    )
}
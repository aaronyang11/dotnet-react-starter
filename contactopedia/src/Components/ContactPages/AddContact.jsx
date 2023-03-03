import React from "react";
class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      successMessage: undefined,
    };
  }
  handleAddContactFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.contactName.trim();
    const email = e.target.elements.contactEmail.trim();
    const phone = e.target.elements.contactPhone.trim();
    this.props.handleAddContact({ name: name, email: email, phone: phone });
  };
  render() {
    return (
      <div className="border col-12 text-white p-2">
        <form onSubmit={this.handleAddContactFormSubmit}>
          <div className="row p-2">
            <div className="col-12 text-white-50">Add a new contact</div>
            <div className="col-12 col-md-4 p-2">
              <input
                className="form-control form-control-sm"
                placeholder="Name..."
                name="contactName"
              ></input>
            </div>
            <div className="col-12 col-md-4 p-2">
              <input
                className="form-control form-control-sm"
                placeholder="Email..."
                name="contactEmail"
              ></input>
            </div>
            <div className="col-12 col-md-4 p-2">
              <input
                className="form-control form-control-sm"
                placeholder="Phone..."
                name="contactPhone"
              ></input>
            </div>
            <div className="col-12 col-md-6 offset-md-3 p-2">
              <button className="btn btn-primary btn-sm form-control">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;

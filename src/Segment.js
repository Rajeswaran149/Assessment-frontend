import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./segment.css";

function Segment() {
  return (
    <div>
      <p className="content_top">Enter the Name of the Segment</p>
      <form>
        <div className="inputSegment_Name">
          <input type="text" placeholder="Name of the segment"></input>
        </div>
        <div>
          <p className="content_top">
            To save your segment.you need to add the schemas to build the query
          </p>
        </div>

        <div className="traits_info">
          <div className="form-check">
            <input
              className="form-check-input-group"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              -User Traits
            </label>
          </div>
          <div className="form-check">
            <input
              // style={{ color: "red" }}
              className="form-check-input-user"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              -Group Traits
            </label>
          </div>
        </div>

        <div className="box">
          <div className="inputbox">
            <input
              className="form-check-input-user"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <select id="input_schema" name="Name">
              <option value="first_name">First Name</option>
              <option value="add schema">Add schema to segment</option>
              <option value="last_name">Last Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="account_name">Account Name</option>
              <option value="city">City</option>
              <option value="state">State</option>
            </select>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
            </div>
          </div>
          <div className="inputbox">
            <input
              className="form-check-input-user"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <select id="input_schema" name="Name">
              <option value="account_name">Account Name</option>
              <option value="add schema">Add schema to segment</option>
              <option value="first_name">First Name</option>
              <option value="last_name">Last Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="city">City</option>
              <option value="state">State</option>
            </select>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
            </div>
          </div>
        </div>

        <div className="add_details">
          <input
            className="form-check-input-user"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <select id="input_schema" name="Name">
            <option value="add schema">Add schema to segment</option>
            <option value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="account_name">Account Name</option>
            <option value="city">City</option>
            <option value="state">State</option>
          </select>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
            />
          </div>
        </div>

        <div className="add">
          <h6 className="addSchema">+ Add new schema</h6>
        </div>
      </form>
    </div>
  );
}

export default Segment;

import React from "react";
import "./CreateTicket.scss";
import Cross from "../../assets/images/cross.png";
import UploadFile from "../UploadFile/UploadFile";
import Attachment from "../../assets/images/attachment.png";

const CreateTicket = (props) => {
  const { toggleTicket } = props;
  return (
    <div className="create">
      <div className="create-ticket">
        <form className="create-ticket__form" name="create">
          <div className="create-ticket__cross">
            <img src={Cross} alt="cross" onClick={toggleTicket} />
          </div>
          <div className="create-ticket__info">
            <h1 className="create-ticket__info--title">Create Ticket</h1>
            <h4 className="create-ticket__info--description">
              Use the below to fill out your query for HR to resolve.
            </h4>
          </div>

          <div className="create-ticket__type">
            <label htmlFor="Type" className="create-ticket__type--label">
              Request Type
            </label>
            <select
              id="request"
              name="request"
              className="create-ticket__type--request"
              required
            >
              <option value="Sickness/Absences">Sickness/Absences</option>
              <option value="Payroll">Payroll</option>
              <option value="Holiday">Holiday</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <br />

          <div className="create-ticket__title">
            <label htmlFor="Title" className="create-ticket__title--label">
              Request Title
            </label>
            <input
              id="input"
              type="text"
              required
              placeholder="Reason for Sickness"
              // onInput={handlePassword}
              className="create-ticket__title--input"
            />
          </div>

          <div className="create-ticket__description">
            <label
              htmlFor="Description"
              className="create-ticket__description--label"
            >
              Request Description (Optional)
            </label>

            <textarea
              rows="10"
              // cols="25"
              type="text"
              placeholder="Hi there, I'm just uploading a doctor's note to explain my sickness between the dates of 03/02/2022 to 06/02/2022."
              className="create-ticket__description--text"
            ></textarea>
          </div>

          <div className="create-ticket__attachment">
            <p className="create-ticket__attachment--title">Attachments</p>
            <div className="create-ticket__attachment--file">
              <img
                src={Attachment}
                alt="attachment"
                className="create-ticket__attachment--file--image"
              />
              <p className="create-ticket__attachment--file--attached">
                file_attached.pdf
              </p>
            </div>
            <UploadFile />
          </div>

          <div className="create-ticket__confirm">
            <button
              className="create-ticket__confirm--save"
              data-testid="create-button"
              type="button"
              onClick="OnClick"
            >
              Save
            </button>

            <button
              className="create-ticket__confirm--cancel"
              data-testid="create-button"
              type="button"
              onClick="OnClick"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;

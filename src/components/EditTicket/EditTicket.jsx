import React from "react";
import "./EditTicket.scss";
import Cross from "../../assets/images/cross.png";
import UploadFile from "../UploadFile/UploadFile";
import Attachment from "../../assets/images/attachment.png";

const EditTicket = () => {
  return (
    <div className="edit">
      <div className="edit-ticket">
        <form className="edit-ticket__form" name="edit">
          <div className="edit-ticket__cross">
            <img src={Cross} alt="cross" onClick="OnClick" />
          </div>
          <div className="edit-ticket__info">
            <h1 className="edit-ticket__info--title">Edit Ticket</h1>
            <h4 className="edit-ticket__info--description">
              Use the below to fill out your query for HR to resolve.
            </h4>
          </div>

          <div className="edit-ticket__type">
            <label htmlFor="Type" className="edit-ticket__type--label">
              Request Type
            </label>
            <select
              id="request"
              name="request"
              className="edit-ticket__type--request"
              required
            >
              <option value="Sickness/Absences">Sickness/Absences</option>
              <option value="Payroll">Payroll</option>
              <option value="Holiday">Holiday</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <br />

          <div className="edit-ticket__title">
            <label htmlFor="Title" className="edit-ticket__title--label">
              Request Title
            </label>
            <input
              id="input"
              type="text"
              required
              placeholder="Reason for Sickness"
              // onInput={handlePassword}
              className="edit-ticket__title--input"
            />
          </div>

          <div className="edit-ticket__description">
            <label
              htmlFor="Description"
              className="edit-ticket__description--label"
            >
              Request Description (Optional)
            </label>

            <textarea
              rows="10"
              // cols="25"
              type="text"
              placeholder="Hi there, I'm just uploading a doctor's note to explain my sickness between the dates of 03/02/2022 to 06/02/2022."
              className="edit-ticket__description--text"
            ></textarea>
          </div>

          <div className="edit-ticket__attachment">
            <p className="edit-ticket__attachment--title">Attachments</p>
            <div className="edit-ticket__attachment--file">
              <img
                src={Attachment}
                alt="attachment"
                className="edit-ticket__attachment--file--image"
              />
              <p className="edit-ticket__attachment--file--attached">
                file_attached.pdf
              </p>
              <button
                className="edit-ticket__attachment--file--remove"
                type="button"
                onClick="OnClick"
              >
                Remove
              </button>
            </div>

            <UploadFile />
          </div>

          <div className="edit-ticket__confirm">
            <button
              className="edit-ticket__confirm--save"
              type="button"
              onClick="OnClick"
            >
              Save
            </button>

            <button
              className="edit-ticket__confirm--cancel"
              data-testid="edit-button"
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

export default EditTicket;

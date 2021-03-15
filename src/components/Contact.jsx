import React, { useState } from "react";
const Contact = () => {
  const [val, uval] = useState(0);
  const txtChange = (e) => {
    let ln = e.target.value.length;
    if (ln > 500) {
    } else {
      uval(ln);
    }
  };

  return (
    <>
      <div className="contactbox">
        <div className="contactflex">
          <h3>Contact</h3>
          <div className="form-group">
            <div className="imgcontact">
              <img src="https://www.mobinius.com/wp-content/uploads/2020/02/contact-us-banner-img.svg" alt="contact svg"/>
            </div>
            <form action="https://www.toolshubs.com/contact">
              <div className="inputgroup">
                <label>Name</label>
                <input type="text" maxLength="80" name="fname" required></input>
              </div>
              <div className="inputgroup">
                <label>Email</label>
                <input type="email" name="email" required></input>
              </div>
              <div className="inputgroup">
                <label>Message</label>
                <br />
                <textarea
                  onChange={txtChange}
                  maxLength="500"
                  required
                ></textarea>
                <span>{val}/500</span>
              </div>
              <div className="inputgroup btngroup">
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

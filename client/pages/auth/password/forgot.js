import { useState, useEffect } from "react";

import axios from "axios";
import { showSuccessMessage, showErrorMessage } from "../../../helpers/alerts";
import { API } from "../../../config";
import Router from "next/router";
import Layout from "../../../components/Layout";

const ForgotPassword = () => {
  const [state, setstate] = useState({
    email: "",

    buttonText: "Forgit Password",
    success: "",
    error: "",
  });
  const { email, buttonText, success, error } = state;
  const handleChange = (e) => {
    setstate({ ...state, email: e.target.value,success:'',error:'' });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("post email to", email);
    try {
      const response = await axios.put(`${API}/forgot-passwrd`, { email });
      // console.log('forgot password',response)
      setstate({
        ...state,
        email: "",
        buttonText: "Done",
        success: response.data.message,
      });
    } catch (error) {
      console.log("forgot password", error);

      setstate({
        ...state,
        buttonText: "Forgot Password",
        error: error.response.data.error,
      });
    }
  };
  const passwordForgotForm = () => {
    <form onSubmit={handleSubmit}>
      <div className ="form-group">
        <input
          type='email'
          className="form-control"
          onChange={handleChange}
          value={email}
          placeholder="Type your email"
          required
        />
      </div>

      <div>
        <button className="btn btn-outline-warning">{buttonText}</button>
      </div>
    </form>;
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Forgot Password</h1>
          <br />
          {success && showSuccessMessage(success)}
          {error && showErrorMessage(error)}
          {passwordForgotForm()}
        </div>
      </div>
    </Layout>
  );
};
export default ForgotPassword;

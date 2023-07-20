import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import FormWrapper from "./FormWrapper";
import axios from "axios";

const API_KEY = "Ru3XGBqDaVcjtwJU7IbmhzWCkoFP0i9Z5sA8T1l64NEgfQdSYeJB5fA1Cm2iDGYZw09tLszd74EIvyMg";

const generateRandomOTP = () => {
  return Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
};

const sendOTPSMS = async (mobile, otp) => {
  const url = `https://www.fast2sms.com/dev/bulkV2?authorization=${API_KEY}&variables_values=${otp}&route=otp&numbers=${mobile}`;
  console.log(url);
  try {
    const response = await axios.get(url);
    console.log(response.data);
    if (response.data.return === true) {
      return true;
    } else {
      alert("Failed to send OTP. Please try again.");
      return false;
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while sending OTP. Please try again later.");
    return false;
  }
};

const MobileSignUp = ({ parentsmobileno, parentsmobileotp, updateFields, isOTPMatched, setIsOTPMatched }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [isFieldsDisabled, setIsFieldsDisabled] = useState(false); // State variable to track input field disable status

  const generateOtp = async (mobile) => {
    const otp = generateRandomOTP();
    setGeneratedOTP(otp.toString());
    const sent = await sendOTPSMS(mobile, otp);
    if (sent) {
      setOtpSent(true);
    }
  };

  const handleMobileNumberChange = (e) => {
    const mobileNumber = e.target.value;
    updateFields({ parentsmobileno: mobileNumber });
    if (mobileNumber.length === 10) {
      generateOtp(mobileNumber);
    }
  };

  const matchOTP = () => {
    if (parentsmobileotp === generatedOTP) {
      setIsOTPMatched(true);
      setIsFieldsDisabled(true); // Disable the input fields after OTP match
    } else {
      setIsOTPMatched(false);
    }
  };

  const handleOTPChange = (e) => {
    const otpnumber = e.target.value;
    updateFields({ parentsmobileotp: otpnumber });
    if (otpnumber.length === 6) {
      if (otpnumber === generatedOTP) {
        setIsOTPMatched(true);
        setIsFieldsDisabled(true); // Disable the input fields after OTP match
      } else {
        setIsOTPMatched(false);
      }
    }
  };

  return (
    <FormWrapper title="Parents SignUp">
      <label>Mobile Number</label>
      <input
        name="parentsmobileno"
        type="text"
        value={parentsmobileno || ""}
        onChange={handleMobileNumberChange}
        disabled={isFieldsDisabled} // Disable the input field based on the status
      />
      <ErrorMessage name="parentsmobileno" component="div" />

      <label>OTP</label>
      <input
        name="parentsmobileotp"
        type="text"
        value={parentsmobileotp || ""}
        onChange={handleOTPChange}
        disabled={isFieldsDisabled} // Disable the input field based on the status
      />
      <ErrorMessage name="parentsmobileotp" component="div" />

      {parentsmobileotp && isOTPMatched === true && <p>Verification Successful</p>}
      {parentsmobileotp && isOTPMatched === false && <p>Verification Failed</p>}
    </FormWrapper>
  );
};

export default MobileSignUp;

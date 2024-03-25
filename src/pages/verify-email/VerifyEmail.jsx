import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./verifyEmail.css";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmail } from "../../redux/apiCalls/AuthCall";
const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { isEmailVerified } = useSelector((state) => state.auth);
  const { userId, token } = useParams();

  useEffect(() => {
    dispatch(verifyEmail(userId, token));
  }, [dispatch, userId, token]);

  return (
    <section className="verify-email">
      {isEmailVerified ? (
        <>
          <i className="bi bi-patch-check verfiy-email-icon"></i>
          <h1 className="verfiy-email-title">
            Your email address has been successfully verified
          </h1>
          <Link to="/login" className="verfiy-email-link">
            GO To Login Page
          </Link>
        </>
      ) : (
        <>
          <h1 className="verfiy-email-notfound">Not Found</h1>
        </>
      )}
    </section>
  );
};

export default VerifyEmail;

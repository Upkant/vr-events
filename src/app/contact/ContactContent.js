"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "../service/ServiceCards";

const initValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  services: "",
  message: "",
};

const initErrors = {
  name: "",
  email: "",
  phone: "",
  address: "",
  services: "",
  message: "",
};

const initState = {
  values: initValues,
  errors: initErrors,
  isLoading: false,
  isFormValid: false,
};

const ContactContent = () => {
  const [state, setState] = useState(initState);
  const { values, errors, isLoading, isFormValid } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    let error = "";

    // Validation logic
    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        error = "Please enter only alphabetic characters";
      } else if (value.length < 3) {
        error = "Please enter at least three characters";
      }
    } else if (name === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email format";
      }
    } else if (name === "phone") {
      if (!/^\d*$/.test(value)) {
        error = "Please enter only numeric values";
      } else if (value.length !== 10) {
        error = "Please enter a 10-digit number";
      }
    }

    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
      errors: {
        ...prev.errors,
        [name]: error,
      },
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

    if (!values.name) {
      newErrors.name = "This field is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(values.name)) {
      newErrors.name = "Please enter only alphabetic characters";
      valid = false;
    } else if (values.name.length < 3) {
      newErrors.name = "Please enter at least three characters";
      valid = false;
    }

    if (!values.email) {
      newErrors.email = "This field is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!values.phone) {
      newErrors.phone = "This field is required";
      valid = false;
    } else if (!/^\d*$/.test(values.phone)) {
      newErrors.phone = "Please enter only numeric values";
      valid = false;
    } else if (values.phone.length !== 10) {
      newErrors.phone = "Please enter a 10-digit number";
      valid = false;
    }

    if (!values.address) {
      newErrors.address = "This field is required";
      valid = false;
    }

    if (!values.services) {
      newErrors.services = "This field is required";
      valid = false;
    }

    if (!values.message) {
      newErrors.message = "This field is required";
      valid = false;
    }

    setState((prev) => ({
      ...prev,
      errors: newErrors,
      isFormValid: valid,
    }));

    return valid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const responseData = await response.json();

      if (response.ok) {
        setState({
          values: initValues,
          errors: initErrors,
          isLoading: false,
          isFormValid: false,
        });
        alert(responseData.message);
      } else {
        const error = await response.json();
        alert("Error sending email: " + error.message);
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
      }
    } catch (error) {
      alert("Error sending email: " + error.message);
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <>
      <section className="wpo-page-title">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="wpo-breadcumb-wrap">
                <h2>Contact Us</h2>
                <ol className="wpo-breadcumb-wrap">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Contact</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wpo-contact-pg-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-10 offset-lg-1">
              <div className="office-info">
                <div className="row">
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-maps-and-flags" />
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Address</h2>
                        <p>
                          Rao Ishwar Complex, Sector 86 Gurugram, Haryana 122004
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-email" />
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Email Us</h2>
                        <p>
                          <Link href="mailto:vrentertainment1406@gmail.com">
                            vrentertainment1406@gmail.com
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-phone-call" />
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Call Now</h2>
                        <Link href="tel:9910201509">9910201509</Link>
                        <p>
                          <Link href="tel:8285187953">8285187953</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpo-contact-title">
                <h2>Have Any Question?</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  content of a page when looking.
                </p>
              </div>
              <div className="wpo-contact-form-area">
                <form
                  method="post"
                  className="contact-validation-active"
                  id="contact-form-main"
                  onSubmit={onSubmit}
                >
                  <div>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.name
                          ? "is-invalid"
                          : values.name
                          ? "is-valid"
                          : ""
                      }`}
                      name="name"
                      id="name"
                      placeholder="Your Name*"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email
                          ? "is-invalid"
                          : values.email
                          ? "is-valid"
                          : ""
                      }`}
                      name="email"
                      id="email"
                      placeholder="Your Email*"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.phone
                          ? "is-invalid"
                          : values.phone
                          ? "is-valid"
                          : ""
                      }`}
                      name="phone"
                      id="phone"
                      placeholder="Phone no."
                      value={values.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>
                  <div>
                    <select
                      name="services"
                      className={`form-control ${
                        errors.services
                          ? "is-invalid"
                          : values.services
                          ? "is-valid"
                          : ""
                      }`}
                      defaultValue=""
                      onChange={handleChange}
                      value={values.services}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {servicesData.map((service) => (
                        <option key={service.id} value={service.text}>
                          {service.text}
                        </option>
                      ))}
                    </select>
                    {errors.services && (
                      <div className="invalid-feedback">{errors.services}</div>
                    )}
                  </div>
                  <div className="fullwidth">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.address
                          ? "is-invalid"
                          : values.address
                          ? "is-valid"
                          : ""
                      }`}
                      name="address"
                      id="address"
                      placeholder="Address"
                      value={values.address}
                      onChange={handleChange}
                    />
                    {errors.address && (
                      <div className="invalid-feedback">{errors.address}</div>
                    )}
                  </div>
                  <div className="fullwidth">
                    <textarea
                      className={`form-control ${
                        errors.message
                          ? "is-invalid"
                          : values.message
                          ? "is-valid"
                          : ""
                      }`}
                      name="message"
                      id="message"
                      placeholder="Message..."
                      value={values.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>
                  <div className="submit-area">
                    <button
                      type="submit"
                      className="theme-btn-s4"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <i className="fa fa-spinner fa-spin"></i>
                      ) : (
                        "Get in Touch"
                      )}
                    </button>
                  </div>
                  <div className="clearfix error-handling-messages">
                    <div id="success">Thank you</div>
                    <div id="error">
                      Error occurred while sending email. Please try again
                      later.
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wpo-contact-map-section">
        <h2 className="hidden">Contact map</h2>
        <div className="wpo-contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.493316315589!2d76.93185088335132!3d28.403321814371854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d66bab73f41%3A0x373a0048b8697171!2sRao%20Tandoori%20Junction!5e0!3m2!1sen!2sin!4v1722487330080!5m2!1sen!2sin"
            allowFullScreen=""
          />
        </div>
      </section>
    </>
  );
};

export default ContactContent;

import React from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
function Login() {
  const initValue = {
    username: "",
    password: "",
    nameApp: "",
  };
  const validateSchame = Yup.object().shape({
    username: Yup.string().required("Nhap ten"),
    password: Yup.string().required("Nhap mat khau"),
    nameApp: Yup.string().required("Nhập tên ứng dụng muốn lưu mật khẩu"),
  });
  const handleSubmit = (values) => {
    if (window.confirm("ban muon luu mat khau ?")) {
      localStorage.setItem("extension", JSON.stringify(values));
    }
  };
  return (
    <Formik
      initialValues={initValue}
      enableReinitialize={true}
      validationSchema={validateSchame}
      onSubmit={handleSubmit}
    >
      {({ values, errors, setFieldValue }) => (
        <Form>
          <div className="login-form">
            <div className="d-flex jusify-content-center">
              <label>Tên ứng dụng</label>
              <div className="flex-grow-1">
                <Field name="nameApp" className="ms-2 w-100" />
                {errors.nameApp && (
                  <div className="error-text">{errors.nameApp}</div>
                )}
              </div>
            </div>
            <div className="d-flex jusify-content-center mt-2">
              <label>username</label>
              <div className="flex-grow-1">
                <Field name="username" className="ms-2 w-100" />
                {errors.username && (
                  <div className="error-text">{errors.username}</div>
                )}
              </div>
            </div>
            <div className="d-flex jusify-content-center mt-2">
              <label>password</label>
              <div className="flex-grow-1">
                <Field name="password" type="password" className="ms-2 w-100" />
                {errors.password && (
                  <div className="error-text">{errors.password}</div>
                )}
              </div>
            </div>
            <Button variant="success" className="w-100 mt-2" type={"submit"}>
              Luu
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Login;

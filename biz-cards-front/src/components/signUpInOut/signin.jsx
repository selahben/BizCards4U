import { useFormik } from "formik";
import { Input } from "../common/input";
import { PageHeader } from "../common/pageHeader";
import Joi from "joi";
import { formikValidateUsingJoi } from "../../utils/formikValidateUsingJoi";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth.context";

export function SignIn({ redirect = "/" }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } })
        .label("Email"),
      password: Joi.string().min(6).max(1024).required().label("Password"),
    }),

    async onSubmit(values) {
      try {
        await login(values);
        navigate(redirect);
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <PageHeader
        title={
          <>
            Sign In to BizCards4U<span className="ltdSign">©</span>
          </>
        }
        description="Sign In and enjoy the Site!"
      />
      <form onSubmit={form.handleSubmit} noValidate>
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          {...form.getFieldProps("email")}
          label="Email"
          type="email"
          placeholder="Email"
          required
          error={form.touched.email && form.errors.email}
        />
        <Input
          {...form.getFieldProps("password")}
          label="Password"
          type="password"
          placeholder="Strong Password"
          required
          error={form.touched.password && form.errors.password}
        />
        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

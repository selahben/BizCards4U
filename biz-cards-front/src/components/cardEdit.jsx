import { useFormik } from "formik";
import { Input } from "./common/input";
import { PageHeader } from "./common/pageHeader";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { getCard, updateCard } from "../services/cardsService";

export function CardEdit({ redirect = "/" }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: formikValidateUsingJoi({
      bizName: Joi.string().min(2).max(255).required().label("Business Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Business Description"),
      bizAddress: Joi.string()
        .min(2)
        .max(400)
        .required()
        .label("Business Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label("Business Phone"),
      bizImage: Joi.string()
        .min(11)
        .max(1024)
        .allow("")
        .label("Business Image"),
    }),
    async onSubmit(values) {
      try {
        let cardInfo = {
          bizName: values.bizName,
          bizDescription: values.bizDescription,
          bizAddress: values.bizAddress,
          bizPhone: values.bizPhone,
        };
        if (values.bizImage) {
          cardInfo = { ...cardInfo, bizImage: values.bizImage };
        }
        await updateCard(id, cardInfo);
        toast.success("Card Updated Successfully..");
        navigate(redirect);
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  useEffect(() => {
    const getCardAndSetValues = async () => {
      const { data } = await getCard(id);

      form.setFieldValue("bizName", data.bizName);
      form.setFieldValue("bizDescription", data.bizDescription);
      form.setFieldValue("bizAddress", data.bizAddress);
      form.setFieldValue("bizPhone", data.bizPhone);
      form.setFieldValue("bizImage", data.bizImage);
    };
    getCardAndSetValues();
  }, [id]);

  return (
    <div className="container">
      <PageHeader title="Edit Card" description="Edit Your Business Card" />
      <form onSubmit={form.handleSubmit} noValidate>
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          {...form.getFieldProps("bizName")}
          label="BizName"
          type="text"
          placeholder="Business Name"
          required
          error={form.touched.bizName && form.errors.bizName}
        />
        <Input
          {...form.getFieldProps("bizDescription")}
          label="Business Description"
          type="text"
          placeholder="Business Description"
          required
          error={form.touched.bizDescription && form.errors.bizDescription}
        />
        <Input
          {...form.getFieldProps("bizAddress")}
          label="Business Address"
          type="text"
          placeholder="Business Address"
          required
          error={form.touched.bizAddress && form.errors.bizAddress}
        />
        <Input
          {...form.getFieldProps("bizPhone")}
          label="Business Phone"
          type="tel"
          placeholder="Business Phone"
          required
          error={form.touched.bizPhone && form.errors.bizPhone}
        />
        <Input
          {...form.getFieldProps("bizImage")}
          label="Business Image"
          type="text"
          placeholder="Business Image"
          error={form.touched.bizImage && form.errors.bizImage}
        />
        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Submit Changes
          </button>
        </div>
      </form>
    </div>
  );
}

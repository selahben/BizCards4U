import { useFormik } from "formik";
import { Input } from "../common/input";
import { PageHeader } from "../common/pageHeader";
import Joi from "joi";
import { formikValidateUsingJoi } from "../../utils/formikValidateUsingJoi";
import { Map } from "../common/map";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { createCard } from "../../services/cardsService";

export function CardCreate({ redirect = "/" }) {
  const [error, setError] = useState("");
  const [mapAddress, setMapAddress] = useState("");
  const navigate = useNavigate();

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

        await createCard(cardInfo);
        toast.success("Card Successfully Added..");
        navigate(redirect);
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  useEffect(() => {
    setMapAddress(form.values.bizAddress);
  }, [form.values.bizAddress]);

  return (
    <div className="container">
      <PageHeader
        title="Create new Card"
        description="Create a new Business Card"
      />
      <form id="cardForm" onSubmit={form.handleSubmit} noValidate>
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
        {mapAddress && <Map address={mapAddress} page="createCard" />}

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
            Create Card
          </button>
        </div>
      </form>
    </div>
  );
}

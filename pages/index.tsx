import type { NextPage } from "next";
import { useState } from "react";
import { Field, Form } from "react-final-form";
import {
  formatCreditCardNumber,
  formatExpirationDate,
} from "../handleForm/format/card";
import { validationSchema } from "../handleForm/validate/validCard";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values: any) => {
  await sleep(100);
  alert(JSON.stringify(values));
};

const test = validationSchema;

console.log(test.isValid({
  eamil: 'sdf',
  cardNumber : '12312',
  cardExpiration: '123'
}));

const Home: NextPage = () => {

  const validForm = async(values:any) => {
    const response = await validationSchema.isValid(values)
    console.log(response)
    return response
  }
  return (
    <div className="p-12 px-60">
      <Form
        onSubmit={onSubmit}
        validate={(values) => validForm(values)}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          active,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="w-full">
                <Field
                  name="cardNumber"
                  component="input"
                  type="text"
                  pattern="[\d| ]{16,22}"
                  placeholder="Card Number"
                  className="w-full p-3 border"
                  format={formatCreditCardNumber}
                />
              </div>
              <div>
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="email"
                  className="w-full p-3 border"
                />
              </div>
              <Field
                name="cardExpiration"
                pattern="\d\d/\d\d"
                format={formatExpirationDate}
              >
                {({ input, meta }) => (
                  <div>
                    <label>expiry</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="asdf"
                      className="w-full border p-3"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <div className="buttons">
                <button
                  type="submit"
                  disabled={submitting}
                  className="p-3 bg-black text-stone-50"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <h2>Values</h2>
            </form>
          );
        }}
      />
    </div>
  );
};

export default Home;

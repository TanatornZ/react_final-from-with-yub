import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Field, Form } from "react-final-form";
import styles from "../styles/Home.module.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const submit = async (values) => {
  await sleep(100);
  alert(JSON.stringify(values));
};



const required = (value) => (value ? undefined : "Required");

const Home: NextPage = () => {
  const [email, setEmail] = useState("");


  console.log(email);
  return (
    <div className="p-12 px-60">
      <Form
        onSubmit={submit}
        render={({ handleSubmit, values }) => (
          <form className="flex flex-col " onSubmit={handleSubmit}>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div className="w-full">
                  <label className="text-xl">email</label>
                  <input
                    {...input}
                    type="text"
                    
                    className="w-full border p-3"
                    
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div>
              <label>password</label>
              <Field
                name="password"
                component="input"
                type="text"
                placeholder="Password"
                className="border p-3 my-3 w-full"
              />
            </div>
            {/* <div className='py-5'>
              <label>Employed</label>
              <Field name="em" component="input" type="checkbox" className='w-10 ' />
            </div>
            <div>
            <label>Toppings</label>
            <Field name="toppings" component="select" className='border ml-2' multiple>
              <option value="chicken">🐓 Chicken</option>
              <option value="ham">🐷 Ham</option>
              <option value="mushrooms">🍄 Mushrooms</option>
              <option value="cheese">🧀 Cheese</option>
              <option value="tuna">🐟 Tuna</option>
              <option value="pineapple">🍍 Pineapple</option>
            </Field>
          </div>
            <div >
              <label>Best Stooge</label>
              <div className='mt-1'>
                <label>
                  <Field
                    name="stooge"
                    component="input"
                    type="radio"
                    value="larry"
                  />{" "}
                  Larry
                </label>
                <label>
                  <Field
                    name="stooge"
                    component="input"
                    type="radio"
                    value="moe"
                  />{" "}
                  Moe
                </label>
                <label>
                  <Field
                    name="stooge"
                    component="input"
                    type="radio"
                    value="curly"
                  />{" "}
                  Curly
                </label>
              </div>
            </div> */}
            <button type="submit" className="border p-3 mt-5 w-60 self-center">
              login
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default Home;

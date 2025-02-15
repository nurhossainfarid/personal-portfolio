"use client";

// pages/contact.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name) newErrors.name = "Name is required!";
    if (!formData.email) newErrors.email = "Email is required!";
    if (!formData.message) newErrors.message = "Message is required!";

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      // Implement your form submission logic here
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold font-roboto bg-text-gradient-light bg-clip-text text-transparent inline-block mb-8">
        Contact Me
      </h1>
      <div className="grid grid-cols-1 gap-8">
        {/* Contact Form */}
        <Card className="shadow-lg p-6 border border-gray-200 rounded-lg bg-white dark:bg-gray-800">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="mt-2">
              We would love to hear from you! Fill out the form below and we
              will get back to you as soon as possible.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <Input
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full py-3 text-white font-semibold rounded-lg focus:ring-2 focus:ring-blue-300"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6 bg-white dark:bg-gray-800 p-6 shadow-lg rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold ">Contact Information</h3>
          <p className="">
            Feel free to reach out to us using the details below or follow us on
            social media.
          </p>
          <ul className="space-y-4">
            <li className="font-roboto">
              <strong className="">Phone:</strong> 01841268946
            </li>
            <li>
              <strong className="">Email:</strong> faahsan1516@gmail.com
            </li>
            <li>
              <strong className="">Address:</strong> Mirpur-1, Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

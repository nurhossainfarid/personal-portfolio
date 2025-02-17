"use client";
// pages/contact.tsx
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ContactList } from "@/types/global";
import { useCreateContactListMutation } from "@/redux/features/contactlists/contactlist";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "sonner";

const ContactPage = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactList>();
  const [addContact] = useCreateContactListMutation();

  // Handle form submission
  const onSubmit = (data: ContactList) => {
    const contactData = { ...data, id: nanoid() };
    addContact(contactData);
    toast.success("Contact form submitted successfully");
    reset();
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required!" })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required!",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address!",
                    },
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required!" })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
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
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p>
            Feel free to reach out to us using the details below or follow us on
            social media.
          </p>
          <ul className="space-y-4">
            <li className="font-roboto">
              <strong>Phone:</strong> 01841268946
            </li>
            <li>
              <strong>Email:</strong> faahsan1516@gmail.com
            </li>
            <li>
              <strong>Address:</strong> Mirpur-1, Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

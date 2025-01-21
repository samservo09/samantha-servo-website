"use client";

import React, { useRef, useState } from 'react';
import GithubIcon from "/public/github.svg";
import LinkedinIcon from "/public/linkedin.svg";
import Link from 'next/link';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const EmailSection = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Accessing EmailJS keys from environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus('Message sent successfully! Please check your inbox :>');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('Failed to send message. Please try again later or message me directly at samanthaservo09@gmail.com.');
        }
      );
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 items-start">
      {/* Left Section with Image */}
      <div id="contact" className="flex flex-col items-center md:items-start">
        <Image
          src="/images/coverimg.png" // Corrected the path by removing '/public'
          alt="Beyond the Vinculum"
          width={500} // Adjust width to fit your layout
          height={500} // Adjust height to fit your layout
          className="mb-8" // Add spacing below the image if needed
        />
        <h5 className="text-xl font-bold text-[#002347] my-2">
          Let's work on something together?
        </h5>
        <p className="text-[#687771] mb-4 max-w-md">
          Let's connect, to explore endless possibilities, beyond the vinculum!
        </p>
        <div className="socials flex gap-4">
          <Link href="https://github.com/samservo09">
            <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/samantha-servo-43625b18a/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={24} height={24} />
          </Link>
        </div>
      </div>

      {/* Right Section with Form */}
      <div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          {/* Name Input */}
          <div>
            <label
              htmlFor="from_name"
              className="text-[#002347] font-bold text-sm mb-1 block"
            >
              Your Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name" // Corresponds to the template's placeholder for name
              required
              className="bg-[#dbdbdb] border border-[#002347] text-[#002347] text-sm rounded-lg block w-full p-2.5"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="text-[#002347] font-bold text-sm mb-1 block"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email" // Corresponds to the template's placeholder for email
              required
              className="bg-[#dbdbdb] border border-[#002347] text-[#002347] text-sm rounded-lg block w-full p-2.5"
              placeholder="yourEmail@gmail.com"
            />
          </div>

          {/* Subject Input */}
          <div>
            <label
              htmlFor="subject"
              className="text-[#002347] font-bold text-sm mb-1 block"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject" // Corresponds to the template's placeholder for subject
              required
              className="bg-[#dbdbdb] border border-[#002347] text-[#002347] text-sm rounded-lg block w-full p-2.5"
              placeholder="What do you want us to work on?"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="text-[#002347] font-bold text-sm mb-1 block"
            >
              Message
            </label>
            <textarea
              name="message" // Corresponds to the template's placeholder for message
              id="message"
              required
              className="bg-[#dbdbdb] border border-[#002347] text-[#002347] text-sm rounded-lg block w-full p-2.5"
              placeholder="Let me hear that awesome idea of yours!"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#002347] hover:bg-[#687771] text-[#f1f5f3] font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send your message
          </button>
        </form>

        {/* Display status message */}
        {status && (
          <div className="mt-4 text-center text-lg text-[#002347]">
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

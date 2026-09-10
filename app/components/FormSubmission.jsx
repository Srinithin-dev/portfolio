"use client";

import { useId, useState } from "react";
import toast from "react-hot-toast";
import { Loader2, Send } from "lucide-react";

const MAX_MESSAGE_LENGTH = 1000;
const EMPTY = { name: "", email: "", message: "" };

export default function FormSubmission() {
  /* useId gives stable, unique ids for the label/input/error wiring so the
     <label htmlFor> actually points at its input. Previously the labels
     weren't associated with anything — clicking a label didn't focus its
     field, and screen readers read the inputs as unlabelled. */
  const uid = useId();

  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState(EMPTY);
  const [loading, setLoading] = useState(false);

  const setField = (field) => (event) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const next = { ...EMPTY };

    if (!values.name.trim()) next.name = "Name is required.";
    else if (values.name.trim().length < 2)
      next.name = "Name must be at least 2 characters.";

    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Enter a valid email address.";

    if (!values.message.trim()) next.message = "Message is required.";
    else if (values.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";

    setErrors(next);
    return !Object.values(next).some(Boolean);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      toast.success("Message sent. I'll get back to you soon.");
      setValues(EMPTY);
      setErrors(EMPTY);
    } catch {
      toast.error("Something went wrong. Try emailing me directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (hasError) =>
    [
      "w-full rounded-xl border bg-surface-2 px-4 py-3 text-[14.5px] text-ink outline-none transition",
      hasError
        ? "border-red-400 focus:border-red-500"
        : "border-line-strong focus:border-accent-text",
    ].join(" ");

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor={`${uid}-name`}
            className="text-[13.5px] font-semibold text-ink"
          >
            Name
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={setField("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${uid}-name-error` : undefined}
            className={inputClass(Boolean(errors.name))}
          />
          {errors.name && (
            <span
              id={`${uid}-name-error`}
              className="text-[12.5px] text-red-600"
            >
              {errors.name}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor={`${uid}-email`}
            className="text-[13.5px] font-semibold text-ink"
          >
            Email
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={setField("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${uid}-email-error` : undefined}
            className={inputClass(Boolean(errors.email))}
          />
          {errors.email && (
            <span
              id={`${uid}-email-error`}
              className="text-[12.5px] text-red-600"
            >
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label
          htmlFor={`${uid}-message`}
          className="text-[13.5px] font-semibold text-ink"
        >
          Message
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={6}
          maxLength={MAX_MESSAGE_LENGTH}
          placeholder="What are you working on?"
          value={values.message}
          onChange={setField("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${uid}-message-error` : undefined}
          className={`${inputClass(Boolean(errors.message))} resize-none`}
        />
        <div className="flex items-start justify-between gap-3">
          <span
            id={`${uid}-message-error`}
            className="text-[12.5px] text-red-600"
          >
            {errors.message}
          </span>
          <span className="shrink-0 font-mono text-[11.5px] text-ink-3">
            {values.message.length}/{MAX_MESSAGE_LENGTH}
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-accent-text disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <Loader2 size={15} className="animate-spin" />
        ) : (
          <Send size={15} />
        )}
        {loading ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

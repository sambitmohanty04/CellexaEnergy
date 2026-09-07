import React, { useState } from "react";
import API_URL from "../service/api";

interface Job {
  _id: string;
  title: string;
  department: string | null;
  location: string;
  type: string;
  description: string;
}

interface ApplicationModalProps {
  job: Job;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ job, onClose }) => {
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleClose = () => {
    setForm({ name: "", email: "", phone: "", coverLetter: "" });
    setResume(null);
    setMessage("");
    setIsError(false);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!resume) return;

    try {
      setSubmitting(true);
      setMessage("");
      setIsError(false);

      const data = new FormData();
      data.append("job", job._id);
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("coverLetter", form.coverLetter);
      data.append("resume", resume);

      await API_URL.post("/api/career/applications", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Application submitted successfully.");

      setTimeout(() => {
        handleClose();
      }, 1500);
    } catch (error: any) {
      console.error("Error submitting application:", error);
      setIsError(true);
      setMessage(
        error?.response?.data?.message ||
        "Couldn't submit your application. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100";

  const labelClasses = "mb-1.5 block text-sm font-medium text-slate-700";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <div>
            <p className="text-xs font-semibold uppercase text-blue-600">
              Applying for
            </p>
            <h2 className="text-xl font-bold text-slate-900">{job.title}</h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {message && (
          <div
            className={`mb-5 rounded-lg border px-4 py-3 text-sm ${isError
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
              }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={labelClasses}>Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>Resume (PDF or Word)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div>
            <label className={labelClasses}>Cover Letter (optional)</label>
            <textarea
              name="coverLetter"
              value={form.coverLetter}
              onChange={handleChange}
              rows={4}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-5">
            <button
              type="button"
              onClick={handleClose}
              className="rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-blue-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-50"
            >
              {submitting ? "Submitting…" : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;
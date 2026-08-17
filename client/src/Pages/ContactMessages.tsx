import React, { useEffect, useState } from "react";
import API_URL from "../service/api";
import { toast } from "react-toastify";

interface ContactMessage {
  id: number;
  full_name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  created_at?: string;
}

const ContactMessages: React.FC = () => {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      setLoading(true);

      const response = await API_URL.get("/contactus");

      console.log("Contact API:", response.data);

      if (response.data.success) {
        setContacts(response.data.data);
      } else {
        toast.error(
          response.data.message || "Unable to fetch messages."
        );
      }
    } catch (error: any) {
      console.error("Fetch contact error:", error);

      toast.error(
        error.response?.data?.message ||
          "Unable to fetch contact messages."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-900">
            Contact Messages
          </h1>

          <p className="text-gray-500 mt-1">
            View messages submitted through the contact form.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">

          {loading ? (
            <div className="p-10 text-center text-gray-500">
              Loading messages...
            </div>
          ) : contacts.length === 0 ? (
            <div className="p-10 text-center text-gray-500">
              No contact messages found.
            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-5 py-4">
                      S.No.
                    </th>

                    <th className="px-5 py-4">
                      Name
                    </th>

                    <th className="px-5 py-4">
                      Email
                    </th>

                    <th className="px-5 py-4">
                      Phone
                    </th>

                    <th className="px-5 py-4">
                      Subject
                    </th>

                    <th className="px-5 py-4">
                      Message
                    </th>

                    <th className="px-5 py-4">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {contacts.map((contact, index) => (
                    <tr
                      key={contact.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="px-5 py-4">
                        {index + 1}
                      </td>

                      <td className="px-5 py-4 font-medium text-gray-800">
                        {contact.full_name}
                      </td>

                      <td className="px-5 py-4 text-gray-600">
                        {contact.email}
                      </td>

                      <td className="px-5 py-4 text-gray-600">
                        {contact.phone || "-"}
                      </td>

                      <td className="px-5 py-4 text-gray-700">
                        {contact.subject || "-"}
                      </td>

                      <td className="px-5 py-4 text-gray-600 max-w-md">
                        {contact.message}
                      </td>

                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                        {contact.created_at
                          ? new Date(
                              contact.created_at
                            ).toLocaleDateString()
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default ContactMessages;
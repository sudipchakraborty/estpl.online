export type ContactEmailPayload = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

type ContactEmailResponse = {
  success: boolean;
  message: string;
};

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

export async function sendContactEmail(
  data: ContactEmailPayload,
): Promise<ContactEmailResponse> {
  const response = await fetch(`${apiBaseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json().catch(() => ({
    success: false,
    message: "The server returned an invalid response.",
  }));

  if (!response.ok) {
    throw new Error(result.message || "The message could not be sent.");
  }

  return result;
}

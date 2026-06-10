export const WHATSAPP_NUMBER = "917337433351"; // India country code + number

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  if (typeof window !== "undefined") window.open(url, "_blank", "noopener,noreferrer");
}

export function buildLeadMessage(lead: {
  name: string;
  phone: string;
  city?: string;
  requirement?: string;
}) {
  return [
    "🚨 New Website Lead",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    lead.city ? `City: ${lead.city}` : null,
    lead.requirement ? `Requirement: ${lead.requirement}` : null,
    "",
    "Source: Secure Experts Website Chatbot",
  ]
    .filter(Boolean)
    .join("\n");
}
export type FaqAnswer = { answer: string; matched: boolean };

const FAQ: { keys: string[]; answer: string }[] = [
  {
    keys: ["what is", "vltdais", "vltdais140", "about product", "product"],
    answer:
      "VLTDAIS140 is our flagship Intelligent GPS Tracking System — built for real-time vehicle visibility, instant alerts, route monitoring and AES-256 secure telemetry.",
  },
  {
    keys: ["how does", "gps work", "how gps", "tracking work"],
    answer:
      "The device captures GPS satellite signals and transmits encrypted location data over cellular networks every few seconds, giving you sub-meter accuracy on a live map.",
  },
  {
    keys: ["vehicle", "supported", "compatible", "which vehicle", "what vehicle"],
    answer:
      "VLTDAIS140 supports cars, SUVs, trucks, buses, two-wheelers and commercial fleets. It runs on 9–36V, suitable for almost every road vehicle.",
  },
  {
    keys: ["install", "installation", "fit", "fitting", "setup"],
    answer:
      "Installation is handled by our certified technicians and typically takes 30–45 minutes. The device is wired to vehicle power and concealed for tamper resistance.",
  },
  {
    keys: ["mobile", "phone", "app", "track from", "android", "ios"],
    answer:
      "Yes — track your vehicle live from our Android and iOS apps, or from any modern browser. Push alerts notify you of speed, geofence and ignition events.",
  },
  {
    keys: ["accurate", "accuracy", "precision"],
    answer:
      "Positioning accuracy is typically under 2.5 meters in open sky conditions, with 1-second refresh and assisted GPS for faster fixes.",
  },
  {
    keys: ["support", "service", "warranty", "help"],
    answer:
      "We provide 1-year hardware warranty, 24×7 technical support and free OTA firmware updates for the lifetime of the device.",
  },
  {
    keys: ["industry", "industries", "use case", "who uses"],
    answer:
      "VLTDAIS140 is used by logistics fleets, school transport, rental companies, cab aggregators, construction equipment operators and individual vehicle owners.",
  },
];

export function answerFaq(question: string): FaqAnswer {
  const q = question.toLowerCase();
  for (const entry of FAQ) {
    if (entry.keys.some((k) => q.includes(k))) {
      return { answer: entry.answer, matched: true };
    }
  }
  return {
    answer:
      "I'm not fully sure about that one. Would you like to speak with a Secure Experts specialist?",
    matched: false,
  };
}
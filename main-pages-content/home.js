export default {
  title: "FHIR",
  subtitle: "About Meditab FHIR",
  sections: {
    infoSection: {
      content:
        "FHIR for Clinics, Without the Complexity\ Meditab’s HL7® FHIR® platform is designed for real-time clinical interoperability — fast, secure, and built for the workflows that matter most to your practice. Say goodbye to manual data sharing. Say hello to connected care.",
    },
    whyMeditab: {
      heading: "Why Meditab FHIR?",
      desc: "FHIR, Without the Friction. Meditab FHIR makes it easy for clinics and digital health teams to access and share health data — without the heavy lift of custom interfaces or legacy standards.",
      items: [
        {
          subHeading: "Clinic-Centric Design",
          subPara:
            "Tailored for the real-world workflows of outpatient and specialty practices.",
        },
        {
          subHeading: "HL7® FHIR® R4 + USCDI v3",
          subPara:
            "Fully aligned with national interoperability standards for clinical and patient data.",
        },
        {
          subHeading: "Fast, Secure, and Scalable",
          subPara:
            "Real-time access with OAuth2-based security, built for growth.",
        },
        {
          subHeading: "Developer-Ready\ ",
          subPara:
            "Built with simplicity in mind — so integrations don’t need armies of engineers.",
        },
      ],
    },
    whoIsItHeading: "Who Is It For?",
    whoIsItItems: [
      {
        subHeading: "Clinics",
        subPara:
          "Enable seamless exchange with labs, pharmacies, or referral partners",
        iconLink: "/Home/Clinics.png",
      },
      {
        subHeading: "Digital Health Startups",
        subPara:
          "Build patient apps and smart tools with real-time clinical data",
        iconLink: "/Home/Digital Health Startups.png",
      },
      {
        subHeading: "Payers",
        subPara: "Access encounter and care data through standards-based APIs",
        iconLink: "/Home/Payers.png",
      },
    ],
    whatCanYouDo: {
      heading: "What Can You Do with It?",
      content:
        "Use Meditab FHIR to enable smarter workflows and better patient experiences:",

      whatCanYouDoItems: [
        {
          subHeading: "Automate patient intake",
          subPara: "Sync demographics, allergies, and past conditions.",
        },
        {
          subHeading: "Build mobile or web apps",
          subPara:
            "Display appointments, vitals, and lab results in real time.",
        },
        {
          subHeading: "Streamline referrals",
          subPara: "Share clinical documents and care plans between systems.",
        },
        {
          subHeading: "Enable insights",
          subPara:
            "Feed data into dashboards or analytics tools without manual export.",
        },
      ],
    },
    poweredByAI: {
      heading: "Powered by AI? We’re Ready.",
      content:
        "Fuel Your AI with Reliable Clinical Data\ Meditab FHIR provides a structured, real-time pipeline of clinical data to power AI-driven tools for care optimization, risk scoring, automation, and patient engagement.",

      poweredByAIItems: [
        {
          subPara: "Train models on real-world vitals, labs, and diagnoses",
        },
        {
          subPara: "Deliver context-aware clinical recommendations",
        },
        {
          subPara:
            "Automate coding, documentation, and summarization workflows",
        },
        {
          subPara:
            "Integrate LLMs with live patient context, securely and compliantly",
        },
      ],
      para2:
        "AI starts with clean data. Meditab FHIR delivers it — fast, standard, and secure.",
    },
    supportedFhir: {
      heading: "Supported FHIR Resources",
      content:
        "We support the most essential resources for clinical and operational interoperability in ambulatory care:",

      supportedFhirItems: {
        row1: [
          {
            subHeading: "Patient",
            iconLink: "/Home/Patient.png",
          },
          {
            subHeading: "Observation",
            iconLink: "/Home/Observation.png",
          },
          {
            subHeading: "Condition",
            iconLink: "/Home/Condition.png",
          },
          {
            subHeading: "Appointment",
            iconLink: "/Home/Appointment.png",
          },
        ],
        row2: [
          {
            subHeading: "MedicationRequest",
            iconLink: "/Home/MedicationRequest.png",
          },
          {
            subHeading: "DocumentReference",
            iconLink: "/Home/Document Reference.png",
          },
          {
            subHeading: "CarePlan",
            iconLink: "/Home/CarePlan.png",
          },
          {
            subHeading: "AllergyIntolerance",
            iconLink: "/Home/Allergy Intolerance.png",
          },
        ],
      },
      para2: "Additional resource types are being rolled out in alignment with USCDI v3.",
    },

    secureDesign: {
      heading: "Secure by Design",
      content: "Privacy and security are non-negotiable.\ Meditab FHIR ensures clinical data is protected at every level.",

      secureDesignItems: [
        {
          subPara: "HIPAA-aligned data practices",
        },
        {
          subPara: "OAuth2.0-based access control",
        },
        {
          subPara: "Encryption at rest and in transit",
        },
        {
          subPara: "Fine-grained role and user permissions",
        },
        {
          subPara: "Structured for auditability and compliance",
        },
      ],
    },

    whatNext: {
      heading: "Built for What’s Next",
      content: "Whether you're a clinic modernizing your workflows, or a digital health company building something new — Meditab FHIR helps you move faster, stay compliant, and connect with confidence.",
    },
  },
};

export const integration_config = {
  data: {
    date: {
      created_at: "2025-02-19",
      updated_at: "2025-02-19",
    },
    descriptions: {
      app_description:
        "Fetches the current exchange rate for Naira to USD, EUR, and GBP at 60-minutes intervals and sends real-time notifications.",
      app_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVifbDtfjKZAmuhBtssfV1HgOkwybEmIL9OQ&s",
      app_name: "currency rate tracker.",
      app_url: "https://currency-rate-tracker.onrender.com",
      background_color: "#HEXCODE",
    },
    integration_category: "Monitoring & Logging",
    integration_type: "interval",
    is_active: false,
    key_features: ["Gets current naira exchange rate.", "Notifies user."],
    permissions: {
      monitoring_user: {
        always_online: true,
        display_name: "Performance Monitor",
      },
    },
    settings: [
      {
        label: "interval",
        type: "text",
        required: true,
        default: "0 * * * *",
      },
      {
        label: "Key",
        type: "text",
        required: true,
        default: "1234567890",
      },
      {
        label: "Do you want to continue",
        type: "checkbox",
        required: true,
        default: "Yes",
      },
      {
        label: "Provide Speed",
        type: "number",
        required: true,
        default: "1000",
      },
      {
        label: "Sensitivity Level",
        type: "dropdown",
        required: true,
        default: "Low",
        options: ["High", "Low"],
      },
      {
        label: "Alert Admin",
        type: "multi-checkbox",
        required: true,
        default: "Super-Admin",
        options: ["Super-Admin", "Admin", "Manager", "Developer"],
      },
    ],
    // target_url: "https://ping.telex.im/v1/webhooks/019515ea-a238-7f4c-aae2-40f52f57a22b",
    target_url: "https://ping.telex.im/v1/webhooks/01951d09-6c39-77a0-990c-7da52f8ad219",
    tick_url: "https://currency-rate-tracker.onrender.com/currency-notifier"
  },
};

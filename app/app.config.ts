export default defineAppConfig({
  ui: {
    colors: {
      primary: "theme",
      neutral: "neutral",
    },

    button: {
      slots: {
        base: "hover:cursor-pointer",
      },
    },
  },

  socials: [
    {
      icon: "i-simple-icons-linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ymansurozer/",
    },
    {
      icon: "i-simple-icons-github",
      label: "GitHub",
      url: "https://github.com/ymansurozer",
    },
    {
      icon: "i-simple-icons-x",
      label: "X",
      url: "https://x.com/ymansurozer",
    },
  ],
});

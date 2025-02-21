export default defineAppConfig({
  ui: {
    colors: {
      primary: "flexokiOrange",
      neutral: "flexokiGray",
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
      icon: "i-simple-icons-bluesky",
      label: "Bluesky",
      url: "https://bsky.app/profile/ymansurozer.bsky.social",
    },
    {
      icon: "i-simple-icons-x",
      label: "X",
      url: "https://x.com/ymansurozer",
    },
  ],
});

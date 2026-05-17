export default defineAppConfig({
  global: {
    picture: {
      dark: 'http://localhost:3000/perfil.jpg',
      light: 'http://localhost:3000/perfil.jpg',
      alt: 'Alan Gama'
    },
    meetingLink: 'mailto:dethfiregrasp@gmail.com',
    email: 'dethfiregrasp@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'green',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description:
          'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Alan Gama © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-discord',
        'to': 'https://discord.com/users/alangama4',
        'target': '_blank',
        'aria-label': 'Me on Discord'
      },
      {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/AlanGama12672',
        'target': '_blank',
        'aria-label': 'Me on X'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/thogama',
        'target': '_blank',
        'aria-label': 'Me on GitHub'
      },

      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/alangam4/',
        'target': '_blank',
        'aria-label': 'Me on Linkedin'
      }
    ]
  }
})

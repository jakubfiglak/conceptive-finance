module.exports = {
  siteMetadata: {
    title: `Conceptive Finance | Usługi Księgowe`,
    description: `Usługi ksiegowe, obsługa kadrowo-płacowa, doradztwo, pomoc w pozyskiwaniu kredytow`,
    author: `Jakub Figlak <https://github.com/jakubfiglak>`,
    keywords: [
      'biuro rachunkowe luboń',
      'biuro rachunkowe poznań',
      'księgowy luboń',
      'księgowy poznań',
      'kpir luboń',
      'księgowy luboń',
      'księgowość luboń',
      'księgowość poznań',
      'pieniądze',
      'bejmy',
      'spółki',
    ],
    siteUrl: 'https://www.conceptivefinance.pl/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/src/assets/pdf`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato',
            subsets: ['latin-ext'],
            variants: ['400', '600', '700'],
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-scroll-reveal',
  ],
};

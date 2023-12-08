const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'fr'], // Ajoutez d'autres langues si nécessaire
    defaultLocale: 'en',
  },
  localePath: path.resolve('./public/locales'),
};

module.exports = {
  example: {
    switch_language: 'Verander taal: ',

    languages: {
      en: 'Engels',
      de: 'Duits',
      nl: 'Nederlands'
    },

    headline: 'Luisteren mensen',

    welcome: 'Welkom',

    person_age_sentence: {
      zero:   '%(firstName)s is nog geen jaar oud',
      one:    '%(firstName)s is een jaar oud',
      other:  '%(firstName)s is %(count)s jaar oud'
    },

    seconds_passed: {
      one:    '<b>Een seconde</b> is voorbij sinds deze pagina is opgevraagd.',
      other:  '<b>%(count)s seconden</b> sinds deze pagina is opgevraagd.'
    },

    locale_prop_text: 'Although this sentence is fetched from translation data, it does not change when switching the language because the <i>locale is hard-coded as a prop</i> here.',

    click_me: 'klik mij!',
    you_clicked_on: 'Je hebt geklikt op %(what)s.'
  }
};
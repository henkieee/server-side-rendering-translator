module.exports = {
  example: {
    switch_language: 'Switch Language: ',

    languages: {
      en: 'English',
      de: 'German',
      nl: 'Dutch'
    },

    headline: 'Listing People',

    welcome: 'Welcome',

    person_age_sentence: {
      zero:   '%(firstName)s is not even a year old.',
      one:    '%(firstName)s is one year old.',
      other:  '%(firstName)s is %(count)s years old.'
    },

    seconds_passed: {
      one:    '<b>One second</b> has passed since requesting this page.',
      other:  '<b>%(count)s seconds</b> have passed since requesting this page.'
    },

    locale_prop_text: 'Although this sentence is fetched from translation data, it does not change when switching the language because the <i>locale is hard-coded as a prop</i> here.',

    click_me: 'Click me!',
    you_clicked_on: 'You clicked on %(what)s.'
  }
};
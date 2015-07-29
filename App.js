var React = require('react'),
    DOM = React.DOM,
    div = DOM.div,
    button = DOM.button,
    ul = DOM.ul,
    li = DOM.li,
    select = DOM.select,
    option = DOM.option,
    p = DOM.p,
    translate = require('counterpart'),
    hostName = require("os").hostname();

translate.registerTranslations('en', require('./locales/en'));
translate.registerTranslations('de', require('./locales/de'));
translate.registerTranslations('nl', require('./locales/nl'));

var Translator = React.createClass({
  render: function ()
  {
    //pluralizer
    if(typeof translate(this.props.content) === 'object')
    {
      var count = this.props.plurals && this.props.plurals.count,
          entry = translate(this.props.content),
          key = null;

      if ( (count === 0) && 'zero' in entry) {
        key = 'zero';
      }
      key = key || (count === 1 ? 'one' : 'other');
      this.props.content += '.' + key;
    }

    return (
      React.createElement(this.props.element, this.props.attribs, translate(this.props.content, this.props.plurals))
    );
  }
});


module.exports = React.createClass({
  getInitialState: function() {
    var language = this.props.languages[0].toLocaleLowerCase();
    translate.setLocale(language);

    return {
      languages: this.props.languages,
      disabled: true,
      currentLang: translate.getLocale(),
      age: 0
    }
  },
  // Once the component has been mounted, we can enable the button
  componentDidMount: function() {
    this.setState({disabled: false})
  },
  change: function(event){
    translate.setLocale(event.target.value);
    this.setState({currentLang: translate.getLocale()});
  },
  click: function ()
  {
    this.setState({age: this.state.age += 1});
  },
  render: function() {
    return div(null,
      React.createElement(Translator, {element: "label", currentLang: this.state.currentLang, content: "example.switch_language" }),
      select({onChange: this.change,
        value: this.state.currentLang,
        children: this.state.languages.map(function(item) {
          return option({value: item.toLowerCase()}, item)
      })}),
      React.createElement(Translator, {element: "h1", content: "example.welcome"}),
      React.createElement(Translator, {element: "button", attribs: {onClick: this.click}, content: "example.click_me"}),
      React.createElement(Translator, {element: "p", content: "example.person_age_sentence", plurals: {firstName: 'Henk', count: this.state.age } })
    )
  },
})

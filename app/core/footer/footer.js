class FooterCtrl {
  constructor() {
    this.app = {
      date: new Date()
    };
  }
}

module.exports = () => {
  require('./footer.scss');
  return {
    controller: FooterCtrl,
    controllerAs: 'footer',
    template: require('./footer.html')
  };
};

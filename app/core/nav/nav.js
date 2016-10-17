class NavCtrl {
  constructor() {
  }
}

module.exports = () => {
  require('./nav.scss');
  return {
    controller: NavCtrl,
    controllerAs: 'nav',
    template: require('./nav.html')
  };
};

class SidebarCtrl {
  constructor() {
    this.app = {
      isActive: false,
    };
  }
}

module.exports = () => {
  require('./sidebar.scss');
  return {
    controller: SidebarCtrl,
    controllerAs: 'sidebar',
    template: require('./sidebar.html')
  };
};

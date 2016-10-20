class GalleryCtrl {
  constructor($stateParams) {
    this.content = require(`${stateParams.mainid}.json`);
  }
}

module.exports = () => {
  require('./gallery.scss');
  return {
    controller: GalleryCtrl,
    controllerAs: 'gallery',
    template: require('./gallery.html')
  };
};

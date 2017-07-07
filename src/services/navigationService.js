class NavigationFactory {
  setNavigator(navigator) {
    this.navigator = navigator
  }

  push = (params) => this.navigator && this.navigator.push(params)
  pop = (params) => this.navigator && this.navigator.pop(params)
  resetTo = (params) => this.navigator && this.navigator.resetTo(params)
  toggleDrawer = (params) => this.navigator && this.navigator.toggleDrawer(params)
}

export const NavigationService = (function() {
  // Singleton instance goes into this variable
  this.instance = new NavigationFactory();

  return this;
})();

import CellHexagon from './src/cell-hexagon'

CellHexagon.install = function(Vue) {
  Vue.component(CellHexagon.componentName, CellHexagon);
};

export default CellHexagon
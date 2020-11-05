import CellHexagon from './src/cell-hexagon'

CellHexagon.install = function(Vue) {
  Vue.component(CellHexagon.name, CellHexagon);
};

export default CellHexagon
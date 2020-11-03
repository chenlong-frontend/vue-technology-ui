import CellHexagon from './cell-hexagon'

CellHexagon.install = function(Vue) {
  Vue.component(CellHexagon.name, CellHexagon);
};

export {CellHexagon}
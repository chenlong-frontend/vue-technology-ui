/* Automatically generated by './build/bin/build-entry.js' */

import Scrollbar from '../packages/scrollbar/index.ts';
import Row from '../packages/row/index.ts';
import Col from '../packages/col/index.ts';
import Bubble from '../packages/bubble/index.ts';
import Button from '../packages/button/index.ts';
import ButtonIcon from '../packages/button-icon/index.ts';
import ButtonIconMiddle from '../packages/button-icon-middle/index.ts';
import ButtonMini from '../packages/button-mini/index.ts';
import ButtonLarger from '../packages/button-larger/index.ts';
import CardShadow from '../packages/card-shadow/index.ts';
import CardItem from '../packages/card-item/index.ts';
import CardImage from '../packages/card-image/index.ts';
import CellHexagon from '../packages/cell-hexagon/index.ts';
import Collapse from '../packages/collapse/index.ts';
import CollapseItem from '../packages/collapse-item/index.ts';
import Dialog from '../packages/dialog/index.ts';
import DialogMove from '../packages/dialog-move/index.ts';
import Divider from '../packages/divider/index.ts';
import DividerText from '../packages/divider-text/index.ts';
import DropDown from '../packages/drop-down/index.ts';
import Empty from '../packages/empty/index.ts';
import Input from '../packages/input/index.ts';
import NumberInput from '../packages/number-input/index.ts';
import List from '../packages/list/index.ts';
import Loading from '../packages/loading/index.ts';
import MenuItem from '../packages/menu-item/index.ts';
import Message from '../packages/message/index.ts';
import MessageBox from '../packages/message-box/index.ts';
import Pagination from '../packages/pagination/index.ts';
import Ripple from '../packages/ripple/index.ts';
import Search from '../packages/search/index.ts';
import Select from '../packages/select/index.ts';
import Option from '../packages/option/index.ts';
import OptionCard from '../packages/option-card/index.ts';
import Form from '../packages/form/index.ts';
import FormItem from '../packages/form-item/index.ts';

const components = [
  Scrollbar,
  Row,
  Col,
  Bubble,
  Button,
  ButtonIcon,
  ButtonIconMiddle,
  ButtonMini,
  ButtonLarger,
  CardShadow,
  CardItem,
  CardImage,
  CellHexagon,
  Collapse,
  CollapseItem,
  Dialog,
  DialogMove,
  Divider,
  DividerText,
  DropDown,
  Empty,
  Input,
  NumberInput,
  List,
  MenuItem,
  Pagination,
  Ripple,
  Search,
  Select,
  Option,
  OptionCard,
  Form,
  FormItem
];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(Loading.directive);

  Vue.prototype.$message = Message;
  Vue.prototype.$confirm = MessageBox.confirm;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.6',
  install,
  Scrollbar,
  Row,
  Col,
  Bubble,
  Button,
  ButtonIcon,
  ButtonIconMiddle,
  ButtonMini,
  ButtonLarger,
  CardShadow,
  CardItem,
  CardImage,
  CellHexagon,
  Collapse,
  CollapseItem,
  Dialog,
  DialogMove,
  Divider,
  DividerText,
  DropDown,
  Empty,
  Input,
  NumberInput,
  List,
  Loading,
  MenuItem,
  Message,
  MessageBox,
  Pagination,
  Ripple,
  Search,
  Select,
  Option,
  OptionCard,
  Form,
  FormItem
};

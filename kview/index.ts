
import Bubble from './bubble/index'
import {Button, ButtonIcon, ButtonMini, ButtonLarger, ButtonIconMiddle} from './button/index'
import Col from './col/index'
import {CardShadow, CardImage, CardItem} from './card/index'
import {CollapseItem, Collapse} from './collapse/index'
import {CellHexagon} from './cell/index'
import {Dialog, DialogMove} from './dialog/index'
import {Divider, DividerText} from './divider/index'
import Empty from './empty/index'
import {Form ,FormItem} from './form/index'
import {Input, NumberInput} from './input/index'
import List from './list/index'
import Message from './message'
import MessageBox from './message-box'
import {MenuItem} from './menu/index'
import Pagination from './pagination/index'
import Ripple from './ripple/index'
import Row from './row/index'
import {Select, Option, OptionCard} from './select/index'
import Search from './search'

const components = [
  Bubble,
  Button, 
  ButtonMini,
  ButtonIcon, 
  ButtonLarger,
  ButtonIconMiddle,
  Col, 
  Collapse,
  CardImage,
  CardShadow,
  CardItem,
  CellHexagon,
  CollapseItem,
  Dialog,
  Divider,
  DialogMove,
  DividerText,
  Empty,
  Form,
  FormItem,
  Input,
  List,
  MenuItem,
  NumberInput,
  Option,
  OptionCard,
  Pagination,
  Row, 
  Ripple, 
  Search,
  Select,
]

const install = function(Vue) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$message = Message;
}

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export default {
  install,
  Bubble,
  Button, 
  ButtonMini,
  ButtonIcon, 
  ButtonLarger,
  ButtonIconMiddle,
  Col, 
  Collapse,
  CardImage,
  CardShadow,
  CardItem,
  CellHexagon,
  CollapseItem,
  Dialog,
  Divider,
  DialogMove,
  DividerText,
  Empty,
  Form,
  FormItem,
  Input,
  List,
  MenuItem,
  NumberInput,
  Option,
  OptionCard,
  Pagination,
  Row, 
  Ripple, 
  Search,
  Select,
  Message,
  MessageBox
}
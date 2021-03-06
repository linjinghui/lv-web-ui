import Button from './button/index';
import Checkbox from './checkbox/index';
import Radio from './radio/index';
import Input from './input/index';
import Swith from './swith/index';
import Tooltip from './tooltip/index';
import Loading from './loading/index';
import Progress from './progress/index';
import Slider from './slider/index';
import DatePicker from './datepicker/index';
import RangeMenu from './rangeMenu/index';
import Shuttle from './shuttle/index';
import Pagebar from './pagebar/index';
import Echarts from './echarts/index';
import ImageCrop from './imageCrop/index';
import Cropper from './cropper/index';
import Table from './table/index';
import Sidebar from './sidebar/index';
import Textarea from './textarea/index';
import DropMenu from './dropMenu/index';
import Menu from './menu/index';
import Cascade from './cascade/index';
import Tree from './tree/index';
import Dialog from './dialog/index';
import Confirm from './confirm/index';
import Prompt from './prompt/index';
import Tab from './tab/index';
import Editor from './editor/index';
import Star from './star/index';
import Breadcrumbs from './breadcrumbs/index';
import Map from './map/index';
import SwapSort from './swapSort/index';
import DivEditor from './divEditor/index';
import Video from './video/index';
import Img from './img/index';
import ImgGroup from './imgGroup/index';
import Flowtree from './flowtree/index';
import TimeTurntable from './timeTurntable/index';
import Selector from './selector/index';
import RotaryTable from './rotaryTable/index';
import AddLabel from './addLabel/index';
import Banner from './banner/index';
import SwiperBanner from './swiperBanner/index';
import SwiperNav from './swiperNav/index';
import List from './list/index';
import More from './more/index';
import GamePt from './gamePt/index';
import Sidenav from './sidenav/index';
import Rule from './rule/index';
import SliderCode from './sliderCode/index';
import Routrecord from './routrecord/index';
import Select from './select/index';
import Form from './form/index';
import Upload from './upload/index';
import Weather from './upload/index';
import Numberkey from './numberkey/index';
import Lock from './lock/index';
import Split from './split/index';
import Gantt from './gantt/index';

const components = [Loading, Confirm, Prompt];
const install = function (Vue) {
  if (install.installed) return;
  components.map(function (component) {
    Vue.component(component.name, component);
  });
}

export {install, Button, Checkbox, Radio, Input, Swith, Tooltip, Loading, Progress, Slider, DatePicker, RangeMenu, Shuttle, Pagebar, Echarts, ImageCrop, Cropper, Table, Sidebar, Textarea, DropMenu, Menu, Cascade, Tree, Dialog, Confirm, Prompt, Tab, Editor, Star, Breadcrumbs, Map, SwapSort, DivEditor, Video, Img, ImgGroup, Flowtree, TimeTurntable, Selector, RotaryTable, AddLabel, Banner, SwiperBanner, SwiperNav, List, More, GamePt, Sidenav, Rule, SliderCode, Routrecord, Select, Form, Upload, Weather, Numberkey, Lock, Split, Gantt};

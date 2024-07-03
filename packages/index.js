/* 整合所有组件，并对外导出 */
import CButton from "./button/index.js";
import CButtonGroup from "./button-group/index.js";
import CIcon from "./icon/index.js";
import CFlex from "./flex/index.js";
import CSpace from "./space/index.js";
import CRow from "./grid-row/index.js";
import CCol from "./grid-col/index.js";
import CRadio from "./radio/index.js";
import CRadioButton from "./radio-button/index.js";
import CRadioGroup from "./radio-group/index.js";
import CLayout from "./layout/index.js";
import CHeader from "./layout-header/index.js";
import CContent from "./layout-content/index.js";
import CSider from "./layout-sider/index.js";
import CFooter from "./layout-footer/index.js";
import CAlert from "./alert/index.js";
import CMessage from "./message/index.js";
import CAffix from "./affix/index.js";
import CForm from "./form/index.js";
import CFormItem from "./form-item/index.js";
import CInput from "./input/index.js";
import CTextarea from "./input-textarea/index.js";
import CInputNumber from "./input-number/index.js";
import CAvatar from "./avatar/index.js";
import CSwitch from "./switch/index.js";
import CCheckbox from "./checkbox/index.js";
import CCheckboxGroup from "./checkbox-group/index.js";
import CBadge from "./badge/index.js";
import CBreadcrumb from "./breadcrumb/index.js";
import CBreadcrumbItem from "./breadcrumb-item/index.js";
import CException from "./exception/index.js";
import CResult from "./result/index.js";
import CCard from "./card/index.js";
import CRate from "./rate/index.js";
import CSelect from "./select/index.js";
import CSelectOption from "./select/select-option/index.js";
import CPagination from "./pagination/index.js";
import CMenu from "./menu/index.js";
import CMenuSub from "./menu/menu-sub/index.js";
import CMenuItem from "./menu/menu-item/index.js";
import CMenuItemGroup from "./menu/menu-item-group/index.js";
import CDropdown from "./dropdown/index.js";

import { version } from "../package.json"; //版本号

//组件列表
const components = [
  CButton,
  CButtonGroup,
  CIcon,
  CFlex,
  CSpace,
  CRow,
  CCol,
  CRadio,
  CRadioButton,
  CRadioGroup,
  CLayout,
  CHeader,
  CContent,
  CSider,
  CFooter,
  CAffix,
  CSwitch,
  CAlert,
  CForm,
  CFormItem,
  CInput,
  CTextarea,
  CInputNumber,
  CAvatar,
  CCheckbox,
  CCheckboxGroup,
  CBadge,
  CBreadcrumb,
  CBreadcrumbItem,
  CException,
  CResult,
  CCard,
  CRate,
  CSelect,
  CSelectOption,
  CPagination,
  CMenu,
  CMenuSub,
  CMenuItem,
  CMenuItemGroup,
  CDropdown,
];

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  install.installed = true;
  // 遍历注册全局组件
  components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// 按需引入
export {
  CButton,
  CButtonGroup,
  CIcon,
  CFlex,
  CSpace,
  CRow,
  CCol,
  CRadio,
  CRadioButton,
  CRadioGroup,
  CLayout,
  CHeader,
  CContent,
  CSider,
  CFooter,
  CAffix,
  CSwitch,
  CAlert,
  CForm,
  CFormItem,
  CInput,
  CTextarea,
  CInputNumber,
  CAvatar,
  CCheckbox,
  CCheckboxGroup,
  CBadge,
  CBreadcrumb,
  CBreadcrumbItem,
  CException,
  CResult,
  CCard,
  CRate,
  CSelect,
  CSelectOption,
  CPagination,
  CMenu,
  CMenuSub,
  CMenuItem,
  CMenuItemGroup,
  CDropdown,
};

export default {
  version,
  install,
};

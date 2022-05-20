import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import PanelMenu from 'primevue/panelmenu'
import Button from 'primevue/button'
// import ProgressBar from 'primevue/progressbar';
// import Slider from 'primevue/slider';
// import Calendar from 'primevue/calendar';
// import DataTable from 'primevue/datatable';
// import Column from 'primevue/column';
// import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
// import Row from 'primevue/row';                     //optional for row
// import InputNumber from 'primevue/inputnumber';
// import MultiSelect from 'primevue/multiselect';
import InputText from 'primevue/inputtext'
import CascadeSelect from 'primevue/cascadeselect'
import InputSwitch from 'primevue/inputswitch'
import Divider from 'primevue/divider'
// import Dropdown from 'primevue/dropdown';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.component('Menubar', Menubar)
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('PanelMenu', PanelMenu)
  // nuxtApp.vueApp.component('Button', Button);
  // nuxtApp.vueApp.component('DataTable', DataTable);
  // nuxtApp.vueApp.component('Column', Column);
  // nuxtApp.vueApp.component('ColumnGroup', ColumnGroup);
  // nuxtApp.vueApp.component('Row', Row);
  // nuxtApp.vueApp.component('Calendar', Calendar);
  // nuxtApp.vueApp.component('ProgressBar', ProgressBar);
  // nuxtApp.vueApp.component('Slider', Slider);
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('InputSwitch', InputSwitch)
  nuxtApp.vueApp.component('Divider', Divider)
  nuxtApp.vueApp.component('CascadeSelect', CascadeSelect)
  // nuxtApp.vueApp.component('MultiSelect', MultiSelect);
  // nuxtApp.vueApp.component('InputNumber', InputNumber);
  // nuxtApp.vueApp.component('Dropdown', Dropdown);
  // other components that you need
})

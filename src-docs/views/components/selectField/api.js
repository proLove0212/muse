export default {
  props: [{
    name: 'autoWidth',
    type: 'Boolean',
    default: 'false',
    desc: 'props.autoWidth'
  }, {
    name: 'maxHeight',
    type: 'Number',
    default: '',
    desc: 'props.maxHeight'
  }, {
    name: 'multiple',
    type: 'Boolean',
    default: 'false',
    desc: 'props.multiple'
  }, {
    name: 'name',
    type: 'String',
    default: '',
    desc: 'props.name'
  }, {
    name: 'label',
    type: 'String',
    default: '',
    desc: 'props.label'
  }, {
    name: 'labelFloat',
    type: 'Boolean',
    default: 'false',
    desc: 'props.labelFloat'
  }, {
    name: 'labelClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.labelClass'
  }, {
    name: 'labelFocusClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.labelFocusClass'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'props.disabled'
  }, {
    name: 'hintText',
    type: 'String',
    default: '',
    desc: 'props.hintText'
  }, {
    name: 'hintTextClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.hintTextClass'
  }, {
    name: 'helpText',
    type: 'String',
    default: '',
    desc: 'props.helpText'
  }, {
    name: 'helpTextClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.helpTextClass'
  }, {
    name: 'errorText',
    type: 'String',
    default: '',
    desc: 'props.errorText'
  }, {
    name: 'errorColor',
    type: 'String',
    default: '',
    desc: 'props.errorColor'
  }, {
    name: 'icon',
    type: 'String',
    default: '',
    desc: 'props.icon'
  }, {
    name: 'iconClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.iconClass'
  }, {
    name: 'fullWidth',
    type: 'Boolean',
    default: 'false',
    desc: 'props.fullWidth'
  }, {
    name: 'underlineShow',
    type: 'Boolean',
    default: 'true',
    desc: 'props.underlineShow'
  }, {
    name: 'underlineClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.underlineClass'
  }, {
    name: 'underlineFocusClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.underlineFocusClass'
  }, {
    name: 'dropDownIconClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.dropDownIconClass'
  }, {
    name: 'value',
    type: 'String',
    default: '',
    desc: 'props.value'
  }, {
    name: 'scroller',
    type: 'Element',
    default: 'window',
    desc: 'props.scroller'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }],
  events: [{
    name: 'input',
    desc: 'events.input'
  }, {
    name: 'change',
    desc: 'events.change'
  }]
}

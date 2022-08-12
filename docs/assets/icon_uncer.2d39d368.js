import { e as defineComponent, aA as _Popper, aB as debugWarn, aC as renderIf, aD as PatchFlags, D as toDisplayString, p as renderSlot, J as createTextVNode, aE as renderPopper, aF as renderArrow, aG as Effect, aH as renderTrigger, m as createCommentVNode, h, T as withDirectives, aI as ClickOutside, al as Teleport, F as Fragment, r as ref, aJ as PopupManager, d as computed, ai as isString, aK as usePopper, w as watch, aL as defaultProps, a6 as on } from './index.e0dfe776.js';

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const SHOW_EVENT = "show";
const HIDE_EVENT = "hide";
function usePopover(props, ctx) {
  const zIndex = ref(PopupManager.nextZIndex());
  const width = computed(() => {
    if (isString(props.width)) {
      return props.width;
    }
    return `${props.width}px`;
  });
  const popperStyle = computed(() => {
    return {
      width: width.value,
      zIndex: zIndex.value
    };
  });
  const popperProps = usePopper(props, ctx);
  watch(popperProps.visibility, (val) => {
    if (val) {
      zIndex.value = PopupManager.nextZIndex();
    }
    ctx.emit(val ? SHOW_EVENT : HIDE_EVENT);
  });
  return __spreadProps$1(__spreadValues$1({}, popperProps), {
    popperStyle
  });
}

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const emits = [
  "update:visible",
  "after-enter",
  "after-leave",
  SHOW_EVENT,
  HIDE_EVENT
];
const NAME = "ElPopover";
const _hoist = { key: 0, class: "el-popover__title", role: "title" };
var script = defineComponent({
  name: NAME,
  components: {
    ElPopper: _Popper
  },
  props: __spreadProps(__spreadValues({}, defaultProps), {
    content: {
      type: String
    },
    trigger: {
      type: String,
      default: "click"
    },
    title: {
      type: String
    },
    transition: {
      type: String,
      default: "fade-in-linear"
    },
    width: {
      type: [String, Number],
      default: 150
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    tabindex: [String, Number]
  }),
  emits,
  setup(props, ctx) {
    if (props.visible && !ctx.slots.reference) {
      debugWarn(NAME, `
        You cannot init popover without given reference
      `);
    }
    const states = usePopover(props, ctx);
    return states;
  },
  render() {
    const { $slots } = this;
    const trigger = $slots.reference ? $slots.reference() : null;
    const title = renderIf(!!this.title, "div", _hoist, toDisplayString(this.title), PatchFlags.TEXT);
    const content = renderSlot($slots, "default", {}, () => [
      createTextVNode(toDisplayString(this.content), PatchFlags.TEXT)
    ]);
    const {
      events,
      onAfterEnter,
      onAfterLeave,
      onPopperMouseEnter,
      onPopperMouseLeave,
      popperStyle,
      popperId,
      popperClass,
      showArrow,
      transition,
      visibility,
      tabindex
    } = this;
    const kls = [
      this.content ? "el-popover--plain" : "",
      "el-popover",
      popperClass
    ].join(" ");
    const popover = renderPopper({
      effect: Effect.LIGHT,
      name: transition,
      popperClass: kls,
      popperStyle,
      popperId,
      visibility,
      onMouseenter: onPopperMouseEnter,
      onMouseleave: onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      stopPopperMouseEvent: false
    }, [title, content, renderArrow(showArrow)]);
    const _trigger = trigger ? renderTrigger(trigger, __spreadValues({
      ariaDescribedby: popperId,
      ref: "triggerRef",
      tabindex
    }, events)) : createCommentVNode("v-if", true);
    return h(Fragment, null, [
      this.trigger === "click" ? withDirectives(_trigger, [[ClickOutside, this.hide]]) : _trigger,
      h(Teleport, {
        disabled: !this.appendToBody,
        to: "body"
      }, [popover])
    ]);
  }
});

script.__file = "packages/components/popover/src/index.vue";

const attachEvents = (el, binding, vnode) => {
  const _ref = binding.arg || binding.value;
  const popover = vnode.dirs[0].instance.$refs[_ref];
  if (popover) {
    popover.triggerRef = el;
    el.setAttribute("tabindex", popover.tabindex);
    Object.entries(popover.events).forEach(([eventName, e]) => {
      on(el, eventName.toLowerCase().slice(2), e);
    });
  }
};
var PopoverDirective = {
  mounted(el, binding, vnode) {
    attachEvents(el, binding, vnode);
  },
  updated(el, binding, vnode) {
    attachEvents(el, binding, vnode);
  }
};
const VPopover = "popover";

script.install = (app) => {
  app.component(script.name, script);
};
PopoverDirective.install = (app) => {
  app.directive(VPopover, PopoverDirective);
};
const _PopoverDirective = PopoverDirective;
script.directive = _PopoverDirective;
const _Popover = script;
const ElPopover = _Popover;

var popover = '';

var UnCertIcon = "/assets/icon_uncer.95f8cabb.svg";

export { ElPopover as E, UnCertIcon as U };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbl91bmNlci4yZDM5ZDM2OC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
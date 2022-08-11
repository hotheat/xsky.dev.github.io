import { e as defineComponent, b5 as UPDATE_MODEL_EVENT, b6 as CHANGE_EVENT, r as ref, w as watch, b7 as provide, b8 as _CollapseTransition, b9 as generateId, ba as inject, d as computed, O as withInstall, P as withNoopInstall, g as openBlock, A as createElementBlock, p as renderSlot, f as resolveComponent, k as createBaseVNode, L as normalizeClass, bb as withKeys, K as withModifiers, J as createTextVNode, D as toDisplayString, l as createVNode, j as withCtx, T as withDirectives, a8 as vShow } from './index.2d61a762.js';

var script$1 = defineComponent({
  name: "ElCollapse",
  props: {
    accordion: Boolean,
    modelValue: {
      type: [Array, String, Number],
      default: () => []
    }
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
  setup(props, { emit }) {
    const activeNames = ref([].concat(props.modelValue));
    const setActiveNames = (_activeNames) => {
      activeNames.value = [].concat(_activeNames);
      const value = props.accordion ? activeNames.value[0] : activeNames.value;
      emit(UPDATE_MODEL_EVENT, value);
      emit(CHANGE_EVENT, value);
    };
    const handleItemClick = (name) => {
      if (props.accordion) {
        setActiveNames((activeNames.value[0] || activeNames.value[0] === 0) && activeNames.value[0] === name ? "" : name);
      } else {
        const _activeNames = activeNames.value.slice(0);
        const index = _activeNames.indexOf(name);
        if (index > -1) {
          _activeNames.splice(index, 1);
        } else {
          _activeNames.push(name);
        }
        setActiveNames(_activeNames);
      }
    };
    watch(() => props.modelValue, () => {
      activeNames.value = [].concat(props.modelValue);
    });
    provide("collapse", {
      activeNames,
      handleItemClick
    });
    return {
      activeNames,
      setActiveNames,
      handleItemClick
    };
  }
});

const _hoisted_1$1 = {
  class: "el-collapse",
  role: "tablist",
  "aria-multiselectable": "true"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}

script$1.render = render$1;
script$1.__file = "packages/components/collapse/src/collapse.vue";

var script = defineComponent({
  name: "ElCollapseItem",
  components: { ElCollapseTransition: _CollapseTransition },
  props: {
    title: {
      type: String,
      default: ""
    },
    name: {
      type: [String, Number],
      default: () => {
        return generateId();
      }
    },
    disabled: Boolean
  },
  setup(props) {
    const collapse = inject("collapse");
    const contentWrapStyle = ref({
      height: "auto",
      display: "block"
    });
    const contentHeight = ref(0);
    const focusing = ref(false);
    const isClick = ref(false);
    const id = ref(generateId());
    const isActive = computed(() => {
      return (collapse == null ? void 0 : collapse.activeNames.value.indexOf(props.name)) > -1;
    });
    const handleFocus = () => {
      setTimeout(() => {
        if (!isClick.value) {
          focusing.value = true;
        } else {
          isClick.value = false;
        }
      }, 50);
    };
    const handleHeaderClick = () => {
      if (props.disabled)
        return;
      collapse == null ? void 0 : collapse.handleItemClick(props.name);
      focusing.value = false;
      isClick.value = true;
    };
    const handleEnterClick = () => {
      collapse == null ? void 0 : collapse.handleItemClick(props.name);
    };
    return {
      isActive,
      contentWrapStyle,
      contentHeight,
      focusing,
      isClick,
      id,
      handleFocus,
      handleHeaderClick,
      handleEnterClick,
      collapse
    };
  }
});

const _hoisted_1 = ["aria-expanded", "aria-controls", "aria-describedby"];
const _hoisted_2 = ["id", "tabindex"];
const _hoisted_3 = ["id", "aria-hidden", "aria-labelledby"];
const _hoisted_4 = { class: "el-collapse-item__content" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_collapse_transition = resolveComponent("el-collapse-transition");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-collapse-item", { "is-active": _ctx.isActive, "is-disabled": _ctx.disabled }])
  }, [
    createBaseVNode("div", {
      role: "tab",
      "aria-expanded": _ctx.isActive,
      "aria-controls": `el-collapse-content-${_ctx.id}`,
      "aria-describedby": `el-collapse-content-${_ctx.id}`
    }, [
      createBaseVNode("div", {
        id: `el-collapse-head-${_ctx.id}`,
        class: normalizeClass(["el-collapse-item__header", {
          focusing: _ctx.focusing,
          "is-active": _ctx.isActive
        }]),
        role: "button",
        tabindex: _ctx.disabled ? -1 : 0,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleHeaderClick && _ctx.handleHeaderClick(...args)),
        onKeyup: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => _ctx.handleEnterClick && _ctx.handleEnterClick(...args), ["stop"]), ["space", "enter"])),
        onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[3] || (_cache[3] = ($event) => _ctx.focusing = false)
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ]),
        createBaseVNode("i", {
          class: normalizeClass(["el-collapse-item__arrow el-icon-arrow-right", { "is-active": _ctx.isActive }])
        }, null, 2)
      ], 42, _hoisted_2)
    ], 8, _hoisted_1),
    createVNode(_component_el_collapse_transition, null, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          id: `el-collapse-content-${_ctx.id}`,
          class: "el-collapse-item__wrap",
          role: "tabpanel",
          "aria-hidden": !_ctx.isActive,
          "aria-labelledby": `el-collapse-head-${_ctx.id}`
        }, [
          createBaseVNode("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "default")
          ])
        ], 8, _hoisted_3), [
          [vShow, _ctx.isActive]
        ])
      ]),
      _: 3
    })
  ], 2);
}

script.render = render;
script.__file = "packages/components/collapse/src/collapse-item.vue";

const ElCollapse = withInstall(script$1, {
  CollapseItem: script
});
const ElCollapseItem = withNoopInstall(script);

var collapseItem = '';

var collapse = '';

export { ElCollapseItem as E, ElCollapse as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuY2M2ZGI4ODAuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

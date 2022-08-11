import { _ as _export_sfc, e as defineComponent, r as ref, v as reactive, aq as useRoute, a as onMounted, cq as GetMetaIdInfo, f as resolveComponent, g as openBlock, i as createBlock, j as withCtx, l as createVNode, C as unref } from './index.2d61a762.js';
import { U as UserCenter } from './UserCenter.abd3ee71.js';
import './skeleton.7a1b0929.js';
import './image-viewer.990d1b5f.js';
import './detailDetach-owner.53484477.js';
import './LoadMore.8e01938d.js';
import './Cert.b8b923f4.js';
import './icon_uncer.db83df6b.js';
import './icon_cer.5f0b2a62.js';
import './Tab.811a573e.js';
import './vue3-clipboard.esm-bundler.76b8e6c2.js';
import './IsNull.09881841.js';
import './v1.93131899.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const root = ref();
    const user = reactive({
      name: "",
      metaId: ""
    });
    const loading = ref(true);
    const route = useRoute();
    onMounted(async () => {
      if (route.params.metaId && typeof route.params.metaId === "string") {
        const res = await GetMetaIdInfo(route.params.metaId);
        if (res.code === 200) {
          user.name = res.result.name;
          user.metaId = res.result.metaId;
          loading.value = false;
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(UserCenter, {
        user: unref(user),
        userInfoLoading: loading.value,
        ref_key: "root",
        ref: root
      }, {
        default: withCtx(() => [
          createVNode(_component_router_view)
        ]),
        _: 1
      }, 8, ["user", "userInfoLoading"]);
    };
  }
});
var User = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/User.vue"]]);

export { User as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci4yMTI1Nzc3My5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

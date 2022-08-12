import { _ as _export_sfc, e as defineComponent, v as reactive, aP as pagination, aq as useRoute, r as ref, cn as GetMyOnSellNftList, co as GetUserAuctionList, aY as satoshis, ce as nftDataStrGetClassify, g as openBlock, A as createElementBlock, l as createVNode, j as withCtx, k as createBaseVNode, C as unref, F as Fragment, B as renderList, m as createCommentVNode, i as createBlock, bi as isRef, E as useStore } from './index.e0dfe776.js';
import { E as ElCol, a as ElRow, S as ScreenWarp } from './ScreenWarp.9a42ffd1.js';
import { O as OrderType, c as SortType } from './enum.2d046482.js';
import { L as LoadMore } from './LoadMore.da3d3738.js';
import { I as IsNull } from './IsNull.f5e57746.js';
import { N as NFT } from './NFT.04400252.js';
import './skeleton.3d9978fa.js';
import './collapse.aabc7d70.js';
import './tag.7eae1237.js';
import './card_icon_ins.9e46280c.js';
import './detailDetach-owner.53484477.js';
import './PayConfirm.a37d9db9.js';
import './Cover.5ffd8acc.js';
import './image-viewer.bccbfe17.js';
import './logo_bsv.3a6b2418.js';
import './sandPay_title.2edd4dc3.js';
import './auction.5e6f0085.js';
import './nftDetail.2d6d654f.js';
import './offSale.c0eeaca7.js';
import './vue-countdown.esm.311ee1ba.js';
import './icon_cer_nft.95196f53.js';
import './SendNft.53b86fa5.js';

var Offsale_scss_vue_type_style_index_0_src_204947a0_scoped_true_lang = '';

const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const pagination$1 = reactive({
      ...pagination,
      pageSize: 12
    });
    const store = useStore();
    const route = useRoute();
    const nfts = reactive([]);
    const isShowNftListSkeleton = ref(true);
    const screenActiveName = reactive([]);
    const cellVal = ref(2);
    const cells = [
      { val: 1, xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
      { val: 2, xs: 12, sm: 8, md: 6, lg: 4, xl: 3 }
    ];
    const screen = reactive({
      sellType: route.query.sellType ? route.query.sellType : "1",
      orderType: OrderType.DESC,
      sortType: SortType.Time
    });
    function getMyNfts(isCover = false) {
      return new Promise(async (resolve) => {
        const fun = screen.sellType === "1" || screen.sellType === "4" ? GetMyOnSellNftList : store.state.userInfo && GetUserAuctionList;
        const params = {
          sortType: screen.sortType,
          orderType: screen.orderType,
          startPrice: screen.startPrice ? satoshis(screen.startPrice) : void 0,
          endPrice: screen.endPrice ? satoshis(screen.endPrice) : void 0
        };
        if (screen.sellType === "1" || screen.sellType === "4") {
          params.MetaId = typeof route.params.metaId === "string" ? route.params.metaId : "";
          params.Page = pagination$1.page.toString();
          params.PageSize = pagination$1.pageSize.toString();
        } else {
          params.metaId = typeof route.params.metaId === "string" ? route.params.metaId : "";
          params.page = pagination$1.page;
          params.pageSize = pagination$1.pageSize;
        }
        const res = await fun(params);
        if (res && res.code === 0) {
          if (isCover) {
            nfts.length = 0;
          }
          if (res.data.results.items.length > 0) {
            for (let i = 0; i < res.data.results.items.length; i++) {
              const nft = res.data.results.items[i];
              const classify = nftDataStrGetClassify(nft.nftDataStr);
              nfts.push({
                cover: nft.nftIcon ? nft.nftIcon : nft.icon,
                issueMetaId: nft.nftIssueMetaId ? nft.nftIssueMetaId : nft.issuerMetaId,
                issueName: nft.nftIssuer ? nft.nftIssuer : nft.issuerName,
                issueAvatarType: nft.nftIssueAvatarType ? nft.nftIssueAvatarType : nft.avatarType,
                issueAddress: nft.nftIssueAddress ? nft.nftIssueAddress : nft.issuerAddress,
                issueTxId: nft.nftIssueMetaTxId ? nft.nftIssueMetaTxId : nft.issuerMetaTxId,
                ownerMetaId: nft.nftOwnerMetaId ? nft.nftOwnerMetaId : nft.ownerMetaId,
                ownerName: nft.nftOwnerName ? nft.nftOwnerName : nft.ownerName,
                ownerAvatarType: nft.nftOwnerAvatarType ? nft.nftOwnerAvatarType : nft.ownerAvatarType,
                ownerAddress: nft.nftOwnerAddress ? nft.nftOwnerAddress : nft.ownerAddress,
                status: nft.sellState ? nft.sellState : 0,
                likeCount: nft.nftLikeCount ? nft.nftLikeCount : nft.likeCount,
                isHasLike: nft.nftHasLike ? nft.nftHasLike : nft.hasLike,
                price: nft.nftPrice ? nft.nftPrice : nft.currentBidPriceInt ? nft.currentBidPriceInt : nft.startingPriceInt,
                genesis: nft.nftGenesis ? nft.nftGenesis : nft.genesis,
                codehash: nft.nftCodehash ? nft.nftCodehash : nft.codehash,
                tokenIndex: nft.nftTokenIndex ? nft.nftTokenIndex : nft.tokenIndex,
                name: nft.nftName ? nft.nftName : nft.name,
                auctionTxId: nft.txId ? nft.txId : "",
                genesisTxId: nft.nftGenesisTxId ? nft.nftGenesisTxId : nft.genesisTxId,
                sensibleId: nft.nftSensibleId ? nft.nftSensibleId : nft.sensibleId,
                isFirstSell: typeof nft.nftIsFirstSell !== "undefined" ? nft.nftIsFirstSell : false,
                acutionEndTime: nft.endTimeStampInt ? nft.endTimeStampInt : 0,
                classify: nft.classifyList && nft.classifyList.length > 0 ? nft.classifyList[0] : classify,
                backCover: nft.nftBackIcon,
                isCompound: nft.nftHasCompound
              });
            }
          }
          const totalPages = Math.ceil(res.data.total / pagination$1.pageSize);
          if (totalPages <= pagination$1.page) {
            pagination$1.nothing = true;
          }
        }
        isShowNftListSkeleton.value = false;
        resolve();
      });
    }
    function getMore() {
      pagination$1.page++;
      getMyNfts();
    }
    function changeScreen(type, val) {
      if (type === "price") {
        screen.startPrice = val[0];
        screen.endPrice = val[1];
      } else {
        screen[type] = val;
      }
      refreshDatas();
    }
    function removeItem(nft) {
      const index = nfts.findIndex((item) => item.genesis == nft.genesis && item.codehash === nft.codehash && item.tokenIndex === nft.tokenIndex);
      if (index !== -1) {
        nfts.splice(index, 1);
      }
    }
    function refreshDatas() {
      isShowNftListSkeleton.value = true;
      pagination$1.page = 1;
      pagination$1.loading = false;
      pagination$1.nothing = false;
      getMyNfts(true);
    }
    function changeSort(params) {
      screen.sortType = params.sortType;
      screen.orderType = params.orderType;
      refreshDatas();
    }
    getMyNfts();
    return (_ctx, _cache) => {
      const _component_ElCol = ElCol;
      const _component_ElRow = ElRow;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(ScreenWarp, {
          "cell-val": cellVal.value,
          defaultSellType: unref(screen).sellType,
          isSellTypeNotClose: true,
          defaultShowScreen: false,
          sort: 0,
          onChangeScreen: changeScreen,
          onChangeSort: changeSort,
          onChangeCell: _cache[0] || (_cache[0] = (val) => cellVal.value = val),
          "active-name": unref(screenActiveName),
          onActiveNameChange: _cache[1] || (_cache[1] = (val) => isRef(screenActiveName) ? screenActiveName.value = val : screenActiveName = val)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", null, [
              createVNode(_component_ElRow, { gutter: 20 }, {
                default: withCtx(() => [
                  unref(nfts).length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(nfts), (nft) => {
                    return openBlock(), createBlock(_component_ElCol, {
                      class: "mb20",
                      xs: cells.find((item) => item.val === cellVal.value).xs,
                      sm: cells.find((item) => item.val === cellVal.value).sm,
                      md: cells.find((item) => item.val === cellVal.value).md,
                      lg: cells.find((item) => item.val === cellVal.value).lg,
                      xl: cells.find((item) => item.val === cellVal.value).xl,
                      key: nft.genesis + nft.codehash + nft.tokenIndex
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(NFT, {
                          nft,
                          key: nft.genesis + nft.codehash + nft.tokenIndex,
                          "is-skeleton": isShowNftListSkeleton.value,
                          onRemove: removeItem
                        }, null, 8, ["nft", "is-skeleton"]))
                      ]),
                      _: 2
                    }, 1032, ["xs", "sm", "md", "lg", "xl"]);
                  }), 128)) : createCommentVNode("v-if", true),
                  createCommentVNode(" null "),
                  !isShowNftListSkeleton.value && unref(nfts).length <= 0 ? (openBlock(), createBlock(IsNull, {
                    key: 1,
                    class: "flex1"
                  })) : createCommentVNode("v-if", true)
                ]),
                _: 1
              }),
              unref(nfts).length > 0 ? (openBlock(), createBlock(LoadMore, {
                key: 0,
                class: "flex1",
                pagination: unref(pagination$1),
                onGetMore: getMore
              }, null, 8, ["pagination"])) : createCommentVNode("v-if", true)
            ])
          ]),
          _: 1
        }, 8, ["cell-val", "defaultSellType", "active-name"]),
        createCommentVNode(' <NftListVue\n    :nfts="nfts"\n    :pagination="pagination"\n    :isShowSkeleton="isShowNftListSkeleton"\n    :isSelf="store.state.userInfo && store.state.userInfo.metaId === route.params.metaId"\n    @get-more="getMore"\n  /> ')
      ], 2112);
    };
  }
});
var Sale = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-204947a0"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/self/Sale.vue"]]);

export { Sale as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FsZS5mNTVhMjUxZS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
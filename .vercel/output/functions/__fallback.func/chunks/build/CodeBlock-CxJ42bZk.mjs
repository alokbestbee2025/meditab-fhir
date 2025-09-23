import { ref, mergeProps, withCtx, createTextVNode, createBlock, openBlock, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { V as VSheet } from './VSheet-BzJMmtal.mjs';
import { a as VBtn } from './VBtn-Dip3530s.mjs';
import { h as VIcon } from './loader-2bNA6OgU.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'better-sqlite3';
import 'node:url';
import 'ipx';
import 'node:crypto';
import 'vue-router';
import './VRow-zyUvS5jf.mjs';

const _sfc_main = {
  __name: "CodeBlock",
  __ssrInlineRender: true,
  setup(__props) {
    const copied = ref(false);
    async function copyCode(text) {
      try {
        await (void 0).clipboard.writeText(text);
        copied.value = true;
        setTimeout(() => copied.value = false, 1200);
      } catch (err) {
        console.error("Copy failed:", err);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VSheet, mergeProps({
        elevation: "0",
        class: "rounded-lg",
        style: { "position": "relative", "overflow-x": "auto", "font-family": "monospace", "border": "2px solid #cccccc", "margin-bottom": "3rem" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              size: "x-medium",
              icon: "",
              color: "white",
              variant: "flat",
              style: { "position": "absolute", "top": "20px", "right": "30px", "z-index": "1", "padding": "7px" },
              onClick: ($event) => {
                var _a;
                return copyCode((_a = _ctx.$refs.code) == null ? void 0 : _a.innerText);
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!copied.value) {
                    _push3(ssrRenderComponent(VIcon, { color: "primary" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi-content-copy`);
                        } else {
                          return [
                            createTextVNode("mdi-content-copy")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(VIcon, { color: "success" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi-check-circle`);
                        } else {
                          return [
                            createTextVNode("mdi-check-circle")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    !copied.value ? (openBlock(), createBlock(VIcon, {
                      key: 0,
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-content-copy")
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(VIcon, {
                      key: 1,
                      color: "success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-check-circle")
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "margin": "0", "white-space": "pre-wrap", "word-break": "break-word" })}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode(VBtn, {
                size: "x-medium",
                icon: "",
                color: "white",
                variant: "flat",
                style: { "position": "absolute", "top": "20px", "right": "30px", "z-index": "1", "padding": "7px" },
                onClick: ($event) => {
                  var _a;
                  return copyCode((_a = _ctx.$refs.code) == null ? void 0 : _a.innerText);
                }
              }, {
                default: withCtx(() => [
                  !copied.value ? (openBlock(), createBlock(VIcon, {
                    key: 0,
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-content-copy")
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(VIcon, {
                    key: 1,
                    color: "success"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-check-circle")
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode("div", {
                ref: "code",
                style: { "margin": "0", "white-space": "pre-wrap", "word-break": "break-word" }
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 512)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/CodeBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CodeBlock-CxJ42bZk.mjs.map

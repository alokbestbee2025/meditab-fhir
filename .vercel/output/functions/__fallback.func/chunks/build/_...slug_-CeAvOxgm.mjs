import { withAsyncContext, computed, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, createTextVNode, toDisplayString, isRef, ref, watch, resolveComponent, Fragment, renderList, withModifiers, toRaw, defineComponent, toRef, normalizeStyle, normalizeClass, provide, createElementVNode, inject, withDirectives, vShow, defineAsyncComponent, h, getCurrentInstance, reactive, Text, Comment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { C as pascalCase, D as kebabCase, E as destr } from '../_/nitro.mjs';
import { find, html } from 'property-information';
import { toHast } from 'minimark/hast';
import { _ as _export_sfc, q as useRoute, g as genericComponent, b as useRuntimeConfig, p as propsFactory, j as provideTheme, k as provideDefaults, h as useRender, m as makeComponentProps, l as makeThemeProps, o as pick$1, I as IconValue } from './server.mjs';
import { useRoute as useRoute$1 } from 'vue-router';
import { u as useAsyncData, q as queryCollection, a as queryCollectionNavigation } from './app-3112pY0o.mjs';
import { V as VList, a as VListItem, b as VListItemTitle, u as useGroup, c as useGroupItem, d as useBackgroundColor, e as useElevation, f as useRounded, g as VDefaultsProvider, R as Ripple, h as VIcon, i as VExpandTransition, m as makeGroupProps, j as makeRoundedProps, k as makeGroupItemProps, l as makeElevationProps } from './loader-2bNA6OgU.mjs';
import { V as VTextField, u as useLazy, m as makeLazyProps } from './VTextField-BClI15J3.mjs';
import { V as VContainer, a as VRow, b as VCol, u as useDimension, m as makeTagProps, c as makeDimensionProps } from './VRow-zyUvS5jf.mjs';
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

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  var _a;
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof ((_a = node.children) == null ? void 0 : _a.default) === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.value || node.children || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}
function unwrap(vnode, tags = []) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
function _flatUnwrap(vnodes, tags = []) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => _flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
function flatUnwrap(vnodes, tags = []) {
  if (typeof tags === "string") {
    tags = tags.split(/[,\s]/).map((tag) => tag.trim()).filter(Boolean);
  }
  if (!tags.length) {
    return vnodes;
  }
  return _flatUnwrap(vnodes, tags).reduce((acc, item) => {
    if (isText(item)) {
      if (typeof acc[acc.length - 1] === "string") {
        acc[acc.length - 1] += item.children;
      } else {
        acc.push(item.children);
      }
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}
function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    const value = get(obj, key);
    if (value !== void 0) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
function get(obj, key) {
  return key.split(".").reduce((acc, k) => acc && acc[k], obj);
}
const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const specialParentTags = ["math", "svg"];
const proseComponentMap = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map((t) => [t, `prose-${t}`]));
const dangerousTags = ["script", "base"];
const _sfc_main$5 = defineComponent({
  name: "MDCRenderer",
  props: {
    /**
     * Content to render
     */
    body: {
      type: Object,
      required: true
    },
    /**
     * Document meta data
     */
    data: {
      type: Object,
      default: () => ({})
    },
    /**
     * Class(es) to bind to the component
     */
    class: {
      type: [String, Object],
      default: void 0
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
      type: [String, Boolean],
      default: void 0
    },
    /**
     * Whether or not to render Prose components instead of HTML tags
     */
    prose: {
      type: Boolean,
      default: void 0
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
      type: Object,
      default: () => ({})
    },
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  async setup(props) {
    var _a, _b, _c;
    const app = (_b = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext) == null ? void 0 : _b.app;
    const $nuxt = app == null ? void 0 : app.$nuxt;
    const route = ($nuxt == null ? void 0 : $nuxt.$route) || ($nuxt == null ? void 0 : $nuxt._route);
    const { mdc } = ((_c = $nuxt == null ? void 0 : $nuxt.$config) == null ? void 0 : _c.public) || {};
    const tags = computed(() => {
      var _a2, _b2, _c2, _d;
      return {
        ...((_a2 = mdc == null ? void 0 : mdc.components) == null ? void 0 : _a2.prose) && props.prose !== false ? proseComponentMap : {},
        ...((_b2 = mdc == null ? void 0 : mdc.components) == null ? void 0 : _b2.map) || {},
        ...toRaw(((_d = (_c2 = props.data) == null ? void 0 : _c2.mdc) == null ? void 0 : _d.components) || {}),
        ...props.components
      };
    });
    const contentKey = computed(() => {
      var _a2;
      const components = (((_a2 = props.body) == null ? void 0 : _a2.children) || []).map((n) => n.tag || n.type).filter((t) => !htmlTags.includes(t));
      return Array.from(new Set(components)).sort().join(".");
    });
    const runtimeData = reactive({
      ...props.data
    });
    watch(() => props.data, (newData) => {
      Object.assign(runtimeData, newData);
    });
    await resolveContentComponents(props.body, { tags: tags.value });
    function updateRuntimeData(code, value) {
      const lastIndex = code.split(".").length - 1;
      return code.split(".").reduce((o, k, i) => {
        if (i == lastIndex && o) {
          o[k] = value;
          return o[k];
        }
        return typeof o === "object" ? o[k] : void 0;
      }, runtimeData);
    }
    return { tags, contentKey, route, runtimeData, updateRuntimeData };
  },
  render(ctx) {
    var _a, _b;
    const { tags, tag, body, data, contentKey, route, unwrap: unwrap2, runtimeData, updateRuntimeData } = ctx;
    if (!body) {
      return null;
    }
    const meta = { ...data, tags, $route: route, runtimeData, updateRuntimeData };
    const component = tag !== false ? resolveComponentInstance(tag || ((_a = meta.component) == null ? void 0 : _a.name) || meta.component || "div") : void 0;
    return component ? h(component, { ...(_b = meta.component) == null ? void 0 : _b.props, class: ctx.class, ...this.$attrs, key: contentKey }, { default: defaultSlotRenderer }) : defaultSlotRenderer == null ? void 0 : defaultSlotRenderer();
    function defaultSlotRenderer() {
      const defaultSlot = _renderSlots(body, h, { documentMeta: meta, parentScope: meta, resolveComponent: resolveComponentInstance });
      if (!(defaultSlot == null ? void 0 : defaultSlot.default)) {
        return null;
      }
      if (unwrap2) {
        return flatUnwrap(
          defaultSlot.default(),
          typeof unwrap2 === "string" ? unwrap2.split(" ") : ["*"]
        );
      }
      return defaultSlot.default();
    }
  }
});
function _renderNode(node, h2, options, keyInParent) {
  const { documentMeta, parentScope, resolveComponent: resolveComponent2 } = options;
  if (node.type === "text") {
    return h2(Text, node.value);
  }
  if (node.type === "comment") {
    return h2(Comment, null, node.value);
  }
  const originalTag = node.tag;
  const renderTag = findMappedTag(node, documentMeta.tags);
  if (node.tag === "binding") {
    return renderBinding(node, h2, documentMeta, parentScope);
  }
  const _resolveComponent = isUnresolvableTag(renderTag) ? (component2) => component2 : resolveComponent2;
  if (dangerousTags.includes(renderTag)) {
    return h2(
      "pre",
      { class: "mdc-renderer-dangerous-tag" },
      "<" + renderTag + ">" + nodeTextContent(node) + "</" + renderTag + ">"
    );
  }
  const component = _resolveComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  const props = propsToData(node, documentMeta);
  if (keyInParent) {
    props.key = keyInParent;
  }
  return h2(
    component,
    props,
    _renderSlots(
      node,
      h2,
      {
        documentMeta,
        parentScope: { ...parentScope, ...props },
        resolveComponent: _resolveComponent
      }
    )
  );
}
function _renderSlots(node, h2, options) {
  const { documentMeta, parentScope, resolveComponent: resolveComponent2 } = options;
  const children = node.children || [];
  const slotNodes = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].children.push(node2);
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = data[slotName] || { props: {}, children: [] };
    if (node2.type === "element") {
      data[slotName].props = node2.props;
      data[slotName].children.push(...node2.children || []);
    }
    return data;
  }, {
    [DEFAULT_SLOT]: { props: {}, children: [] }
  });
  const slots = Object.entries(slotNodes).reduce((slots2, [name, { props, children: children2 }]) => {
    if (!children2.length) {
      return slots2;
    }
    slots2[name] = (data = {}) => {
      const scopedProps = pick(data, Object.keys(props || {}));
      let vNodes = children2.map((child, index) => {
        var _a;
        return _renderNode(
          child,
          h2,
          {
            documentMeta,
            parentScope: { ...parentScope, ...scopedProps },
            resolveComponent: resolveComponent2
          },
          String(((_a = child.props) == null ? void 0 : _a.key) || index)
        );
      });
      if (props == null ? void 0 : props.unwrap) {
        vNodes = flatUnwrap(vNodes, props.unwrap);
      }
      return mergeTextNodes(vNodes);
    };
    return slots2;
  }, {});
  return slots;
}
function renderBinding(node, h2, documentMeta, parentScope = {}) {
  var _a, _b, _c;
  const data = {
    ...documentMeta.runtimeData,
    ...parentScope,
    $document: documentMeta,
    $doc: documentMeta
  };
  const splitter = /\.|\[(\d+)\]/;
  const keys = (_a = node.props) == null ? void 0 : _a.value.trim().split(splitter).filter(Boolean);
  const value = keys.reduce((data2, key) => {
    if (data2 && key in data2) {
      if (typeof data2[key] === "function") {
        return data2[key]();
      } else {
        return data2[key];
      }
    }
    return void 0;
  }, data);
  const defaultValue = (_b = node.props) == null ? void 0 : _b.defaultValue;
  return h2(Text, (_c = value != null ? value : defaultValue) != null ? _c : "");
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key)) {
      return propsToDataRxModel(key, value, data, documentMeta, { native: nativeInputs.includes(tag) });
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = find(html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta, { native }) {
  var _a;
  const propName = ((_a = key.match(/^v-model:([^=]+)/)) == null ? void 0 : _a[1]) || "modelValue";
  const field = native ? "value" : propName;
  const event = native ? "onInput" : `onUpdate:${propName}`;
  data[field] = evalInContext(value, documentMeta.runtimeData);
  data[event] = (e) => {
    var _a2;
    documentMeta.updateRuntimeData(value, native ? (_a2 = e.target) == null ? void 0 : _a2.value : e);
  };
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveComponentInstance = (component) => {
  if (typeof component === "string") {
    if (htmlTags.includes(component)) {
      return component;
    }
    const _component = resolveComponent(pascalCase(component), false);
    if (!component || (_component == null ? void 0 : _component.name) === "AsyncComponentWrapper") {
      return _component;
    }
    if (typeof _component === "string") {
      return _component;
    }
    if ("setup" in _component) {
      return defineAsyncComponent(() => new Promise((resolve) => resolve(_component)));
    }
    return _component;
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? destr(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
function isUnresolvableTag(tag) {
  return specialParentTags.includes(tag);
}
function mergeTextNodes(nodes) {
  const mergedNodes = [];
  for (const node of nodes) {
    const previousNode = mergedNodes[mergedNodes.length - 1];
    if (node.type === Text && (previousNode == null ? void 0 : previousNode.type) === Text) {
      previousNode.children = previousNode.children + node.children;
    } else {
      mergedNodes.push(node);
    }
  }
  return mergedNodes;
}
async function resolveContentComponents(body, meta) {
  if (!body) {
    return;
  }
  const components = Array.from(new Set(loadComponents(body, meta)));
  await Promise.all(components.map(async (c) => {
    if ((c == null ? void 0 : c.render) || (c == null ? void 0 : c.ssrRender) || (c == null ? void 0 : c.__ssrInlineRender)) {
      return;
    }
    const resolvedComponent = resolveComponentInstance(c);
    if ((resolvedComponent == null ? void 0 : resolvedComponent.__asyncLoader) && !resolvedComponent.__asyncResolved) {
      await resolvedComponent.__asyncLoader();
    }
  }));
  function loadComponents(node, documentMeta) {
    const tag = node.tag;
    if (node.type === "text" || tag === "binding" || node.type === "comment") {
      return [];
    }
    const renderTag = findMappedTag(node, documentMeta.tags);
    if (isUnresolvableTag(renderTag)) {
      return [];
    }
    const components2 = [];
    if (node.type !== "root" && !htmlTags.includes(renderTag)) {
      components2.push(renderTag);
    }
    for (const child of node.children || []) {
      components2.push(...loadComponents(child, documentMeta));
    }
    return components2;
  }
}
function findMappedTag(node, tags) {
  var _a;
  const tag = node.tag;
  if (!tag || typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) !== "undefined") {
    return tag;
  }
  return tags[tag] || tags[pascalCase(tag)] || tags[kebabCase(node.tag)] || tag;
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const CodeBlock = () => import('./CodeBlock-CxJ42bZk.mjs');
const globalComponents = ["ProseA", "ProseBlockquote", "ProseCode", "ProseEm", "ProseH1", "ProseH2", "ProseH3", "ProseH4", "ProseH5", "ProseH6", "ProseHr", "ProseImg", "ProseLi", "ProseOl", "ProseP", "ProsePre", "ProseScript", "ProseStrong", "ProseTable", "ProseTbody", "ProseTd", "ProseTh", "ProseThead", "ProseTr", "ProseUl"];
const localComponents = ["CodeBlock"];
const virtual_nuxt_C_3A_2FUsers_2Faloks_2FDesktop_2FmeditabFhir_2F_nuxt_2Fcontent_2Fcomponents = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CodeBlock,
  globalComponents,
  localComponents
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "ContentRenderer",
  __ssrInlineRender: true,
  props: {
    /**
     * Content to render
     */
    value: {
      type: Object,
      required: true
    },
    /**
     * Render only the excerpt
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
      type: String,
      default: "div"
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      default: () => ({})
    },
    /**
     * Whether or not to render Prose components instead of HTML tags
     */
    prose: {
      type: Boolean,
      default: void 0
    },
    /**
     * Root tag to use for rendering
     */
    class: {
      type: [String, Object],
      default: void 0
    },
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(__props) {
    const renderFunctions = ["render", "ssrRender", "__ssrInlineRender"];
    const props = __props;
    const debug = false;
    const body = computed(() => {
      let body2 = props.value.body || props.value;
      if (props.excerpt && props.value.excerpt) {
        body2 = props.value.excerpt;
      }
      if (body2.type === "minimal" || body2.type === "minimark") {
        return toHast({ type: "minimark", value: body2.value });
      }
      return body2;
    });
    const isEmpty = computed(() => {
      var _a, _b;
      return !((_b = (_a = body.value) == null ? void 0 : _a.children) == null ? void 0 : _b.length);
    });
    const data = computed(() => {
      const { body: body2, excerpt, ...data2 } = props.value;
      return {
        ...data2,
        ...props.data
      };
    });
    const proseComponentMap2 = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map((t) => [t, `prose-${t}`]));
    const { mdc } = useRuntimeConfig().public || {};
    const tags = computed(() => {
      var _a, _b, _c, _d;
      return {
        ...((_a = mdc == null ? void 0 : mdc.components) == null ? void 0 : _a.prose) && props.prose !== false ? proseComponentMap2 : {},
        ...((_b = mdc == null ? void 0 : mdc.components) == null ? void 0 : _b.map) || {},
        ...toRaw(((_d = (_c = props.data) == null ? void 0 : _c.mdc) == null ? void 0 : _d.components) || {}),
        ...props.components
      };
    });
    const componentsMap = computed(() => {
      return body.value ? resolveContentComponents2(body.value, { tags: tags.value }) : {};
    });
    function resolveVueComponent(component) {
      let _component = component;
      if (typeof component === "string") {
        if (htmlTags.includes(component)) {
          return component;
        }
        if (globalComponents.includes(pascalCase(component))) {
          _component = resolveComponent(component, false);
        } else if (localComponents.includes(pascalCase(component))) {
          const loader = () => {
            return Promise.resolve().then(() => virtual_nuxt_C_3A_2FUsers_2Faloks_2FDesktop_2FmeditabFhir_2F_nuxt_2Fcontent_2Fcomponents).then((m) => {
              const comp = m[pascalCase(component)];
              return comp ? comp() : void 0;
            });
          };
          _component = defineAsyncComponent(loader);
        }
        if (typeof _component === "string") {
          return _component;
        }
      }
      if (!_component) {
        return _component;
      }
      const componentObject = _component;
      if ("__asyncLoader" in componentObject) {
        return componentObject;
      }
      if ("setup" in componentObject) {
        return defineAsyncComponent(() => Promise.resolve(componentObject));
      }
      return componentObject;
    }
    function resolveContentComponents2(body2, meta) {
      if (!body2) {
        return;
      }
      const components = Array.from(new Set(loadComponents(body2, meta)));
      const result = {};
      for (const [tag, component] of components) {
        if (result[tag]) {
          continue;
        }
        if (typeof component === "object" && renderFunctions.some((fn) => Object.hasOwnProperty.call(component, fn))) {
          result[tag] = component;
          continue;
        }
        result[tag] = resolveVueComponent(component);
      }
      return result;
    }
    function loadComponents(node, documentMeta) {
      const tag = node.tag;
      if (node.type === "text" || tag === "binding" || node.type === "comment") {
        return [];
      }
      const renderTag = findMappedTag2(node, documentMeta.tags);
      const components2 = [];
      if (node.type !== "root" && !htmlTags.includes(renderTag)) {
        components2.push([tag, renderTag]);
      }
      for (const child of node.children || []) {
        components2.push(...loadComponents(child, documentMeta));
      }
      return components2;
    }
    function findMappedTag2(node, tags2) {
      var _a;
      const tag = node.tag;
      if (!tag || typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) !== "undefined") {
        return tag;
      }
      return tags2[tag] || tags2[pascalCase(tag)] || tags2[kebabCase(node.tag)] || tag;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (!isEmpty.value) {
        _push(ssrRenderComponent(_sfc_main$5, mergeProps({
          body: body.value,
          data: data.value,
          class: props.class,
          tag: props.tag,
          prose: props.prose,
          unwrap: props.unwrap,
          components: componentsMap.value,
          "data-content-id": unref(debug) ? __props.value.id : void 0
        }, _attrs), null, _parent));
      } else {
        ssrRenderSlot(_ctx.$slots, "empty", {
          body: body.value,
          data: data.value,
          dataContentId: unref(debug) ? __props.value.id : void 0
        }, null, _push, _parent);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "TocContent",
  __ssrInlineRender: true,
  props: {
    toc: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const activeId = ref(null);
    const flatToc = computed(() => {
      const flatten = (items) => items.flatMap((item) => [item, ...item.children || []]);
      return flatten(props.toc);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "toc-container" }, _attrs))} data-v-6ae522d4><ul data-v-6ae522d4><!--[-->`);
      ssrRenderList(unref(flatToc), (link) => {
        _push(`<li class="${ssrRenderClass({ active: unref(activeId) === link.id })}" data-v-6ae522d4><a${ssrRenderAttr("href", "#" + link.id)} data-v-6ae522d4>${ssrInterpolate(link.text)}</a></li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TocContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TocContent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6ae522d4"]]);
const query = ref("");
function useDocSearch() {
  return { query };
}
const VExpansionPanelSymbol = Symbol.for("vuetify:v-expansion-panel");
const makeVExpansionPanelTextProps = propsFactory({
  ...makeComponentProps(),
  ...makeLazyProps()
}, "VExpansionPanelText");
const VExpansionPanelText = genericComponent()({
  name: "VExpansionPanelText",
  props: makeVExpansionPanelTextProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, expansionPanel.isSelected);
    useRender(() => createVNode(VExpandTransition, {
      "onAfterLeave": onAfterLeave
    }, {
      default: () => {
        var _a;
        return [withDirectives(createElementVNode("div", {
          "class": normalizeClass(["v-expansion-panel-text", props.class]),
          "style": normalizeStyle(props.style)
        }, [slots.default && hasContent.value && createElementVNode("div", {
          "class": "v-expansion-panel-text__wrapper"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]), [[vShow, expansionPanel.isSelected.value]])];
      }
    }));
    return {};
  }
});
const makeVExpansionPanelTitleProps = propsFactory({
  color: String,
  expandIcon: {
    type: IconValue,
    default: "$expand"
  },
  collapseIcon: {
    type: IconValue,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: false
  },
  readonly: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VExpansionPanelTitle");
const VExpansionPanelTitle = genericComponent()({
  name: "VExpansionPanelTitle",
  directives: {
    vRipple: Ripple
  },
  props: makeVExpansionPanelTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      dimensionStyles
    } = useDimension(props);
    const slotProps = computed(() => ({
      collapseIcon: props.collapseIcon,
      disabled: expansionPanel.disabled.value,
      expanded: expansionPanel.isSelected.value,
      expandIcon: props.expandIcon,
      readonly: props.readonly
    }));
    const icon = toRef(() => expansionPanel.isSelected.value ? props.collapseIcon : props.expandIcon);
    useRender(() => {
      var _a;
      return withDirectives(createElementVNode("button", {
        "class": normalizeClass(["v-expansion-panel-title", {
          "v-expansion-panel-title--active": expansionPanel.isSelected.value,
          "v-expansion-panel-title--focusable": props.focusable,
          "v-expansion-panel-title--static": props.static
        }, backgroundColorClasses.value, props.class]),
        "style": normalizeStyle([backgroundColorStyles.value, dimensionStyles.value, props.style]),
        "type": "button",
        "tabindex": expansionPanel.disabled.value ? -1 : void 0,
        "disabled": expansionPanel.disabled.value,
        "aria-expanded": expansionPanel.isSelected.value,
        "onClick": !props.readonly ? expansionPanel.toggle : void 0
      }, [createElementVNode("span", {
        "class": "v-expansion-panel-title__overlay"
      }, null), (_a = slots.default) == null ? void 0 : _a.call(slots, slotProps.value), !props.hideActions && createVNode(VDefaultsProvider, {
        "defaults": {
          VIcon: {
            icon: icon.value
          }
        }
      }, {
        default: () => {
          var _a2, _b;
          return [createElementVNode("span", {
            "class": "v-expansion-panel-title__icon"
          }, [(_b = (_a2 = slots.actions) == null ? void 0 : _a2.call(slots, slotProps.value)) != null ? _b : createVNode(VIcon, null, null)])];
        }
      })]), [[Ripple, props.ripple]]);
    });
    return {};
  }
});
const makeVExpansionPanelProps = propsFactory({
  title: String,
  text: String,
  bgColor: String,
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeVExpansionPanelTitleProps(),
  ...makeVExpansionPanelTextProps()
}, "VExpansionPanel");
const VExpansionPanel = genericComponent()({
  name: "VExpansionPanel",
  props: makeVExpansionPanelProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const groupItem = useGroupItem(props, VExpansionPanelSymbol);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const isDisabled = toRef(() => (groupItem == null ? void 0 : groupItem.disabled.value) || props.disabled);
    const selectedIndices = computed(() => groupItem.group.items.value.reduce((arr, item, index) => {
      if (groupItem.group.selected.value.includes(item.id)) arr.push(index);
      return arr;
    }, []));
    const isBeforeSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === 1);
    });
    const isAfterSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === -1);
    });
    provide(VExpansionPanelSymbol, groupItem);
    useRender(() => {
      const hasText = !!(slots.text || props.text);
      const hasTitle = !!(slots.title || props.title);
      const expansionPanelTitleProps = VExpansionPanelTitle.filterProps(props);
      const expansionPanelTextProps = VExpansionPanelText.filterProps(props);
      return createVNode(props.tag, {
        "class": normalizeClass(["v-expansion-panel", {
          "v-expansion-panel--active": groupItem.isSelected.value,
          "v-expansion-panel--before-active": isBeforeSelected.value,
          "v-expansion-panel--after-active": isAfterSelected.value,
          "v-expansion-panel--disabled": isDisabled.value
        }, roundedClasses.value, backgroundColorClasses.value, props.class]),
        "style": normalizeStyle([backgroundColorStyles.value, props.style])
      }, {
        default: () => [createElementVNode("div", {
          "class": normalizeClass(["v-expansion-panel__shadow", ...elevationClasses.value])
        }, null), createVNode(VDefaultsProvider, {
          "defaults": {
            VExpansionPanelTitle: {
              ...expansionPanelTitleProps
            },
            VExpansionPanelText: {
              ...expansionPanelTextProps
            }
          }
        }, {
          default: () => {
            var _a;
            return [hasTitle && createVNode(VExpansionPanelTitle, {
              "key": "title"
            }, {
              default: () => [slots.title ? slots.title() : props.title]
            }), hasText && createVNode(VExpansionPanelText, {
              "key": "text"
            }, {
              default: () => [slots.text ? slots.text() : props.text]
            }), (_a = slots.default) == null ? void 0 : _a.call(slots)];
          }
        })]
      });
    });
    return {
      groupItem
    };
  }
});
const allowedVariants = ["default", "accordion", "inset", "popout"];
const makeVExpansionPanelsProps = propsFactory({
  flat: Boolean,
  ...makeGroupProps(),
  ...pick$1(makeVExpansionPanelProps(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...makeThemeProps(),
  ...makeComponentProps(),
  ...makeTagProps(),
  variant: {
    type: String,
    default: "default",
    validator: (v) => allowedVariants.includes(v)
  }
}, "VExpansionPanels");
const VExpansionPanels = genericComponent()({
  name: "VExpansionPanels",
  props: makeVExpansionPanelsProps(),
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      next,
      prev
    } = useGroup(props, VExpansionPanelSymbol);
    const {
      themeClasses
    } = provideTheme(props);
    const variantClass = toRef(() => props.variant && `v-expansion-panels--variant-${props.variant}`);
    provideDefaults({
      VExpansionPanel: {
        bgColor: toRef(() => props.bgColor),
        collapseIcon: toRef(() => props.collapseIcon),
        color: toRef(() => props.color),
        eager: toRef(() => props.eager),
        elevation: toRef(() => props.elevation),
        expandIcon: toRef(() => props.expandIcon),
        focusable: toRef(() => props.focusable),
        hideActions: toRef(() => props.hideActions),
        readonly: toRef(() => props.readonly),
        ripple: toRef(() => props.ripple),
        rounded: toRef(() => props.rounded),
        static: toRef(() => props.static)
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-expansion-panels", {
        "v-expansion-panels--flat": props.flat,
        "v-expansion-panels--tile": props.tile
      }, themeClasses.value, variantClass.value, props.class]),
      "style": normalizeStyle(props.style)
    }, {
      default: () => {
        var _a;
        return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
          prev,
          next
        })];
      }
    }));
    return {
      next,
      prev
    };
  }
});
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const openPanels = ref([]);
    const route = useRoute$1();
    const { data: nav } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "docs-nav",
      () => queryCollectionNavigation("docs")
    )), __temp = await __temp, __restore(), __temp);
    const navBar = computed(() => {
      var _a, _b;
      const items = ((_b = (_a = nav.value) == null ? void 0 : _a[0]) == null ? void 0 : _b.children) || [];
      items.sort(
        (a, b) => (a.title || "").localeCompare(b.title || "", void 0, { sensitivity: "base" })
      );
      items.forEach((item) => {
        if (Array.isArray(item.children)) {
          item.children.sort(
            (a, b) => (a.title || "").localeCompare(b.title || "", void 0, { sensitivity: "base" })
          );
        }
      });
      return items;
    });
    const { query: query2 } = useDocSearch();
    const filteredNav = computed(() => {
      if (!query2.value) return navBar.value;
      return navBar.value.filter(
        (item) => {
          var _a;
          return (_a = item.title) == null ? void 0 : _a.toLowerCase().includes(query2.value.toLowerCase());
        }
      );
    });
    watch(
      () => route.path,
      (currentPath) => {
        const parentIndex = filteredNav.value.findIndex(
          (item) => {
            var _a;
            return (_a = item.children) == null ? void 0 : _a.some((child) => child.path === currentPath);
          }
        );
        if (parentIndex !== -1) {
          const panels = Array.isArray(openPanels.value) ? openPanels.value : [openPanels.value].filter((v) => v != null);
          if (!panels.includes(parentIndex)) {
            panels.push(parentIndex);
            openPanels.value = panels;
          }
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VList, {
        density: "compact",
        nav: "",
        class: "pa-0 mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(filteredNav.value.filter(
              (i) => !i.children || i.children.length === 0
            ), (item) => {
              _push2(ssrRenderComponent(VListItem, {
                key: item.path,
                to: item.path,
                link: "",
                exact: "",
                class: "fhir-navbar-item"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VListItemTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(`${ssrInterpolate(((_a = item.title) == null ? void 0 : _a.toUpperCase()) || "(UNTITLED)")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(((_b = item.title) == null ? void 0 : _b.toUpperCase()) || "(UNTITLED)"), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString(((_a = item.title) == null ? void 0 : _a.toUpperCase()) || "(UNTITLED)"), 1)
                          ];
                        }),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(filteredNav.value.filter(
                (i) => !i.children || i.children.length === 0
              ), (item) => {
                return openBlock(), createBlock(VListItem, {
                  key: item.path,
                  to: item.path,
                  link: "",
                  exact: "",
                  class: "fhir-navbar-item"
                }, {
                  default: withCtx(() => [
                    createVNode(VListItemTitle, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString(((_a = item.title) == null ? void 0 : _a.toUpperCase()) || "(UNTITLED)"), 1)
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VExpansionPanels, {
        modelValue: openPanels.value,
        "onUpdate:modelValue": ($event) => openPanels.value = $event,
        class: "left-fixed-menus"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(filteredNav.value.filter(
              (i) => i.children && i.children.length > 0
            ), (item) => {
              _push2(ssrRenderComponent(VExpansionPanel, {
                class: "mb-2",
                key: item.path
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VExpansionPanelTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(`${ssrInterpolate(((_a = item.title) == null ? void 0 : _a.toUpperCase()) || "(UNTITLED GROUP)")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(((_b = item.title) == null ? void 0 : _b.toUpperCase()) || "(UNTITLED GROUP)"), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VExpansionPanelText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="d-flex flex-column"${_scopeId3}><!--[-->`);
                          ssrRenderList(item.children, (child) => {
                            _push4(ssrRenderComponent(_component_RouterLink, {
                              key: child.path,
                              to: child.path,
                              class: "inner-ac-item",
                              onClick: () => {
                              }
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a, _b;
                                if (_push5) {
                                  _push5(`${ssrInterpolate(((_a = child.title) == null ? void 0 : _a.toUpperCase()) || "(UNTITLED)")}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(((_b = child.title) == null ? void 0 : _b.toUpperCase()) || "(UNTITLED)"), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex flex-column" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                return openBlock(), createBlock(_component_RouterLink, {
                                  key: child.path,
                                  to: child.path,
                                  class: "inner-ac-item",
                                  onClick: withModifiers(() => {
                                  }, ["stop"])
                                }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createTextVNode(toDisplayString(((_a = child.title) == null ? void 0 : _a.toUpperCase()) || "(UNTITLED)"), 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1032, ["to", "onClick"]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VExpansionPanelTitle, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString(((_a = item.title) == null ? void 0 : _a.toUpperCase()) || "(UNTITLED GROUP)"), 1)
                          ];
                        }),
                        _: 2
                      }, 1024),
                      createVNode(VExpansionPanelText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                              return openBlock(), createBlock(_component_RouterLink, {
                                key: child.path,
                                to: child.path,
                                class: "inner-ac-item",
                                onClick: withModifiers(() => {
                                }, ["stop"])
                              }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createTextVNode(toDisplayString(((_a = child.title) == null ? void 0 : _a.toUpperCase()) || "(UNTITLED)"), 1)
                                  ];
                                }),
                                _: 2
                              }, 1032, ["to", "onClick"]);
                            }), 128))
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(filteredNav.value.filter(
                (i) => i.children && i.children.length > 0
              ), (item) => {
                return openBlock(), createBlock(VExpansionPanel, {
                  class: "mb-2",
                  key: item.path
                }, {
                  default: withCtx(() => [
                    createVNode(VExpansionPanelTitle, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString(((_a = item.title) == null ? void 0 : _a.toUpperCase()) || "(UNTITLED GROUP)"), 1)
                        ];
                      }),
                      _: 2
                    }, 1024),
                    createVNode(VExpansionPanelText, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-column" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                            return openBlock(), createBlock(_component_RouterLink, {
                              key: child.path,
                              to: child.path,
                              class: "inner-ac-item",
                              onClick: withModifiers(() => {
                              }, ["stop"])
                            }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createTextVNode(toDisplayString(((_a = child.title) == null ? void 0 : _a.toUpperCase()) || "(UNTITLED)"), 1)
                                ];
                              }),
                              _: 2
                            }, 1032, ["to", "onClick"]);
                          }), 128))
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "SearchBar",
  __ssrInlineRender: true,
  setup(__props) {
    const { query: query2 } = useDocSearch();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTextField, mergeProps({
        modelValue: unref(query2),
        "onUpdate:modelValue": ($event) => isRef(query2) ? query2.value = $event : null,
        label: "Search docs",
        "append-inner-icon": "mdi-magnify",
        variant: "solo",
        density: "compact",
        "hide-details": "",
        clearable: "",
        class: "custom-search-field",
        style: { "border": "2px solid #ccc", "background-color": "transparent", "border-radius": "4px" }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slugArray = route.params.slug || [];
    const slug = Array.isArray(slugArray) ? slugArray.join("/") : slugArray;
    const { data: doc } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `doc-${slug}`,
      () => queryCollection("docs").path(`/docs/${slug}`).first()
    )), __temp = await __temp, __restore(), __temp);
    const toc = computed(() => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = doc.value) == null ? void 0 : _a.body) == null ? void 0 : _b.toc) == null ? void 0 : _c.links) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$4;
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "markdown-content pa-0",
        style: { "width": "100%" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "2",
                    class: "left-sidebar-col d-none d-lg-block"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="sticky-holder" data-v-7d8243c7${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$1, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$2, {
                          class: "left-sidebar",
                          toc: unref(toc)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "sticky-holder" }, [
                            createVNode(_sfc_main$1),
                            createVNode(_sfc_main$2, {
                              class: "left-sidebar",
                              toc: unref(toc)
                            }, null, 8, ["toc"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "10"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(doc)) {
                          _push4(ssrRenderComponent(VRow, { class: "px-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  lg: "9",
                                  style: { "padding-bottom": "10%" },
                                  class: "markdown-rendered-content"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    var _a, _b;
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_ContentRenderer, {
                                        value: (_a = unref(doc).body) != null ? _a : unref(doc)
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_ContentRenderer, {
                                          value: (_b = unref(doc).body) != null ? _b : unref(doc)
                                        }, null, 8, ["value"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  lg: "3",
                                  class: "toc-column-wrapper"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="right-sidebar" data-v-7d8243c7${_scopeId5}>`);
                                      _push6(ssrRenderComponent(TocContent, { toc: unref(toc) }, null, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "right-sidebar" }, [
                                          createVNode(TocContent, { toc: unref(toc) }, null, 8, ["toc"])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "9",
                                    style: { "padding-bottom": "10%" },
                                    class: "markdown-rendered-content"
                                  }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createVNode(_component_ContentRenderer, {
                                          value: (_a = unref(doc).body) != null ? _a : unref(doc)
                                        }, null, 8, ["value"])
                                      ];
                                    }),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "3",
                                    class: "toc-column-wrapper"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "right-sidebar" }, [
                                        createVNode(TocContent, { toc: unref(toc) }, null, 8, ["toc"])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<div data-v-7d8243c7${_scopeId3}> No document found for <code data-v-7d8243c7${_scopeId3}>${ssrInterpolate(unref(slug))}</code></div>`);
                        }
                      } else {
                        return [
                          unref(doc) ? (openBlock(), createBlock(VRow, {
                            key: 0,
                            class: "px-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                lg: "9",
                                style: { "padding-bottom": "10%" },
                                class: "markdown-rendered-content"
                              }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createVNode(_component_ContentRenderer, {
                                      value: (_a = unref(doc).body) != null ? _a : unref(doc)
                                    }, null, 8, ["value"])
                                  ];
                                }),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                lg: "3",
                                class: "toc-column-wrapper"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "right-sidebar" }, [
                                    createVNode(TocContent, { toc: unref(toc) }, null, 8, ["toc"])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock("div", { key: 1 }, [
                            createTextVNode(" No document found for "),
                            createVNode("code", null, toDisplayString(unref(slug)), 1)
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "2",
                      class: "left-sidebar-col d-none d-lg-block"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "sticky-holder" }, [
                          createVNode(_sfc_main$1),
                          createVNode(_sfc_main$2, {
                            class: "left-sidebar",
                            toc: unref(toc)
                          }, null, 8, ["toc"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      lg: "10"
                    }, {
                      default: withCtx(() => [
                        unref(doc) ? (openBlock(), createBlock(VRow, {
                          key: 0,
                          class: "px-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              lg: "9",
                              style: { "padding-bottom": "10%" },
                              class: "markdown-rendered-content"
                            }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_ContentRenderer, {
                                    value: (_a = unref(doc).body) != null ? _a : unref(doc)
                                  }, null, 8, ["value"])
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              lg: "3",
                              class: "toc-column-wrapper"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "right-sidebar" }, [
                                  createVNode(TocContent, { toc: unref(toc) }, null, 8, ["toc"])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock("div", { key: 1 }, [
                          createTextVNode(" No document found for "),
                          createVNode("code", null, toDisplayString(unref(slug)), 1)
                        ]))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "2",
                    class: "left-sidebar-col d-none d-lg-block"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "sticky-holder" }, [
                        createVNode(_sfc_main$1),
                        createVNode(_sfc_main$2, {
                          class: "left-sidebar",
                          toc: unref(toc)
                        }, null, 8, ["toc"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    lg: "10"
                  }, {
                    default: withCtx(() => [
                      unref(doc) ? (openBlock(), createBlock(VRow, {
                        key: 0,
                        class: "px-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            lg: "9",
                            style: { "padding-bottom": "10%" },
                            class: "markdown-rendered-content"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(_component_ContentRenderer, {
                                  value: (_a = unref(doc).body) != null ? _a : unref(doc)
                                }, null, 8, ["value"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            lg: "3",
                            class: "toc-column-wrapper"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "right-sidebar" }, [
                                createVNode(TocContent, { toc: unref(toc) }, null, 8, ["toc"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock("div", { key: 1 }, [
                        createTextVNode(" No document found for "),
                        createVNode("code", null, toDisplayString(unref(slug)), 1)
                      ]))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/docs/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d8243c7"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-CeAvOxgm.mjs.map

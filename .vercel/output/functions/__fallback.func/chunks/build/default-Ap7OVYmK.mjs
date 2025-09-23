import { b as buildAssetsURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-7lWKEjwk.mjs';
import { ref, computed, withAsyncContext, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, mergeProps, renderSlot, toRef, watchEffect, shallowRef, watch, nextTick, readonly, createElementVNode, Transition, normalizeStyle, normalizeClass, onScopeDispose, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useAsyncData, a as queryCollectionNavigation } from './app-3112pY0o.mjs';
import { _ as _export_sfc, al as VApp, g as genericComponent, p as propsFactory, J as useProxiedModel, a1 as useToggleScope, ai as useLayoutItem, h as useRender, f as useRtl, j as provideTheme, a5 as useDisplay, k as provideDefaults, ak as useLayout, a6 as useResizeObserver, e as convertToUnit, aj as makeLayoutItemProps, Z as clamp, l as makeThemeProps, a4 as makeDisplayProps, m as makeComponentProps } from './server.mjs';
import { V as VContainer, a as VRow, b as VCol, u as useDimension, m as makeTagProps, c as makeDimensionProps } from './VRow-zyUvS5jf.mjs';
import { V as VList, a as VListItem, b as VListItemTitle, Z as VListGroup, _ as useSsrBoot, s as useBorder, d as useBackgroundColor, e as useElevation, f as useRounded, B as useRouter, $ as toPhysical, a0 as VImg, g as VDefaultsProvider, i as VExpandTransition, j as makeRoundedProps, l as makeElevationProps, G as makeBorderProps } from './loader-2bNA6OgU.mjs';
import { a as VBtn, b as makeVBtnProps } from './VBtn-Dip3530s.mjs';
import { u as useScopeId, a as useDelay, m as makeDelayProps } from './scopeId-vwGQsgNJ.mjs';
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

const _imports_0 = "" + buildAssetsURL("logo.B3faB_hu.png");
const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VToolbarTitle");
const VToolbarTitle = genericComponent()({
  name: "VToolbarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return createVNode(props.tag, {
        "class": normalizeClass(["v-toolbar-title", props.class]),
        "style": normalizeStyle(props.style)
      }, {
        default: () => {
          var _a;
          return [hasText && createElementVNode("div", {
            "class": "v-toolbar-title__placeholder"
          }, [slots.text ? slots.text() : props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)])];
        }
      });
    });
    return {};
  }
});
const allowedDensities = [null, "prominent", "default", "comfortable", "compact"];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  },
  extended: {
    type: Boolean,
    default: null
  },
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeThemeProps()
}, "VToolbar");
const VToolbar = genericComponent()({
  name: "VToolbar",
  props: makeVToolbarProps(),
  setup(props, _ref) {
    var _a;
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const isExtended = shallowRef(props.extended === null ? !!((_a = slots.extension) == null ? void 0 : _a.call(slots)) : props.extended);
    const contentHeight = computed(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
    const extensionHeight = computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a2;
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = (_a2 = slots.extension) == null ? void 0 : _a2.call(slots);
      isExtended.value = props.extended === null ? !!extension : props.extended;
      return createVNode(props.tag, {
        "class": normalizeClass(["v-toolbar", {
          "v-toolbar--absolute": props.absolute,
          "v-toolbar--collapse": props.collapse,
          "v-toolbar--flat": props.flat,
          "v-toolbar--floating": props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class]),
        "style": normalizeStyle([backgroundColorStyles.value, props.style])
      }, {
        default: () => [hasImage && createElementVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => {
            var _a3, _b, _c;
            return [createElementVNode("div", {
              "class": "v-toolbar__content",
              "style": {
                height: convertToUnit(contentHeight.value)
              }
            }, [slots.prepend && createElementVNode("div", {
              "class": "v-toolbar__prepend"
            }, [(_a3 = slots.prepend) == null ? void 0 : _a3.call(slots)]), hasTitle && createVNode(VToolbarTitle, {
              "key": "title",
              "text": props.title
            }, {
              text: slots.title
            }), (_b = slots.default) == null ? void 0 : _b.call(slots), slots.append && createElementVNode("div", {
              "class": "v-toolbar__append"
            }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])])];
          }
        }), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && createElementVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});
const makeScrollProps = propsFactory({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function useScroll(props) {
  let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll
  } = args;
  let previousScroll = 0;
  let previousScrollHeight = 0;
  const target = ref(null);
  const currentScroll = shallowRef(0);
  const savedScroll = shallowRef(0);
  const currentThreshold = shallowRef(0);
  const isScrollActive = shallowRef(false);
  const isScrollingUp = shallowRef(false);
  const scrollThreshold = computed(() => {
    return Number(props.scrollThreshold);
  });
  const scrollRatio = computed(() => {
    return clamp((scrollThreshold.value - currentScroll.value) / scrollThreshold.value || 0);
  });
  const onScroll = () => {
    const targetEl = target.value;
    if (!targetEl || canScroll && !canScroll.value) return;
    previousScroll = currentScroll.value;
    currentScroll.value = "window" in targetEl ? targetEl.pageYOffset : targetEl.scrollTop;
    const currentScrollHeight = targetEl instanceof Window ? (void 0).documentElement.scrollHeight : targetEl.scrollHeight;
    if (previousScrollHeight !== currentScrollHeight) {
      previousScrollHeight = currentScrollHeight;
      return;
    }
    isScrollingUp.value = currentScroll.value < previousScroll;
    currentThreshold.value = Math.abs(currentScroll.value - scrollThreshold.value);
  };
  watch(isScrollingUp, () => {
    savedScroll.value = savedScroll.value || currentScroll.value;
  });
  watch(isScrollActive, () => {
    savedScroll.value = 0;
  });
  canScroll && watch(canScroll, onScroll, {
    immediate: true
  });
  return {
    scrollThreshold,
    currentScroll,
    currentThreshold,
    isScrollActive,
    scrollRatio,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp,
    savedScroll
  };
}
const makeVAppBarProps = propsFactory({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom"].includes(value)
  },
  ...makeVToolbarProps(),
  ...makeLayoutItemProps(),
  ...makeScrollProps(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar");
const VAppBar = genericComponent()({
  name: "VAppBar",
  props: makeVAppBarProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vToolbarRef = ref();
    const isActive = useProxiedModel(props, "modelValue");
    const scrollBehavior = computed(() => {
      var _a, _b;
      const behavior = new Set((_b = (_a = props.scrollBehavior) == null ? void 0 : _a.split(" ")) != null ? _b : []);
      return {
        hide: behavior.has("hide"),
        fullyHide: behavior.has("fully-hide"),
        inverted: behavior.has("inverted"),
        collapse: behavior.has("collapse"),
        elevate: behavior.has("elevate"),
        fadeImage: behavior.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    });
    const canScroll = computed(() => {
      const behavior = scrollBehavior.value;
      return behavior.hide || behavior.fullyHide || behavior.inverted || behavior.collapse || behavior.elevate || behavior.fadeImage || // behavior.shrink ||
      !isActive.value;
    });
    const {
      currentScroll,
      scrollThreshold,
      isScrollingUp,
      scrollRatio
    } = useScroll(props, {
      canScroll
    });
    const canHide = toRef(() => scrollBehavior.value.hide || scrollBehavior.value.fullyHide);
    const isCollapsed = computed(() => props.collapse || scrollBehavior.value.collapse && (scrollBehavior.value.inverted ? scrollRatio.value > 0 : scrollRatio.value === 0));
    const isFlat = computed(() => props.flat || scrollBehavior.value.fullyHide && !isActive.value || scrollBehavior.value.elevate && (scrollBehavior.value.inverted ? currentScroll.value > 0 : currentScroll.value === 0));
    const opacity = computed(() => scrollBehavior.value.fadeImage ? scrollBehavior.value.inverted ? 1 - scrollRatio.value : scrollRatio.value : void 0);
    const height = computed(() => {
      var _a, _b, _c, _d;
      if (scrollBehavior.value.hide && scrollBehavior.value.inverted) return 0;
      const height2 = (_b = (_a = vToolbarRef.value) == null ? void 0 : _a.contentHeight) != null ? _b : 0;
      const extensionHeight = (_d = (_c = vToolbarRef.value) == null ? void 0 : _c.extensionHeight) != null ? _d : 0;
      if (!canHide.value) return height2 + extensionHeight;
      return currentScroll.value < scrollThreshold.value || scrollBehavior.value.fullyHide ? height2 + extensionHeight : height2;
    });
    useToggleScope(() => !!props.scrollBehavior, () => {
      watchEffect(() => {
        if (canHide.value) {
          if (scrollBehavior.value.inverted) {
            isActive.value = currentScroll.value > scrollThreshold.value;
          } else {
            isActive.value = isScrollingUp.value || currentScroll.value < scrollThreshold.value;
          }
        } else {
          isActive.value = true;
        }
      });
    });
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      layoutItemStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: toRef(() => props.location),
      layoutSize: height,
      elementSize: shallowRef(void 0),
      active: isActive,
      absolute: toRef(() => props.absolute)
    });
    useRender(() => {
      const toolbarProps = VToolbar.filterProps(props);
      return createVNode(VToolbar, mergeProps({
        "ref": vToolbarRef,
        "class": ["v-app-bar", {
          "v-app-bar--bottom": props.location === "bottom"
        }, props.class],
        "style": [{
          ...layoutItemStyles.value,
          "--v-toolbar-image-opacity": opacity.value,
          height: void 0,
          ...ssrBootStyles.value
        }, props.style]
      }, toolbarProps, {
        "collapse": isCollapsed.value,
        "flat": isFlat.value
      }), slots);
    });
    return {};
  }
});
const makeVAppBarNavIconProps = propsFactory({
  ...makeVBtnProps({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon");
const VAppBarNavIcon = genericComponent()({
  name: "VAppBarNavIcon",
  props: makeVAppBarNavIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VBtn, mergeProps(props, {
      "class": ["v-app-bar-nav-icon"]
    }), slots));
    return {};
  }
});
const makeVFooterProps = propsFactory({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "footer"
  }),
  ...makeThemeProps()
}, "VFooter");
const VFooter = genericComponent()({
  name: "VFooter",
  props: makeVFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const layoutItemStyles = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const autoHeight = shallowRef(32);
    const {
      resizeRef
    } = useResizeObserver();
    const height = computed(() => props.height === "auto" ? autoHeight.value : parseInt(props.height, 10));
    useToggleScope(() => props.app, () => {
      const layout = useLayoutItem({
        id: props.name,
        order: computed(() => parseInt(props.order, 10)),
        position: toRef(() => "bottom"),
        layoutSize: height,
        elementSize: computed(() => props.height === "auto" ? void 0 : height.value),
        active: toRef(() => props.app),
        absolute: toRef(() => props.absolute)
      });
      watchEffect(() => {
        layoutItemStyles.value = layout.layoutItemStyles.value;
      });
    });
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": normalizeClass(["v-footer", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, props.app ? layoutItemStyles.value : {
        height: convertToUnit(props.height)
      }, props.style])
    }, slots));
    return {};
  }
});
const makeVMainProps = propsFactory({
  scrollable: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps({
    tag: "main"
  })
}, "VMain");
const VMain = genericComponent()({
  name: "VMain",
  props: makeVMainProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-main", {
        "v-main--scrollable": props.scrollable
      }, props.class]),
      "style": normalizeStyle([mainStyles.value, ssrBootStyles.value, dimensionStyles.value, props.style])
    }, {
      default: () => {
        var _a, _b;
        return [props.scrollable ? createElementVNode("div", {
          "class": "v-main__scroller"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]) : (_b = slots.default) == null ? void 0 : _b.call(slots)];
      }
    }));
    return {};
  }
});
function useSticky(_ref) {
  let {
    isSticky,
    layoutItemStyles
  } = _ref;
  const isStuck = shallowRef(false);
  const stuckPosition = shallowRef(0);
  const stickyStyles = computed(() => {
    const side = typeof isStuck.value === "boolean" ? "top" : isStuck.value;
    return [isSticky.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, isStuck.value ? {
      [side]: convertToUnit(stuckPosition.value)
    } : {
      top: layoutItemStyles.value.top
    }];
  });
  return {
    isStuck,
    stickyStyles
  };
}
function useTouch(_ref) {
  let {
    el,
    width,
    position
  } = _ref;
  computed(() => ["left", "right"].includes(position.value));
  const isDragging = shallowRef(false);
  const dragProgress = shallowRef(0);
  shallowRef(0);
  const dragStyles = computed(() => {
    return isDragging.value ? {
      transform: position.value === "left" ? `translateX(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "right" ? `translateX(calc(100% - ${dragProgress.value * width.value}px))` : position.value === "top" ? `translateY(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "bottom" ? `translateY(calc(100% - ${dragProgress.value * width.value}px))` : oops(),
      transition: "none"
    } : void 0;
  });
  useToggleScope(isDragging, () => {
    var _a, _b, _c, _d;
    const transform = (_b = (_a = el.value) == null ? void 0 : _a.style.transform) != null ? _b : null;
    const transition = (_d = (_c = el.value) == null ? void 0 : _c.style.transition) != null ? _d : null;
    watchEffect(() => {
      var _a2, _b2, _c2, _d2;
      (_b2 = el.value) == null ? void 0 : _b2.style.setProperty("transform", ((_a2 = dragStyles.value) == null ? void 0 : _a2.transform) || "none");
      (_d2 = el.value) == null ? void 0 : _d2.style.setProperty("transition", ((_c2 = dragStyles.value) == null ? void 0 : _c2.transition) || null);
    });
    onScopeDispose(() => {
      var _a2, _b2;
      (_a2 = el.value) == null ? void 0 : _a2.style.setProperty("transform", transform);
      (_b2 = el.value) == null ? void 0 : _b2.style.setProperty("transition", transition);
    });
  });
  return {
    isDragging,
    dragProgress,
    dragStyles
  };
}
function oops() {
  throw new Error();
}
const locations = ["start", "end", "left", "right", "top", "bottom"];
const makeVNavigationDrawerProps = propsFactory({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: true
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (value) => locations.includes(value)
  },
  sticky: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDelayProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps()
}, "VNavigationDrawer");
const VNavigationDrawer = genericComponent()({
  name: "VNavigationDrawer",
  props: makeVNavigationDrawerProps(),
  emits: {
    "update:modelValue": (val) => true,
    "update:rail": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      roundedClasses
    } = useRounded(props);
    const router = useRouter();
    const isActive = useProxiedModel(props, "modelValue", null, (v) => !!v);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      scopeId
    } = useScopeId();
    const rootEl = ref();
    const isHovering = shallowRef(false);
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => {
      isHovering.value = value;
    });
    const width = computed(() => {
      return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
    });
    const location = computed(() => {
      return toPhysical(props.location, isRtl.value);
    });
    const isPersistent = toRef(() => props.persistent);
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary));
    const isSticky = computed(() => props.sticky && !isTemporary.value && location.value !== "bottom");
    useToggleScope(() => props.expandOnHover && props.rail != null, () => {
      watch(isHovering, (val) => emit("update:rail", !val));
    });
    useToggleScope(() => !props.disableResizeWatcher, () => {
      watch(isTemporary, (val) => !props.permanent && nextTick(() => isActive.value = !val));
    });
    useToggleScope(() => !props.disableRouteWatcher && !!router, () => {
      watch(router.currentRoute, () => isTemporary.value && (isActive.value = false));
    });
    watch(() => props.permanent, (val) => {
      if (val) isActive.value = true;
    });
    if (props.modelValue == null && !isTemporary.value) {
      isActive.value = props.permanent || !mobile.value;
    }
    const {
      isDragging,
      dragProgress
    } = useTouch({
      el: rootEl,
      width,
      touchless: toRef(() => props.touchless),
      position: location
    });
    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
      return isDragging.value ? size * dragProgress.value : size;
    });
    const {
      layoutItemStyles,
      layoutItemScrimStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: location,
      layoutSize,
      elementSize: width,
      active: readonly(isActive),
      disableTransitions: toRef(() => isDragging.value),
      absolute: computed(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        props.absolute || isSticky.value && typeof isStuck.value !== "string"
      ))
    });
    const {
      isStuck,
      stickyStyles
    } = useSticky({
      isSticky,
      layoutItemStyles
    });
    const scrimColor = useBackgroundColor(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    });
    const scrimStyles = computed(() => ({
      ...isDragging.value ? {
        opacity: dragProgress.value * 0.2,
        transition: "none"
      } : void 0,
      ...layoutItemScrimStyles.value
    }));
    provideDefaults({
      VList: {
        bgColor: "transparent"
      }
    });
    useRender(() => {
      const hasImage = slots.image || props.image;
      return createElementVNode(Fragment, null, [createVNode(props.tag, mergeProps({
        "ref": rootEl,
        "onMouseenter": runOpenDelay,
        "onMouseleave": runCloseDelay,
        "class": ["v-navigation-drawer", `v-navigation-drawer--${location.value}`, {
          "v-navigation-drawer--expand-on-hover": props.expandOnHover,
          "v-navigation-drawer--floating": props.floating,
          "v-navigation-drawer--is-hovering": isHovering.value,
          "v-navigation-drawer--rail": props.rail,
          "v-navigation-drawer--temporary": isTemporary.value,
          "v-navigation-drawer--persistent": isPersistent.value,
          "v-navigation-drawer--active": isActive.value,
          "v-navigation-drawer--sticky": isSticky.value
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, displayClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, ssrBootStyles.value, stickyStyles.value, props.style]
      }, scopeId, attrs), {
        default: () => {
          var _a, _b, _c;
          return [hasImage && createElementVNode("div", {
            "key": "image",
            "class": "v-navigation-drawer__img"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "alt": "",
            "cover": true,
            "height": "inherit",
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                alt: "",
                cover: true,
                height: "inherit",
                src: props.image
              }
            }
          }, slots.image)]), slots.prepend && createElementVNode("div", {
            "class": "v-navigation-drawer__prepend"
          }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots)]), createElementVNode("div", {
            "class": "v-navigation-drawer__content"
          }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.append && createElementVNode("div", {
            "class": "v-navigation-drawer__append"
          }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])];
        }
      }), createVNode(Transition, {
        "name": "fade-transition"
      }, {
        default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && createElementVNode("div", mergeProps({
          "class": ["v-navigation-drawer__scrim", scrimColor.backgroundColorClasses.value],
          "style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
          "onClick": () => {
            if (isPersistent.value) return;
            isActive.value = false;
          }
        }, scopeId), null)]
      })]);
    });
    return {
      isStuck
    };
  }
});
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref(null);
    const apiGroupOpen = ref(false);
    const drawer = ref(false);
    const route = useRoute();
    const docslink = computed(() => {
      if (route.path.startsWith("/docs")) {
        return "active-link";
      }
    });
    const { data: nav } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "docs-nav-mobile",
      () => queryCollectionNavigation("docs"),
      { server: false }
    )), __temp = await __temp, __restore(), __temp);
    const navItems = computed(() => {
      var _a, _b;
      return ((_b = (_a = nav.value) == null ? void 0 : _a[0]) == null ? void 0 : _b.children) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBar, {
              app: "",
              flat: "",
              style: { "position": "fixed", "top": "0", "z-index": "10" },
              class: "appbar-header"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, {
                    fluid: "",
                    class: "pa-0 d-flex align-center",
                    style: { "height": "100%" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          align: "center",
                          style: { "height": "100%", "width": "100%" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "3",
                                class: "d-flex align-center py-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VAppBarNavIcon, {
                                      class: "d-lg-none",
                                      onClick: ($event) => drawer.value = true,
                                      style: { "color": "white" }
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      to: "/",
                                      class: "d-flex align-center ml-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<img${ssrRenderAttr("src", _imports_0)} alt="Meditab Logo" height="55" data-v-c1b9b428${_scopeId6}>`);
                                        } else {
                                          return [
                                            createVNode("img", {
                                              src: _imports_0,
                                              alt: "Meditab Logo",
                                              height: "55"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VAppBarNavIcon, {
                                        class: "d-lg-none",
                                        onClick: ($event) => drawer.value = true,
                                        style: { "color": "white" }
                                      }, null, 8, ["onClick"]),
                                      createVNode(_component_NuxtLink, {
                                        to: "/",
                                        class: "d-flex align-center ml-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_0,
                                            alt: "Meditab Logo",
                                            height: "55"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "9",
                                class: "py-0 d-none d-lg-flex",
                                style: { "height": "100%" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="header-navbar" style="${ssrRenderStyle({ "display": "flex" })}" data-v-c1b9b428${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      "exact-active-class": "active-link",
                                      to: "/"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`FHIR`);
                                        } else {
                                          return [
                                            createTextVNode("FHIR")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      "exact-active-class": "active-link",
                                      class: docslink.value,
                                      to: "/docs/allergy-intolerance/search"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`API Specification`);
                                        } else {
                                          return [
                                            createTextVNode("API Specification")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      "exact-active-class": "active-link",
                                      to: "/build-apps"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Build Apps`);
                                        } else {
                                          return [
                                            createTextVNode("Build Apps")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      "exact-active-class": "active-link",
                                      to: "/documentation"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Documentation`);
                                        } else {
                                          return [
                                            createTextVNode("Documentation")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", {
                                        class: "header-navbar",
                                        style: { "display": "flex" }
                                      }, [
                                        createVNode(_component_NuxtLink, {
                                          "exact-active-class": "active-link",
                                          to: "/"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("FHIR")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_NuxtLink, {
                                          "exact-active-class": "active-link",
                                          class: docslink.value,
                                          to: "/docs/allergy-intolerance/search"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("API Specification")
                                          ]),
                                          _: 1
                                        }, 8, ["class"]),
                                        createVNode(_component_NuxtLink, {
                                          "exact-active-class": "active-link",
                                          to: "/build-apps"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Build Apps")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_NuxtLink, {
                                          "exact-active-class": "active-link",
                                          to: "/documentation"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Documentation")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "3",
                                  class: "d-flex align-center py-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VAppBarNavIcon, {
                                      class: "d-lg-none",
                                      onClick: ($event) => drawer.value = true,
                                      style: { "color": "white" }
                                    }, null, 8, ["onClick"]),
                                    createVNode(_component_NuxtLink, {
                                      to: "/",
                                      class: "d-flex align-center ml-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_0,
                                          alt: "Meditab Logo",
                                          height: "55"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "9",
                                  class: "py-0 d-none d-lg-flex",
                                  style: { "height": "100%" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: "header-navbar",
                                      style: { "display": "flex" }
                                    }, [
                                      createVNode(_component_NuxtLink, {
                                        "exact-active-class": "active-link",
                                        to: "/"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("FHIR")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_NuxtLink, {
                                        "exact-active-class": "active-link",
                                        class: docslink.value,
                                        to: "/docs/allergy-intolerance/search"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("API Specification")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode(_component_NuxtLink, {
                                        "exact-active-class": "active-link",
                                        to: "/build-apps"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Build Apps")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_NuxtLink, {
                                        "exact-active-class": "active-link",
                                        to: "/documentation"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Documentation")
                                        ]),
                                        _: 1
                                      })
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
                        return [
                          createVNode(VRow, {
                            align: "center",
                            style: { "height": "100%", "width": "100%" }
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "3",
                                class: "d-flex align-center py-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VAppBarNavIcon, {
                                    class: "d-lg-none",
                                    onClick: ($event) => drawer.value = true,
                                    style: { "color": "white" }
                                  }, null, 8, ["onClick"]),
                                  createVNode(_component_NuxtLink, {
                                    to: "/",
                                    class: "d-flex align-center ml-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "Meditab Logo",
                                        height: "55"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "9",
                                class: "py-0 d-none d-lg-flex",
                                style: { "height": "100%" }
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    class: "header-navbar",
                                    style: { "display": "flex" }
                                  }, [
                                    createVNode(_component_NuxtLink, {
                                      "exact-active-class": "active-link",
                                      to: "/"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("FHIR")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_NuxtLink, {
                                      "exact-active-class": "active-link",
                                      class: docslink.value,
                                      to: "/docs/allergy-intolerance/search"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("API Specification")
                                      ]),
                                      _: 1
                                    }, 8, ["class"]),
                                    createVNode(_component_NuxtLink, {
                                      "exact-active-class": "active-link",
                                      to: "/build-apps"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Build Apps")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_NuxtLink, {
                                      "exact-active-class": "active-link",
                                      to: "/documentation"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Documentation")
                                      ]),
                                      _: 1
                                    })
                                  ])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, {
                      fluid: "",
                      class: "pa-0 d-flex align-center",
                      style: { "height": "100%" }
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          align: "center",
                          style: { "height": "100%", "width": "100%" }
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "3",
                              class: "d-flex align-center py-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VAppBarNavIcon, {
                                  class: "d-lg-none",
                                  onClick: ($event) => drawer.value = true,
                                  style: { "color": "white" }
                                }, null, 8, ["onClick"]),
                                createVNode(_component_NuxtLink, {
                                  to: "/",
                                  class: "d-flex align-center ml-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      alt: "Meditab Logo",
                                      height: "55"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "9",
                              class: "py-0 d-none d-lg-flex",
                              style: { "height": "100%" }
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "header-navbar",
                                  style: { "display": "flex" }
                                }, [
                                  createVNode(_component_NuxtLink, {
                                    "exact-active-class": "active-link",
                                    to: "/"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("FHIR")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_NuxtLink, {
                                    "exact-active-class": "active-link",
                                    class: docslink.value,
                                    to: "/docs/allergy-intolerance/search"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("API Specification")
                                    ]),
                                    _: 1
                                  }, 8, ["class"]),
                                  createVNode(_component_NuxtLink, {
                                    "exact-active-class": "active-link",
                                    to: "/build-apps"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Build Apps")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_NuxtLink, {
                                    "exact-active-class": "active-link",
                                    to: "/documentation"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Documentation")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VNavigationDrawer, {
              modelValue: drawer.value,
              "onUpdate:modelValue": ($event) => drawer.value = $event,
              temporary: "",
              class: "d-lg-none",
              app: "",
              style: { "position": "fixed" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, {
                    dense: "",
                    nav: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItem, {
                          to: "/",
                          link: "",
                          onClick: ($event) => drawer.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`FHIR`);
                                  } else {
                                    return [
                                      createTextVNode("FHIR")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("FHIR")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListGroup, {
                          value: "true",
                          modelValue: apiGroupOpen.value,
                          "onUpdate:modelValue": ($event) => apiGroupOpen.value = $event,
                          class: "mobile-subdrops"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItem, props, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItemTitle, null, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`API Specification`);
                                        } else {
                                          return [
                                            createTextVNode("API Specification")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("API Specification")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItem, props, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("API Specification")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 16)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(navItems.value, (item) => {
                                _push5(`<!--[-->`);
                                if (item.children && item.children.length > 0) {
                                  _push5(ssrRenderComponent(VListGroup, {
                                    value: item.title,
                                    class: "deepest-child"
                                  }, {
                                    activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VListItem, mergeProps({ ref_for: true }, props, { class: "pl-8" }), {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VListItemTitle, null, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(item.title)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(item.title), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VListItem, mergeProps({ ref_for: true }, props, { class: "pl-8" }), {
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ];
                                      }
                                    }),
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<!--[-->`);
                                        ssrRenderList(item.children, (child) => {
                                          _push6(ssrRenderComponent(VListItem, {
                                            key: child.path,
                                            to: child.path,
                                            link: "",
                                            onClick: ($event) => drawer.value = false,
                                            class: "pl-6"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VListItemTitle, null, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(`${ssrInterpolate(child.title)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(child.title), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(child.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        });
                                        _push6(`<!--]-->`);
                                      } else {
                                        return [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: child.path,
                                              to: child.path,
                                              link: "",
                                              onClick: ($event) => drawer.value = false,
                                              class: "pl-6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(child.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["to", "onClick"]);
                                          }), 128))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(ssrRenderComponent(VListItem, {
                                    to: item.path,
                                    link: "",
                                    onClick: ($event) => drawer.value = false,
                                    class: "pl-8"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VListItemTitle, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(item.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                }
                                _push5(`<!--]-->`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(navItems.value, (item) => {
                                  return openBlock(), createBlock(Fragment, {
                                    key: item.path
                                  }, [
                                    item.children && item.children.length > 0 ? (openBlock(), createBlock(VListGroup, {
                                      key: 0,
                                      value: item.title,
                                      class: "deepest-child"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VListItem, mergeProps({ ref_for: true }, props, { class: "pl-8" }), {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ]),
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: child.path,
                                            to: child.path,
                                            link: "",
                                            onClick: ($event) => drawer.value = false,
                                            class: "pl-6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(child.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["to", "onClick"]);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1032, ["value"])) : (openBlock(), createBlock(VListItem, {
                                      key: 1,
                                      to: item.path,
                                      link: "",
                                      onClick: ($event) => drawer.value = false,
                                      class: "pl-8"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["to", "onClick"]))
                                  ], 64);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          to: "/build-apps",
                          link: "",
                          onClick: ($event) => drawer.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Build Apps`);
                                  } else {
                                    return [
                                      createTextVNode("Build Apps")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Build Apps")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          to: "/documentation",
                          link: "",
                          onClick: ($event) => drawer.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Documentation`);
                                  } else {
                                    return [
                                      createTextVNode("Documentation")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Documentation")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItem, {
                            to: "/",
                            link: "",
                            onClick: ($event) => drawer.value = false
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("FHIR")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VListGroup, {
                            value: "true",
                            modelValue: apiGroupOpen.value,
                            "onUpdate:modelValue": ($event) => apiGroupOpen.value = $event,
                            class: "mobile-subdrops"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(VListItem, props, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("API Specification")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 16)
                            ]),
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(navItems.value, (item) => {
                                return openBlock(), createBlock(Fragment, {
                                  key: item.path
                                }, [
                                  item.children && item.children.length > 0 ? (openBlock(), createBlock(VListGroup, {
                                    key: 0,
                                    value: item.title,
                                    class: "deepest-child"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VListItem, mergeProps({ ref_for: true }, props, { class: "pl-8" }), {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: child.path,
                                          to: child.path,
                                          link: "",
                                          onClick: ($event) => drawer.value = false,
                                          class: "pl-6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(child.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["to", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1032, ["value"])) : (openBlock(), createBlock(VListItem, {
                                    key: 1,
                                    to: item.path,
                                    link: "",
                                    onClick: ($event) => drawer.value = false,
                                    class: "pl-8"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["to", "onClick"]))
                                ], 64);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VListItem, {
                            to: "/build-apps",
                            link: "",
                            onClick: ($event) => drawer.value = false
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Build Apps")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VListItem, {
                            to: "/documentation",
                            link: "",
                            onClick: ($event) => drawer.value = false
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Documentation")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, {
                      dense: "",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VListItem, {
                          to: "/",
                          link: "",
                          onClick: ($event) => drawer.value = false
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("FHIR")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VListGroup, {
                          value: "true",
                          modelValue: apiGroupOpen.value,
                          "onUpdate:modelValue": ($event) => apiGroupOpen.value = $event,
                          class: "mobile-subdrops"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(VListItem, props, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("API Specification")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 16)
                          ]),
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(navItems.value, (item) => {
                              return openBlock(), createBlock(Fragment, {
                                key: item.path
                              }, [
                                item.children && item.children.length > 0 ? (openBlock(), createBlock(VListGroup, {
                                  key: 0,
                                  value: item.title,
                                  class: "deepest-child"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VListItem, mergeProps({ ref_for: true }, props, { class: "pl-8" }), {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                      return openBlock(), createBlock(VListItem, {
                                        key: child.path,
                                        to: child.path,
                                        link: "",
                                        onClick: ($event) => drawer.value = false,
                                        class: "pl-6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(child.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["to", "onClick"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["value"])) : (openBlock(), createBlock(VListItem, {
                                  key: 1,
                                  to: item.path,
                                  link: "",
                                  onClick: ($event) => drawer.value = false,
                                  class: "pl-8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "onClick"]))
                              ], 64);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VListItem, {
                          to: "/build-apps",
                          link: "",
                          onClick: ($event) => drawer.value = false
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Build Apps")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VListItem, {
                          to: "/documentation",
                          link: "",
                          onClick: ($event) => drawer.value = false
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Documentation")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, { style: { "min-height": "calc(100vh - 64px)" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VFooter, {
              app: "",
              class: "appbar-header pa-5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, {
                    fluid: "",
                    class: "pa-0 d-flex align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          align: "center",
                          style: { "height": "100%" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "2",
                                class: "d-flex align-center py-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      to: "/",
                                      class: "d-flex align-center"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<img${ssrRenderAttr("src", _imports_0)} alt="Meditab Logo" height="40" data-v-c1b9b428${_scopeId6}>`);
                                        } else {
                                          return [
                                            createVNode("img", {
                                              src: _imports_0,
                                              alt: "Meditab Logo",
                                              height: "40"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_NuxtLink, {
                                        to: "/",
                                        class: "d-flex align-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_0,
                                            alt: "Meditab Logo",
                                            height: "40"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "10",
                                class: "py-0"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "2",
                                  class: "d-flex align-center py-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtLink, {
                                      to: "/",
                                      class: "d-flex align-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_0,
                                          alt: "Meditab Logo",
                                          height: "40"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "10",
                                  class: "py-0"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, {
                            align: "center",
                            style: { "height": "100%" }
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "2",
                                class: "d-flex align-center py-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    to: "/",
                                    class: "d-flex align-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "Meditab Logo",
                                        height: "40"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "10",
                                class: "py-0"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, {
                      fluid: "",
                      class: "pa-0 d-flex align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          align: "center",
                          style: { "height": "100%" }
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "2",
                              class: "d-flex align-center py-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: "/",
                                  class: "d-flex align-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      alt: "Meditab Logo",
                                      height: "40"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "10",
                              class: "py-0"
                            })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAppBar, {
                app: "",
                flat: "",
                style: { "position": "fixed", "top": "0", "z-index": "10" },
                class: "appbar-header"
              }, {
                default: withCtx(() => [
                  createVNode(VContainer, {
                    fluid: "",
                    class: "pa-0 d-flex align-center",
                    style: { "height": "100%" }
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        align: "center",
                        style: { "height": "100%", "width": "100%" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "3",
                            class: "d-flex align-center py-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VAppBarNavIcon, {
                                class: "d-lg-none",
                                onClick: ($event) => drawer.value = true,
                                style: { "color": "white" }
                              }, null, 8, ["onClick"]),
                              createVNode(_component_NuxtLink, {
                                to: "/",
                                class: "d-flex align-center ml-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    alt: "Meditab Logo",
                                    height: "55"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "9",
                            class: "py-0 d-none d-lg-flex",
                            style: { "height": "100%" }
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "header-navbar",
                                style: { "display": "flex" }
                              }, [
                                createVNode(_component_NuxtLink, {
                                  "exact-active-class": "active-link",
                                  to: "/"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("FHIR")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_NuxtLink, {
                                  "exact-active-class": "active-link",
                                  class: docslink.value,
                                  to: "/docs/allergy-intolerance/search"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("API Specification")
                                  ]),
                                  _: 1
                                }, 8, ["class"]),
                                createVNode(_component_NuxtLink, {
                                  "exact-active-class": "active-link",
                                  to: "/build-apps"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Build Apps")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_NuxtLink, {
                                  "exact-active-class": "active-link",
                                  to: "/documentation"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Documentation")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VNavigationDrawer, {
                modelValue: drawer.value,
                "onUpdate:modelValue": ($event) => drawer.value = $event,
                temporary: "",
                class: "d-lg-none",
                app: "",
                style: { "position": "fixed" }
              }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    dense: "",
                    nav: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VListItem, {
                        to: "/",
                        link: "",
                        onClick: ($event) => drawer.value = false
                      }, {
                        default: withCtx(() => [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("FHIR")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VListGroup, {
                        value: "true",
                        modelValue: apiGroupOpen.value,
                        "onUpdate:modelValue": ($event) => apiGroupOpen.value = $event,
                        class: "mobile-subdrops"
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(VListItem, props, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("API Specification")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 16)
                        ]),
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(navItems.value, (item) => {
                            return openBlock(), createBlock(Fragment, {
                              key: item.path
                            }, [
                              item.children && item.children.length > 0 ? (openBlock(), createBlock(VListGroup, {
                                key: 0,
                                value: item.title,
                                class: "deepest-child"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VListItem, mergeProps({ ref_for: true }, props, { class: "pl-8" }), {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: child.path,
                                      to: child.path,
                                      link: "",
                                      onClick: ($event) => drawer.value = false,
                                      class: "pl-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(child.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["to", "onClick"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["value"])) : (openBlock(), createBlock(VListItem, {
                                key: 1,
                                to: item.path,
                                link: "",
                                onClick: ($event) => drawer.value = false,
                                class: "pl-8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["to", "onClick"]))
                            ], 64);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VListItem, {
                        to: "/build-apps",
                        link: "",
                        onClick: ($event) => drawer.value = false
                      }, {
                        default: withCtx(() => [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Build Apps")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VListItem, {
                        to: "/documentation",
                        link: "",
                        onClick: ($event) => drawer.value = false
                      }, {
                        default: withCtx(() => [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Documentation")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VMain, { style: { "min-height": "calc(100vh - 64px)" } }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                _: 3
              }),
              createVNode(VFooter, {
                app: "",
                class: "appbar-header pa-5"
              }, {
                default: withCtx(() => [
                  createVNode(VContainer, {
                    fluid: "",
                    class: "pa-0 d-flex align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        align: "center",
                        style: { "height": "100%" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "2",
                            class: "d-flex align-center py-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/",
                                class: "d-flex align-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    alt: "Meditab Logo",
                                    height: "40"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "10",
                            class: "py-0"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1b9b428"]]);

export { _default as default };
//# sourceMappingURL=default-Ap7OVYmK.mjs.map

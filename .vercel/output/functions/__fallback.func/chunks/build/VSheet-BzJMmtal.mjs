import { createVNode, normalizeStyle, normalizeClass } from 'vue';
import { d as useBackgroundColor, s as useBorder, e as useElevation, W as useLocation, f as useRounded, j as makeRoundedProps, X as makeLocationProps, l as makeElevationProps, G as makeBorderProps } from './loader-2bNA6OgU.mjs';
import { g as genericComponent, p as propsFactory, j as provideTheme, h as useRender, l as makeThemeProps, m as makeComponentProps } from './server.mjs';
import { u as useDimension, m as makeTagProps, c as makeDimensionProps } from './VRow-zyUvS5jf.mjs';
import { u as usePosition, m as makePositionProps } from './VBtn-Dip3530s.mjs';

const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
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
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style])
    }, slots));
    return {};
  }
});

export { VSheet as V };
//# sourceMappingURL=VSheet-BzJMmtal.mjs.map

import { _ as _sfc_main$1 } from './NuxtImg-DJKmVU64.mjs';
import { ref, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { B as BaseCard } from './BaseCard-CAKi_NiO.mjs';
import { V as VContainer, a as VRow, b as VCol } from './VRow-zyUvS5jf.mjs';
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
import './server.mjs';
import 'vue-router';
import './v3-OpxzbH-A.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const homeRaw = {
  title: "FHIR",
  subtitle: "About Meditab FHIR",
  sections: {
    infoSection: {
      content: "FHIR for Clinics, Without the Complexity Meditab\u2019s HL7\xAE FHIR\xAE platform is designed for real-time clinical interoperability \u2014 fast, secure, and built for the workflows that matter most to your practice. Say goodbye to manual data sharing. Say hello to connected care."
    },
    whyMeditab: {
      heading: "Why Meditab FHIR?",
      desc: "FHIR, Without the Friction. Meditab FHIR makes it easy for clinics and digital health teams to access and share health data \u2014 without the heavy lift of custom interfaces or legacy standards.",
      items: [
        {
          subHeading: "Clinic-Centric Design",
          subPara: "Tailored for the real-world workflows of outpatient and specialty practices."
        },
        {
          subHeading: "HL7\xAE FHIR\xAE R4 + USCDI v3",
          subPara: "Fully aligned with national interoperability standards for clinical and patient data."
        },
        {
          subHeading: "Fast, Secure, and Scalable",
          subPara: "Real-time access with OAuth2-based security, built for growth."
        },
        {
          subHeading: "Developer-Ready ",
          subPara: "Built with simplicity in mind \u2014 so integrations don\u2019t need armies of engineers."
        }
      ]
    },
    whoIsItHeading: "Who Is It For?",
    whoIsItItems: [
      {
        subHeading: "Clinics",
        subPara: "Enable seamless exchange with labs, pharmacies, or referral partners",
        iconLink: "/Home/Clinics.png"
      },
      {
        subHeading: "Digital Health Startups",
        subPara: "Build patient apps and smart tools with real-time clinical data",
        iconLink: "/Home/Digital Health Startups.png"
      },
      {
        subHeading: "Payers",
        subPara: "Access encounter and care data through standards-based APIs",
        iconLink: "/Home/Payers.png"
      }
    ],
    whatCanYouDo: {
      heading: "What Can You Do with It?",
      content: "Use Meditab FHIR to enable smarter workflows and better patient experiences:",
      whatCanYouDoItems: [
        {
          subHeading: "Automate patient intake",
          subPara: "Sync demographics, allergies, and past conditions."
        },
        {
          subHeading: "Build mobile or web apps",
          subPara: "Display appointments, vitals, and lab results in real time."
        },
        {
          subHeading: "Streamline referrals",
          subPara: "Share clinical documents and care plans between systems."
        },
        {
          subHeading: "Enable insights",
          subPara: "Feed data into dashboards or analytics tools without manual export."
        }
      ]
    },
    poweredByAI: {
      heading: "Powered by AI? We\u2019re Ready.",
      content: "Fuel Your AI with Reliable Clinical Data Meditab FHIR provides a structured, real-time pipeline of clinical data to power AI-driven tools for care optimization, risk scoring, automation, and patient engagement.",
      poweredByAIItems: [
        {
          subPara: "Train models on real-world vitals, labs, and diagnoses"
        },
        {
          subPara: "Deliver context-aware clinical recommendations"
        },
        {
          subPara: "Automate coding, documentation, and summarization workflows"
        },
        {
          subPara: "Integrate LLMs with live patient context, securely and compliantly"
        }
      ],
      para2: "AI starts with clean data. Meditab FHIR delivers it \u2014 fast, standard, and secure."
    },
    supportedFhir: {
      heading: "Supported FHIR Resources",
      content: "We support the most essential resources for clinical and operational interoperability in ambulatory care:",
      supportedFhirItems: {
        row1: [
          {
            subHeading: "Patient",
            iconLink: "/Home/Patient.png"
          },
          {
            subHeading: "Observation",
            iconLink: "/Home/Observation.png"
          },
          {
            subHeading: "Condition",
            iconLink: "/Home/Condition.png"
          },
          {
            subHeading: "Appointment",
            iconLink: "/Home/Appointment.png"
          }
        ],
        row2: [
          {
            subHeading: "MedicationRequest",
            iconLink: "/Home/MedicationRequest.png"
          },
          {
            subHeading: "DocumentReference",
            iconLink: "/Home/Document Reference.png"
          },
          {
            subHeading: "CarePlan",
            iconLink: "/Home/CarePlan.png"
          },
          {
            subHeading: "AllergyIntolerance",
            iconLink: "/Home/Allergy Intolerance.png"
          }
        ]
      },
      para2: "Additional resource types are being rolled out in alignment with USCDI v3."
    },
    secureDesign: {
      heading: "Secure by Design",
      content: "Privacy and security are non-negotiable. Meditab FHIR ensures clinical data is protected at every level.",
      secureDesignItems: [
        {
          subPara: "HIPAA-aligned data practices"
        },
        {
          subPara: "OAuth2.0-based access control"
        },
        {
          subPara: "Encryption at rest and in transit"
        },
        {
          subPara: "Fine-grained role and user permissions"
        },
        {
          subPara: "Structured for auditability and compliance"
        }
      ]
    },
    whatNext: {
      heading: "Built for What\u2019s Next",
      content: "Whether you're a clinic modernizing your workflows, or a digital health company building something new \u2014 Meditab FHIR helps you move faster, stay compliant, and connect with confidence."
    }
  }
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const home = ref(homeRaw);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_row = resolveComponent("row");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main-page-content" }, _attrs))}><section class="home-banner-section comman-bg-img-props padding-custom-util"></section><section class="info-section comman-bg-img-props padding-custom-util">`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "d-flex justify-center align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    lg: "8",
                    sm: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-center"${_scopeId3}>${ssrInterpolate(unref(home).sections.infoSection.content)}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.infoSection.content), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      lg: "8",
                      sm: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.infoSection.content), 1)
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
              createVNode(VRow, { class: "d-flex justify-center align-center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    lg: "8",
                    sm: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.infoSection.content), 1)
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
      _push(`</section><section class="why-meditab-fhir padding-custom-util">`);
      _push(ssrRenderComponent(VContainer, { "max-width": "1100px" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              class: "d-flex justify-center align-center",
              style: { "margin-bottom": "2rem" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    lg: "8",
                    sm: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-center heading"${_scopeId3}>${ssrInterpolate(unref(home).sections.whyMeditab.heading)}</h2><p class="text-center"${_scopeId3}>${ssrInterpolate(unref(home).sections.whyMeditab.desc)}</p>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.whyMeditab.heading), 1),
                          createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.whyMeditab.desc), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      lg: "8",
                      sm: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.whyMeditab.heading), 1),
                        createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.whyMeditab.desc), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { style: { "margin-bottom": "2rem" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "6",
                    sm: "12",
                    class: "d-flex justify-center align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtImg, {
                          src: "/Home/[Meditab  FHIR Layout Design-08 (1).jpg",
                          alt: "why Meditab",
                          format: "webp",
                          class: "rounded-lg column-img-util"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtImg, {
                            src: "/Home/[Meditab  FHIR Layout Design-08 (1).jpg",
                            alt: "why Meditab",
                            format: "webp",
                            class: "rounded-lg column-img-util"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "6",
                    sm: "12",
                    class: "d-flex flex-column justify-start align-start"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(home).sections.whyMeditab.items, (item, index) => {
                          _push4(`<div class="mb-4"${_scopeId3}><h4 class="heading"${_scopeId3}>${ssrInterpolate(item.subHeading)}</h4><p${_scopeId3}>${ssrInterpolate(item.subPara)}</p></div>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.whyMeditab.items, (item, index) => {
                            return openBlock(), createBlock("div", {
                              key: index,
                              class: "mb-4"
                            }, [
                              createVNode("h4", { class: "heading" }, toDisplayString(item.subHeading), 1),
                              createVNode("p", null, toDisplayString(item.subPara), 1)
                            ]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      lg: "6",
                      sm: "12",
                      class: "d-flex justify-center align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtImg, {
                          src: "/Home/[Meditab  FHIR Layout Design-08 (1).jpg",
                          alt: "why Meditab",
                          format: "webp",
                          class: "rounded-lg column-img-util"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      lg: "6",
                      sm: "12",
                      class: "d-flex flex-column justify-start align-start"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.whyMeditab.items, (item, index) => {
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: "mb-4"
                          }, [
                            createVNode("h4", { class: "heading" }, toDisplayString(item.subHeading), 1),
                            createVNode("p", null, toDisplayString(item.subPara), 1)
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, {
              class: "d-flex justify-center align-center",
              style: { "margin-bottom": "20px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    lg: "8",
                    sm: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-center heading"${_scopeId3}>${ssrInterpolate(unref(home).sections.whoIsItHeading)}</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.whoIsItHeading), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      lg: "8",
                      sm: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.whoIsItHeading), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(home).sections.whoIsItItems, (item, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      lg: "4",
                      sm: "12",
                      key: index
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(BaseCard, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        lg: "4",
                                        sm: "12"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_NuxtImg, {
                                              src: item.iconLink,
                                              width: "auto",
                                              format: "webp",
                                              class: "rounded-lg icon-img-util"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_NuxtImg, {
                                                src: item.iconLink,
                                                width: "auto",
                                                format: "webp",
                                                class: "rounded-lg icon-img-util"
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        lg: "8",
                                        sm: "12"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<h4 class="heading"${_scopeId6}>${ssrInterpolate(item.subHeading)}</h4><p${_scopeId6}>${ssrInterpolate(item.subPara)}</p>`);
                                          } else {
                                            return [
                                              createVNode("h4", { class: "heading" }, toDisplayString(item.subHeading), 1),
                                              createVNode("p", null, toDisplayString(item.subPara), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCol, {
                                          cols: "12",
                                          lg: "4",
                                          sm: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_NuxtImg, {
                                              src: item.iconLink,
                                              width: "auto",
                                              format: "webp",
                                              class: "rounded-lg icon-img-util"
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCol, {
                                          cols: "12",
                                          lg: "8",
                                          sm: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("h4", { class: "heading" }, toDisplayString(item.subHeading), 1),
                                            createVNode("p", null, toDisplayString(item.subPara), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "4",
                                        sm: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_NuxtImg, {
                                            src: item.iconLink,
                                            width: "auto",
                                            format: "webp",
                                            class: "rounded-lg icon-img-util"
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "8",
                                        sm: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h4", { class: "heading" }, toDisplayString(item.subHeading), 1),
                                          createVNode("p", null, toDisplayString(item.subPara), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(BaseCard, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "4",
                                      sm: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtImg, {
                                          src: item.iconLink,
                                          width: "auto",
                                          format: "webp",
                                          class: "rounded-lg icon-img-util"
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "8",
                                      sm: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("h4", { class: "heading" }, toDisplayString(item.subHeading), 1),
                                        createVNode("p", null, toDisplayString(item.subPara), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.whoIsItItems, (item, index) => {
                      return openBlock(), createBlock(VCol, {
                        cols: "12",
                        lg: "4",
                        sm: "12",
                        key: index
                      }, {
                        default: withCtx(() => [
                          createVNode(BaseCard, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "4",
                                    sm: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtImg, {
                                        src: item.iconLink,
                                        width: "auto",
                                        format: "webp",
                                        class: "rounded-lg icon-img-util"
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "8",
                                    sm: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h4", { class: "heading" }, toDisplayString(item.subHeading), 1),
                                      createVNode("p", null, toDisplayString(item.subPara), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, {
                class: "d-flex justify-center align-center",
                style: { "margin-bottom": "2rem" }
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    lg: "8",
                    sm: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.whyMeditab.heading), 1),
                      createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.whyMeditab.desc), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { style: { "margin-bottom": "2rem" } }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    lg: "6",
                    sm: "12",
                    class: "d-flex justify-center align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtImg, {
                        src: "/Home/[Meditab  FHIR Layout Design-08 (1).jpg",
                        alt: "why Meditab",
                        format: "webp",
                        class: "rounded-lg column-img-util"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    lg: "6",
                    sm: "12",
                    class: "d-flex flex-column justify-start align-start"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.whyMeditab.items, (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "mb-4"
                        }, [
                          createVNode("h4", { class: "heading" }, toDisplayString(item.subHeading), 1),
                          createVNode("p", null, toDisplayString(item.subPara), 1)
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, {
                class: "d-flex justify-center align-center",
                style: { "margin-bottom": "20px" }
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    lg: "8",
                    sm: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.whoIsItHeading), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.whoIsItItems, (item, index) => {
                    return openBlock(), createBlock(VCol, {
                      cols: "12",
                      lg: "4",
                      sm: "12",
                      key: index
                    }, {
                      default: withCtx(() => [
                        createVNode(BaseCard, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  lg: "4",
                                  sm: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtImg, {
                                      src: item.iconLink,
                                      width: "auto",
                                      format: "webp",
                                      class: "rounded-lg icon-img-util"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCol, {
                                  cols: "12",
                                  lg: "8",
                                  sm: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "heading" }, toDisplayString(item.subHeading), 1),
                                    createVNode("p", null, toDisplayString(item.subPara), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="what-can-you-do padding-custom-util">`);
      _push(ssrRenderComponent(VContainer, { "max-width": "1100px" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_row, {
              style: { "margin-bottom": "2rem" },
              class: "d-flex justify-center align-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    lg: "8",
                    sm: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-center heading"${_scopeId3}>${ssrInterpolate(unref(home).sections.whatCanYouDo.heading)}</h2><p class="text-center"${_scopeId3}>${ssrInterpolate(unref(home).sections.whatCanYouDo.content)}</p>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.whatCanYouDo.heading), 1),
                          createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.whatCanYouDo.content), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      lg: "8",
                      sm: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.whatCanYouDo.heading), 1),
                        createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.whatCanYouDo.content), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { class: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(home).sections.whatCanYouDo.whatCanYouDoItems, (item, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      lg: "3",
                      sm: "12",
                      class: "box",
                      key: index
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h4 class="heading"${_scopeId3}>${ssrInterpolate(item.subHeading)}</h4><p${_scopeId3}>${ssrInterpolate(item.subPara)}</p>`);
                        } else {
                          return [
                            createVNode("h4", { class: "heading" }, toDisplayString(item.subHeading), 1),
                            createVNode("p", null, toDisplayString(item.subPara), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.whatCanYouDo.whatCanYouDoItems, (item, index) => {
                      return openBlock(), createBlock(VCol, {
                        cols: "12",
                        lg: "3",
                        sm: "12",
                        class: "box",
                        key: index
                      }, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "heading" }, toDisplayString(item.subHeading), 1),
                          createVNode("p", null, toDisplayString(item.subPara), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_row, {
                style: { "margin-bottom": "2rem" },
                class: "d-flex justify-center align-center"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    lg: "8",
                    sm: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.whatCanYouDo.heading), 1),
                      createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.whatCanYouDo.content), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.whatCanYouDo.whatCanYouDoItems, (item, index) => {
                    return openBlock(), createBlock(VCol, {
                      cols: "12",
                      lg: "3",
                      sm: "12",
                      class: "box",
                      key: index
                    }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "heading" }, toDisplayString(item.subHeading), 1),
                        createVNode("p", null, toDisplayString(item.subPara), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="why-meditab-fhir padding-custom-util">`);
      _push(ssrRenderComponent(VContainer, { "max-width": "1100px" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              class: "d-flex justify-center align-center",
              style: { "margin-bottom": "2rem" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    lg: "10",
                    sm: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-center heading"${_scopeId3}>${ssrInterpolate(unref(home).sections.poweredByAI.heading)}</h2><p class="text-center"${_scopeId3}>${ssrInterpolate(unref(home).sections.poweredByAI.content)}</p>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.poweredByAI.heading), 1),
                          createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.poweredByAI.content), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      lg: "10",
                      sm: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.poweredByAI.heading), 1),
                        createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.poweredByAI.content), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { style: { "margin-bottom": "2rem" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "7",
                    sm: "12",
                    class: "d-flex justify-center align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtImg, {
                          src: "/Home/Powered by AI We\u2019re Ready..png",
                          width: "auto",
                          height: "100%",
                          alt: "why Meditab",
                          format: "webp",
                          class: "rounded-lg column-img-util"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtImg, {
                            src: "/Home/Powered by AI We\u2019re Ready..png",
                            width: "auto",
                            height: "100%",
                            alt: "why Meditab",
                            format: "webp",
                            class: "rounded-lg column-img-util"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "5",
                    sm: "12",
                    class: "d-flex flex-column justify-center align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<ul${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(home).sections.poweredByAI.poweredByAIItems, (item, index) => {
                          _push4(`<li class="mb-4"${_scopeId3}>${ssrInterpolate(item.subPara)}</li>`);
                        });
                        _push4(`<!--]--><p class="heading"${_scopeId3}>${ssrInterpolate(unref(home).sections.poweredByAI.para2)}</p></ul>`);
                      } else {
                        return [
                          createVNode("ul", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.poweredByAI.poweredByAIItems, (item, index) => {
                              return openBlock(), createBlock("li", {
                                class: "mb-4",
                                key: index
                              }, toDisplayString(item.subPara), 1);
                            }), 128)),
                            createVNode("p", { class: "heading" }, toDisplayString(unref(home).sections.poweredByAI.para2), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      lg: "7",
                      sm: "12",
                      class: "d-flex justify-center align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtImg, {
                          src: "/Home/Powered by AI We\u2019re Ready..png",
                          width: "auto",
                          height: "100%",
                          alt: "why Meditab",
                          format: "webp",
                          class: "rounded-lg column-img-util"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      lg: "5",
                      sm: "12",
                      class: "d-flex flex-column justify-center align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode("ul", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.poweredByAI.poweredByAIItems, (item, index) => {
                            return openBlock(), createBlock("li", {
                              class: "mb-4",
                              key: index
                            }, toDisplayString(item.subPara), 1);
                          }), 128)),
                          createVNode("p", { class: "heading" }, toDisplayString(unref(home).sections.poweredByAI.para2), 1)
                        ])
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
              createVNode(VRow, {
                class: "d-flex justify-center align-center",
                style: { "margin-bottom": "2rem" }
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    lg: "10",
                    sm: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.poweredByAI.heading), 1),
                      createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.poweredByAI.content), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { style: { "margin-bottom": "2rem" } }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    lg: "7",
                    sm: "12",
                    class: "d-flex justify-center align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtImg, {
                        src: "/Home/Powered by AI We\u2019re Ready..png",
                        width: "auto",
                        height: "100%",
                        alt: "why Meditab",
                        format: "webp",
                        class: "rounded-lg column-img-util"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    lg: "5",
                    sm: "12",
                    class: "d-flex flex-column justify-center align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.poweredByAI.poweredByAIItems, (item, index) => {
                          return openBlock(), createBlock("li", {
                            class: "mb-4",
                            key: index
                          }, toDisplayString(item.subPara), 1);
                        }), 128)),
                        createVNode("p", { class: "heading" }, toDisplayString(unref(home).sections.poweredByAI.para2), 1)
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
      }, _parent));
      _push(`</section><section class="supported-fhir-resources padding-custom-util">`);
      _push(ssrRenderComponent(VContainer, { "max-width": "1100px" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              class: "d-flex justify-center align-center",
              style: { "margin-bottom": "2rem" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    lg: "10",
                    sm: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-center heading"${_scopeId3}>${ssrInterpolate(unref(home).sections.supportedFhir.heading)}</h2><p class="text-center"${_scopeId3}>${ssrInterpolate(unref(home).sections.supportedFhir.content)}</p>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.supportedFhir.heading), 1),
                          createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.supportedFhir.content), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      lg: "10",
                      sm: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.supportedFhir.heading), 1),
                        createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.supportedFhir.content), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, {
              class: "d-flex justify-center align-center",
              style: { "margin-bottom": "2rem" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(home).sections.supportedFhir.supportedFhirItems.row1, (item, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "6",
                      lg: "3",
                      sm: "6",
                      class: "d-flex flex-column justify-center align-center",
                      key: index
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtImg, {
                            src: item.iconLink,
                            width: "auto",
                            height: "100%",
                            alt: "Icons",
                            format: "webp",
                            class: "rounded-lg mb-3 icon-img-util"
                          }, null, _parent4, _scopeId3));
                          _push4(`<p class="heading"${_scopeId3}>${ssrInterpolate(item.subHeading)}</p>`);
                        } else {
                          return [
                            createVNode(_component_NuxtImg, {
                              src: item.iconLink,
                              width: "auto",
                              height: "100%",
                              alt: "Icons",
                              format: "webp",
                              class: "rounded-lg mb-3 icon-img-util"
                            }, null, 8, ["src"]),
                            createVNode("p", { class: "heading" }, toDisplayString(item.subHeading), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.supportedFhir.supportedFhirItems.row1, (item, index) => {
                      return openBlock(), createBlock(VCol, {
                        cols: "6",
                        lg: "3",
                        sm: "6",
                        class: "d-flex flex-column justify-center align-center",
                        key: index
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtImg, {
                            src: item.iconLink,
                            width: "auto",
                            height: "100%",
                            alt: "Icons",
                            format: "webp",
                            class: "rounded-lg mb-3 icon-img-util"
                          }, null, 8, ["src"]),
                          createVNode("p", { class: "heading" }, toDisplayString(item.subHeading), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, {
              class: "d-flex justify-center align-center",
              style: { "margin-bottom": "4rem" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(home).sections.supportedFhir.supportedFhirItems.row2, (item, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "6",
                      lg: "3",
                      sm: "6",
                      class: "d-flex flex-column justify-center align-center",
                      key: index
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtImg, {
                            src: item.iconLink,
                            width: "auto",
                            height: "100%",
                            alt: "Icons",
                            format: "webp",
                            class: "rounded-lg mb-3 icon-img-util"
                          }, null, _parent4, _scopeId3));
                          _push4(`<p class="heading"${_scopeId3}>${ssrInterpolate(item.subHeading)}</p>`);
                        } else {
                          return [
                            createVNode(_component_NuxtImg, {
                              src: item.iconLink,
                              width: "auto",
                              height: "100%",
                              alt: "Icons",
                              format: "webp",
                              class: "rounded-lg mb-3 icon-img-util"
                            }, null, 8, ["src"]),
                            createVNode("p", { class: "heading" }, toDisplayString(item.subHeading), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.supportedFhir.supportedFhirItems.row2, (item, index) => {
                      return openBlock(), createBlock(VCol, {
                        cols: "6",
                        lg: "3",
                        sm: "6",
                        class: "d-flex flex-column justify-center align-center",
                        key: index
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtImg, {
                            src: item.iconLink,
                            width: "auto",
                            height: "100%",
                            alt: "Icons",
                            format: "webp",
                            class: "rounded-lg mb-3 icon-img-util"
                          }, null, 8, ["src"]),
                          createVNode("p", { class: "heading" }, toDisplayString(item.subHeading), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { class: "d-flex justify-center align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-center"${_scopeId2}>${ssrInterpolate(unref(home).sections.supportedFhir.para2)}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.supportedFhir.para2), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, {
                class: "d-flex justify-center align-center",
                style: { "margin-bottom": "2rem" }
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    lg: "10",
                    sm: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.supportedFhir.heading), 1),
                      createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.supportedFhir.content), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, {
                class: "d-flex justify-center align-center",
                style: { "margin-bottom": "2rem" }
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.supportedFhir.supportedFhirItems.row1, (item, index) => {
                    return openBlock(), createBlock(VCol, {
                      cols: "6",
                      lg: "3",
                      sm: "6",
                      class: "d-flex flex-column justify-center align-center",
                      key: index
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtImg, {
                          src: item.iconLink,
                          width: "auto",
                          height: "100%",
                          alt: "Icons",
                          format: "webp",
                          class: "rounded-lg mb-3 icon-img-util"
                        }, null, 8, ["src"]),
                        createVNode("p", { class: "heading" }, toDisplayString(item.subHeading), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(VRow, {
                class: "d-flex justify-center align-center",
                style: { "margin-bottom": "4rem" }
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.supportedFhir.supportedFhirItems.row2, (item, index) => {
                    return openBlock(), createBlock(VCol, {
                      cols: "6",
                      lg: "3",
                      sm: "6",
                      class: "d-flex flex-column justify-center align-center",
                      key: index
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtImg, {
                          src: item.iconLink,
                          width: "auto",
                          height: "100%",
                          alt: "Icons",
                          format: "webp",
                          class: "rounded-lg mb-3 icon-img-util"
                        }, null, 8, ["src"]),
                        createVNode("p", { class: "heading" }, toDisplayString(item.subHeading), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(VRow, { class: "d-flex justify-center align-center" }, {
                default: withCtx(() => [
                  createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.supportedFhir.para2), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="why-meditab-fhir padding-custom-util">`);
      _push(ssrRenderComponent(VContainer, {
        "max-width": "1100px",
        class: "d-flex flex-column justify-center align-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              class: "d-flex justify-center align-center",
              style: { "margin-bottom": "2rem" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    lg: "10",
                    sm: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-center heading"${_scopeId3}>${ssrInterpolate(unref(home).sections.secureDesign.heading)}</h2><p class="text-center"${_scopeId3}>${ssrInterpolate(unref(home).sections.secureDesign.content)}</p>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.secureDesign.heading), 1),
                          createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.secureDesign.content), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      lg: "10",
                      sm: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.secureDesign.heading), 1),
                        createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.secureDesign.content), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, {
              class: "d-flex justify-center align-center",
              style: { "margin-bottom": "2rem", "max-width": "800px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    lg: "7",
                    sm: "12",
                    cols: "12",
                    class: "d-flex justify-center align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtImg, {
                          src: "/Home/Secure by Design.png",
                          width: "auto",
                          height: "100%",
                          alt: "why Meditab",
                          format: "webp",
                          class: "rounded-lg column-img-util"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtImg, {
                            src: "/Home/Secure by Design.png",
                            width: "auto",
                            height: "100%",
                            alt: "why Meditab",
                            format: "webp",
                            class: "rounded-lg column-img-util"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    lg: "5",
                    sm: "12",
                    cols: "12",
                    class: "d-flex flex-column justify-center align-start"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<ul${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(home).sections.secureDesign.secureDesignItems, (item, index) => {
                          _push4(`<li class="mb-4"${_scopeId3}>${ssrInterpolate(item.subPara)}</li>`);
                        });
                        _push4(`<!--]--></ul>`);
                      } else {
                        return [
                          createVNode("ul", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.secureDesign.secureDesignItems, (item, index) => {
                              return openBlock(), createBlock("li", {
                                class: "mb-4",
                                key: index
                              }, toDisplayString(item.subPara), 1);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      lg: "7",
                      sm: "12",
                      cols: "12",
                      class: "d-flex justify-center align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtImg, {
                          src: "/Home/Secure by Design.png",
                          width: "auto",
                          height: "100%",
                          alt: "why Meditab",
                          format: "webp",
                          class: "rounded-lg column-img-util"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      lg: "5",
                      sm: "12",
                      cols: "12",
                      class: "d-flex flex-column justify-center align-start"
                    }, {
                      default: withCtx(() => [
                        createVNode("ul", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.secureDesign.secureDesignItems, (item, index) => {
                            return openBlock(), createBlock("li", {
                              class: "mb-4",
                              key: index
                            }, toDisplayString(item.subPara), 1);
                          }), 128))
                        ])
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
              createVNode(VRow, {
                class: "d-flex justify-center align-center",
                style: { "margin-bottom": "2rem" }
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    lg: "10",
                    sm: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-center heading" }, toDisplayString(unref(home).sections.secureDesign.heading), 1),
                      createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.secureDesign.content), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, {
                class: "d-flex justify-center align-center",
                style: { "margin-bottom": "2rem", "max-width": "800px" }
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    lg: "7",
                    sm: "12",
                    cols: "12",
                    class: "d-flex justify-center align-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtImg, {
                        src: "/Home/Secure by Design.png",
                        width: "auto",
                        height: "100%",
                        alt: "why Meditab",
                        format: "webp",
                        class: "rounded-lg column-img-util"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    lg: "5",
                    sm: "12",
                    cols: "12",
                    class: "d-flex flex-column justify-center align-start"
                  }, {
                    default: withCtx(() => [
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(home).sections.secureDesign.secureDesignItems, (item, index) => {
                          return openBlock(), createBlock("li", {
                            class: "mb-4",
                            key: index
                          }, toDisplayString(item.subPara), 1);
                        }), 128))
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
      }, _parent));
      _push(`</section><section class="supported-fhir-resources padding-custom-util">`);
      _push(ssrRenderComponent(VContainer, { "max-width": "1100px" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "d-flex justify-center align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    lg: "8",
                    sm: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-center heading mb-3"${_scopeId3}>${ssrInterpolate(unref(home).sections.whatNext.heading)}</h2><p class="text-center"${_scopeId3}>${ssrInterpolate(unref(home).sections.whatNext.content)}</p>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-center heading mb-3" }, toDisplayString(unref(home).sections.whatNext.heading), 1),
                          createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.whatNext.content), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      lg: "8",
                      sm: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-center heading mb-3" }, toDisplayString(unref(home).sections.whatNext.heading), 1),
                        createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.whatNext.content), 1)
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
              createVNode(VRow, { class: "d-flex justify-center align-center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    lg: "8",
                    sm: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-center heading mb-3" }, toDisplayString(unref(home).sections.whatNext.heading), 1),
                      createVNode("p", { class: "text-center" }, toDisplayString(unref(home).sections.whatNext.content), 1)
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
      _push(`</section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D18mX4-N.mjs.map

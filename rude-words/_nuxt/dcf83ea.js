(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{359:function(t,n,o){"use strict";o.r(n);o(25),o(13);var e={name:"Counter",components:{NewWordSelection:function(){return Promise.resolve().then(o.bind(null,375))}},props:{wordsCount:{type:Number,default:0},words:{type:Array,default:null}},data:function(){return{displayOverlay:!1}},methods:{wordCountAdded:function(t){this.displayOverlay=!1}}},r=o(81),d=o(111),l=o.n(d),c=o(383),v=o(361),w=o(379),f=o(156),h=o(362),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"counter"},[o("p",{staticClass:"font-weight-regular text-uppercase overline mb-1"},[t._v("\n    Tomášek řekl\n  ")]),t._v(" "),o("v-row",{attrs:{align:"center"}},[o("v-col",{attrs:{cols:"8"}},[o("p",{staticClass:"text-h1 font-weight-medium mb-0"},[t._v("\n        "+t._s(t.wordsCount)+"\n      ")])]),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("v-dialog",{attrs:{persistent:"","max-width":"300"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on,r=n.attrs;return[o("v-btn",t._g(t._b({attrs:{"x-large":""}},"v-btn",r,!1),e),[o("v-icon",[t._v("\n              mdi-plus\n            ")])],1)]}}]),model:{value:t.displayOverlay,callback:function(n){t.displayOverlay=n},expression:"displayOverlay"}},[t._v(" "),o("new-word-selection",t._g({attrs:{words:t.words},on:{wordCountAdded:t.wordCountAdded}},t.$listeners))],1)],1)],1),t._v(" "),o("p",{staticClass:"text-h5"},[t._v("\n    Sprostých slov\n  ")])],1)}),[],!1,null,"471df7ac",null);n.default=component.exports;l()(component,{NewWordSelection:o(375).default}),l()(component,{VBtn:c.a,VCol:v.a,VDialog:w.a,VIcon:f.a,VRow:h.a})},375:function(t,n,o){"use strict";o.r(n);var e={name:"NewWordSelection",props:{words:{type:Array,default:null}},methods:{wordChosen:function(t){var n=this;this.$axios.put("/word",{word:t}).then((function(o){200===o.status&&n.$emit("wordCountAdded",t)}))}}},r=o(81),d=o(111),l=o.n(d),c=o(383),v=o(360),w=o(354),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("\n    Tom řekl sprosté slovo\n  ")]),t._v(" "),o("v-card-text",t._l(t.words,(function(n){return o("v-btn",{key:n.name,staticClass:"my-2",attrs:{elevation:"2",block:""},on:{click:function(o){return t.wordChosen(n.name)}}},[t._v("\n      "+t._s(n.name)+"\n    ")])})),1)],1)}),[],!1,null,"366242fb",null);n.default=component.exports;l()(component,{VBtn:c.a,VCard:v.a,VCardText:w.a,VCardTitle:w.b})},381:function(t,n,o){"use strict";o.r(n);o(8),o(28),o(13),o(9);var e={components:{Counter:o(359).default,WordsList:function(){return o.e(7).then(o.bind(null,380))}},data:function(){return{words:[],paid:0}},computed:{totalCount:function(){var t=0;return this.words.forEach((function(n){t+=n.price*n.count})),t},priceToPay:function(){return this.totalCount-this.paid},wordsCount:function(){var t=0;return this.words.forEach((function(n){t+=n.count})),t}},mounted:function(){var t=this;this.$axios.get("/words").then((function(n){t.words=n.data})),this.$axios.get("/paied").then((function(n){t.paid=n.data}))},methods:{wordCountAdded:function(t){this.words.forEach((function(n){n.name===t&&n.count++}))},pricePayed:function(){var t=this;this.$axios.put("/paied",{price:this.priceToPay}).then((function(n){200===n.status&&(t.paid+=t.priceToPay)}))}}},r=o(81),d=o(111),l=o.n(d),c=o(383),v=o(360),w=o(361),f=o(362),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-row",{attrs:{justify:"center",align:"center"}},[o("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[o("Counter",{staticClass:"mb-6",attrs:{"words-count":t.wordsCount,words:t.words},on:{wordCountAdded:t.wordCountAdded}}),t._v(" "),o("v-card",{staticClass:"rounded-lg outlined py-5  px-6"},[o("p",{staticClass:"button mb-1"},[t._v("\n        Částka k zaplacení\n      ")]),t._v(" "),o("v-row",{attrs:{justify:"space-between"}},[o("v-col",{attrs:{cols:"6"}},[o("p",{staticClass:"text-h4 font-weight-bold mb-0"},[t._v("\n            "+t._s(t.priceToPay)+" Kč\n          ")])]),t._v(" "),o("v-col",{attrs:{cols:"auto"}},[o("v-btn",{on:{click:t.pricePayed}},[t._v("\n            Vynulovat\n          ")])],1)],1)],1),t._v(" "),o("v-card",{staticClass:"rounded-lg outlined py-5 px-6 mt-6"},[o("p",{staticClass:"button mb-1"},[t._v("\n        Celkově zaplaceno\n      ")]),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"8"}},[o("p",{staticClass:"text-h4 font-weight-bold mb-0"},[t._v("\n            "+t._s(t.paid)+" Kč\n          ")])])],1)],1),t._v(" "),o("WordsList",{attrs:{words:t.words}})],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{Counter:o(359).default}),l()(component,{VBtn:c.a,VCard:v.a,VCol:w.a,VRow:f.a})}}]);
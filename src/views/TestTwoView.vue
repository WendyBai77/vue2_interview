<template lang="pug">
.test2
  div(v-if="filterShowData.length > 0")
    ul
      li(v-for="exhibition in filterShowData" :key="exhibition.UID")
        h1 {{ exhibition.title }}
        div(class="exhibition-bottom")
          p
            span {{ exhibition.startDate }} ~ {{ exhibition.endDate }}
          a(v-if="exhibition.webSales" :href="exhibition.webSales" target="_blank") 連結
  template(v-else)
    h2 無相符展覽資訊

</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "TestTwoView",
  computed: {
    ...mapState("homework", ["showData"]),
    filterShowData() {
      // masterUnit包含「國立歷史博物館」的展覽資訊
      return this.showData.filter((exhibition) => exhibition.masterUnit.includes("國立歷史博物館"));
    },
  },
  methods: {
    // 取得 actions 裡面的方法，後續觸發getShowData() 獲得藝文展覽API
    ...mapActions("homework",["getShowData"]),
  },
  mounted() {
    this.getShowData();
  },
};
</script>

<style lang="scss" scoped>
/* css reset 開始 */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
}

ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
/* css reset 結束 */

.test2 {
  max-width: 700px;
}

li {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
}

.exhibition-bottom {
  display: flex;
  justify-content: space-between;
}

h1,
h2,
span {
  color: #4d4d4d;
}

h1,
h2 {
  font-size: 20px;
}

h1 {
  text-align: left;
  margin-bottom: 0.8rem;
}

a {
  display: inline-block;
  width: 3rem;
  background-color: #5f9384;
  color: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  right: 6px;
  bottom: 6px;

  &:hover {
    opacity: 0.8;
  }
}

@media (max-width: 400px) {
  a {
    width: 3rem;
    margin: 10px 0;
  }
  .exhibition-bottom {
    flex-direction: column;
    align-items: center;
  }
}
</style>

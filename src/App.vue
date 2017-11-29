<template>
	<div id="app" class="app">
    
		<router-view></router-view>
	
  	</div>
</template>

<script>
export default {
  name: "app"
};
</script>


<style>
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
header,
nav,
section,
main,
article,
aside {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
li {
  list-style: none;
}
img {
  border: none;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
.fl{
	float: left;
}
.fr{
	float: right;
}

#app {
	/* font-family: "Avenir", Helvetica, Arial, sans-serif; */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 14px;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;    
}
</style>

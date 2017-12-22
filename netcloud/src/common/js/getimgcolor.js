/**
* 获取图片主次色
* @param n window
* @param t 母鸡啊
*/
!function(n, t) {
	"use strict";
	var e = function(n, t) {
		var e = document.createElement("canvas");
		return e.setAttribute("width", n),
		e.setAttribute("height", t),
		e.getContext("2d")
	},
	r = function(n, t) {
		var r = new Image,
		i = n.src || n;
		"data:" !== i.substring(0, 5) && (r.crossOrigin = "Anonymous"),
		r.onload = function() {
			var n = e(r.width, r.height);
			n.drawImage(r, 0, 0);
			var i = n.getImageData(0, 0, r.width, r.height);
			t && t(i.data)
		},
		r.src = i
	},
	i = function(n) {
		return ["rgb(", n, ")"].join("")
	},
	a = function(n) {
		var t = [];
		for (var e in n) t.push(o(e, n[e]));
		return t.sort(function(n, t) {
			return t.count - n.count
		}),
		t
	},
	u = function(n, t) {
		if (n.length > t) return n.slice(0, t);
		for (var e = n.length - 1; t - 1 > e; e++) n.push(o("0,0,0", 0));
		return n
	},
	o = function(n, t) {
		return {
			name: i(n),
			count: t
		}
	},
	c = 10,
	s = {};
	s.colors = function(n, e) {
		e = e || {};
		var o = e.exclude || [],
		s = e.paletteSize || c;
		r(n,
		function(n) {
			for (var r = {},
			c = "",
			f = [], d = 0; d < n.length; d += 4) f[0] = n[d],
			f[1] = n[d + 1],
			f[2] = n[d + 2],
			c = f.join(","),
			-1 === f.indexOf(t) && 0 !== n[d + 3] && -1 === o.indexOf(i(c)) && (r[c] = c in r ? r[c] + 1 : 1);
			if (e.success) {
				var g = u(a(r), s + 1);
				e.success({
					dominant: g[0].name,
					secondary: g[1].name,
					palette: g.map(function(n) {
						return n.name
					}).slice(1)
				})
			}
		})
	},
	n.RGBaster = n.RGBaster || s
} (window);
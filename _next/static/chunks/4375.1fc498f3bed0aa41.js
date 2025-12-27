"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4375], {
    74375: (e, t, r) => {
        r.r(t),
        r.d(t, {
            default: () => h
        });
        var l = r(12115)
          , n = r(73321);
        let a = "data-language-alternates"
          , h = ({baseUrl: e="https://undress.zone", defaultLanguage: t="en-US", languages: r}) => {
            let h = (0,
            n.usePathname)()
              , s = e.endsWith("/") ? e.slice(0, -1) : e
              , u = e => e && "/" !== e ? e.startsWith("/") ? e : `/${e}` : "/"
              , f = Object.entries(r).filter( ([e]) => e !== t && "x-default" !== e).map( ([,e]) => u(e)).sort( (e, t) => t.length - e.length)
              , c = h || "/";
            for (let e of f)
                if ("/" !== e && c.startsWith(e)) {
                    c = c.slice(e.length) || "/";
                    break
                }
            return (0,
            l.useEffect)( () => {
                let e, l;
                if ("undefined" == typeof document)
                    return;
                let n = document.head
                  , f = [];
                n.querySelectorAll(`link[${a}]`).forEach(e => e.parentNode?.removeChild(e));
                let i = e => {
                    let t = u(e);
                    return "/" === t ? `${s}${"/" === c ? "" : c}` : `${s}${t}${"/" === c ? "" : c}`
                }
                  , o = (e = t,
                l = 0,
                Object.entries(r).forEach( ([t,r]) => {
                    let n = u(r);
                    "/" !== n && h.startsWith(n) && n.length > l && (e = t,
                    l = n.length)
                }
                ),
                e)
                  , d = e => {
                    let t = document.createElement("link");
                    t.setAttribute(a, "true"),
                    e(t),
                    n.appendChild(t),
                    f.push(t)
                }
                ;
                return d(e => {
                    e.rel = "alternate",
                    e.hreflang = o,
                    e.href = i(r[o] ?? "/")
                }
                ),
                d(e => {
                    e.rel = "alternate",
                    e.hreflang = "x-default",
                    e.href = i(r[t] ?? "/")
                }
                ),
                Object.entries(r).forEach( ([e,t]) => {
                    e !== o && d(r => {
                        r.rel = "alternate",
                        r.hreflang = e,
                        r.href = i(t)
                    }
                    )
                }
                ),
                document.querySelector('link[rel="canonical"]') || d(e => {
                    e.rel = "canonical",
                    e.href = `${s}${"/" === h ? "" : h}`
                }
                ),
                () => {
                    f.forEach(e => e.parentNode?.removeChild(e))
                }
            }
            , [h, s, t, r, c]),
            null
        }
    }
}]);

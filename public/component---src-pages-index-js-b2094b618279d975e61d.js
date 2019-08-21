(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    233: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(266),
        i = (n(25), n(26), n(13), n(50), n(146), n(40), n(304)),
        c = n(238),
        l = n(235),
        m = n(407),
        s = n(239),
        u = n(240),
        d = n(314),
        g = n(234),
        p = n(279),
        M = n.n(p),
        f = Object(g.default)(l.Link).withConfig({
          displayName: 'SocialLink__IconLink',
          componentId: 'sc-13bp2vw-0',
        })(
          [
            'transition:color 0.5s;color:',
            ';text-decoration:none;&:hover{color:',
            ';}',
          ],
          function(e) {
            return e.theme.colors[e.color] || e.theme.colors.primary;
          },
          function(e) {
            return e.theme.colors.primaryLight;
          },
        ),
        h = function(e) {
          var t = e.fontAwesomeIcon,
            n = e.name,
            a = e.url,
            o = e.color;
          return r.a.createElement(
            d.Tooltip,
            { title: n, position: 'bottom', trigger: 'mouseenter' },
            r.a.createElement(
              f,
              {
                href: a,
                target: '_blank',
                color: o,
                rel: 'noreferrer',
                'aria-label': n,
              },
              r.a.createElement(M.a, { name: t }),
            ),
          );
        },
        w = g.default.svg.withConfig({
          displayName: 'MouseIcon__MouseContainer',
          componentId: 'xyrakf-0',
        })(['max-width:2.5rem;width:100%;height:auto;']),
        y = g.default.span.withConfig({
          displayName: 'MouseIcon__ScrollLink',
          componentId: 'xyrakf-1',
        })([
          'position:absolute;bottom:1rem;left:50%;transform:translateX(-50%);cursor:pointer;@media only screen and (max-width:700px){display:none;}',
        ]),
        b = Object(g.keyframes)([
          '0%,20%{transform:translateY(0) scaleY(1);}10%{opacity:1;}100%{transform:translateY(36px) scaleY(2);opacity:0.01;}',
        ]),
        N = g.default.rect
          .attrs(function(e) {
            return { stroke: e.theme.colors.primary, strokeWidth: '3' };
          })
          .withConfig({
            displayName: 'MouseIcon__Mouse',
            componentId: 'xyrakf-2',
          })(['']),
        j = g.default.circle.withConfig({
          displayName: 'MouseIcon__Scroll',
          componentId: 'xyrakf-3',
        })(
          [
            'animation-name:',
            ';animation-duration:1.5s;animation-timing-function:cubic-bezier(0.65,-0.55,0.25,1.5);animation-iteration-count:infinite;transform-origin:50% 20.5px;will-change:transform;fill:',
            ';',
          ],
          b,
          function(e) {
            return e.theme.colors.primary;
          },
        ),
        x = function(e) {
          var t = e.onClick;
          return r.a.createElement(
            y,
            { onClick: t },
            r.a.createElement(
              w,
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 76 130' },
              r.a.createElement(
                'g',
                { fill: 'none' },
                r.a.createElement(N, {
                  width: '70',
                  height: '118',
                  x: '1.5',
                  y: '1.5',
                  rx: '36',
                }),
                r.a.createElement(j, { cx: '36.5', cy: '31.5', r: '4.5' }),
              ),
            ),
          );
        },
        D = n(241);
      var E = function() {
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(D.a, {
              color: 'backgroundDark',
              height: ['35vh', '80vh'],
              width: ['95vw', '60vw'],
            }),
            r.a.createElement(D.a, {
              color: 'secondary',
              height: ['38vh', '80vh'],
              width: ['50vw', '35vw'],
            }),
            r.a.createElement(D.a, {
              color: 'primaryDark',
              height: ['25vh', '35vh'],
              width: ['75vw', '60vw'],
              invertX: !0,
            }),
            r.a.createElement(D.a, {
              color: 'backgroundDark',
              height: ['20vh', '20vh'],
              width: ['100vw', '100vw'],
              invertX: !0,
              invertY: !0,
            }),
          );
        },
        T = { marginRight: 'auto', marginLeft: 'auto' },
        I = function() {
          return r.a.createElement(
            u.a.Container,
            { id: 'home', Background: E },
            r.a.createElement(c.a, {
              query: '1608748843',
              render: function(e) {
                var t = e.contentfulAbout,
                  n = t.name,
                  o = t.socialLinks,
                  i = t.roles;
                return r.a.createElement(
                  a.Fragment,
                  null,
                  r.a.createElement(
                    l.Heading,
                    {
                      textAlign: 'center',
                      as: 'h2',
                      color: 'primary',
                      fontSize: [5, 6, 8],
                      mb: [2, 3, 4],
                    },
                    "Hello, I'm " + n + '!',
                  ),
                  r.a.createElement(
                    l.Heading,
                    {
                      as: 'h2',
                      color: 'primary',
                      fontSize: [4, 5, 6],
                      mb: [3, 5],
                      textAlign: 'center',
                      style: T,
                    },
                    r.a.createElement(
                      m.a,
                      { interval: 5e3 },
                      i
                        .sort(function() {
                          return Math.random() - 0.5;
                        })
                        .map(function(e) {
                          return r.a.createElement(
                            l.Text,
                            { width: [300, 500], key: e },
                            e,
                          );
                        }),
                    ),
                  ),
                  r.a.createElement(
                    l.Flex,
                    {
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    },
                    o.map(function(e) {
                      var t = e.id,
                        n = (function(e, t) {
                          if (null == e) return {};
                          var n,
                            a,
                            r = {},
                            o = Object.keys(e);
                          for (a = 0; a < o.length; a++)
                            (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                          return r;
                        })(e, ['id']);
                      return r.a.createElement(
                        l.Box,
                        { mx: 3, fontSize: [5, 6, 6], key: t },
                        r.a.createElement(h, n),
                      );
                    }),
                  ),
                  r.a.createElement(s.c, { section: 'about' }, function(e) {
                    var t = e.onClick;
                    return r.a.createElement(x, { onClick: t });
                  }),
                );
              },
              data: i,
            }),
          );
        },
        k = n(317),
        L = n(318),
        v = n.n(L),
        z = n(246),
        C = n.n(z),
        O =
          (n(399),
          g.default.a.withConfig({
            displayName: 'MarkdownRenderer__StyledLink',
            componentId: 'sc-18jt37u-0',
          })(
            [
              "display:inline-block;transition:color 250ms,text-shadow 250ms;color:black;cursor:pointer;position:relative;&:after{position:absolute;z-index:-1;bottom:-1px;left:50%;transform:translateX(-50%);content:'';width:100%;height:3px;background-color:",
              ';transition:all 250ms;}&:hover{color:white;&::after{height:110%;width:110%;}}',
            ],
            function(e) {
              return e.theme.colors.primaryLight;
            },
          )),
        A = g.default.p.withConfig({
          displayName: 'MarkdownRenderer__MarkdownParagraph',
          componentId: 'sc-18jt37u-1',
        })(['line-height:2em;&:first-child{margin-top:0em;}']),
        S = g.default.ul.withConfig({
          displayName: 'MarkdownRenderer__MarkdownList',
          componentId: 'sc-18jt37u-2',
        })(['margin:0;']),
        Y = g.default.li.withConfig({
          displayName: 'MarkdownRenderer__MarkdownListItem',
          componentId: 'sc-18jt37u-3',
        })(['margin:1em 0;line-height:2em;']),
        Q = {
          paragraph: function(e) {
            return r.a.createElement(A, e);
          },
          list: function(e) {
            return r.a.createElement(S, e);
          },
          listItem: function(e) {
            return r.a.createElement(Y, e);
          },
          link: function(e) {
            var t = e.href,
              n = e.children;
            return t.startsWith('#')
              ? r.a.createElement(
                  s.c,
                  { section: t.substring(1, t.length) },
                  function(e) {
                    var t = e.onClick;
                    return r.a.createElement(O, { onClick: t }, n);
                  },
                )
              : r.a.createElement(
                  O,
                  { href: t, target: '_blank', rel: 'noreferrer' },
                  n,
                );
          },
        },
        U = function() {
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(D.a, {
              color: 'secondaryLight',
              height: ['50vh', '20vh'],
              width: ['50vw', '50vw'],
              invertY: !0,
            }),
            r.a.createElement(D.a, {
              color: 'primaryDark',
              height: ['20vh', '40vh'],
              width: ['75vw', '70vw'],
              invertX: !0,
            }),
            r.a.createElement(D.a, {
              color: 'backgroundDark',
              height: ['25vh', '20vh'],
              width: ['100vw', '100vw'],
            }),
          );
        },
        _ = Object(g.default)(l.Image).withConfig({
          displayName: 'About__ProfilePicture',
          componentId: 'sc-1epo0wx-0',
        })([
          'border-radius:50%;transition:all 0.25s ease-out;&:hover{border-radius:20%;}',
        ]),
        G = function() {
          return r.a.createElement(
            u.a.Container,
            { id: 'about', Background: U },
            r.a.createElement(u.a.Header, {
              name: 'About me',
              icon: '🙋‍♂️',
              label: 'person',
            }),
            r.a.createElement(c.a, {
              query: '1331387878',
              render: function(e) {
                var t = e.contentfulAbout,
                  n = t.aboutMe,
                  a = t.profile;
                return r.a.createElement(
                  l.Flex,
                  {
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  },
                  r.a.createElement(
                    l.Box,
                    { width: [1, 1, 4 / 6], px: [1, 2, 4] },
                    r.a.createElement(
                      C.a,
                      { bottom: !0 },
                      r.a.createElement(v.a, {
                        source: n.childMarkdownRemark.rawMarkdownBody,
                        renderers: Q,
                      }),
                    ),
                  ),
                  r.a.createElement(
                    l.Box,
                    {
                      width: [1, 1, 2 / 6],
                      style: { maxWidth: '300px', margin: 'auto' },
                    },
                    r.a.createElement(
                      C.a,
                      { right: !0 },
                      r.a.createElement(_, {
                        src: a.image.src,
                        alt: a.title,
                        mt: [4, 4, 0],
                        ml: [0, 0, 1],
                      }),
                    ),
                  ),
                );
              },
              data: k,
            }),
          );
        },
        P = n(400),
        Z = g.default.div.withConfig({
          displayName: 'Card__CardContainer',
          componentId: 'sc-1ta9k8w-0',
        })(
          [
            'display:grid;grid-gap:30px;grid-template-columns:repeat( auto-fill,minmax(',
            ',1fr) );justify-items:center;@media only screen and (max-width:400px){grid-template-columns:repeat(auto-fill,minmax(280px,1fr));}',
          ],
          function(e) {
            return e.minWidth;
          },
        ),
        W = Object(g.default)(l.Card)
          .attrs({ bg: 'white', boxShadow: 0, borderRadius: 8 })
          .withConfig({ displayName: 'Card', componentId: 'sc-1ta9k8w-1' })(
          [
            'position:relative;box-shadow:0 2px 2px rgba(0,0,0,0.2);transition:all 0.25s;top:0;height:100%;cursor:',
            ';&:hover{top:-10px;box-shadow:0 12px 16px rgba(0,0,0,0.2);}',
          ],
          function(e) {
            return e.onClick ? 'pointer' : 'default';
          },
        ),
        B = n(51),
        q = n.n(B),
        F = {
          'top-left':
            'polygon(0 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%);',
          'top-right': 'polygon(0 0%, 100% 0%, 100% 100%, 20px 100%);',
          'bottom-right': 'polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%);',
          'bottom-left':
            'polygon(0 0%, calc(100% - 20px) 0%, 100% 100%, 0% 100%);',
        },
        H = {
          'top-left': '8px 0 0 0',
          'top-right': '0 8px 0 0',
          'bottom-right': '0 0 8px 0',
          'bottom-left': '0 0 0 8px',
        },
        R = Object(g.default)(l.Box).withConfig({
          displayName: 'ImageSubtitle',
          componentId: 'sc-1e7i66g-0',
        })(
          [
            'position:absolute;display:inline;padding:10px;font-size:14px;font-weight:600;text-transform:uppercase;',
            ':0;',
            ':0;',
            ' clip-path:',
            ';',
            '',
          ],
          function(e) {
            return e.x;
          },
          function(e) {
            return e.y;
          },
          function(e) {
            return 'left' === e.x
              ? 'padding-right: 20px;'
              : 'padding-left: 20px;';
          },
          function(e) {
            return F[e.y + '-' + e.x];
          },
          function(e) {
            return e.round && 'border-radius: ' + H[e.y + '-' + e.x] + ';';
          },
        );
      (R.propTypes = {
        x: q.a.oneOf(['left', 'right']),
        y: q.a.oneOf(['top', 'bottom']),
        round: q.a.bool,
      }),
        (R.defaultProps = { x: 'left', y: 'top', round: !1 });
      var V = R,
        X = {
          xs: '@media screen and (max-width: 40em)',
          sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
          md: '@media screen and (min-width: 52em) and (max-width: 64em)',
          lg: '@media screen and (min-width: 64em)',
        },
        J = function(e) {
          return function(t) {
            var n;
            return t[e] && (((n = {})[X[e]] = { display: 'none' }), n);
          };
        },
        K = J('xs'),
        $ = J('sm'),
        ee = J('md'),
        te = J('lg'),
        ne = g.default.div.withConfig({
          displayName: 'Hide',
          componentId: 'sc-148ocpz-0',
        })([], K, $, ee, te, function(e) {
          var t;
          return e.query && (((t = {})[e.query] = { display: 'none' }), t);
        }),
        ae = function() {
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(D.a, {
              color: 'secondaryLight',
              height: ['80vh', '80vh'],
              width: ['100vw', '100vw'],
              invertX: !0,
            }),
            r.a.createElement(D.a, {
              color: 'background',
              height: ['50vh', '20vh'],
              width: ['50vw', '50vw'],
              invertX: !0,
            }),
            r.a.createElement(D.a, {
              color: 'primaryDark',
              height: ['25vh', '40vh'],
              width: ['75vw', '60vw'],
              invertX: !0,
              invertY: !0,
            }),
            r.a.createElement(D.a, {
              color: 'backgroundDark',
              height: ['25vh', '20vh'],
              width: ['100vw', '100vw'],
              invertY: !0,
            }),
          );
        },
        re = '@media (max-width: 400px)',
        oe = Object(g.default)(l.Text).withConfig({
          displayName: 'Projects__Title',
          componentId: 'mcap94-0',
        })(
          [
            'font-size:14px;font-weight:600;text-transform:uppercase;display:table;border-bottom:',
            ' 5px solid;',
          ],
          function(e) {
            return e.theme.colors.primary;
          },
        ),
        ie = g.default.div.withConfig({
          displayName: 'Projects__TextContainer',
          componentId: 'mcap94-1',
        })(
          [
            'display:flex;flex-direction:column;padding:10px;width:100%;width:calc(100% - ',
            ');',
            '{width:calc(100% - (',
            ' / 2));}',
          ],
          '200px',
          re,
          '200px',
        ),
        ce = g.default.div.withConfig({
          displayName: 'Projects__ImageContainer',
          componentId: 'mcap94-2',
        })(
          ['margin:auto;width:', ';', '{width:calc(', ' / 2);}'],
          '200px',
          re,
          '200px',
        ),
        le = Object(g.default)(l.Image).withConfig({
          displayName: 'Projects__ProjectImage',
          componentId: 'mcap94-3',
        })(
          [
            'width:',
            ';height:',
            ';padding:40px;margin-top:0px;',
            '{height:calc(',
            ' / 2);width:calc(',
            ' / 2);margin-top:calc(',
            ' / 4);padding:10px;}',
          ],
          '200px',
          '200px',
          re,
          '200px',
          '200px',
          '200px',
        ),
        me = g.default.div.withConfig({
          displayName: 'Projects__ProjectTag',
          componentId: 'mcap94-4',
        })(
          [
            'position:relative;height:',
            ';top:calc( -',
            ' - 3.5px );',
            '{top:calc(-',
            ' - 3.5px + (',
            ' / 4));}',
          ],
          '200px',
          '200px',
          re,
          '200px',
          '200px',
        ),
        se = function(e) {
          var t = e.name,
            n = e.description,
            a = e.projectUrl,
            o = e.repositoryUrl,
            i = e.type,
            c = e.publishedDate,
            m = e.logo;
          return r.a.createElement(
            W,
            { p: 0 },
            r.a.createElement(
              l.Flex,
              { style: { height: '200px' } },
              r.a.createElement(
                ie,
                null,
                r.a.createElement(
                  'span',
                  null,
                  r.a.createElement(oe, { my: 2, pb: 1 }, t),
                ),
                r.a.createElement(
                  l.Text,
                  { width: [1], style: { overflow: 'auto' } },
                  n,
                ),
              ),
              r.a.createElement(
                ce,
                null,
                r.a.createElement(le, { src: m.image.src, alt: m.title }),
                r.a.createElement(
                  me,
                  null,
                  r.a.createElement(
                    l.Flex,
                    { style: { float: 'right' } },
                    r.a.createElement(
                      l.Box,
                      { mx: 1, fontSize: 5 },
                      r.a.createElement(h, {
                        name: 'Check repository',
                        fontAwesomeIcon: 'github',
                        url: o,
                      }),
                    ),
                    r.a.createElement(
                      l.Box,
                      { mx: 1, fontSize: 5 },
                      r.a.createElement(h, {
                        name: 'See project',
                        fontAwesomeIcon: 'globe',
                        url: a,
                      }),
                    ),
                  ),
                  r.a.createElement(
                    V,
                    {
                      bg: 'primary',
                      color: 'white',
                      y: 'bottom',
                      x: 'right',
                      round: !0,
                    },
                    i,
                  ),
                  r.a.createElement(
                    ne,
                    { query: re },
                    r.a.createElement(V, { bg: 'backgroundDark' }, c),
                  ),
                ),
              ),
            ),
          );
        },
        ue = function() {
          return r.a.createElement(
            u.a.Container,
            { id: 'projects', Background: ae },
            r.a.createElement(u.a.Header, {
              name: 'Projects',
              icon: '💻',
              label: 'notebook',
            }),
            r.a.createElement(c.a, {
              query: '3598858759',
              render: function(e) {
                var t = e.contentfulAbout;
                return r.a.createElement(
                  Z,
                  { minWidth: '350px' },
                  t.projects.map(function(e, t) {
                    return r.a.createElement(
                      C.a,
                      { bottom: !0, delay: 200 * t, key: e.id },
                      r.a.createElement(se, e),
                    );
                  }),
                );
              },
              data: P,
            }),
          );
        },
        de = (n(24), n(401));
      var ge = function() {
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(D.a, {
              color: 'backgroundDark',
              height: ['15vh', '10vh'],
              width: ['100vw', '100vw'],
              invertX: !0,
            }),
            r.a.createElement(D.a, {
              color: 'secondary',
              height: ['50vh', '40vh'],
              width: ['70vw', '40vw'],
              invertY: !0,
            }),
            r.a.createElement(D.a, {
              color: 'primaryDark',
              height: ['40vh', '15vh'],
              width: ['100vw', '100vw'],
              invertX: !0,
              invertY: !0,
            }),
          );
        },
        pe = g.default.img.withConfig({
          displayName: 'Writing__CoverImage',
          componentId: 'sc-1bgpzyr-0',
        })(['width:100%;object-fit:cover;']),
        Me = Object(g.default)(l.Heading).withConfig({
          displayName: 'Writing__EllipsisHeading',
          componentId: 'sc-1bgpzyr-1',
        })(
          [
            'overflow:hidden;text-overflow:ellipsis;display:-webkit-inline-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;border-bottom:',
            ' 5px solid;',
          ],
          function(e) {
            return e.theme.colors.primary;
          },
        ),
        fe = function(e) {
          var t = e.title,
            n = e.text,
            a = e.image,
            o = e.url,
            i = e.date,
            c = e.time;
          return r.a.createElement(
            W,
            {
              onClick: function() {
                return window.open(o, '_blank');
              },
              pb: 4,
            },
            r.a.createElement(Me, { m: 3, p: 1 }, t),
            a && r.a.createElement(pe, { src: a, height: '200px', alt: t }),
            r.a.createElement(l.Text, { m: 3 }, n),
            r.a.createElement(
              V,
              {
                bg: 'primary',
                color: 'white',
                x: 'right',
                y: 'bottom',
                round: !0,
              },
              i + ' - ' + Math.ceil(c) + ' min',
            ),
          );
        },
        he = function(e) {
          var t = e.username,
            n = e.name,
            a = e.number;
          return r.a.createElement(
            W,
            {
              onClick: function() {
                return window.open('https://medium.com/' + t + '/', '_blank');
              },
              p: 4,
            },
            r.a.createElement(
              l.Flex,
              {
                flexDirection: 'column',
                justifyContent: 'space-between',
                style: { height: '100%' },
              },
              r.a.createElement(
                l.Box,
                null,
                r.a.createElement(
                  Me,
                  { fontSize: 5, my: 2 },
                  'Hooray!  ',
                  r.a.createElement(
                    'span',
                    { role: 'img', 'aria-label': 'party' },
                    '🎉',
                  ),
                ),
                r.a.createElement(
                  l.Heading,
                  { lineHeight: 1.5 },
                  'It seems that',
                  r.a.createElement(l.Text, { color: 'secondary' }, n),
                  'has published ' + a + ' more posts!',
                ),
              ),
              r.a.createElement(
                l.Heading,
                { color: 'primary', mt: 5, textAlign: 'right' },
                'Go to Medium  ',
                r.a.createElement(M.a, {
                  name: 'arrow-right',
                  'aria-label': 'Go to Medium',
                }),
              ),
            ),
          );
        },
        we = function() {
          return r.a.createElement(c.a, {
            query: '2935304898',
            render: function(e) {
              var t,
                n = e.allMediumPost,
                a = e.site,
                o = e.author,
                i = ((t = n),
                t.edges.map(function(e) {
                  return e.node;
                })).map(
                  (function(e) {
                    return function(t) {
                      var n = t.id,
                        a = t.uniqueSlug,
                        r = t.createdAt,
                        o = t.title,
                        i = t.virtuals,
                        c =
                          i.previewImage.imageId &&
                          'https://cdn-images-1.medium.com/max/400/' +
                            i.previewImage.imageId;
                      return {
                        id: n,
                        title: o,
                        time: i.readingTime,
                        date: r,
                        text: i.subtitle,
                        image: c,
                        url: 'https://medium.com/' + e.username + '/' + a,
                        Component: fe,
                      };
                    };
                  })(o),
                ),
                c = n.totalCount - i.length;
              return (
                c > 0 &&
                  i.push(
                    Object.assign({}, o, {
                      id: 'more-field',
                      number: c,
                      Component: he,
                    }),
                  ),
                a.siteMetadata.isMediumUserDefined &&
                  r.a.createElement(
                    u.a.Container,
                    { id: 'writing', Background: ge },
                    r.a.createElement(u.a.Header, {
                      name: 'Writing',
                      icon: '✍️',
                      label: 'writing',
                    }),
                    r.a.createElement(
                      Z,
                      { minWidth: '300px' },
                      i.map(function(e) {
                        var t = e.Component,
                          n = (function(e, t) {
                            if (null == e) return {};
                            var n,
                              a,
                              r = {},
                              o = Object.keys(e);
                            for (a = 0; a < o.length; a++)
                              (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                          })(e, ['Component']);
                        return r.a.createElement(
                          C.a,
                          { bottom: !0, key: n.id },
                          r.a.createElement(
                            t,
                            Object.assign({}, n, { key: n.id }),
                          ),
                        );
                      }),
                    ),
                  )
              );
            },
            data: de,
          });
        },
        ye = (n(74), n(148), n(53), n(54), n(42), n(267), n(402)),
        be = n.n(ye),
        Ne = n(248),
        je = function(e) {
          var t = e.onClick,
            n = e.selected,
            a = e.children;
          return r.a.createElement(
            l.Box,
            { ml: [2, 3], color: 'background', fontSize: [2, 3] },
            r.a.createElement(Ne.a, { onClick: t, selected: n }, a),
          );
        },
        xe = n(404),
        De = n.n(xe);
      function Ee(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance',
            );
          })()
        );
      }
      var Te = Object(g.default)(be.a).withConfig({
          displayName: 'Header__HeaderContainer',
          componentId: 'sc-4ejxt5-0',
        })(
          ['.headroom--pinned{background:', ';}position:absolute;width:100%;'],
          function(e) {
            return e.theme.colors.primaryDark;
          },
        ),
        Ie = function() {
          return r.a.createElement(
            Te,
            null,
            r.a.createElement(
              C.a,
              { top: !0 },
              r.a.createElement(
                l.Flex,
                {
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 3,
                },
                r.a.createElement(s.d, null, function(e) {
                  var t = (function(e) {
                      return Object.entries(e).reduce(
                        function(e, t) {
                          var n,
                            a = t[0],
                            r = t[1];
                          return 'home' === a
                            ? Object.assign({}, e, { home: r })
                            : Object.assign({}, e, {
                                links: [].concat(Ee(e.links), [
                                  {
                                    name:
                                      ((n = a),
                                      n && n[0].toUpperCase() + n.slice(1)),
                                    value: r,
                                  },
                                ]),
                              });
                        },
                        { links: [], home: null },
                      );
                    })(e.allLinks),
                    n = t.home,
                    o = t.links,
                    i =
                      n &&
                      r.a.createElement(l.Image, {
                        src: De.a,
                        width: '50px',
                        alt: 'Portfolio Logo',
                        onClick: n.onClick,
                        style: { cursor: 'pointer' },
                      }),
                    c = o.map(function(e) {
                      var t = e.name,
                        n = e.value;
                      return r.a.createElement(
                        je,
                        { key: t, onClick: n.onClick, selected: n.selected },
                        t,
                      );
                    });
                  return r.a.createElement(
                    a.Fragment,
                    null,
                    i,
                    r.a.createElement(l.Flex, { mr: [0, 3, 5] }, c),
                  );
                }),
              ),
            ),
          );
        },
        ke = n(405);
      var Le = g.default.footer.withConfig({
          displayName: 'Footer__FooterContainer',
          componentId: 'sc-125l0ns-0',
        })([
          'min-width:320px;max-width:1366px;display:flex;flex:0 1 auto;flex-direction:row;justify-content:space-between;align-items:center;margin:auto;',
        ]),
        ve = Object(g.default)(l.Text).withConfig({
          displayName: 'Footer__TextFooter',
          componentId: 'sc-125l0ns-1',
        })(
          ['color:', ';& a{color:', ';}'],
          function(e) {
            return e.theme.colors.background;
          },
          function(e) {
            return e.theme.colors.background;
          },
        ),
        ze = function() {
          return r.a.createElement(c.a, {
            query: '1394511336',
            render: function(e) {
              var t = e.contentfulAbout,
                n = t.name,
                a = t.socialLinks;
              return r.a.createElement(
                l.Box,
                { p: 3, backgroundColor: 'primaryDark' },
                r.a.createElement(
                  Le,
                  null,
                  r.a.createElement(
                    C.a,
                    { left: !0 },
                    r.a.createElement(
                      ve,
                      { fontSize: [2, 3] },
                      r.a.createElement(
                        'span',
                        null,
                        n + ' Portfolio - Powered by ',
                      ),
                      r.a.createElement(
                        l.Link,
                        { href: 'https://www.gatsbyjs.org/' },
                        'Gatsby',
                      ),
                      r.a.createElement('span', null, ' and '),
                      r.a.createElement(
                        l.Link,
                        { href: 'https://www.contentful.com/', mr: 1 },
                        'Contentful',
                      ),
                      r.a.createElement(
                        'span',
                        { role: 'img', 'aria-label': 'heart' },
                        '❤️',
                      ),
                    ),
                  ),
                  r.a.createElement(
                    l.Flex,
                    null,
                    r.a.createElement(
                      C.a,
                      { right: !0 },
                      a.map(function(e) {
                        var t = e.id,
                          n = (function(e, t) {
                            if (null == e) return {};
                            var n,
                              a,
                              r = {},
                              o = Object.keys(e);
                            for (a = 0; a < o.length; a++)
                              (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                          })(e, ['id']);
                        return r.a.createElement(
                          l.Box,
                          { mx: [2, 3], fontSize: [4, 5], key: t },
                          r.a.createElement(
                            h,
                            Object.assign({}, n, { color: 'background' }),
                          ),
                        );
                      }),
                    ),
                  ),
                ),
              );
            },
            data: ke,
          });
        };
      t.default = function() {
        return r.a.createElement(
          o.a,
          null,
          r.a.createElement(Ie, null),
          r.a.createElement(I, null),
          r.a.createElement(G, null),
          r.a.createElement(ue, null),
          r.a.createElement(we, null),
          r.a.createElement(ze, null),
        );
      };
    },
    238: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return c;
      });
      var a = n(0),
        r = n.n(a),
        o = (n(70), n(244), n(9).default.enqueue, r.a.createContext({}));
      function i(e) {
        var t = e.staticQueryData,
          n = e.data,
          a = e.query,
          o = e.render,
          i = n ? n.data : t[a] && t[a].data;
        return r.a.createElement(
          r.a.Fragment,
          null,
          i && o(i),
          !i && r.a.createElement('div', null, 'Loading (StaticQuery)'),
        );
      }
      var c = function(e) {
        var t = e.data,
          n = e.query,
          a = e.render,
          c = e.children;
        return r.a.createElement(o.Consumer, null, function(e) {
          return r.a.createElement(i, {
            data: t,
            query: n,
            render: a || c,
            staticQueryData: e,
          });
        });
      };
    },
    240: function(e, t, n) {
      'use strict';
      n(40);
      var a = n(0),
        r = n.n(a),
        o = n(234),
        i = n(239),
        c = n(235),
        l = n(273),
        m = n.n(l),
        s = n(248),
        u = o.default.div.withConfig({
          displayName: 'Section__SectionContainer',
          componentId: 'sc-18uueee-0',
        })([
          'min-height:100vh;min-width:320px;max-width:1366px;display:flex;margin:auto;flex:0 1 auto;flex-direction:column;justify-content:center;padding:5em 1em;scroll-behavior:smooth;',
        ]),
        d = function() {
          return r.a.createElement('div', null);
        };
      t.a = {
        Container: function(e) {
          var t = e.id,
            n = e.children,
            a = e.Background,
            o = void 0 === a ? d : a;
          return r.a.createElement(
            i.b,
            { id: t, style: { position: 'relative' } },
            r.a.createElement(o, null),
            r.a.createElement(u, null, n),
          );
        },
        Header: function(e) {
          var t = e.name,
            n = e.icon,
            a = void 0 === n ? '' : n,
            o = e.label,
            i = void 0 === o ? '' : o;
          return r.a.createElement(
            m.a,
            { left: !0 },
            r.a.createElement(
              c.Heading,
              { color: 'secondaryDark', mb: 4 },
              r.a.createElement(
                s.a,
                { selected: !0 },
                t,
                a &&
                  r.a.createElement(
                    'span',
                    {
                      role: 'img',
                      'aria-label': i,
                      style: { marginLeft: '10px' },
                    },
                    a,
                  ),
              ),
            ),
          );
        },
      };
    },
    241: function(e, t, n) {
      'use strict';
      var a = n(234).default.div.withConfig({
        displayName: 'Triangle',
        componentId: 'le4p17-0',
      })(
        [
          'position:absolute;width:0;height:0;z-index:-2;',
          ' ',
          ' @media only screen and (min-width:768px){',
          ' ',
          ';}',
        ],
        function(e) {
          var t = e.theme.colors[e.color] || e.color,
            n = e.height[0] + ' solid ' + t + ';';
          return e.invertY
            ? 'border-bottom: ' + n + '; bottom: 0;'
            : 'border-top: ' + n + ';';
        },
        function(e) {
          var t = e.width[0] + ' solid transparent;';
          return e.invertX
            ? 'border-left: ' + t + '; right: 0;'
            : 'border-right: ' + t + ';';
        },
        function(e) {
          var t = e.height[1];
          return e.invertY
            ? 'border-bottom-width: ' + t + ';'
            : 'border-top-width: ' + t + ';';
        },
        function(e) {
          var t = e.width[1];
          return e.invertX
            ? 'border-left-width: ' + t + ';'
            : 'border-right-width: ' + t + ';';
        },
      );
      t.a = a;
    },
    244: function(e, t, n) {
      var a;
      e.exports = ((a = n(256)) && a.default) || a;
    },
    248: function(e, t, n) {
      'use strict';
      var a = n(234).default.span.withConfig({
        displayName: 'LinkAnimated',
        componentId: 'qj14bt-0',
      })(
        [
          'text-decoration:none;position:relative;margin-bottom:0;padding-bottom:5px;color:inherit;',
          ';transition:0.4s;cursor:',
          ";&:after{content:'';position:absolute;right:0;width:0;bottom:-5px;background:",
          ';height:5px;transition-property:width;transition-duration:0.3s;transition-timing-function:ease-out;}&:hover:after{left:0;right:auto;width:100%;}',
        ],
        function(e) {
          return (
            e.selected &&
            'border-bottom:  5px solid ' + e.theme.colors.primaryLight
          );
        },
        function(e) {
          return e.onClick ? 'pointer' : 'default';
        },
        function(e) {
          return e.theme.colors.secondaryLight;
        },
      );
      t.a = a;
    },
    253: function(e, t) {
      e.exports = {
        background: '#fff1db',
        backgroundDark: '#e5dfd5',
        primary: '#91443d',
        primaryLight: '#a64253',
        primaryDark: '#ff6f61',
        secondary: '#5f4b8b',
        secondaryLight: '#424874',
        secondaryDark: '#340068',
      };
    },
    254: function(e) {
      e.exports = {
        data: {
          contentfulAbout: {
            name: 'Jude Pineda',
            description: "I'm a full stack developer!",
            profile: {
              favicon16: {
                src:
                  '//images.ctfassets.net/nussweg0k89r/6nf3rNaaVaUqYcoAcciSeC/5ae98f3147464f6718d47baab9d63519/Mate_Logo.png?w=16&fl=progressive&q=50',
              },
              favicon32: {
                src:
                  '//images.ctfassets.net/nussweg0k89r/6nf3rNaaVaUqYcoAcciSeC/5ae98f3147464f6718d47baab9d63519/Mate_Logo.png?w=32&fl=progressive&q=50',
              },
              bigIcon: {
                src:
                  '//images.ctfassets.net/nussweg0k89r/6nf3rNaaVaUqYcoAcciSeC/5ae98f3147464f6718d47baab9d63519/Mate_Logo.png?w=192&fl=progressive&q=50',
              },
              appleIcon: {
                src:
                  '//images.ctfassets.net/nussweg0k89r/6nf3rNaaVaUqYcoAcciSeC/5ae98f3147464f6718d47baab9d63519/Mate_Logo.png?w=180&fl=progressive&q=50',
              },
            },
          },
        },
      };
    },
    256: function(e, t, n) {
      'use strict';
      n.r(t);
      n(24);
      var a = n(0),
        r = n.n(a),
        o = n(109);
      t.default = function(e) {
        var t = e.location,
          n = e.pageResources;
        return n
          ? r.a.createElement(
              o.a,
              Object.assign({ location: t, pageResources: n }, n.json),
            )
          : null;
      };
    },
    266: function(e, t, n) {
      'use strict';
      var a = n(0),
        r = n.n(a),
        o = n(234),
        i = n(239),
        c = (n(268), n(243)),
        l = n.n(c),
        m = n(253),
        s = n.n(m),
        u = (n(40), n(254)),
        d = n(269),
        g = n.n(d),
        p = n(238),
        M = Object(o.withTheme)(function(e) {
          var t = e.theme,
            n = void 0 === t ? {} : t;
          return r.a.createElement(p.a, {
            query: '4063282471',
            render: function(e) {
              var t = e.contentfulAbout,
                a = t.name,
                o = t.description,
                i = t.profile,
                c = a + ' Portfolio';
              return r.a.createElement(
                g.a,
                { htmlAttributes: { lang: 'en' } },
                r.a.createElement('meta', { charSet: 'utf-8' }),
                r.a.createElement('title', null, c),
                r.a.createElement('meta', { name: 'description', content: o }),
                r.a.createElement('link', {
                  rel: 'shortcut icon',
                  href: 'https:' + i.favicon32.src,
                }),
                r.a.createElement('meta', {
                  name: 'theme-color',
                  content: n.background,
                }),
                r.a.createElement('meta', {
                  name: 'image',
                  content: 'https:' + i.favicon32.src,
                }),
                r.a.createElement('meta', { itemProp: 'name', content: c }),
                r.a.createElement('meta', {
                  itemProp: 'description',
                  content: o,
                }),
                r.a.createElement('meta', {
                  itemProp: 'image',
                  content: 'https:' + i.favicon32.src,
                }),
                r.a.createElement('meta', { name: 'og:title', content: c }),
                r.a.createElement('meta', {
                  name: 'og:description',
                  content: o,
                }),
                r.a.createElement('meta', {
                  name: 'og:image',
                  content: 'https:' + i.bigIcon.src,
                }),
                r.a.createElement('meta', { name: 'og:site_name', content: c }),
                r.a.createElement('meta', {
                  name: 'og:locale',
                  content: 'en_US',
                }),
                r.a.createElement('meta', {
                  name: 'og:type',
                  content: 'website',
                }),
                r.a.createElement('meta', {
                  name: 'twitter:card',
                  content: 'summary',
                }),
                r.a.createElement('meta', {
                  name: 'twitter:title',
                  content: c,
                }),
                r.a.createElement('meta', {
                  name: 'twitter:description',
                  content: o,
                }),
                r.a.createElement('meta', {
                  name: 'twitter:image',
                  content: 'https:' + i.bigIcon.src,
                }),
                r.a.createElement('meta', {
                  name: 'twitter:image:src',
                  content: 'https:' + i.bigIcon.src,
                }),
                r.a.createElement('link', {
                  rel: 'apple-touch-icon',
                  sizes: '180x180',
                  href: 'https:' + i.appleIcon.src,
                }),
                r.a.createElement('link', {
                  rel: 'icon',
                  type: 'image/png',
                  sizes: '32x32',
                  href: 'https:' + i.favicon32.src,
                }),
                r.a.createElement('link', {
                  rel: 'icon',
                  type: 'image/png',
                  sizes: '16x16',
                  href: 'https:' + i.favicon16.src,
                }),
              );
            },
            data: u,
          });
        });
      function f() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return (e.raw = t), e;
        })([
          "\n  *,\n  *::after,\n  *::before { \n    box-sizing: inherit;\n    }\n\n  body {\n    box-sizing: border-box; \n    margin: 0;\n    font-family: Cabin, 'Open Sans', sans-serif;\n    font-display: swap;\n    font-display: fallback;\n    overflow-x: hidden;\n  }\n",
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      var h = Object(o.createGlobalStyle)(f());
      l()({ ssrFadeout: !0 });
      t.a = function(e) {
        var t = e.children;
        return (
          Object(a.useEffect)(function() {
            var e, t;
            (e = 'https://use.fontawesome.com/fd58d214b9.js'),
              ((t = document.createElement('script')).src = e),
              (t.defer = !0),
              document.getElementsByTagName('body')[0].appendChild(t);
          }, []),
          r.a.createElement(
            a.Fragment,
            null,
            r.a.createElement(h, null),
            r.a.createElement(
              o.ThemeProvider,
              { theme: { colors: s.a } },
              r.a.createElement(i.a, null, r.a.createElement(M, null), t),
            ),
          )
        );
      };
    },
    304: function(e) {
      e.exports = {
        data: {
          contentfulAbout: {
            name: 'Jude Pineda',
            roles: [
              'Full-stack developer 👨‍💻',
              'Buildmaster 🤖',
              'Technical Writer ✒️',
              'Gamer 🎮',
              'Board game collector 🎲',
            ],
            socialLinks: [
              {
                id: 'e20c9b85-0866-5997-8ba4-c24d18e0e054',
                url: 'https://github.com/aicxe',
                name: 'Github',
                fontAwesomeIcon: 'github',
              },
              {
                id: '4cd92736-3aec-5c27-bb2b-841c700cf73d',
                url: 'https://dev.to/aicxe',
                name: 'DEV.to',
                fontAwesomeIcon: 'medium',
              },
              {
                id: '71f92cfd-c26a-581d-8a09-d1423df892a2',
                url: 'https://www.linkedin.com/in/jaypineda27/',
                name: 'LinkedIn',
                fontAwesomeIcon: 'linkedin',
              },
              {
                id: '97e89d27-0dd0-539a-b1e8-f57942b275a8',
                url: 'https://judepineda.typeform.com/to/Y9moWe',
                name: 'Contact me!',
                fontAwesomeIcon: 'envelope',
              },
            ],
          },
        },
      };
    },
    317: function(e) {
      e.exports = {
        data: {
          contentfulAbout: {
            aboutMe: {
              childMarkdownRemark: {
                rawMarkdownBody:
                  "I was born in the Philippines 🇵🇭 where I started my journey into computer science. The first language that was taught to me was C, so you can say that I've been through fire. At the age of 18, I moved to Canada 🇨🇦 where I currently work and live.\n\nOne thing I learned from all these experiences is: \"There is always a more efficient way to do something\". Because of that:\n\n* You can frequently see me making changes to my personal projects 👨‍💻, be it editing wiki pages or completely reconfiguring its folder structure. I believe that perfection isn't achieved in one go, but in small, incremental accomplishments.\n* Occasionally, I write ✍ an article in DEV.to about a framework I have been playing around with, or an industry topic that I find interesting. \n\nWhen I'm not coding, you can find me playing video games 🎮 or reading some books 📚. \n\nThis portfolio is built with Gatsby, [Rebass](https://jxnblk.com/rebass/) for mobile-responsive components and [Contentful](https://www.contentful.com/) to manage the contents on this web app!",
              },
            },
            profile: {
              title: 'Mate Logo',
              image: {
                src:
                  '//images.ctfassets.net/nussweg0k89r/6nf3rNaaVaUqYcoAcciSeC/5ae98f3147464f6718d47baab9d63519/Mate_Logo.png?w=450&fl=progressive&q=100',
              },
            },
          },
        },
      };
    },
    400: function(e) {
      e.exports = {
        data: {
          contentfulAbout: {
            projects: [
              {
                id: '172cb726-050d-52f3-9e23-aa529fe48229',
                name: 'Facebook',
                description:
                  'Facebook is a popular free social networking website that allows registered users to keep in touch with friends.',
                projectUrl: 'http://facebook.com/',
                repositoryUrl: 'https://github.com/facebook',
                publishedDate: '2004',
                type: 'Web',
                logo: {
                  title: 'Facebook logo',
                  image: {
                    src:
                      '//images.ctfassets.net/nussweg0k89r/u3Um4zkMrAaQioyq4oSIW/493a8b3641158772789b184252d477a4/600px-Facebook_logo__28square_29.png?w=200&fl=progressive&q=100',
                  },
                },
              },
              {
                id: '7aa9b16d-f43f-5199-839a-89f24f1b7cdc',
                name: 'Gatsby JS',
                description:
                  ' Gatsby is a React-based, GraphQL powered, static site generator. Overall think, part Jekyll, part create-react-app.',
                projectUrl: 'https://www.gatsbyjs.org/',
                repositoryUrl: 'https://github.com/gatsbyjs/gatsby',
                publishedDate: '2016',
                type: 'Framework',
                logo: {
                  title: 'Gatsby logo',
                  image: {
                    src:
                      '//images.ctfassets.net/nussweg0k89r/6rkOXCpyvuekYIgy6U6gGu/7d082c84316789eb367ff41c32cf4c40/1_t5EnAu3eSWJA0rmZ9v3xuw.png?w=200&fl=progressive&q=100',
                  },
                },
              },
              {
                id: 'd5b809dc-bb7b-555d-a135-ce7436b9b1b8',
                name: 'Google',
                description:
                  'It is the most-used search engine on the World Wide Web, handling more than three billion searches each day.',
                projectUrl: 'https://www.google.com/',
                repositoryUrl: 'https://github.com/google',
                publishedDate: '1998',
                type: 'Web',
                logo: {
                  title: 'Google Logo',
                  image: {
                    src:
                      '//images.ctfassets.net/nussweg0k89r/3AorRmtWOsGQ4o8gK0YWKG/65fa42a4347cc9c85f303891438df2ed/google_PNG19630.png?w=200&fl=progressive&q=100',
                  },
                },
              },
            ],
          },
        },
      };
    },
    401: function(e) {
      e.exports = {
        data: {
          site: { siteMetadata: { isMediumUserDefined: !0 } },
          allMediumPost: {
            totalCount: 3,
            edges: [
              {
                node: {
                  id: 'ffd95745-67da-50de-9374-be033c0541ae',
                  uniqueSlug: 'post-nº-3-7e237d4acbe0',
                  title: 'Post Nº 3 💪',
                  createdAt: 'May 2019',
                  virtuals: {
                    subtitle:
                      'This is the last post I’m going to do, so if you have been reading this posts I realized how much free time you have. But in case you want…',
                    readingTime: 2.4528301886792456,
                    previewImage: { imageId: '1*dq38Fnh4jWHn5sADd2Q-6w.jpeg' },
                  },
                },
              },
              {
                node: {
                  id: 'e340ef2c-e9fa-565a-92bd-e87fd8b26515',
                  uniqueSlug: 'post-nº-2-c3225ded1942',
                  title: 'Post Nº 2 😍',
                  createdAt: 'May 2019',
                  virtuals: {
                    subtitle:
                      'Again, another random text. I do NOT recommend anyone read the following paragraphs, but you are free to do whatever you want with your…',
                    readingTime: 2.5622641509433963,
                    previewImage: { imageId: '1*dSz1eA7kGciePhd6tZG9Bg.jpeg' },
                  },
                },
              },
              {
                node: {
                  id: '3b5f31d0-b263-54a6-ae6c-10890d35e1c0',
                  uniqueSlug: 'post-nº-1-e0c7a72c2763',
                  title: 'Post Nº 1 🎉',
                  createdAt: 'May 2019',
                  virtuals: {
                    subtitle:
                      'The following text is random and doesn’t make sense. Up to you if you want to read it or not 😄',
                    readingTime: 2.539622641509434,
                    previewImage: { imageId: '1*ufP5nfg3eLEkIrqKB2i8mw.jpeg' },
                  },
                },
              },
            ],
          },
          author: { username: 'mate.starter', name: 'Mate Starter' },
        },
      };
    },
    404: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA1NCIgaGVpZ2h0PSIxMDU0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsaXAtcnVsZT0iZXZlbm9kZCI+DQoNCiAgPGcgc3Ryb2tlPSJudWxsIiBpZD0ibGF5ZXIxMDMiPg0KICAgPHBhdGggc3Ryb2tlPSJudWxsIiBpZD0ic3ZnXzEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0ibTI5NC42MDY0MTIsMTA0OS41OTc2NzFjLTkuNDI4MDA4LC0zLjYwNDgyNyAtMzkuMDk4NTAzLC0zOC4yNjY2MiAtNTkuODk1NTc5LC02OS4wNDYyOTNjLTc4LjE5NzAwNywtMTE3LjAxODIxNSAtOTcuODg0OTA1LC0yMjYuODI2Nzc4IC02OC40OTE3MDQsLTM4NC4zMjk5NjhjOS43MDUzMDIsLTUxLjI5OTQ1NSAyMS45MDYyNTQsLTkzLjcyNTQ5IDQxLjU5NDE1MiwtMTQ0LjQ3MDM1NmMxMS4zNjkwNjgsLTI5LjExNTkwNyAxNy43NDY4MzgsLTM4LjU0MzkxNSAyOS4zOTMyMDEsLTQyLjk4MDYyNGMzLjg4MjEyMSwtMS4zODY0NzIgODkuMDExNDg2LC0yLjQ5NTY0OSAyMDcuMTM4ODc5LC0yLjQ5NTY0OWwyMDAuNDgzODE1LDBsMy4wNTAyMzgsLTE0LjQxOTMwNmMxLjY2Mzc2NiwtOC4wNDE1MzYgMjAuMjQyNDg4LC05My4xNzA5MDEgNDAuNzYyMjY5LC0xODkuMzkyMDQxYzIwLjc5NzA3NiwtOTUuOTQzODQ1IDM5LjA5ODUwMywtMTc4LjAyMjk3MiA0MC40ODQ5NzUsLTE4Mi4xODIzODhjMS42NjM3NjYsLTQuMTU5NDE1IDcuMjA5NjUzLC05LjQyODAwOCAxMi43NTU1NCwtMTEuOTIzNjU3YzE5LjY4Nzg5OSwtOS40MjgwMDggMzkuNjUzMDkyLDIuMjE4MzU1IDM5LjY1MzA5MiwyMy4yOTI3MjVjMCw1LjU0NTg4NyAtMTcuNDY5NTQ0LDkxLjc4NDQzIC0zOC44MjEyMDksMTkxLjMzMzEwMWMtMjEuMzUxNjY1LDk5LjgyNTk2NiAtMzguODIxMjA5LDE4MS42Mjc3OTkgLTM4LjgyMTIwOSwxODIuMTgyMzg4YzAsMC41NTQ1ODkgMjEuOTA2MjU0LDEuMTA5MTc3IDQ4LjgwMzgwNSwxLjEwOTE3N2M2MC43Mjc0NjMsMCA2NC42MDk1ODMsMS4zODY0NzIgNzYuMjU1OTQ2LDI2LjM0Mjk2M2M0MS4wMzk1NjQsODcuNjI1MDE0IDY5LjMyMzU4NywyNDIuMzU1MjYxIDYwLjcyNzQ2MywzMzQuNjk0MjhjLTYuMTAwNDc2LDY4Ljc2ODk5OSAtMzIuOTk4MDI4LDE0MS42OTc0MTMgLTc2LjI1NTk0NiwyMDcuNDE2MTczYy0yMC4yNDI0ODgsMzAuNTAyMzc4IC01Mi42ODU5MjYsNjkuMDQ2MjkzIC02Mi4zOTEyMjksNzQuMDM3NTkxYy01LjI2ODU5MywyLjc3Mjk0MyAtNTcuMzk5OTMsMy42MDQ4MjcgLTIyOC43Njc4MzgsMy4zMjc1MzJjLTEyMi4wMDk1MTQsMCAtMjI0LjMzMTEyOSwtMS4xMDkxNzcgLTIyNy42NTg2NjEsLTIuNDk1NjQ5em00NTIuNTQ0Mzc4LC04MC45Njk5NWMxMC4yNTk4OTEsLTE0LjE0MjAxMiAxOS42ODc4OTksLTI3LjQ1MjE0MSAyMS4zNTE2NjUsLTI5LjExNTkwN2MxLjk0MTA2LC0yLjc3Mjk0MyAtNDcuNjk0NjI4LC0zLjYwNDgyNyAtMjQ2LjIzNzM4MiwtMy42MDQ4MjdsLTI0OC43MzMwMzEsMGw0LjcxNDAwNCw3Ljc2NDI0MmM2LjM3Nzc3LDkuOTgyNTk3IDI2LjA2NTY2OSwzNi4zMjU1NiAzMi45OTgwMjgsNDQuMzY3MDk2bDUuMjY4NTkzLDYuMTAwNDc2bDQxMS43ODIxMDksMGwxOC44NTYwMTYsLTI1LjUxMTA4em02NC4wNTQ5OTUsLTExNS4wNzcxNTVjMTEuNjQ2MzYzLC0zMi4xNjYxNDUgMTMuNTg3NDIzLC0zOS4wOTg1MDMgMTkuMTMzMzEsLTY4Ljc2ODk5OWM3LjIwOTY1MywtMzguODIxMjA5IDMuNjA0ODI3LC0xMTMuNDEzMzg5IC04Ljg3MzQxOSwtMTgyLjE4MjM4OGwtMS45NDEwNiwtMTAuNTM3MTg1bC0yOTcuMjU5NTQyLDBsLTI5Ny4yNTk1NDIsMGwtMy4wNTAyMzgsMTYuMDgzMDcyYy03Ljc2NDI0MiwzOS45MzAzODYgLTkuNDI4MDA4LDU0LjkwNDI4MSAtMTAuODE0NDgsOTcuODg0OTA1Yy0yLjIxODM1NSw2Mi4xMTM5MzQgNC4xNTk0MTUsMTAyLjg3NjIwNCAyMy4wMTU0MzEsMTUxLjY4MDAwOWw3Ljc2NDI0MiwxOS45NjUxOTNsNTYwLjY4OTE3NCwwbDguNTk2MTI1LC0yNC4xMjQ2MDh6bS03LjQ4Njk0NywtMzIwLjU1MjI2OGMwLC0zLjMyNzUzMiAtMTUuNTI4NDg0LC01MC43NDQ4NjYgLTIwLjc5NzA3NiwtNjMuNTAwNDA2Yy0xLjk0MTA2LC00LjcxNDAwNCAtMTYuOTE0OTU1LC00Ljk5MTI5OCAtMjU5LjI3MDIxNywtNC45OTEyOThjLTIwMi40MjQ4NzUsMCAtMjU3Ljg4Mzc0NSwwLjgzMTg4MyAtMjYwLjEwMjEsMy42MDQ4MjdjLTMuMzI3NTMyLDMuODgyMTIxIC0yMi43MzgxMzcsNTkuMDYzNjk2IC0yMi43MzgxMzcsNjQuNjA5NTgzYzAsMy4zMjc1MzIgNDEuODcxNDQ3LDMuODgyMTIxIDI4MS40NTM3NjUsMy44ODIxMjFjMjI5LjU5OTcyMSwwIDI4MS40NTM3NjUsLTAuNTU0NTg5IDI4MS40NTM3NjUsLTMuNjA0ODI3eiIvPg0KICAgPHBhdGggc3Ryb2tlPSJudWxsIiBpZD0ic3ZnXzIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0ibTUwNS45MDQ3MDYsMzI4LjYzMjM2MmMtNDAuNDg0OTc1LC0xMi40NzgyNDYgLTMxLjYxMTU1NiwtNzIuOTI4NDE0IDEwLjgxNDQ4LC03Mi45Mjg0MTRjMTQuMTQyMDEyLDAgMjQuNDAxOTAzLDUuODIzMTgxIDMxLjg4ODg1LDE4LjMwMTQyN2MxNy4xOTIyNSwyOC4wMDY3MjkgLTEwLjgxNDQ4LDY0LjA1NDk5NSAtNDIuNzAzMzMsNTQuNjI2OTg3eiIvPg0KICAgPHBhdGggc3Ryb2tlPSJudWxsIiBpZD0ic3ZnXzMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0ibTMzMy43MDQ5MTUsMjQ4LjQ5NDI5NWMtNDcuNDE3MzM0LC0yMS45MDYyNTQgLTQ2LjAzMDg2MiwtOTIuMzM5MDE4IDEuOTQxMDYsLTExMi4zMDQyMTFjMTQuNDE5MzA2LC02LjEwMDQ3NiAzOC44MjEyMDksLTUuNTQ1ODg3IDUxLjU3Njc0OSwwLjgzMTg4M2MyMS45MDYyNTQsMTEuMzY5MDY4IDM0LjM4NDQ5OSwzMS42MTE1NTYgMzQuMzg0NDk5LDU1LjczNjE2NGMwLDI0LjEyNDYwOCAtMTIuNDc4MjQ2LDQ0LjM2NzA5NiAtMzQuMzg0NDk5LDU1LjczNjE2NGMtMTMuNTg3NDIzLDYuOTMyMzU5IC0zOC41NDM5MTUsNi45MzIzNTkgLTUzLjUxNzgwOSwweiIvPg0KICAgPHBhdGggc3Ryb2tlPSJudWxsIiBpZD0ic3ZnXzQiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0ibTQ4My40NDM4NjQsMTQwLjM0OTQ5OWMtMzQuNjYxNzk0LC0xNS41Mjg0ODQgLTQxLjMxNjg1OCwtNjAuMTcyODc0IC0xMi40NzgyNDYsLTg0LjU3NDc3N2M0MS4wMzk1NjQsLTM0LjM4NDQ5OSAxMDAuMzgwNTU0LDExLjY0NjM2MyA3Ny45MTk3MTIsNjAuNzI3NDYzYy02LjEwMDQ3NiwxMy4zMTAxMjkgLTEyLjIwMDk1MSwxOS4xMzMzMSAtMjYuMDY1NjY5LDI0Ljk1NjQ5MWMtMTMuMzEwMTI5LDUuNTQ1ODg3IC0yNS43ODgzNzQsNS4yNjg1OTMgLTM5LjM3NTc5OCwtMS4xMDkxNzd6Ii8+DQogIDwvZz4NCjwvc3ZnPg==';
    },
    405: function(e) {
      e.exports = {
        data: {
          contentfulAbout: {
            name: 'Jude Pineda',
            roles: [
              'Full-stack developer 👨‍💻',
              'Buildmaster 🤖',
              'Technical Writer ✒️',
              'Gamer 🎮',
              'Board game collector 🎲',
            ],
            socialLinks: [
              {
                id: 'e20c9b85-0866-5997-8ba4-c24d18e0e054',
                url: 'https://github.com/aicxe',
                name: 'Github',
                fontAwesomeIcon: 'github',
              },
              {
                id: '4cd92736-3aec-5c27-bb2b-841c700cf73d',
                url: 'https://dev.to/aicxe',
                name: 'DEV.to',
                fontAwesomeIcon: 'medium',
              },
              {
                id: '71f92cfd-c26a-581d-8a09-d1423df892a2',
                url: 'https://www.linkedin.com/in/jaypineda27/',
                name: 'LinkedIn',
                fontAwesomeIcon: 'linkedin',
              },
              {
                id: '97e89d27-0dd0-539a-b1e8-f57942b275a8',
                url: 'https://judepineda.typeform.com/to/Y9moWe',
                name: 'Contact me!',
                fontAwesomeIcon: 'envelope',
              },
            ],
          },
        },
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-b2094b618279d975e61d.js.map

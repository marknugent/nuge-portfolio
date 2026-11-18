import sys, os

OUT = sys.argv[1]


def n(v):
    return ('%.2f' % v).rstrip('0').rstrip('.')


class Art:
    def __init__(self, w, h, vx=0, sc=1):
        self.w, self.h, self.vx, self.sc, self.items, self.i = w, h, vx, sc, [], 0

    def step(self, k=1):
        self.i += k

    def _el(self, tag, attrs, cls='d'):
        extra = ' pathLength="1"' if cls.startswith('d') else ''
        self.items.append('<%s class="%s" style="--i:%d"%s %s/>' % (tag, cls, self.i, extra, attrs))

    def rect(self, x, y, w, h, r=0, sw=None):
        s = ' stroke-width="%s"' % sw if sw else ''
        self._el('rect', 'x="%s" y="%s" width="%s" height="%s" rx="%s"%s' % (n(x), n(y), n(w), n(h), n(r), s))

    def circle(self, cx, cy, r, sw=None):
        s = ' stroke-width="%s"' % sw if sw else ''
        self._el('circle', 'cx="%s" cy="%s" r="%s"%s' % (n(cx), n(cy), n(r), s))

    def path(self, d, sw=None, cls='d', extra=''):
        s = ' stroke-width="%s"' % sw if sw else ''
        self._el('path', 'd="%s"%s%s' % (d, s, extra), cls)

    def line(self, x1, y1, x2, y2, sw=None):
        self.path('M%s %sL%s %s' % (n(x1), n(y1), n(x2), n(y2)), sw)

    def bar(self, x1, x2, y, sw=3.5, op=0.55):
        self.path('M%s %sH%s' % (n(x1), n(y), n(x2)), sw, 'd', ' opacity="%s"' % op)

    def head(self, x, y, d, s=5):
        pts = {
            'r': 'M%s %sL%s %sL%s %s' % (n(x - s), n(y - s + 1), n(x), n(y), n(x - s), n(y + s - 1)),
            'l': 'M%s %sL%s %sL%s %s' % (n(x + s), n(y - s + 1), n(x), n(y), n(x + s), n(y + s - 1)),
            'u': 'M%s %sL%s %sL%s %s' % (n(x - s + 1), n(y + s), n(x), n(y), n(x + s - 1), n(y + s)),
            'd': 'M%s %sL%s %sL%s %s' % (n(x - s + 1), n(y - s), n(x), n(y), n(x + s - 1), n(y - s)),
        }[d]
        self.path(pts, 1.8)

    def dashed(self, d, end=None, dash='1.5 5'):
        self.path(d, 2, 'f', ' stroke-dasharray="%s"' % dash)
        if end:
            self.head(*end)

    def person(self, x, y, s=40):
        self.rect(x, y, s, s * 0.95, s * 0.2)
        self.circle(x + s / 2, y + s * 0.36, s * 0.14)
        self.path('M%s %sQ%s %s %s %s' % (n(x + s * 0.2), n(y + s * 0.8), n(x + s / 2), n(y + s * 0.5), n(x + s * 0.8), n(y + s * 0.8)))

    def check_circle(self, cx, cy, r=6.5):
        self.circle(cx, cy, r, 1.6)
        self.path('M%s %sL%s %sL%s %s' % (n(cx - 3), n(cy), n(cx - 0.8), n(cy + 2.4), n(cx + 3.4), n(cy - 2.4)), 1.6)

    def spinner(self, cx, cy, r=6):
        self.path('M%s %sA%s %s 0 1 1 %s %s' % (n(cx + r), n(cy), n(r), n(r), n(cx + r * 0.3), n(cy - r * 0.95)), 1.6)

    def swap(self, cx, cy):
        self.path('M%s %sH%s M%s %sL%s %sL%s %s' % (n(cx - 7), n(cy - 4), n(cx + 7), n(cx + 3), n(cy - 8), n(cx + 7), n(cy - 4), n(cx + 3), n(cy)), 1.6)
        self.path('M%s %sH%s M%s %sL%s %sL%s %s' % (n(cx + 7), n(cy + 4), n(cx - 7), n(cx - 3), n(cy), n(cx - 7), n(cy + 4), n(cx - 3), n(cy + 8)), 1.6)

    def loop(self, cx, cy):
        self.path('M%s %sH%s a4 4 0 0 1 0 8 H%s M%s %sL%s %sL%s %s' % (n(cx - 6), n(cy - 4), n(cx + 4), n(cx - 5), n(cx - 3), n(cy + 1), n(cx - 6), n(cy + 4), n(cx - 3), n(cy + 7)), 1.6)

    def pill(self, x, y, w, h, bx1=None, bx2=None):
        self.rect(x, y, w, h, h / 2, 1.5)
        if bx1 is not None:
            self.bar(bx1, bx2, y + h / 2, 2, 0.45)

    def svg(self):
        import re
        if self.sc != 1:
            self.items = [re.sub(r'stroke-width="([\d.]+)"', lambda m: 'stroke-width="%s"' % n(float(m.group(1)) * self.sc), it) for it in self.items]
        return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="%d 0 %d %d" fill="none" stroke="currentColor" '
                'stroke-width="%s" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">\n  %s\n</svg>\n'
                % (self.vx, self.w - self.vx, self.h, n(2 * self.sc), '\n  '.join(self.items)))


def state_machine():
    a = Art(923, 537)
    a.bar(45, 335, 75, 7, 0.8)
    a.line(45, 108, 923, 108)
    a.step()
    a.bar(50, 290, 138, 5, 0.65)
    a.line(45, 162, 923, 162)
    a.step()
    a.rect(219, 237, 98, 42, 9)
    a.rect(461, 233, 120, 44, 9)
    a.step()
    a.person(50, 242, 40)
    a.person(50, 313, 40)
    a.person(234, 185, 34)
    a.person(646, 189, 34)
    a.person(457, 292, 34)
    a.step()
    a.bar(248, 290, 258, 4.5, 0.75)
    a.bar(486, 556, 254, 4.5, 0.75)
    a.step()
    a.dashed('M96 258H208', (217, 258, 'r'))
    a.dashed('M96 327H254Q268 327 268 313V292', (268, 285, 'u'))
    a.dashed('M272 234V196', (272, 189, 'u'))
    a.line(321, 257, 452, 257, 1.8)
    a.head(460, 257, 'r')
    a.dashed('M586 254H741', (750, 254, 'r'))
    a.dashed('M528 281V339', (528, 347, 'd'))
    a.step()
    a.bar(147, 207, 200, 3, 0.5)
    a.bar(130, 176, 241, 3.5, 0.55)
    a.bar(113, 193, 265, 2.5, 0.4)
    a.bar(114, 195, 279, 2.5, 0.4)
    a.bar(130, 175, 316, 3.5, 0.55)
    a.bar(112, 210, 343, 3.5, 0.55)
    a.bar(359, 411, 239, 3.5, 0.55)
    a.bar(651, 677, 236, 3.5, 0.55)
    a.bar(420, 508, 338, 3.5, 0.55)
    a.bar(768, 898, 239, 3.5, 0.5)
    a.bar(768, 838, 259, 3.5, 0.5)
    a.bar(487, 604, 368, 3.5, 0.5)
    a.bar(501, 590, 388, 3.5, 0.5)
    a.step()
    a.bar(50, 330, 427, 5, 0.65)
    a.line(45, 451, 923, 451)
    a.step()
    a.person(204, 479, 32)
    a.person(341, 478, 32)
    a.person(582, 483, 32)
    a.person(841, 486, 32)
    a.rect(208, 533, 88, 44, 9)
    a.rect(432, 533, 98, 44, 9)
    a.rect(670, 533, 120, 44, 9)
    a.step()
    a.dashed('M257 528V493', (257, 485, 'u'))
    a.bar(126, 196, 496, 3, 0.5)
    a.bar(329, 387, 523, 3.5, 0.55)
    a.bar(564, 632, 534, 3.5, 0.55)
    return a.svg()


def workflow_editor():
    a = Art(1178, 565, vx=225)
    a.path('M940 113H248Q238 113 238 123V565')
    a.line(940, 0, 940, 565)
    a.step()
    a.rect(14, 36, 204, 34, 7)
    for cy in (12, 53, 94, 135):
        a.rect(23, cy - 8, 16, 16, 4, 1.6)
    a.step()
    a.bar(53, 122, 12, 3.5, 0.5)
    a.bar(53, 122, 53, 3.5, 0.6)
    a.bar(53, 130, 94, 3.5, 0.5)
    a.bar(53, 108, 135, 3.5, 0.5)
    a.step()
    a.bar(238, 318, 3, 3, 0.4)
    a.bar(238, 580, 28, 7, 0.8)
    a.pill(617, 16, 104, 26)
    a.circle(633, 29, 3, 1.6)
    a.bar(643, 706, 29, 3, 0.5)
    a.bar(238, 440, 54, 3, 0.45)
    a.step()
    a.bar(240, 282, 94, 3, 0.5)
    a.bar(307, 358, 94, 3, 0.5)
    a.bar(384, 442, 94, 3, 0.7)
    a.line(382, 108, 444, 108, 3)
    a.step()
    a.rect(598, 138, 76, 30, 8)
    a.bar(621, 651, 153, 3, 0.55)
    a.line(636, 168, 636, 188)
    a.step()
    for y in (188, 250):
        a.rect(523, y, 226, 46, 8)
        a.line(560, y, 560, y + 46, 1.6)
        a.swap(541, y + 23)
        a.bar(573, 673 if y == 188 else 641, y + 15, 3.5, 0.6)
        a.pill(573, y + 25, 46, 14, 583, 609)
        a.check_circle(731, y + 15)
        a.step()
    a.line(636, 234, 636, 250, 1.8)
    a.line(636, 296, 636, 318, 1.8)
    a.rect(461, 318, 338, 260, 8)
    a.loop(479, 332)
    a.bar(498, 592, 330, 3.5, 0.6)
    a.bar(498, 558, 345, 2.5, 0.45)
    a.spinner(782, 332)
    a.step()
    a.rect(515, 355, 234, 46, 8)
    a.line(552, 355, 552, 401, 1.6)
    a.swap(533, 378)
    a.bar(562, 722, 371, 3.5, 0.6)
    a.spinner(733, 371)
    a.pill(562, 381, 46, 14, 571, 598)
    a.line(636, 401, 636, 418, 1.8)
    a.step()
    a.rect(489, 418, 290, 160, 8)
    a.loop(506, 431)
    a.bar(523, 645, 431, 3.5, 0.6)
    a.bar(523, 583, 446, 2.5, 0.45)
    a.step()
    a.rect(522, 458, 236, 44, 8)
    a.line(560, 458, 560, 502, 1.6)
    a.path('M536 473H533V491H536', 1.6)
    a.path('M550 473H553V491H550', 1.6)
    a.bar(571, 646, 472, 3.5, 0.6)
    a.bar(571, 625, 487, 2.5, 0.45)
    a.line(640, 502, 640, 518, 1.8)
    a.step()
    a.rect(522, 518, 236, 46, 8)
    a.line(560, 518, 560, 564, 1.6)
    a.path('M536 534H533V550H536', 1.6)
    a.path('M546 534H549V550H546', 1.6)
    a.bar(571, 692, 533, 3.5, 0.6)
    a.bar(571, 640, 548, 2.5, 0.45)
    a.step()
    a.bar(960, 1145, 6, 7, 0.8)
    a.bar(960, 1032, 29, 3, 0.5)
    a.line(960, 56, 1178, 56)
    a.bar(960, 1022, 74, 3, 0.5)
    for y, x2 in ((74, 1170), (90, 1170), (104, 1138)):
        a.bar(1074, x2, y, 3, 0.4)
    a.line(960, 127, 1178, 127)
    a.step()
    rows = [(147, 995, 1118), (176, 1002, 1170), (233, 1050, 1170), (261, 1024, 1084)]
    for y, lx2, vx2 in rows:
        a.bar(960, lx2, y, 3, 0.5)
        a.bar(1074, vx2, y, 3, 0.4)
    a.bar(960, 1022, 204, 3, 0.5)
    a.pill(1074, 196, 49, 16, 1086, 1112)
    a.line(940, 289, 1178, 289)
    a.step()
    a.bar(960, 1104, 314, 5, 0.7)
    for y, lx2 in ((346, 996), (374, 998), (402, 996), (431, 1050)):
        a.bar(960, lx2, y, 3, 0.5)
    a.check_circle(1083, 346)
    a.bar(1100, 1155, 346, 3, 0.45)
    a.bar(1080, 1170, 374, 3, 0.4)
    a.bar(1080, 1170, 402, 3, 0.4)
    a.bar(1080, 1128, 431, 3, 0.4)
    a.rect(1145, 425, 11, 13, 2, 1.5)
    a.step()
    a.bar(962, 998, 476, 3, 0.7)
    a.bar(1026, 1078, 476, 3, 0.5)
    a.bar(1106, 1152, 476, 3, 0.5)
    a.line(962, 489, 998, 489, 3)
    a.bar(962, 1032, 521, 3, 0.5)
    a.bar(1063, 1118, 521, 3, 0.45)
    a.bar(1137, 1170, 521, 3, 0.4)
    a.bar(1063, 1092, 546, 3, 0.45)
    a.bar(1150, 1166, 546, 3, 0.4)
    return a.svg()


def phones():
    a = Art(799, 775)
    for ox, sx in ((0, 0), (387, 0)):
        a.rect(30 + ox, 22, 358, 730, 52)
    a.step()
    for ox in (0, 387):
        a.rect(46 + ox, 113, 326, 548, 2)
        a.circle(210 + ox, 52, 7)
        a.rect(180 + ox, 78, 62, 12, 6)
        a.circle(208 + ox, 705, 29)
    a.step()
    for ox in (0, 387):
        for k, cx in enumerate((62, 72, 82, 92)):
            a.circle(cx + ox, 125, 3, 1.5)
        a.bar(100 + ox, 145 + ox, 125, 3, 0.45)
        a.bar(212 + ox, 252 + ox, 125, 3, 0.45)
        a.rect(343 + ox, 120, 18, 10, 2, 1.5)
        a.bar(118 + ox, 308 + ox, 153, 5, 0.8)
        for dx in (333, 343, 353):
            a.circle(dx + ox, 153, 2.2, 1.5)
        a.line(46 + ox, 173, 372 + ox, 173)
    a.step()
    # phone 1 content
    for cx, kind in ((130, 'mute'), (210, 'break'), (292, 'spk')):
        a.circle(cx, 206, 20)
        if kind == 'mute':
            a.rect(cx - 3.5, 196, 7, 12, 3.5, 1.6)
            a.line(cx - 8, 197, cx + 8, 215, 1.6)
        elif kind == 'break':
            a.path('M%s 200Q%s 213 %s 212' % (cx - 7, cx - 7, cx + 4), 1.8)
            for dx in (-1, 3, 7):
                a.circle(cx + dx, 202, 0.8, 1.5)
        else:
            a.path('M%s 203H%s L%s 198V214L%s 209H%s Z' % (cx - 8, cx - 4, cx + 2, cx - 4, cx - 8), 1.6)
            a.path('M%s 202Q%s 206 %s 210' % (cx + 6, cx + 10, cx + 6), 1.6)
    a.bar(113, 147, 237, 2.5, 0.4)
    a.bar(178, 243, 237, 2.5, 0.4)
    a.bar(180, 240, 247, 2.5, 0.4)
    a.bar(273, 311, 237, 2.5, 0.4)
    a.step()
    a.circle(80, 267, 12)
    a.path('M75 262Q74 270 82 272', 1.6)
    a.bar(104, 196, 266, 5, 0.7)
    a.bar(104, 242, 287, 3, 0.45)
    a.bar(104, 188, 302, 3, 0.45)
    a.bar(68, 98, 330, 3, 0.4)
    a.bar(106, 320, 328, 4.5, 0.65)
    a.bar(106, 312, 349, 4.5, 0.65)
    a.bar(106, 272, 370, 4.5, 0.65)
    a.step()
    for (x, y, w, lx1, lx2) in ((65, 395, 138, 96, 175), (215, 395, 137, 247, 318), (65, 436, 138, 92, 178), (215, 436, 137, 250, 316), (65, 476, 287, 170, 250)):
        a.rect(x, y, w, 32, 6)
        a.bar(lx1, lx2, y + 16, 3.5, 0.5)
    a.bar(68, 185, 523, 2.5, 0.4)
    for y, lx1, lx2 in ((539, 138, 280), (575, 142, 276), (612, 136, 282)):
        a.rect(66, y, 286, 32, 6)
        a.bar(lx1, lx2, y + 16, 3.5, 0.5)
    a.step()
    # phone 2 content
    for cx, kind in ((518, 'mute'), (598, 'break'), (680, 'spk')):
        a.circle(cx, 204, 20)
        if kind == 'mute':
            a.rect(cx - 3.5, 194, 7, 12, 3.5, 1.6)
            a.line(cx - 8, 195, cx + 8, 213, 1.6)
        elif kind == 'break':
            a.path('M%s 198Q%s 211 %s 210' % (cx - 7, cx - 7, cx + 4), 1.8)
            for dx in (-1, 3, 7):
                a.circle(cx + dx, 200, 0.8, 1.5)
        else:
            a.path('M%s 201H%s L%s 196V212L%s 207H%s Z' % (cx - 8, cx - 4, cx + 2, cx - 4, cx - 8), 1.6)
            a.path('M%s 200Q%s 204 %s 208' % (cx + 6, cx + 10, cx + 6), 1.6)
    a.bar(500, 535, 235, 2.5, 0.4)
    a.bar(566, 630, 235, 2.5, 0.4)
    a.bar(568, 628, 245, 2.5, 0.4)
    a.bar(660, 698, 235, 2.5, 0.4)
    a.step()
    a.circle(467, 275, 12)
    a.path('M462 270Q461 278 469 280', 1.6)
    a.bar(492, 585, 274, 5, 0.7)
    a.bar(492, 630, 295, 3, 0.45)
    a.bar(492, 577, 311, 3, 0.45)
    a.bar(457, 487, 341, 3, 0.4)
    a.bar(495, 738, 340, 4.5, 0.65)
    a.bar(495, 725, 361, 4.5, 0.65)
    a.bar(495, 650, 382, 4.5, 0.65)
    a.step()
    for y, lx1, lx2, dot in ((411, 490, 545, True), (463, 490, 545, True), (514, 520, 682, False)):
        a.rect(452, y, 292, 44, 6)
        if dot:
            a.circle(470, y + 22, 5, 1.6)
        a.bar(lx1, lx2, y + 22, 3.5, 0.5)
    a.line(438, 582, 762, 582)
    a.rect(452, 597, 101, 40, 6)
    a.bar(486, 520, 617, 3.5, 0.5)
    a.rect(567, 597, 177, 40, 6)
    a.bar(640, 672, 617, 3.5, 0.5)
    return a.svg()


def crm_search():
    a = Art(1507, 1044, sc=1.7)

    def mp(cx, cy, s=22):
        a.circle(cx, cy - s * 0.25, s * 0.28, 1.6)
        a.path('M%s %sQ%s %s %s %s' % (n(cx - s * 0.5), n(cy + s * 0.5), n(cx), n(cy - s * 0.1), n(cx + s * 0.5), n(cy + s * 0.5)), 1.6)

    def avatar(cx, cy):
        a.circle(cx, cy, 30, 1.8)
        a.circle(cx, cy - 6, 10, 1.6)
        a.path('M%s %sQ%s %s %s %s' % (cx - 18, cy + 22, cx, cy + 4, cx + 18, cy + 22), 1.6)

    # header
    a.bar(42, 200, 62, 5, 0.8)
    a.path('M793 82Q793 60 811 52Q829 60 829 82Z', 1.8)
    a.rect(832, 38, 38, 32, 9, 1.6)
    a.bar(840, 862, 54, 2, 0.5)
    a.rect(922, 44, 44, 44, 8, 1.8)
    a.path('M935 66L945 76L970 48', 2)
    a.rect(976, 38, 28, 32, 9, 1.6)
    a.circle(1092, 63, 36, 1.8)
    a.circle(1092, 54, 11, 1.6)
    a.path('M1072 84Q1092 62 1112 84', 1.6)
    a.bar(1147, 1412, 63, 5, 0.65)
    a.path('M1427 58H1443L1435 68Z', 1.8)
    a.step()
    a.line(5, 120, 1507, 120)
    a.rect(963, 138, 490, 57, 28, 2)
    a.circle(999, 165, 12, 2)
    a.line(1008, 174, 1016, 183, 2)
    a.bar(1034, 1084, 167, 6, 0.75)
    a.line(1090, 154, 1090, 182, 1.8)
    a.step()
    a.line(5, 219, 581, 219)
    a.line(1457, 219, 1507, 219)
    # table lines (stop short of the dropdown, which is drawn over them)
    for y in (325, 393, 475, 559, 645, 731):
        a.line(5, y, 581, y)
    for y in (815, 902, 990):
        a.line(5, y, 1507, y)
    a.line(195, 325, 195, 1044)
    a.line(416, 325, 416, 1044)
    for x in (655, 900, 1433):
        a.line(x, 748, x, 1044)
    a.step()
    # header cells
    for cx in (152, 380):
        a.path('M%s 351L%s 345L%s 351' % (cx - 9, cx, cx + 9), 1.8)
        a.path('M%s 365L%s 371L%s 365' % (cx - 9, cx, cx + 9), 1.8)
    a.bar(229, 312, 358, 6, 0.7)
    a.bar(437, 578, 358, 6, 0.7)
    a.step()
    # rows
    ys = (433, 517, 602, 688, 773, 857, 943)
    for y, k in ((433, 2), (688, 1), (773, 3)):
        mp(135, y - 1)
        a.bar(155, 168, y, 4, 0.6)
    for y in (433, 517):
        a.bar(229, 300, y, 6, 0.65)
    a.line(227, 576, 227, 629, 7)
    a.bar(244, 382, 602, 6, 0.65)
    for y in (688, 943):
        a.path('M233 %sL245 %sL261 %s' % (y - 1, y + 11, y - 14), 3)
        a.bar(274, 360 if y == 688 else 366, y, 6, 0.65)
    for y in (773, 857):
        a.bar(229, 367, y, 6, 0.65)
    a.step()
    for cx, cy in ((474, 433), (474, 518), (474, 603), (547, 603), (474, 690), (474, 945), (547, 945)):
        avatar(cx, cy)
    for y in (773, 857):
        a.bar(452, 492, y, 5, 0.45)
    a.step()
    for y, x2 in ((773, 847), (857, 848), (943, 849)):
        a.bar(690, x2, y, 6, 0.6)
    a.bar(935, 976, 773, 5, 0.45)
    a.bar(935, 976, 943, 5, 0.45)
    a.pill(935, 836, 223, 42, 960, 1134)
    a.pill(1179, 836, 110, 42, 1203, 1265)
    a.step()
    # dropdown
    a.rect(581, 203, 875, 545, 14, 2)
    a.line(581, 269, 1456, 269)
    a.line(871, 203, 871, 269)
    a.line(1152, 203, 1152, 269)
    a.bar(660, 735, 237, 6, 0.7)
    a.rect(748, 219, 50, 36, 10, 1.6)
    a.bar(925, 1048, 237, 6, 0.7)
    a.rect(1062, 219, 44, 36, 10, 1.6)
    a.bar(1230, 1325, 237, 8, 0.9)
    a.rect(1340, 219, 44, 36, 10, 1.6)
    a.step()
    a.line(608, 450, 1456, 450)
    a.line(608, 622, 1456, 622)
    # entry 1
    a.bar(628, 873, 314, 8, 0.85)
    mp(907, 315, 20)
    mp(922, 315, 20)
    a.bar(942, 970, 314, 4, 0.6)
    a.bar(628, 966, 354, 6, 0.55)
    a.pill(628, 382, 331, 42, 652, 935)
    a.pill(980, 382, 117, 42, 1003, 1074)
    a.step()
    # entry 2
    a.bar(630, 900, 490, 8, 0.85)
    a.rect(932, 481, 26, 22, 4, 1.8)
    a.bar(966, 980, 491, 4, 0.6)
    mp(1023, 491, 22)
    a.bar(1042, 1056, 491, 4, 0.6)
    a.bar(630, 868, 530, 6, 0.55)
    a.pill(629, 558, 124, 42, 652, 730)
    a.step()
    # entry 3
    a.bar(630, 810, 662, 8, 0.85)
    mp(848, 662, 20)
    mp(863, 662, 20)
    a.bar(880, 892, 662, 4, 0.6)
    a.bar(630, 960, 702, 6, 0.55)
    return a.svg()


files = {
    'art-state-machine.svg': state_machine(),
    'art-workflow-editor.svg': workflow_editor(),
    'art-phones.svg': phones(),
    'art-crm-search.svg': crm_search(),
}
for name, content in files.items():
    with open(os.path.join(OUT, name), 'w') as f:
        f.write(content)
    print(name, content.count('<'), 'elements')

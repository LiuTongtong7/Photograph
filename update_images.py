#!/usr/bin/env python
# -*- coding:utf-8 -*-
# 
# Created by liutongtong on 2018/9/13 00:38
#


import os


thumbs_path = 'images/thumbs/'
images = [f for f in os.listdir(thumbs_path) if not f.startswith('.') and f.endswith('.jpg')]
images.sort(key=lambda img: os.path.getmtime(os.path.join(thumbs_path, img)), reverse=True)
with open('assets/js/images.js', 'w') as fp:
    fp.write('var images = [\n')
    for img in images:
        fp.write("    '{}',\n".format(img))
    fp.write('];\n')

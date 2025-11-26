#!/usr/bin/env python3
import os, re
root='.'
menu_path='./menu-bar.html'
if not os.path.exists(menu_path):
    print('menu-bar.html not found')
    raise SystemExit(1)
menu=open(menu_path,'r',encoding='utf-8').read()
changed=[]
for dirpath,dirnames,filenames in os.walk(root):
    # skip dist and node_modules and .git
    if any(part in ('.git','node_modules','dist') for part in dirpath.split(os.sep)):
        continue
    for fn in filenames:
        if not fn.endswith('.html'):
            continue
        full=os.path.join(dirpath,fn)
        rel=os.path.relpath(full,root)
        if rel in ('index.html','menu-bar.html'):
            continue
        with open(full,'r',encoding='utf-8') as f:
            c=f.read()
        if '<!-- Menu Bar - Include this in all subpages -->' in c:
            # replace existing block
            start=c.find('<!-- Menu Bar - Include this in all subpages -->')
            # find the next </script> after start
            end=c.find('</script>', start)
            if end!=-1:
                end=end+len('</script>')
                new=c[:start]+menu+c[end:]
                with open(full,'w',encoding='utf-8') as f:
                    f.write(new)
                changed.append(rel)
            else:
                print('no closing </script> in',rel)
        else:
            # inject after <body>
            m=re.search(r'(<body[^>]*>)', c, flags=re.IGNORECASE)
            if m:
                new=c.replace(m.group(1), m.group(1)+'\n'+menu)
                with open(full,'w',encoding='utf-8') as f:
                    f.write(new)
                changed.append(rel)
            else:
                print('no <body> tag for',rel)
print('Updated',len(changed),'files')
for x in changed:
    print(' -',x)

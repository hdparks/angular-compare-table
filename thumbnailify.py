from PIL import Image
import os.path

views = [
    'homepage',
    'menu',
    'settings',
    'shows',
    'livetv'
]
devices = [
    'Web',
    'Roku',
    'AppleTV',
    'FireTV',
    'Mobile Web',
    'iOS',
    'Android',
]

def thumbnailify(max_dimensions=(400,400), overwrite=False):
    for x in devices:
        for y in views:
            if not overwrite:
                if os.path.exists('src/assets/{}/{}_thumbnail.jpg'):
                    continue

            file_extension = None
            if os.path.exists("src/assets/{}/{}.jpg".format(x, y)):
                file_extension = 'jpg'
            elif os.path.exists("src/assets/{}/{}.png".format(x, y)):
                file_extension = 'png'
            else:
                # If file does not exist, print an alert and continue
                print('{}/{}.x'.format(x, y), 'was not found')
                continue

            im = Image.open('src/assets/{}/{}.{}'.format(x, y, file_extension))
            tm = im.copy()
            if tm.mode in ("RGBA","P"):
                tm = tm.convert("RGB")
            tm.thumbnail(max_dimensions)
            tm.save('src/assets/{}/{}_thumbnail.jpg'.format(x, y))
            im.close()
            tm.close()
    print("Thumbnailification complete")

"""ASP house grade: green shadows, warm yellow highlights, Higgsfield light leak, film grain.
Run from app/:  python3 art-src/grade.py   (reads art-src/photos, writes public/assets/img)"""
from PIL import Image, ImageOps
import numpy as np
SRC, OUT = 'art-src/photos/', 'public/assets/img/'
LEAK = np.asarray(Image.open('art-src/leak.png').convert('RGB')).astype(np.float32) / 255
GREEN = np.array([0x0C, 0x30, 0x1A], np.float32) / 255
WARM = np.array([1.0, 0.93, 0.62], np.float32)
PROFILES = {  # tone, leak, grain, vignette, desat, exposure
  'photo':    (1.0, 0.42, 0.040, 0.30, 0.18, 0.94),
  'art':      (0.45, 0.20, 0.020, 0.00, 0.00, 1.00),
  'portrait': (0.55, 0.16, 0.030, 0.12, 0.05, 1.00),
}
def grade(name, out, profile, size=None, seed=0):
  tone, leak_a, grain, vig, desat, expo = PROFILES[profile]
  im = Image.open(SRC + name).convert('RGB')
  if size: im = ImageOps.fit(im, size, Image.LANCZOS, centering=(0.5, 0.45))
  a = np.asarray(im).astype(np.float32) / 255
  h, w, _ = a.shape
  L = (a @ np.array([0.2126, 0.7152, 0.0722], np.float32))[..., None]
  a = a * (1 - desat) + L * desat
  a = np.clip((a - 0.5) * 1.08 + 0.5, 0, 1)                      # gentle contrast
  ws = ((1 - L) ** 2.2) * 0.55 * tone                              # shadows to canopy green
  wh = (L ** 2.5) * 0.22 * tone                                    # highlights to warm yellow
  a = a * (1 - ws) + (a * 0.55 + GREEN) * ws
  a = a * (1 - wh) + a * WARM * wh + wh * 0.04
  lk = Image.fromarray((LEAK * 255).astype(np.uint8))
  if seed % 2: lk = ImageOps.mirror(lk)
  if seed % 3 == 1: lk = ImageOps.flip(lk)
  lk = np.asarray(ImageOps.fit(lk, (w, h), Image.LANCZOS)).astype(np.float32) / 255
  a = 1 - (1 - a) * (1 - lk * leak_a)                              # screen blend
  if vig:
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    r = np.sqrt(((xx / w - 0.5) * 1.6) ** 2 + ((yy / h - 0.5) * 1.6) ** 2)
    a *= (1 - vig * np.clip(r - 0.35, 0, 1) ** 1.5)[..., None]
  rng = np.random.default_rng(seed + 7)
  n = rng.normal(0, grain, (h, w, 1)).astype(np.float32)
  a = np.clip(a * expo + n, 0, 1)
  Image.fromarray((a * 255 + 0.5).astype(np.uint8)).save(OUT + out, 'WEBP', quality=80, method=6)
  print(out, w, h, profile)
JOBS = [
  ('door-networks.webp', 'door-networks.webp', 'photo', None),
  ('door-brands.webp', 'door-brands.webp', 'photo', None),
  ('door-orgs.webp', 'door-orgs.webp', 'photo', None),
  ('services.webp', 'services.webp', 'photo', None),
  ('poster-farm.webp', 'poster-farm.webp', 'art', None),
  ('poster-stories.webp', 'poster-stories.webp', 'art', None),
  ('poster-movies.webp', 'poster-movies.webp', 'art', None),

  ('founders-bw.webp', 'founders-bw.webp', 'portrait', None),
]
for c in ['nashville', 'ggsc', 'stoopid', 'ooc', 'arbolado', 'whittier', 'surgical', 'hammitt']:
  JOBS.append((c + ('.png'), 'work-' + c + '.webp', 'photo', (960, 600)))
for i, (src, out, p, s) in enumerate(JOBS): grade(src, out, p, s, seed=i)

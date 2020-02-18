#!/usr/bin/env bash

# create beta components list
wuf update \
  --shape .wuf/required-component-files.json \
  --components src/beta \
  --max-mismatch 1 \
  --output .wuf/beta/components.json


# vanilla testkits
wuf export-testkits \
  --components .wuf/beta/components.json \
  --definitions .wuf/beta/testkits/definitions.js \
  --template .wuf/beta/testkits/vanilla.template.ejs \
  --output testkit/beta/index.js

# vanilla testkits typescript definitions
wuf export-testkits \
  --components .wuf/beta/components.json \
  --definitions .wuf/beta/testkits/definitions.js \
  --template .wuf/beta/testkits/vanilla-typescript.template.ejs \
  --output testkit/beta/index.d.ts


# enzyme testkits
wuf export-testkits \
  --components .wuf/beta/components.json \
  --definitions .wuf/beta/testkits/definitions.js \
  --template .wuf/beta/testkits/enzyme.template.ejs \
  --output testkit/beta/enzyme.js

# enzyme testkits typescript definitions
wuf export-testkits \
  --components .wuf/beta/components.json \
  --definitions .wuf/beta/testkits/definitions.js \
  --template .wuf/beta/testkits/enzyme-typescript.template.ejs \
  --output testkit/beta/enzyme.d.ts


# protractor testkits
wuf export-testkits \
  --components .wuf/beta/components.json \
  --definitions .wuf/beta/testkits/definitions.js \
  --template .wuf/beta/testkits/protractor.template.ejs \
  --output testkit/beta/protractor.js

# puppeteer testkits
wuf export-testkits \
  --components .wuf/beta/components.json \
  --definitions .wuf/beta/testkits/definitions.js \
  --template .wuf/beta/testkits/puppeteer.template.ejs \
  --output testkit/beta/puppeteer.js

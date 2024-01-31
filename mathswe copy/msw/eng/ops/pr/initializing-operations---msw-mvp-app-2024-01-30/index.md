<!-- Copyright (c) 2024 Tobias Briones. All rights reserved. -->
<!-- SPDX-License-Identifier: CC-BY-4.0 -->
<!-- This file is part of https://github.com/tobiasbriones/blog -->

# Initializing Operations | Math.Software MVP App (2024/01/30)

I started working the app prototype in a single `index.html` file with the
styles I unofficially developed for MSW Engineer with further upcoming styles,
and some JS logic for the fractal animation with its special canvas parallax
effect.

I (unofficially) deployed the prototypes to production, and have been setting
priorities of the overwhelming projects, updates, and research I've had lately.

I'm in an urge to go to production since I need my investment as founder to be
returned after so much slack time in the past. Thus, that's what I mean about
fixing priorities at this moment to trade minor tasks and projects behind for
the most important projects involving MathSwe directly.

In my next blog draft, I'm adapting the concept of MVP (Minimum Viable Product)
and introducing the concept of Pre (pre-engineering grade)
for labeling and versioning software. It's getting extremely large due to the
formalities I'm devising against my experience and knowledge of math and
traditional engineering, so it will take longer to publish.

The MVP and Pre concept has priority for me now to move forward on the "
business"/operational side while keep enriching the mathematical side of MathSwe
in the background. Since, I must go to production now, I'll be using MVPs for
MSW and Repsymo to go the right way.

I created the `math-software-mvp` app with React 18, TypeScript 5 with SWC, and
Vite 5.

I fixed the standard to `ES2022` for all the project configuration, tuned the TS
config for strict checking, and took a lot of time to configure the ESLint for
checking TS, React with Hooks, and fixing some legacy issues like "JSX uses
React" (it's unnecessary to import `React` for JSX now, but the tool still gives
the error).

Web configurations are always an off-topic mess that takes a lot of time for
making it work because of the dynamic and poorly design nature of web tech like
JS. You can configure something, but it's uncertain if it'll actually be so or
have arbitrary side effects.

I had to prevent the lint for a line of the `vite.config.ts` file because there
was no way to
fix `TS7016: Could not find a declaration file for module vite-plugin-eslint.`,
`implicitly has an any type.`,
`There are types at .../math.software-mvp/node_modules/vite-plugin-eslint/dist/index.d.ts , but this result could not be resolved when respecting package.json exports. The vite-plugin-eslint library may need to update its package.json or typings.`.

So, the types are there (in the `node_modules` lib) but it can't be found
🤦🏻‍♂️. I could fix that but won't lose more time with web dev nonsense errors,
and that's development code, that's why I suppressed the lint for that line of
code.

One last detail that is pending is to migrate the legacy `.eslintrc.cjs` format
to `eslint.config.js`
since it's being dropped. I don't have a priority for this, and documentation
can be better later. So, I'll wait, and migrate this minor ops detail in a
future opportunity.

I exported and added the **Math** and **MSW (Math Software)** icons I've been
devising since everything I've worked with the **Piaxid** concept since 2017. So
my logos have formal sense I ascertained for so many years of formal background
and philosophy. The current logos are not official yet. I have to draw them with
the Canvas DSL I've also been designing in Canvas Play, but since we're against
the MVP development, it's perfectly valid to add what I have for now and
iterate.

I also installed `bootstrap-react` and `bootstrap` to continue a similar style
approach I've managed in Repsymo much before. Moreover, I installed
the `better-react-mathjax` library to keep formatting equations in React, which
allowed a great integration compared to the JS mess of the low-level options
with abandoned or poor support. I set the ASCII Math support and removed *huge*
bloat from the LaTeX formulas.

After writing an extensive draft of the blog I mentioned early, I concluded the
standards for the repository name, semantic, and internal project structure. For
example, I declared that there can only be one MVP project per GitHub
organization since that's the only correct way I figured out, and it must be
named after `{ org_name }---mvp` with the pipe operator
[I standardized before](/how-i-standardized-hyphen-and-pipe-symbols-on-file-names),
and been using successfully. The file/project name is piped to the MVP context
just like I've been doing with EPs and CPs.

MVP projects must be explicitly piped with the MVP context to leave clear their
MVPs to anyone.

The new MVP project has the structure:

`Opening Operations at the Math Software MVP | Initial Project Structure`

```
mathsoftware---mvp
├── math.software---mvp
│   └── README.md
└── README.md
```

Since the mono repository `mathsoftware---mvp` is the only MVP in the
organization by the new standard, the rest of MVPs will be hosted there. To
start operations, I just introduced the
**Math.Software MVP** in the `math.software---mvp` directory.

I updated the Netlify deployment since I had a prototype I made in ~a day with
plain HTML, and set the repository altogether with the readme files up to date
and with the deployment status badges.

Production will run in the APEX domain [math.software](https://math.software)
until the engineering grade version is formally created, thus deprecating the
MVP version.

Staging is running in the [staging.math.software](https://staging.math.software)
subdomain deploying the `msw/staging` branch.

The MVP versions will have "Mainstream/Mainstream+" quality grade according to
my current blog draft. That is, quality near the "Pre-Engineering" grade, or one
step behind the boundary between the engineering grade and general engineering.
In other words, two/three steps behind the engineering grade. Notice by
"engineering grade" I mean traditional engineering with rigor.

The app is aimed to be a PWA. Since I also have experience with this, I'm having
into account the tradeoffs like adding the font and everything bundled with the
app instead of using a CDN, which involves adding third-party copyright notices
to comply with IP laws. That's something I'll manage in further ops before the
app is ready for one of the upcoming releases.

This is the first blog and PR about the new and major project **MVP:
Math.Software** located in the **mathsoftware** GitHub organization 🎉🥳🎉.

As usual, I'm providing
[the `BSD-3-Clause` License](https://github.com/mathsoftware/mathsoftware---mvp/blob/main/LICENSE)
to the organization MVP[^x].

[^x]: Remember that, as per my new standard draft, one organization can have at
most one MVP repository or project so that what I mean by "the organization MVP"

The initial app will be released under the version `0.1.0` as per standard[^x].
For formality reasons, I declare the version `0.1.0-dev` (which is SemVer
compliant) in the `package.json` of the project while in development of that
version, so the very last commit prior to release should be for removing the "
dev" suffix since the iteration is complete, that is, version `0.1.0`. The same
applies to any other version, so the information assigned is coherent.

[^x]: The initial version of SemVer software should be the `0.1.0` in contrast
to some projects I've seen using awkward `0.0.1` versions

Finally, I added the temporal styles I worked for the current version of MSW
Engineer (the ones the blog is using right now). So the new iterations will
start extracting a lot of value from previous works from the past year.

The upcoming news will be the work in the `msw` branch for adding the prototype
I wrote in plain HTML in a day before, so there will be something to deliver to
production for the `0.1.0` version.


---
permalink: initializing-ops-with-a-cookie-banner---legal---mathswe-com-2024-03-20
title: "Initializing Ops with a Cookie Banner | Legal | MathSwe Com (2024/03/20)"
description: "**Add extra personalization with more complete cookie consent and better banner styles** \| `dev <- legal` PR [#11](https://github.com/mathswe/mathswe.com/pull/11) [1]"
ogimage: ""
---


<!-- Copyright (c) 2024 Tobias Briones. All rights reserved. -->
<!-- SPDX-License-Identifier: CC-BY-4.0 -->
<!-- This file is part of https://github.com/tobiasbriones/blog -->

# Initializing Ops with a Cookie Banner | Legal | MathSwe Com (2024/03/20)

---

**Add extra personalization with more complete cookie consent and better banner styles** \| `dev <- legal` PR [#11](https://github.com/mathswe/mathswe.com/pull/11) [1]

It adds the other common categories of cookies: functional, and targeting.

It sets the other Google consent parameters from the Google documentation. They
may not be required, but the system will set them accordingly.

It allows quality personalization by showing the underlying domain name
requesting consent in the banner.

Personalization is even more complying now by enabling the "Essential Only" CTA
button in the cookie banner, besides the existing "Accept All" CTA button.

It improves some styles for better readability in the cookie banner.

---

**Fix build with missing dep @types/gtag.js** \| `dev <- mathswe/ops` PR [#10](https://github.com/mathswe/mathswe.com/pull/10) [2]




---

**Implement rigorous Google Analytics app API** \| `dev <- mathswe/ops` PR [#9](https://github.com/mathswe/mathswe.com/pull/9) [3]

This implementation:

- Uses env variables to set up GA as per environment requirements.
- Follows the Google consent mode (v2).
- Is type-safe.
- Has important documentation.
- Passes the consent mode tests via Google Tag Assistance and is reactive to
cookie changes.
- Disallows arbitrary updates (side effects) to the cookie banner check buttons
while showing.

The remaining task is implementing this via SSR in the head tag (removing the
react-ga lib).


---

**Enable env vars and set cookie consent to all subdomains** \| `dev <- mathswe/ops` PR [#8](https://github.com/mathswe/mathswe.com/pull/8) [4]

It supports the `production` and `staging` environments with public variables
like domain names, as well as setting the cookie consent domain to all
subdomains.

Notice that valid cross-site cookies must be set only by the APEX domain. Set
the cookie consent from the main domain only, and it will apply to all its
subdomains.



---

**Implement state persistence via cookies in CookieBanner.tsx** \| `dev <- legal` PR [#7](https://github.com/mathswe/mathswe.com/pull/7) [5]

It enables cookies usage to start storing user's content via the `CookieBanner`
component.


---

**Fix src path TS configs** \| `dev <- mathswe/ops` PR [#6](https://github.com/mathswe/mathswe.com/pull/6) [6]

The build command failed because of the tsconfig.json typos in the project
paths.


---

**Add dep react-cookies** \| `dev <- mathswe/ops` PR [#5](https://github.com/mathswe/mathswe.com/pull/5) [7]

It adds app cookie support.


---

**Enhance UI of component CookieBanner with styles and anims** \| `dev <- legal` PR [#4](https://github.com/mathswe/mathswe.com/pull/4) [8]

It enhances and fixes some further styles and adds the showing animation.


---

**Implement component CookieBanner UI** \| `dev <- legal` PR [#3](https://github.com/mathswe/mathswe.com/pull/3) [9]

It adds the UI implementation for the cookie banner that will allow the user to
select cookie preferences immediately.


---

**Add component Table** \| `dev <- mathswe/ui` PR [#2](https://github.com/mathswe/mathswe.com/pull/2) [10]

It helps render minimalistic responsive tables.


---

**Initiate web app operations** \| `dev <- mathswe/ops` PR [#1](https://github.com/mathswe/mathswe.com/pull/1) [11]

It sets up the web app for its initial development.

---

## References

[1] [Add extra personalization with more complete cookie consent and better banner styles by tobiasbriones · Pull Request #11 · mathswe/mathswe.com](https://github.com/mathswe/mathswe.com/pull/11).
GitHub.

[2] [Fix build with missing dep @types/gtag.js by tobiasbriones · Pull Request #10 · mathswe/mathswe.com](https://github.com/mathswe/mathswe.com/pull/10).
GitHub.

[3] [Implement rigorous Google Analytics app API by tobiasbriones · Pull Request #9 · mathswe/mathswe.com](https://github.com/mathswe/mathswe.com/pull/9).
GitHub.

[4] [Enable env vars and set cookie consent to all subdomains by tobiasbriones · Pull Request #8 · mathswe/mathswe.com](https://github.com/mathswe/mathswe.com/pull/8).
GitHub.

[5] [Implement state persistence via cookies in CookieBanner.tsx by tobiasbriones · Pull Request #7 · mathswe/mathswe.com](https://github.com/mathswe/mathswe.com/pull/7).
GitHub.

[6] [Fix src path TS configs by tobiasbriones · Pull Request #6 · mathswe/mathswe.com](https://github.com/mathswe/mathswe.com/pull/6).
GitHub.

[7] [Add dep react-cookies by tobiasbriones · Pull Request #5 · mathswe/mathswe.com](https://github.com/mathswe/mathswe.com/pull/5).
GitHub.

[8] [Enhance UI of component CookieBanner with styles and anims by tobiasbriones · Pull Request #4 · mathswe/mathswe.com](https://github.com/mathswe/mathswe.com/pull/4).
GitHub.

[9] [Implement component CookieBanner UI by tobiasbriones · Pull Request #3 · mathswe/mathswe.com](https://github.com/mathswe/mathswe.com/pull/3).
GitHub.

[10] [Add component Table by tobiasbriones · Pull Request #2 · mathswe/mathswe.com](https://github.com/mathswe/mathswe.com/pull/2).
GitHub.

[11] [Initiate web app operations by tobiasbriones · Pull Request #1 · mathswe/mathswe.com](https://github.com/mathswe/mathswe.com/pull/1).
GitHub.






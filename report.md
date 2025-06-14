Improved your solution?Generate a new report to resolve errors and warnings.
Reports are only visible to you
page-has-heading-one
(1 occurrence)
warning

Page should contain a level-one heading

<html lang="en">


Improved your solution?Generate a new report to resolve errors and warnings.
Reports are only visible to you
no-redundant-role
(1 occurrence)
error

Redundant role "banner" on <header>

<header class="header min-h-[80px] flex flex-row justify-between items-center" role="banner">

Learn more
no-inline-style
(38 occurrences)
error

Inline style is not allowed

<a href="/frontend-mentor-exercise-27-galleria-slideshow-site/art/0" class="gallery__item-link galle ...


Improved your solution?Generate a new report to resolve errors and warnings.
Reports are only visible to you
frontend-mentor/no-fixed
(2 occurrences)
warning

Avoid position: fixed as it can cause content to be cut off when zoomed, creating accessibility issues for users who need to enlarge content.

position:fixed

Learn more
frontend-mentor/prefers-reduced-motion
(11 occurrences)
warning

Provide alternatives for users who prefer reduced motion to prevent motion sickness and other accessibility issues.

--default-transition-duration:.15s;

Learn more
declaration-no-important
(1 occurrence)
warning

Avoid !important as it breaks the natural cascade and makes future style changes more difficult to implement.

display:none!important

Learn more
declaration-property-unit-disallowed-list
(34 occurrences)
warning

Consider using relative units (em, rem) instead of absolute units (px, pt) to support resizing and improve accessibility.

width:1px;

Learn more
declaration-property-value-keyword-no-deprecated
(2 occurrences)
warning

Replace deprecated keyword values with modern alternatives to ensure better browser compatibility.

appearance:button

Learn more
no-duplicate-selectors
(8 occurrences)
warning

Consolidate duplicate selectors to maintain an organized and efficient stylesheet.

::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;le ...

Learn more
selector-max-specificity
(4 occurrences)
warning

Keep selector specificity low to maintain a flat hierarchy that is easier to maintain and override when needed.

.gallery__item[data-astro-cid-j7pv25f6] .gallery__item--caption[data-astro-cid-j7pv25f6]{opacity:0;t ...

Learn more
frontend-mentor/use-logical-properties
(14 occurrences)
info

Use logical properties (e.g., inline-start instead of left) to support different reading directions and improve internationalization.

margin-top:20px

Learn more
frontend-mentor/encourage-css-functions
(61 occurrences)
info

Consider using CSS functions like calc(), min(), and clamp() to create more responsive and flexible layouts that adapt to different viewport sizes.

height:1px

Learn more
frontend-mentor/encourage-css-variables
(4 occurrences)
info

Use CSS custom properties (variables) to centralize values, improve consistency, and make site-wide changes easier to implement.

background-color:#0000;

Learn more
frontend-mentor/max-width-media-query
(1 occurrence)
info

Consider using min-width instead of max-width and using a mobile-first approach, which can lead to cleaner code and better performance on smaller devices.

@media screen and (max-width:38em){.text-preset-1{font-family:var(--ff);font-weight:var(--fw-bold);l ...
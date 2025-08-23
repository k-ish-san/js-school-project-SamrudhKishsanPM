# Accessibility Changes

## Modal
- Added `role="dialog"` and `aria-modal="true"`.
- Linked `aria-labelledby` and `aria-describedby` to modal title & content.
- Focus is trapped inside modal while open.
- Modal closes with `Escape`.

## Timeline Markers
- Added `aria-current="true"` for active marker.
- Markers navigable via Tab for forward and Tab+Shift for backward navigation.

## Keyboard
- All interactive elements like buttons reachable with keyboard.
- Focus styles clearly visible.

## Color & Contrast
- Ensured all text meets WCAG AA and AAA contrast ratio ≥4.5:1.
- 7.09 contrast ratio for h1, p, time, figure, figcaption.
- 7.27 contrast ratio for close modal button.
- 16.12 contrast ratio for timeline-marker buttons.
- 19.22 contrast ratio for active marker button.
- Used WCAG Contrast checker extension/devtool for testing.

## Images
- Added meaningful `alt` attributes(event title).

## Other
- Also tried different filters to check visibility under different conditions.

# ITZFIZZ Digital Experiences

## Live Demo

[Open the live website](https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/)

A front-end web development assignment for ITZFIZZ. The page presents a premium dark automotive-style experience with a scroll-controlled 3D car, project showcase, capabilities, and contact footer.

## Features

- Full-screen responsive hero section
- Interactive GLB car rendered with `<model-viewer>`
- GSAP and ScrollTrigger scroll animation
- Scroll-driven 360-degree car rotation
- Camera transition from side profile to top view
- Pointer interaction disabled so the car rotates only with scroll
- Selected projects section with local images and motion video
- Capabilities list and company CTA
- Responsive contact footer

## Project Structure

```text
.
├── index.html
├── script.js
├── style.css
└── assets/
    ├── object.glb
    ├── brand.png
    ├── digital_product.png
    └── motion.mp4
```

## Run Locally

Because the page loads local media assets, run it through a local server instead of opening the HTML file directly.

Using VS Code:

1. Install the **Live Server** extension.
2. Open `index.html`.
3. Right-click the file and choose **Open with Live Server**.

The page uses these external CDN resources:

- Google Fonts: Space Grotesk
- `model-viewer`
- GSAP
- GSAP ScrollTrigger

## Customizing Projects

Update the project assets in `index.html`:

```html
<img src="./assets/your-image.png" alt="Project description">
```

For the motion project:

```html
<video autoplay muted loop playsinline>
    <source src="./assets/your-video.mp4" type="video/mp4">
</video>
```

## Company Link

The **START A PROJECT** CTA links to [itzfizz.com](https://itzfizz.com). The footer contains sample contact details that should be replaced with approved company information before submission.

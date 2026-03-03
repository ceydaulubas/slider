# react-styled-slider-component

A highly customizable, responsive React slider component built with TypeScript and Styled Components.

## 🚀 Features

- **Compound Components:** Full control over slider layout (`Slider.Track`, `Slider.Button`, `Slider.Dots`).
- **Responsive Breakpoints:** Easily adjust visible slides for Mobile, Tablet, and Desktop.
- **Touch & Swipe Support:** Native feel on mobile devices.
- **Infinite Loop:** Seamless back-to-start navigation.
- **Autoplay:** Smart timer with pause on interaction.
- **Customizable Arrows:** Multiple styles (`minimal`, `filled`, `outlined`, `plain`) and custom icons.
- **Gap Support:** Add consistent spacing between slides.
- **TypeScript Ready:** Fully typed for a better developer experience.

## 📦 Installation

```bash
npm install react-styled-slider-component
# or
yarn add react-styled-slider-component
```

## 🛠 Usage Examples

### 1. Full Width Hero Slider (Autoplay)

Perfect for landing pages. Shows one large image at a time.

<img src= "https://res.cloudinary.com/dxqyvjf5r/image/upload/v1772570316/npm%20package/full_width_slider_v2vcbh.png"/>

```tsx
import { Slider } from "react-styled-slider-component";

const HeroSlider = () => (
  <Slider
    visibleSlides={1}
    infinite={true}
    autoplay={true}
    autoplaySpeed={4000}
  >
    <Slider.Button type="prev" style="minimal" />
    <Slider.Track>
      <div style={{ height: "400px" }}>
        <img
          src="image1.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ height: "400px" }}>
        <img
          src="image2.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </Slider.Track>
    <Slider.Button type="next" style="minimal" />
    <Slider.Dots position="bottom" />
  </Slider>
);
```

### 2. Multi-Item Responsive Carousel

Shows multiple items at once and adjusts automatically based on screen size.
<img src= "https://res.cloudinary.com/dxqyvjf5r/image/upload/v1772570315/npm%20package/multi_Item_slider_ittwfh.png"/>

```tsx
const Carousel = () => (
  <Slider
    visibleSlides={1}
    infinite={true}
    gap={20}
    breakpoints={{
      768: { visibleSlides: 2 },
      1024: { visibleSlides: 4 },
    }}
  >
    <Slider.Button type="prev" style="filled" />
    <Slider.Track>
      <div style={{ height: "200px", background: "#FFD700" }}>Item 1</div>
      <div style={{ height: "200px", background: "#FF8C00" }}>Item 2</div>
      <div style={{ height: "200px", background: "#FF4500" }}>Item 3</div>
      <div style={{ height: "200px", background: "#FF0000" }}>Item 4</div>
      <div style={{ height: "200px", background: "#C71585" }}>Item 5</div>
    </Slider.Track>
    <Slider.Button type="next" style="filled" />
    <Slider.Dots position="bottom" />
  </Slider>
);
```

### 3. Vertical Slider

Slides items from bottom to top. Ideal for sidebars or vertical lists.

<img src= "https://res.cloudinary.com/dxqyvjf5r/image/upload/v1772570316/npm%20package/vertical_slider_oagp8i.png"/>

```tsx
const VerticalSlider = () => (
  <div style={{ height: "500px" }}>
    <Slider direction="vertical" visibleSlides={2} infinite={true} gap={10}>
      <Slider.Button type="prev" style="outlined" />
      <Slider.Track>
        <div style={{ height: "200px", background: "#f0f0f0" }}>Vertical 1</div>
        <div style={{ height: "200px", background: "#e0e0e0" }}>Vertical 2</div>
        <div style={{ height: "200px", background: "#d0d0d0" }}>Vertical 3</div>
      </Slider.Track>
      <Slider.Button type="next" style="outlined" />
      <Slider.Dots position="right" />
    </Slider>
  </div>
);
```

## ⚙️ Props

### Slider (Main Container)

| Prop            | Type                         | Default        | Description                                               |
| :-------------- | :--------------------------- | :------------- | :-------------------------------------------------------- |
| `visibleSlides` | `number`                     | `1`            | Number of slides to show at once.                         |
| `direction`     | `'horizontal' \| 'vertical'` | `'horizontal'` | Sliding orientation.                                      |
| `infinite`      | `boolean`                    | `false`        | Enable infinite looping.                                  |
| `autoplay`      | `boolean`                    | `false`        | Automatically transition slides.                          |
| `autoplaySpeed` | `number`                     | `3000`         | Delay in ms for autoplay.                                 |
| `gap`           | `number`                     | `0`            | Spacing between slides in pixels.                         |
| `breakpoints`   | `object`                     | `undefined`    | Responsive rules (e.g., `{ 768: { visibleSlides: 2 } }`). |

### Slider.Button

| Prop       | Type                                             | Default       | Description                            |
| :--------- | :----------------------------------------------- | :------------ | :------------------------------------- |
| `type`     | `'prev' \| 'next'`                               | **Required**  | Direction of the button.               |
| `style`    | `'minimal' \| 'filled' \| 'outlined' \| 'plain'` | `'minimal'`   | Visual style of the button.            |
| `children` | `ReactNode`                                      | Default Icons | Custom text or icon inside the button. |

### Slider.Dots

| Prop       | Type                                     | Default    | Description                   |
| :--------- | :--------------------------------------- | :--------- | :---------------------------- |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Placement of navigation dots. |

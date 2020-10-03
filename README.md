# react-rounded-image

> Convert an image into a rounded image

[![NPM](https://img.shields.io/npm/v/react-rounded-image.svg)](https://www.npmjs.com/package/react-rounded-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-rounded-image
```

## Usage

```jsx
import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/me.jpg";

export default class App extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <ReactRoundedImage image={MyPhoto} />
        <ReactRoundedImage
          image={MyPhoto}
          roundedColor="#321124"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
          borderRadius="70"
        />

        <ReactRoundedImage
          image={MyPhoto}
          roundedColor="#66A5CC"
          imageWidth="120"
          imageHeight="120"
          roundedSize="8"
          borderRadius="15"
        />

        <ReactRoundedImage image={MyPhoto} roundedSize="0" imageWidth="110" imageHeight="110" />
      </div>
    );
  }
}
```

# Examples

<img src="./result_example.png" alt="Result"/>

## Adding hover color

```jsx
<ReactRoundedImage
  image={MyPhoto}
  roundedColor="#321124"
  imageWidth="150"
  imageHeight="150"
  roundedSize="13"
  hoverColor="#DD1144"
/>
```

![Result](https://raw.githubusercontent.com/AmineVolk/react-rounded-image/master/react-rounded-image-hover.gif)

# Properties

| Propertie    | Description                    |
| ------------ | -------------------------------|
| image        | The image                      |
| imageWidth   | The image's width              |
| imageHeight  | The image's height             |
| roundedColor | The rounded color              |
| roundedSize  | The rounded size               |
| hoverColor   | The hover color                |
| borderRadius | The border radius(default 50%) |


## License

> You can check out the full license [here](https://github.com/AmineVolk/react-rounded-image/blob/master/LICENSE)

This project is licensed under the terms of the **MIT** license.

# react-rounded-image

> Convert an image into a rounded image and you can also change the circle's color

[![NPM](https://img.shields.io/npm/v/react-rounded-image.svg)](https://www.npmjs.com/package/react-rounded-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-rounded-image
```

## Usage

```jsx
import React, { Component } from "react";
import ExampleComponent from "react-rounded-image";
import MyPhoto from "./me.jpg";

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent image={MyPhoto} />
        <ExampleComponent
          image={MyPhoto}
          roundedColor="#321124"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
        />
        <ExampleComponent
          image={MyPhoto}
          roundedColor="#66A5CC"
          imageWidth="120"
          imageHeight="120"
          roundedSize="8"
        />

        <ExampleComponent
          image={MyPhoto}
          roundedSize="0"
          imageWidth="110"
          imageHeight="110"
        />
      </div>
    );
  }
}
```

## Results for the example

<img src="./result_example.png" alt="Result"/>

## License

MIT © [AmineVolk](https://github.com/AmineVolk)

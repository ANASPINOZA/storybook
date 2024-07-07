// import type { Preview } from "@storybook/angular";
// import { setCompodocJson } from "@storybook/addon-docs/angular";
// import docJson from "../documentation.json";
// // import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
// setCompodocJson(docJson);

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;


// import { Decorator } from '@storybook/angular';
// import type { Preview } from "@storybook/angular";
// import { setCompodocJson } from "@storybook/addon-docs/angular";
// import docJson from "../documentation.json";

// setCompodocJson(docJson);

// // Function to add Font Awesome stylesheet
// const addFontAwesome = (storyFn: () => any) => {
//   const link = document.createElement('link');
//   link.rel = 'stylesheet';
//   link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
//   link.integrity = 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==';
//   link.crossOrigin = 'anonymous';
//   link.referrerPolicy = 'no-referrer';
//   document.head.appendChild(link);
//   return storyFn();
// };

// addDecorator(addFontAwesome);

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;
// function addDecorator(addFontAwesome: (storyFn: any) => any) {
//   throw new Error('Function not implemented.');
// }

import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);

// Function to add Font Awesome stylesheet
const withFontAwesome = (StoryFn: any) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
  link.integrity = 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==';
  link.crossOrigin = 'anonymous';
  link.referrerPolicy = 'no-referrer';
  document.head.appendChild(link);
  return StoryFn();
};

const preview: Preview = {
  decorators: [withFontAwesome],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

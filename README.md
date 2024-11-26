# Memos Chrome Extension

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)
![Chrome Extension](https://img.shields.io/badge/Chrome_Extension-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)
![Windsurf](https://img.shields.io/badge/Built_with-Windsurf_IDE-FF6B6B?style=for-the-badge)

A Chrome extension built with React and TypeScript that allows you to quickly send text notes to a specified API endpoint.

> 🌟 **Project Generated with Windsurf IDE**: This project was bootstrapped and developed using [Windsurf IDE](https://codeium.com/windsurf), a next-generation development environment that leverages AI to streamline the development process. Windsurf IDE provides intelligent code generation, real-time assistance, and automated project setup, making it easier to create high-quality Chrome extensions.

## Features

- 🚀 Modern React with TypeScript
- 💅 Clean and simple UI
- 🔒 Secure CSP configuration
- 📝 Text input with POST request functionality
- 🛠️ Built with Webpack 5
- 🤖 AI-assisted development with Windsurf IDE

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/memos-chrome.git
cd memos-chrome
```

2. Install dependencies:
```bash
pnpm install
```

3. Build the extension:
```bash
pnpm build
```

4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked" and select the `dist` directory from this project

## Development

### Project Structure
```
memos-chrome/
├── src/
│   └── popup/
│       ├── Popup.tsx      # Main popup component
│       ├── index.tsx      # Entry point
│       └── popup.css      # Styles
├── public/
│   ├── manifest.json      # Extension manifest
│   ├── popup.html        # Popup HTML template
│   └── icons/            # Extension icons
├── webpack.config.js     # Webpack configuration
└── tsconfig.json        # TypeScript configuration
```

### Generated with Windsurf IDE

This project was generated and developed using Windsurf IDE, which provided:
- Automated project scaffolding with best practices
- Intelligent code generation for React components
- TypeScript integration and type safety
- Webpack configuration optimization
- Security best practices implementation
- Automated icon generation
- Documentation generation

### Available Scripts

- `pnpm build`: Build the extension for production
- `pnpm watch`: Build and watch for changes during development

### Customizing Icons

The project includes a script to generate custom icons. Open `public/generate_icons.html` in a browser to generate new icons with different colors or text.

### API Integration

The extension makes POST requests to `http://example.com/api` with the following structure:

```typescript
interface RequestBody {
  input: string;
}
```

To use a different API endpoint, modify the URL in `src/popup/Popup.tsx`.

## Security

This extension implements security best practices:
- Content Security Policy (CSP) configuration
- Production builds with minimal bundle size
- Type safety with TypeScript
- Secure external resource handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Windsurf IDE](https://codeium.com/windsurf) - Next-generation AI-powered development environment
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)

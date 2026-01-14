# Kashf Landing Page

**Discover Muslim essentials in a few clicks**

A beautiful, modern landing page for Kashf - an app helping Muslims find mosques, halal food, and Muslim-owned businesses effortlessly.

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Kashf-Page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Configure your contact information** (see Configuration section below)

4. **Run the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

5. **Open your browser**

   The site will automatically open at `http://localhost:3000`

## ⚙️ Configuration

### Add Your Custom Logo

The site uses a placeholder logo by default. To add your own logo:

1. **Replace the logo file**
   - Add your logo image to the `public/` directory
   - Supported formats: PNG, SVG, JPG (SVG recommended for best quality)
   - Recommended size: 400px width for best display

2. **Update the logo reference** (optional)
   - If you named your logo something other than `logo.svg`
   - Open `Kashif/App.tsx`
   - Find line 84: `src="/logo.svg"`
   - Change it to match your filename: `src="/your-logo.png"`

**Example:**
```bash
# Add your logo to the public directory
cp /path/to/your-logo.png public/logo.png

# Update App.tsx if needed to reference the new filename
```

### Update Contact Information & Links

All contact information, social links, and external URLs are managed in a single file for easy updates:

**Edit `Kashif/config.ts`**

```typescript
export const siteConfig = {
  // Email Configuration
  email: {
    contact: 'your-email@example.com',    // Update with your email
    support: 'support@example.com',        // Update with your support email
  },

  // Social Media Links
  social: {
    github: 'https://github.com/yourusername',       // Update with your GitHub URL
    instagram: 'https://instagram.com/yourusername', // Update with your Instagram URL
    // Add more social links as needed
    twitter: '',
    facebook: '',
    linkedin: '',
  },

  // Buy Me a Coffee
  buyMeACoffee: 'https://www.buymeacoffee.com/yourusername', // Update with your Buy Me a Coffee URL

  // Footer Links
  links: {
    home: '#',
    features: '#features',
    contact: '#contact',
    privacy: '#privacy',
  },
};
```

### What Gets Updated

When you edit `Kashif/config.ts`, the following elements on your site will automatically update:

- **Email Links**: Contact email in the footer
- **Social Links**: GitHub and Instagram buttons in the CTA section
- **Buy Me a Coffee**: The coffee button in the CTA section
- **Footer Links**: All navigation links in the footer
- **Copyright Year**: Automatically updates to current year

## 📦 Building for Production

To create a production-optimized build:

```bash
npm run build
```
or
```bash
yarn build
```

The optimized files will be in the `dist` folder, ready to deploy to any static hosting service.

### Preview Production Build

To preview your production build locally:

```bash
npm run preview
```
or
```bash
yarn preview
```

## 🎨 Project Structure

```
Kashf-Page/
├── Kashif/                    # Source code directory
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   ├── config.ts             # ⭐ Configuration file (UPDATE THIS!)
│   ├── components/           # React components
│   │   ├── ui/              # UI components
│   │   ├── CategoryButton.tsx
│   │   ├── EmailInput.tsx
│   │   ├── IslamicPattern.tsx
│   │   ├── PhoneMockup.tsx
│   │   └── ...
│   ├── styles/
│   │   └── globals.css      # Global styles
│   └── guidelines/
│       └── Guidelines.md    # Design guidelines
├── index.html               # HTML entry point
├── package.json            # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # This file

```

## 🛠️ Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Motion (Framer Motion)** - Animation library
- **Lucide React** - Icon library

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎯 Features

- **Responsive Design** - Works beautifully on all devices
- **Smooth Animations** - Engaging scroll animations using Framer Motion
- **Islamic Design Elements** - Beautiful teal and gold Islamic patterns
- **Easy Configuration** - Update all links and emails from one file
- **TypeScript** - Type-safe code for better development experience
- **Fast Performance** - Optimized with Vite for lightning-fast builds

## 🔒 Security

Security is a top priority for this project. We follow best practices to keep the codebase and user data secure.

### For Users
- Never commit `.env` files or API keys
- Keep your dependencies updated
- Report security issues privately (see SECURITY.md)

### For Contributors
Please read our [Security Policy](SECURITY.md) before contributing. Key points:
- Never commit sensitive information
- Use `.env.example` as a template
- Run `npm audit` before submitting PRs
- Follow secure coding practices

**Found a security vulnerability?** Please report it privately - see [SECURITY.md](SECURITY.md) for details.

## 🤝 Contributing

We welcome contributions from the community! Whether it's fixing bugs, adding features, or improving documentation, your help is appreciated.

### Quick Start for Contributors

1. Read our [Contributing Guidelines](CONTRIBUTING.md)
2. Check out [open issues](https://github.com/yourusername/Kashf-Page/issues)
3. Fork the repository
4. Create your feature branch (`git checkout -b feature/AmazingFeature`)
5. Make your changes following our [coding standards](CONTRIBUTING.md#coding-standards)
6. Test your changes thoroughly
7. Commit your changes with a [clear message](CONTRIBUTING.md#commit-guidelines)
8. Push to your branch (`git push origin feature/AmazingFeature`)
9. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:
- Code style and standards
- Commit message format
- Pull request process
- Development workflow

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💖 Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- ☕ [Buying us a coffee](https://www.buymeacoffee.com/yourusername)

## 🌟 Acknowledgments

Built with love for the Muslim community. May Allah (SWT) accept this work.

جَزَاكَ ٱللَّٰهُ خَيْرًا

---

Made with ❤️ by the Kashf Team

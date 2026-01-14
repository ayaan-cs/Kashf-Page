# Contributing to Kashf Landing Page

First off, thank you for considering contributing to Kashf! We appreciate your time and effort to help make this project better.

جَزَاكَ ٱللَّٰهُ خَيْرًا (JazakAllah Khair) - May Allah reward you with goodness.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 🤝 Code of Conduct

This project follows Islamic principles of good conduct (Akhlaq). We expect all contributors to:

- Be respectful and kind to others
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members
- Avoid any inappropriate, offensive, or harmful behavior

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git
- A code editor (VS Code recommended)

### Setting Up Your Development Environment

1. **Fork the repository**

   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Kashf-Page.git
   cd Kashf-Page
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/Kashf-Page.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your local configuration
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

## 💡 How to Contribute

### Types of Contributions We Welcome

- 🐛 **Bug fixes**
- ✨ **New features**
- 📝 **Documentation improvements**
- 🎨 **Design enhancements**
- ♿ **Accessibility improvements**
- 🌍 **Translations** (Arabic, Urdu, etc.)
- ✅ **Tests**
- 🔧 **Code refactoring**

### Before You Start

1. **Check existing issues** - Someone might already be working on it
2. **Open an issue first** - Discuss your idea before spending time on it
3. **Get approval** - Wait for maintainer feedback on new features
4. **Keep it focused** - One feature/fix per pull request

## 🛠️ Development Workflow

### Creating a New Branch

Always create a new branch for your work:

```bash
# Update your local main branch
git checkout main
git pull upstream main

# Create a new branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `style/` - Code style/formatting
- `refactor/` - Code refactoring
- `test/` - Adding tests
- `chore/` - Maintenance tasks

### Making Changes

1. Make your changes in your branch
2. Test your changes thoroughly
3. Update documentation if needed
4. Add or update tests if applicable

### Testing Your Changes

```bash
# Run the development server
npm run dev

# Build for production (check for errors)
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📏 Coding Standards

### TypeScript/React

- Use TypeScript for type safety
- Use functional components with hooks
- Follow React best practices
- Keep components small and focused
- Use meaningful variable and function names

### Styling

- Use Tailwind CSS utility classes
- Follow the existing color scheme (teal/gold theme)
- Ensure responsive design (mobile-first)
- Test on different screen sizes
- Maintain dark background aesthetic

### File Organization

```
Kashif/
├── components/       # Reusable components
│   ├── ui/          # UI library components
│   └── ...          # Feature components
├── styles/          # Global styles
├── config.ts        # Configuration file
└── App.tsx          # Main app component
```

### Code Quality

- Write clean, readable code
- Add comments for complex logic
- Remove console.logs before committing
- No hardcoded values (use config.ts)
- Handle errors gracefully

## 📝 Commit Guidelines

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation only
- `style` - Code style (formatting, missing semicolons, etc.)
- `refactor` - Code refactoring
- `test` - Adding tests
- `chore` - Maintenance

**Examples:**

```bash
feat: Add prayer times widget to homepage

- Implemented location-based prayer times
- Added Qibla direction indicator
- Integrated with prayer times API

Closes #123
```

```bash
fix: Resolve logo display issue on mobile devices

The logo was not responsive on screens smaller than 640px.
Updated CSS to properly scale the logo on all screen sizes.

Fixes #456
```

### Commit Best Practices

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Keep first line under 50 characters
- Reference issues and pull requests when applicable
- Make atomic commits (one logical change per commit)

## 🔄 Pull Request Process

### Before Submitting

- [ ] Code follows project style guidelines
- [ ] All tests pass locally
- [ ] Documentation is updated
- [ ] No console errors or warnings
- [ ] Tested on multiple screen sizes
- [ ] No sensitive data in commits
- [ ] Branch is up to date with main

### Submitting Your Pull Request

1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**
   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template

3. **PR Title Format**
   ```
   [Type] Brief description of changes
   ```
   Examples:
   - `[Feature] Add contact form to landing page`
   - `[Fix] Resolve navigation menu bug on mobile`
   - `[Docs] Update installation instructions`

4. **PR Description Should Include**
   - What changes were made
   - Why these changes are needed
   - How to test the changes
   - Screenshots (for UI changes)
   - Related issues (Closes #123)

### After Submitting

- Respond to review comments promptly
- Make requested changes in new commits
- Keep discussion focused and professional
- Be patient - reviews may take a few days

### PR Review Process

1. **Automated Checks** - Must pass
2. **Code Review** - By maintainer(s)
3. **Testing** - Manual testing by reviewers
4. **Approval** - At least one maintainer approval required
5. **Merge** - Maintainer will merge when ready

## 🎨 Design Guidelines

### Islamic Aesthetic

- Maintain the teal (#14B8A6) and gold color scheme
- Use geometric Islamic patterns tastefully
- Keep design elegant and professional
- Ensure readability (good contrast)

### Typography

- Primary font: Inter
- Arabic text: Noto Sans Arabic
- Maintain consistent font weights
- Use appropriate line heights for readability

### Spacing & Layout

- Follow existing spacing patterns
- Maintain visual hierarchy
- Use consistent border radius
- Keep adequate white space

## 🐛 Reporting Bugs

### Before Reporting

- Check if the bug is already reported
- Verify it's actually a bug (not a feature)
- Test in multiple browsers if applicable

### Bug Report Should Include

- Clear, descriptive title
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/recordings
- Browser/OS information
- Console errors (if any)

## 💬 Feature Requests

We welcome feature requests! When suggesting a feature:

1. **Check existing issues** first
2. **Explain the use case** - Why is this needed?
3. **Describe the solution** - How should it work?
4. **Consider alternatives** - Are there other ways?
5. **Be realistic** - Keep scope reasonable

## 🌟 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Special mentions in project updates

## 📞 Questions?

- Open a discussion on GitHub
- Check existing documentation
- Reach out to maintainers

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

**May Allah (SWT) accept your contributions and efforts. Together, we're building something beneficial for the Muslim community worldwide.**

جَزَاكُمُ ٱللَّٰهُ خَيْرًا

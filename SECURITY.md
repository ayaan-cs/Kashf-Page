# Security Policy

## Overview

This document outlines security practices for the Kashf Landing Page project. Following these guidelines helps keep our codebase and user data secure.

## 🔒 Reporting Security Vulnerabilities

If you discover a security vulnerability, please DO NOT open a public issue. Instead:

1. **Email us directly** at security@kashfapp.com (or use the contact email in config.ts)
2. Include a detailed description of the vulnerability
3. Provide steps to reproduce if possible
4. Allow reasonable time for us to address the issue before public disclosure

We appreciate your responsible disclosure and will acknowledge your contribution.

## 🛡️ Security Best Practices for Contributors

### 1. **Never Commit Sensitive Information**

❌ **NEVER commit:**
- API keys, tokens, or credentials
- Private keys or certificates
- Passwords or secret values
- Database connection strings
- `.env` files with real values
- Personal information (emails, phone numbers, addresses)

✅ **Always:**
- Use `.env.example` as a template (committed to git)
- Keep actual `.env` files local only (ignored by git)
- Use environment variables for sensitive data
- Review your commits before pushing

### 2. **Environment Variables**

When adding functionality that requires secrets:

```bash
# Copy the example file
cp .env.example .env

# Add your actual values to .env (this file is gitignored)
# Edit .env with your secrets
```

**For Vite projects**, prefix public env vars with `VITE_`:
```bash
VITE_API_URL=https://api.example.com
```

### 3. **Code Review Checklist**

Before committing, check:
- [ ] No hardcoded API keys or secrets
- [ ] No personal/sensitive information in code comments
- [ ] No credentials in configuration files
- [ ] Dependencies are from trusted sources
- [ ] No debug/development code left in production

### 4. **Dependencies Security**

Keep dependencies secure:

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Update dependencies regularly
npm update
```

### 5. **Git History**

If you accidentally commit sensitive data:

```bash
# DO NOT just delete the file and commit again!
# The secret is still in git history

# Contact a maintainer immediately for help
# They can use tools like git-filter-repo or BFG Repo-Cleaner
# to remove the sensitive data from history
```

## 🔐 Secure Coding Practices

### Input Validation

Always validate and sanitize user input:

```typescript
// Bad - XSS vulnerable
const userInput = req.body.name;
element.innerHTML = userInput;

// Good - Escaped output
const userInput = req.body.name;
element.textContent = userInput; // Auto-escapes
```

### Content Security Policy

When deploying, consider adding CSP headers to prevent XSS:

```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'unsafe-inline'">
```

### HTTPS Only

Always use HTTPS in production:
- Never load resources over HTTP
- Use HTTPS for all API calls
- Enable HSTS (HTTP Strict Transport Security)

## 📋 Security Checklist for Deployment

Before deploying to production:

- [ ] All `.env` files are gitignored
- [ ] No secrets in codebase or git history
- [ ] Dependencies are up-to-date and audited
- [ ] HTTPS is enabled
- [ ] Security headers are configured
- [ ] Error messages don't expose sensitive info
- [ ] Debug mode is disabled
- [ ] Source maps are not exposed in production

## 🔄 Regular Security Maintenance

**Weekly:**
- Review open pull requests for security issues
- Check GitHub security alerts

**Monthly:**
- Run `npm audit` and fix vulnerabilities
- Update dependencies: `npm update`
- Review access permissions

**Quarterly:**
- Review and rotate API keys if needed
- Audit user permissions
- Review security policies

## 📚 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [npm Security Best Practices](https://docs.npmjs.com/security-best-practices)
- [GitHub Security Advisories](https://github.com/advisories)

## 🤝 Questions?

If you have questions about security practices, please:
- Open a discussion (not an issue) on GitHub
- Contact the maintainers
- Review our contributing guidelines

---

**Remember**: Security is everyone's responsibility. When in doubt, ask!

جَزَاكَ ٱللَّٰهُ خَيْرًا (JazakAllah Khair) for helping keep Kashf secure.

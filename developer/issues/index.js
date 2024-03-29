const fs = require('fs');
const path = require('path');

const addIssue = (folder, filename) => {
    try {
        const issue = fs.readFileSync(path.join(__dirname, folder, filename), { encoding: 'utf-8' });
        const title = issue.split('\n')[0].split('#')[1].trim();
        const description = issue.split('\n').slice(1).join('\n');
        // to be able to import markdown a doubleqoute should be escaped by a doubleqoute
        return `"${title.replace(new RegExp('"', 'g'), '""')}","${description.replace(new RegExp('"', 'g'), '""')}"`;
    } catch(error) { console.log(error) }
}

const admin = () => {
    return `title, description
${addIssue('initial', 'create-new-repo.md')}
${addIssue('initial', 'enable-vcs.md')}
${addIssue('initial', 'add-basic-docs.md')}
${addIssue('initial', 'setup-initial-admin.md')}
${addIssue('initial', 'lighthouse-to-100.md')}
${addIssue('pipeline', 'enable-pipeline.md')}
${addIssue('pipeline', 'add-pre-audit.md')}
${addIssue('pipeline', 'add-pre-format.md')}
${addIssue('pipeline', 'add-pre-lint.md')}
${addIssue('pipeline', 'add-build-compile.md')}
${addIssue('pipeline', 'add-test-unit.md')}
${addIssue('pipeline', 'add-release-branches.md')}
${addIssue('pipeline', 'add-release-master.md')}
${addIssue('pipeline', 'add-deploy-test.md')}
${addIssue('frontend', 'add-theme.md')}
${addIssue('frontend', 'add-navigator.md')}
${addIssue('frontend', 'add-i18n.md')}
${addIssue('frontend', 'add-store.md')}
${addIssue('frontend', 'add-auth.md')}
${addIssue('frontend', 'add-api.md')}
${addIssue('frontend', 'add-storage.md')}
${addIssue('frontend', 'add-analytics.md')}
${addIssue('frontend', 'add-error-reporting.md')}
${addIssue('frontend', 'add-ab-testing.md')}
`
}

const app = () => {
    return `title, description
${addIssue('initial', 'create-new-repo.md')}
${addIssue('initial', 'enable-vcs.md')}
${addIssue('initial', 'add-basic-docs.md')}
${addIssue('initial', 'setup-initial-app.md')}
${addIssue('pipeline', 'enable-pipeline.md')}
${addIssue('pipeline', 'add-pre-audit.md')}
${addIssue('pipeline', 'add-pre-format.md')}
${addIssue('pipeline', 'add-pre-lint.md')}
${addIssue('pipeline', 'add-build-compile.md')}
${addIssue('pipeline', 'add-test-unit.md')}
${addIssue('pipeline', 'add-release-branches.md')}
${addIssue('pipeline', 'add-release-master.md')}
${addIssue('pipeline', 'add-deploy-test.md')}
${addIssue('frontend', 'add-theme.md')}
${addIssue('frontend', 'add-navigator.md')}
${addIssue('frontend', 'add-i18n.md')}
${addIssue('frontend', 'add-store.md')}
${addIssue('frontend', 'add-auth.md')}
${addIssue('frontend', 'add-api.md')}
${addIssue('frontend', 'add-storage.md')}
${addIssue('frontend', 'add-analytics.md')}
${addIssue('frontend', 'add-error-reporting.md')}
${addIssue('frontend', 'add-ab-testing.md')}
`
}

const base = () => {
    return `title, description
${addIssue('initial', 'create-new-repo.md')}
${addIssue('initial', 'enable-vcs.md')}
${addIssue('initial', 'add-basic-docs.md')}
${addIssue('initial', 'setup-initial-base.md')}
${addIssue('pipeline', 'enable-pipeline.md')}
${addIssue('pipeline', 'add-pre-audit.md')}
${addIssue('pipeline', 'add-pre-format.md')}
${addIssue('pipeline', 'add-pre-lint.md')}
${addIssue('pipeline', 'add-build-compile.md')}
${addIssue('pipeline', 'add-test-unit.md')}
${addIssue('pipeline', 'add-release-branches.md')}
${addIssue('pipeline', 'add-release-master.md')}
${addIssue('environments', 'setup-test-base.md')}
${addIssue('pipeline', 'add-deploy-test.md')}
${addIssue('environments', 'setup-staging-base.md')}
${addIssue('pipeline', 'add-deploy-staging.md')}
${addIssue('environments', 'setup-production-base.md')}
${addIssue('pipeline', 'add-deploy-production.md')}
`
}

const cicd = () => {
    return `title, description
${addIssue('initial', 'create-new-repo.md')}
${addIssue('initial', 'enable-vcs.md')}
${addIssue('initial', 'add-basic-docs.md')}
${addIssue('initial', 'setup-initial-cicd.md')}
`
}

const cms = () => {
    return `title, description
${addIssue('initial', 'create-new-repo.md')}
${addIssue('initial', 'enable-vcs.md')}
${addIssue('initial', 'add-basic-docs.md')}
${addIssue('initial', 'setup-initial-cms.md')}
${addIssue('environments', 'setup-test-cms.md')}
${addIssue('pipeline', 'enable-pipeline.md')}
${addIssue('pipeline', 'add-pre-audit.md')}
${addIssue('pipeline', 'add-pre-format.md')}
${addIssue('pipeline', 'add-pre-lint.md')}
${addIssue('pipeline', 'add-build-compile.md')}
${addIssue('pipeline', 'add-test-unit.md')}
${addIssue('pipeline', 'add-release-branches.md')}
${addIssue('pipeline', 'add-release-master.md')}
`
}

const ui = () => {
    return `title, description
${addIssue('initial', 'create-new-repo.md')}
${addIssue('initial', 'enable-vcs.md')}
${addIssue('initial', 'add-basic-docs.md')}
${addIssue('initial', 'setup-initial-ui.md')}
${addIssue('pipeline', 'enable-pipeline.md')}
${addIssue('pipeline', 'add-pre-audit.md')}
${addIssue('pipeline', 'add-pre-format.md')}
${addIssue('pipeline', 'add-pre-lint.md')}
${addIssue('pipeline', 'add-build-compile.md')}
${addIssue('pipeline', 'add-test-unit.md')}
${addIssue('pipeline', 'add-release-branches.md')}
${addIssue('pipeline', 'add-release-master.md')}
`
}

const webapp = () => {
    return `title, description
${addIssue('initial', 'create-new-repo.md')}
${addIssue('initial', 'enable-vcs.md')}
${addIssue('initial', 'add-basic-docs.md')}
${addIssue('initial', 'setup-initial-webapp.md')}
${addIssue('initial', 'lighthouse-to-100.md')}
${addIssue('pipeline', 'enable-pipeline.md')}
${addIssue('pipeline', 'add-pre-audit.md')}
${addIssue('pipeline', 'add-pre-format.md')}
${addIssue('pipeline', 'add-pre-lint.md')}
${addIssue('pipeline', 'add-build-compile.md')}
${addIssue('pipeline', 'add-test-unit.md')}
${addIssue('pipeline', 'add-release-branches.md')}
${addIssue('pipeline', 'add-release-master.md')}
${addIssue('pipeline', 'add-deploy-test.md')}
${addIssue('frontend', 'add-theme.md')}
${addIssue('frontend', 'add-navigator.md')}
${addIssue('frontend', 'add-i18n.md')}
${addIssue('frontend', 'add-store.md')}
${addIssue('frontend', 'add-auth.md')}
${addIssue('frontend', 'add-api.md')}
${addIssue('frontend', 'add-storage.md')}
${addIssue('frontend', 'add-analytics.md')}
${addIssue('frontend', 'add-error-reporting.md')}
${addIssue('frontend', 'add-ab-testing.md')}
`
}

const website = () => {
    return `title, description
${addIssue('initial', 'create-new-repo.md')}
${addIssue('initial', 'enable-vcs.md')}
${addIssue('initial', 'add-basic-docs.md')}
${addIssue('initial', 'setup-initial-website.md')}
${addIssue('initial', 'lighthouse-to-100.md')}
${addIssue('pipeline', 'enable-pipeline.md')}
${addIssue('pipeline', 'add-pre-audit.md')}
${addIssue('pipeline', 'add-pre-format.md')}
${addIssue('pipeline', 'add-pre-lint.md')}
${addIssue('pipeline', 'add-build-compile.md')}
${addIssue('pipeline', 'add-test-unit.md')}
${addIssue('pipeline', 'add-release-branches.md')}
${addIssue('pipeline', 'add-release-master.md')}
${addIssue('environments', 'setup-test-website.md')}
${addIssue('pipeline', 'add-deploy-test.md')}
${addIssue('frontend', 'add-theme.md')}
${/* add-navigator is excluded */ ''}
${addIssue('frontend', 'add-i18n.md')}
${/* add-store is excluded */ ''}
${/* add-auth is excluded */ ''}
${/* add-api is excluded */ ''}
${/* add-storage is excluded */ ''}
${addIssue('frontend', 'add-analytics.md')}
${addIssue('frontend', 'add-error-reporting.md')}
${addIssue('frontend', 'add-ab-testing.md')}
${addIssue('ecommerce', 'add-shopping-cart.md')}
${addIssue('ecommerce', 'add-payment-processing.md')}
${addIssue('ecommerce', 'add-trust-webshop.md')}
${addIssue('marketing', 'add-tag-management.md')}
${addIssue('marketing', 'add-cookie-consent.md')}
${addIssue('marketing', 'add-contact-form.md')}
${addIssue('marketing', 'add-newsletter-subscription.md')}
${addIssue('marketing', 'add-survey.md')}
${addIssue('marketing', 'add-personalisation.md')}
${addIssue('marketing', 'add-retargeting.md')}
${addIssue('marketing', 'add-chat.md')}
`
}

const repo =  process.argv[2];
const repos = ['admin', 'app', 'base', 'cicd', 'cms', 'ui', 'webapp', 'website'];
if (!repo) {
    throw new Error('please specify for which repo you want to create issues: $ node issues base');
}

if (!repos.includes(repo)) {
    throw new Error(`${repo} is not in the list: ${repos}`);
}

fs.writeFileSync(`gitlab-issues-seed-${repo}.csv`, eval(repo)());

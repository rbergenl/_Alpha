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


const app = () => {
    return `title, description
${addIssue('initial', 'create-new-repo.md')}
${addIssue('initial', 'setup-vcs.md')}
${addIssue('initial', 'add-basic-docs.md')}
${addIssue('initial', 'lighthouse-to-100.md')}
${addIssue('initial', 'initial-setup-app.md')}
`
}

const base = () => {
    return `title, description
${addIssue('frontend', 'add-ab-testing.md')}
${addIssue('initial', 'initial-setup-cms.md')}
`
}

const ui = () => {
    return `title, description
${addIssue('frontend', 'add-ab-testing.md')}
`
}

const admin = () => {
    return `title, description
${addIssue('frontend', 'add-analytics.md')}
${addIssue('frontend', 'add-storage.md')}
${addIssue('frontend', 'add-api.md')}
${addIssue('frontend', 'add-auth.md')}
${addIssue('frontend', 'add-store.md')}
${addIssue('frontend', 'add-i18n.md')}
${addIssue('frontend', 'add-navigator.md')}
${addIssue('frontend', 'add-theme.md')}
${addIssue('initial', 'initial-setup-admin.md')}
${addIssue('initial', 'lighthouse-to-100.md')}
${addIssue('initial', 'add-basic-docs.md')}
${addIssue('initial', 'setup-vcs.md')}
${addIssue('initial', 'create-new-repo.md')}
`
}

const repo =  process.argv[2];
const repos = ['app', 'base', 'ui', 'admin'];
if (!repo) {
    throw new Error('please specify for which repo you want to create issues: $ node issues base');
}

if (!repos.includes(repo)) {
    throw new Error(`${repo} is not in the list: ${repos}`);
}

fs.writeFileSync(`gitlab-issues-seed-${repo}.csv`, eval(repo)());

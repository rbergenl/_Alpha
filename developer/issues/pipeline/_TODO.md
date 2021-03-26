## Expand pipeline

App: Master Branch Delivery = (verify) > build signed > (tests) > version release > upload to testflight/beta > [promote] > submit to store > exploratory test/celebrate 

App: Develop Branch Delivery = (verify) > build expopublish/turtle/simulator > (detox/tests) version prerelease > upload tarfile ro projectpage > exploratory test.

Web: Master Branch Delivery = (verify) > build production > (tests) version release > deploy to staging > [promote] > deploy to production > auto smoketest > exploratory test/celebrate

Web: Develop Branch Delivery = (verify) > build production > (tests) version prerelease > deploy test > auto smoketest > exploratory test.

TODO: add this diagram to default `docs` in each project.

| Stage:Job         | Tool          | Push | Create PR | Merge | Create RC | Release |
|:- |:- |:- |:- |:- |:- |:- |
X | .Pre:Install      | Npm           | :heavy_check_mark: | | | | |
X | .Pre:Audit        | Audit Resolver| :heavy_check_mark: | | | | |
X | .Pre:Format       | Prettier      | :heavy_check_mark: | | | | |
X | .Pre:Lint         | Eslint        | :heavy_check_mark: | | | | |
X | Build:Compile     | React Scripts | :heavy_check_mark: | | | | |
| Test:Functional   | Cypress       | | :heavy_check_mark: | | | | On [release].
| Test:Integration  | ?             | :heavy_check_mark: | | | | | On [release].
| Test:Quality     | Lighthouse/SonarQube | | | :heavy_check_mark: | | | -> On [release].
| Test:Visual      | ?             | | | :heavy_check_mark: | | | -> On [release].
| Test:Security     | ?             | :heavy_check_mark: | | | | | Develop
| Test:Performance | ?             | | :heavy_check_mark: | | | | -> Develop
X | Test:Unit         | Jest          | :heavy_check_mark: | | | | |
X | Release:Branches | ?             | | | | :heavy_check_mark: | |
X | Release:Master       | Git           | | | | :heavy_check_mark: | |
| Deploy:Prod       | ?             | | | | | :heavy_check_mark: |
| Deploy:Staging       | ?             | | | :heavy_check_mark: | | |
X | Deploy:Test       | ?             | | | :heavy_check_mark: | | |
| Publish:iOS       | ?             | | | | | |
| Publish:Android   | ?             | | | | | |
| .Post:Smoketest   | ?             | | | :heavy_check_mark: | | | -> After deploy-test/stag/prod only

> Stages run in sequence and jobs run in parralel.

> Only for Admin, Webapp and Website: Release:Changelog, Deploy:* and .Post:*.

## Add Test:Integration

## Add Test:Functional
- cypress

## .Post:Performance
Performance Test: JMeter (met stubs en edge cases).
Monitoring/trends zichtbaar.
Leesbaar rapport.
Heb de "keten" inzichtelijk.

## Test:Security
- Have a Testplan (what exactly is it for?)
- Have a register of known risks, and how they are accounted for.
Automated PEN test.
Static Application Security Test (Sonarqube) - https://docs.sonarqube.org/latest/setup/get-started-2-minutes/.
Dynamic Application Security Test (ZAP, Burp Suite).
OWASP Dependency check plugin.
Leesbare rapporten.

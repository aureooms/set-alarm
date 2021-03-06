/**
 * Commit Lint
 *
 * Rules are made up by a name and a configuration array.
 * The configuration array contains:
 * 1. Level:      | [0..2] | 0 = disables | 1 = considered a warning | 2 an error for the rule.
 * 2. Applicable: | always/never | never inverts the rule.
 * 3. Value:      | value to use for this rule.
 *
 * @link https://github.com/marionebl/commitlint/blob/master/docs/reference-rules.md
 */

module.exports = {
	extends: ['@commitlint/config-conventional'],
	parserPreset: {
		parserOpts: {
			headerPattern: /^:[a-z_]*: (\w*)(?:\((.*)\))?!?: (.*)$/,
			breakingHeaderPattern: /^:boom: (\w*)(?:\((.*)\))?!: (.*)$/,
			headerCorrespondence: [
			  'type',
			  'scope',
			  'subject'
			],
			noteKeywords: ['BREAKING CHANGE'],
			revertPattern: /^:wastebasket: (?:revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
			revertCorrespondence: ['header', 'hash'],
			issuePrefixes: ['#']
		}
	},
	rules: {
		'header-max-length': [2, 'always', 79],
		'type-empty': [2, 'never'],
		'type-case': [2, 'always', 'lower-case'],
		'type-enum': [2, 'always',
			[
				'a11y',
				'bug',
				'chore',
				'cleaning',
				'config',
				'deprecate',
				'deps',
				'docs',
				'experiment',
				'feat',
				'fix',
				'i18n',
				'idea',
				'initial',
				'license',
				'merge',
				'perf',
				'progress',
				'refactor',
				'release',
				'revert',
				'security',
				'test',
				'trash',
				'typo',
				'ui',
				'ux'
			]
		],
		'scope-case': [0, 'always', 'lower-case'],
		'subject-case': [2, 'always', 'sentence-case'],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'always', '.'],
		'body-full-stop': [2, 'always', '.'],
		'body-leading-blank': [2, 'always'],
		'body-empty': [0, 'never'],
		'footer-leading-blank': [2, 'always']
	}
};

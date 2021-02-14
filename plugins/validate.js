import { extend, localize } from 'vee-validate'
import en from 'vee-validate/dist/locale/en.json'
import * as rules from 'vee-validate/dist/rules'

// Add a rule.
extend('secret', {
  validate: (value) => value === 'example',
  message: 'This is not the magic word',
})

// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]) // eslint-disable-line
})

localize('en', en)

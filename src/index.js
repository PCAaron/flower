import Button from '../packages/button/index'
import Icon from '../packages/Icon/index'
import locale from './locale'

const components = [Button, Icon]

const install = function (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  components.forEach(com => {
    Vue.component(com.name, com)
  })
}

export default install

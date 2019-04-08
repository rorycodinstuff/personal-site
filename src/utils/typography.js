import Typography from 'typography'
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'
usWebDesignStandardsTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'body, h1, h2, h3, a, a:visited': {
    color: "rgba(13, 13, 13, 1)",
  },
  'a:hover': {
    color: 'rgba(73, 115, 44, 1)',
  }
})


const typography = new Typography(usWebDesignStandardsTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

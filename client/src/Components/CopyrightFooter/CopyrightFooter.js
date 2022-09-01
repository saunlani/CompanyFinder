import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export const CopyrightFooter = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Company Finder
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}
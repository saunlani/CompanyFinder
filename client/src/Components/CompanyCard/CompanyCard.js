import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'

export const CompanyCard = (props) => {
  const { company } = props

  return (
    <Card sx={{ minWidth: 275, height: '100%', width: '100%' }}>
      <CardContent>
        <Typography variant="h5" color="text.primary  ">
          {company.name}
        </Typography>
        <Typography color="text.secondary">
          {company.city}
        </Typography>
        <Typography variant="h5">
          <img style={{ width: '80%', height: '80%', borderRadius: '50%', maxWidth: '100px' }} id="image" alt="Logo" src={company.logoUrl} />
        </Typography>
        <Typography variant="h6" color="text.primary">
          Specialties
        </Typography>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, listStyle: 'none' }}>
          {company.specialties.map(item => {
            return (
              <li key={company.logoUrl + item}> {item} </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}
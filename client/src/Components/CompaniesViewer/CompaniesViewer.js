import { Box } from '@mui/material/'
import { CircularProgress } from '@mui/material'
import { getCompanies } from '../../Services/getCompanies.js'
import IconButton from '@mui/material/IconButton'
import { useQuery } from "@tanstack/react-query"
import RefreshIcon from '@mui/icons-material/Refresh'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox'
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"
import InputAdornment from '@mui/material/InputAdornment'
import FormControlLabel from '@mui/material/FormControlLabel'
import { CompanyCard } from '../CompanyCard/CompanyCard.js'

export const CompaniesViewer = () => {
  const { isLoading, error, data, refetch } = useQuery(["companies"], getCompanies)

  const [searchTerm, setSearchTerm] = useState("")
  const [filterOptions, setFilterOptions] = useState([])
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  const handleCheckBoxChange = (event) => {
    const value = event.target.value;
    setSelectedSpecialties((prev) =>
      selectedSpecialties.includes(value)
        ? prev.filter((cur) => cur !== value)
        : [...prev, event.target.value]
    )
  }

  // TODO: Move this logic to server and pass it as API response.
  useEffect(() => {
    const specialties = data?.flatMap(obj => obj.specialties) ?? []
    const options = [...new Set(specialties)]
    setFilterOptions(options)
  }, [data])

  if (isLoading) return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6ch' }}>
      <CircularProgress />
    </div>)

  if (error) return (
    <>
      <Stack alignItems="center" spacing={1}>
        <Typography variant="h5" color="text.secondary">
          An error has occurred, please try again
        </Typography>
        <IconButton size="large" onClick={refetch}>
          <RefreshIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </>
  )

  if (data) return (
    <Box sx={{ width: '80%', textAlign: 'center' }}>
      <Grid container spacing={2} columns={{ xs: 4, md: 12 }} alignItems="stretch" >
        <Grid item xs={12}>

          <TextField
            id="search-bar"
            style={{ width: 320 }}
            onChange={event => { setSearchTerm(event.target.value) }}
            variant="outlined"
            placeholder="Search a company name"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }} />

        </Grid>
        <Grid item style={{ height: '100%', width: '60%' }} xs={12}>
          {filterOptions.map(item => {
            return (
              <FormControlLabel key={item + filterOptions}
                control={
                  <Checkbox
                    id={item}
                    name={item}
                    value={item}
                    onClick={handleCheckBoxChange}
                  />} label={item}
              />
            )
          })}
        </Grid>

        {data.filter((value) => {
          if (selectedSpecialties.some((item) => value.specialties.includes(item))) {
            return value
          }

          if (searchTerm !== "" && value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return value
          }

          if (selectedSpecialties.length === 0 && searchTerm === '') {
            return value
          }
          else return null
        }).map((company) => (
          <Grid xs={4} item key={company.id}>
            <CompanyCard company={company} />
          </Grid>
        ))}
      </Grid>
    </Box >)
}
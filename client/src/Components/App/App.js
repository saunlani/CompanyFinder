import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { CompaniesViewer } from '../CompaniesViewer/CompaniesViewer.js'
import { FooterGroup } from '../FooterGroup/FooterGroup.js'
import { Bar } from '../Bar/Bar.js'

export const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Bar />
      <Stack alignItems="center" spacing={1}>
        <Typography variant="h3" sx={{ pt: 2, maxWidth: "sm", align: "center" }} color="text.primary" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="h5" align="center" color="text.primary" sx={{ pb: 1 }}>
          Find a new construction company by using the search bar or checkboxes
        </Typography>
        <CompaniesViewer />
      </Stack>
      <FooterGroup />
    </QueryClientProvider>
  )
}
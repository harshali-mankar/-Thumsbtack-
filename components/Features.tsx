import { Grid, Paper, Typography, Container, Box } from "@mui/material";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import StarIcon from '@mui/icons-material/Star';
import { getAssetPath } from "../utils/basePath";

const features = [
  { text: "Never Got Returned Products", img: getAssetPath("/assets/hero-icons/Package.svg"), icon: <Inventory2Icon /> },
  { text: "Fast Delivery", img: getAssetPath("/assets/hero-icons/Delivery 4.svg"), icon: <LocalShippingIcon /> },
  { text: "Customer Support", img: getAssetPath("/assets/hero-icons/Customer-Service 3.svg"), icon: <SupportAgentIcon /> },
  { text: "Premimum Quality", icon: <StarIcon /> },
];

export default function Features() {
  return (
    <Container sx={{ mt: -8, position: "relative", zIndex: 20 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ justifyContent: "center" }}>
        {features.map((f) => (
          <Grid item xs={12} sm={6} md={3} key={f.text}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 1.5, sm: 2 },
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                borderRadius: "999px",
                bgcolor: "#fdecec",
                color: "#000",
                gap: { xs: 1.5, sm: 2 },
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                minHeight: { xs: 56, sm: 64 }
              }}
            >
              <Box
                sx={{
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                  borderRadius: "50%",
                  bgcolor: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: { xs: 0.5, sm: 1 },
                  boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                  color: "#DF3F44",
                  overflow: "hidden",
                  flexShrink: 0,
                  '& svg': { fontSize: { xs: 18, sm: 22 } }
                }}
              >
                {f.img ? (
                  <Box component="img" src={f.img} alt={f.text} sx={{ width: { xs: 18, sm: 22 }, height: { xs: 18, sm: 22 }, objectFit: "contain" }} />
                ) : (
                  f.icon
                )}
              </Box>
              <Typography fontWeight={600} fontSize={{ xs: "0.8rem", sm: "0.9rem" }}>{f.text}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

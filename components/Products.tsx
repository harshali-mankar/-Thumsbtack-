import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  Chip,
  Stack,
  Box,
} from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import HealingIcon from '@mui/icons-material/Healing';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AirIcon from '@mui/icons-material/Air';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { products } from "../data/products";

const getSupportIcon = (type: string, color: string) => {
  let Icon = FavoriteIcon;
  if (type.includes("Endurance")) Icon = BoltIcon;
  else if (type.includes("Recovery")) Icon = HealingIcon;
  else if (type.includes("Joint")) Icon = DirectionsRunIcon;
  else if (type.includes("Oxygen") || type.includes("Lungs")) Icon = AirIcon;

  return (
    <Box
      sx={{
        position: "relative",
        width: 20,
        height: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Light Background Circle */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: color,
          opacity: 0.2, // Light background
          borderRadius: "50%",
        }}
      />
      {/* Solid Icon */}
      <Icon sx={{ fontSize: "12px", color: color, position: "relative", zIndex: 1 }} />
    </Box>
  );
};

export default function Products() {
  return (
    <Container maxWidth="lg" sx={{ pb: 8 }}>
      <Box mb={4}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ fontFamily: "'Lufga', sans-serif", fontSize: { xs: "1.5rem", sm: "2.125rem" } }}>
          Our <span style={{ color: "var(--color-red)" }}>Core</span> Products
        </Typography>
        <Typography color="text.secondary" sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          Keep your horse race-ready with our all-natural, performance-enhancing solutions.
        </Typography>
      </Box>

      <Stack
        direction="row"
        spacing={3}
        sx={{
          overflowX: "auto",
          pb: 4,
          // Negative margin to allow scroll to touch edge on mobile while respecting container padding on start
          mx: { xs: -2, md: 0 },
          px: { xs: 2, md: 1 }, // padding to avoid cutting off shadow
          scrollBehavior: "smooth",
          "::-webkit-scrollbar": { height: "8px" },
          "::-webkit-scrollbar-thumb": { background: "#ccc", borderRadius: "10px" },
          "::-webkit-scrollbar-track": { background: "transparent" },
        }}
      >
        {products.map((product) => (
          <Box key={product.id} minWidth={{ xs: "280px", md: "300px" }} maxWidth={{ xs: "280px", md: "300px" }} sx={{ py: 1 }}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid #D9D9D9",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                transition: "0.3s",
                p: 2,
                "&:hover": {
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transform: "translateY(-5px)",
                  borderColor: "transparent"
                },
              }}
            >
              <Box sx={{  bgcolor: "#EBEBEB", display: "flex", justifyContent: "center", alignItems: "center", borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: "contain", width: "auto" }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography fontWeight={700} variant="h6" sx={{ fontFamily: "'Montserrat', sans-serif", mb: 1 }}>
                  {product.name}
                </Typography>

                <Typography variant="caption" color="text.secondary" display="block" sx={{ fontFamily: "'Montserrat', sans-serif", minHeight: "3em", mb: 2 }}>
                  {product.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontFamily: "'Montserrat', sans-serif", mr: 1 }}>
                    Supports :
                  </Typography>
                  <Stack direction="row" spacing={1} display="inline-flex" flexWrap="wrap" useFlexGap sx={{ verticalAlign: 'middle' }}>
                    {product.supports.map((item) => (
                      <Chip
                        key={item}
                        icon={getSupportIcon(item, product.priceColor)}
                        label={item}
                        size="small"
                        sx={{
                          bgcolor: "transparent",
                          fontSize: "0.7rem",
                          height: "24px",
                          fontFamily: "'Montserrat', sans-serif",
                          "& .MuiChip-icon": { marginLeft: "0px" }, // Reset margin, let Box handle it
                          "& .MuiChip-label": { paddingLeft: "8px", paddingRight: "4px" },
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                <Box mt="auto">
                  <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "stretch", sm: "end" }} gap={2}>
                    <Box>
                      <Typography
                        fontWeight={800}
                        variant="h5"
                        sx={{ color: product.priceColor, lineHeight: 1, fontFamily: "'Montserrat', sans-serif" }}
                      >
                        ${product.price.toFixed(2)}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "'Montserrat', sans-serif",
                          display: "inline-block",
                          bgcolor: "#f5f5f5",
                          color: "#666",
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          mt: 1,
                          fontWeight: 500
                        }}
                      >
                        $0.75 per day
                      </Typography>
                    </Box>

                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        borderRadius: "50px",
                        textTransform: "none",
                        color: product.priceColor,
                        borderColor: "#e0e0e0",
                        fontWeight: 600,
                        px: 2,
                        fontFamily: "'Montserrat', sans-serif",
                        width: { xs: "100%", sm: "auto" },
                        "&:hover": { borderColor: product.priceColor, bgcolor: "rgba(0,0,0,0.04)" }
                      }}
                    >
                      {product.buttonText} ➝
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

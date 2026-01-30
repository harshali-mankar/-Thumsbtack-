import { Grid, Typography, Button, Container, Box } from "@mui/material";

interface Props {
  title: string;
  highlight: string;
  image: string;
  reverse?: boolean;
}

export default function InfoSection({ title, highlight, image, reverse }: Props) {
  return (
    <Container maxWidth="lg" sx={{ py: 6, maxWidth: "1406px" }}>
      <Grid container spacing={8} direction={reverse ? "row-reverse" : "row"} alignItems="center">
        <Grid item xs={12} md={5}>
          <Typography variant="h4" fontWeight={800} gutterBottom sx={{ fontSize: { xs: "1.5rem", sm: "2.125rem" } }}>{title}</Typography>
          <Typography variant="h4" color="primary" fontWeight={800} sx={{ mb: 2, fontSize: { xs: "1.25rem", sm: "2.125rem" } }}>
            {highlight}
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ mb: 4, lineHeight: 1.7, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            From joint health to muscle strength, our products help your horse fit, fast, and ready to win. With advanced formulations trusted by top trainers, you can push past the competition and achieve the results you've been aiming for.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "50px",
              px: 4,
              py: 1,
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Get Race Ready ➝
          </Button>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
          >
            <Box component="img" src={image} sx={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

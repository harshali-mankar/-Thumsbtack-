'use client'
import { Box, Button, Container, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuItems = ["Shop All", "Shop by Benefits", "About", "Bundles", "Contact"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box>
      {/* Red Top Banner */}
      <Box sx={{ backgroundColor: "primary.main", color: "white", py: 1.5, textAlign: "center", fontSize: { xs: "0.85rem", sm: "1rem" }, fontWeight: 600 }}>
        ⚡ UNLOCK THE PRE-RACE PASTE — Find the sprint to be finish! 1 FREE with a 7 pack
      </Box>

      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/assets/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
      <Container sx={{ mt: 4, display: "flex", flexDirection: "column", minHeight: "calc(100vh - 64px)" }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between", color: "white", alignItems: "center" }}>
          <Box display="flex" alignItems="center" gap={1}>
            {/* Logo placeholder if needed, using text for now or Icon */}
            <Box component="img" src="/assets/logo.png" alt="The Trainers Locker" sx={{ height: 60, objectFit: "contain" }} />
          </Box>
          
          {/* Desktop Menu - Centered */}
          <Box display="flex" gap={4} sx={{ display: { xs: "none", md: "flex" }, flex: 1, justifyContent: "center" }}>
            {menuItems.map(
              (item) => (
                <Button key={item} color="inherit" sx={{ textTransform: "none", fontSize: "0.9rem" }}>{item}</Button>
              )
            )}
          </Box>
          
          {/* Right Icons - Desktop */}
          <Box display="flex" gap={2} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
            <SearchIcon sx={{ cursor: "pointer" }} />
            <ShoppingCartIcon sx={{ cursor: "pointer" }} />
            <PersonOutlineIcon sx={{ cursor: "pointer" }} />
          </Box>
          
          {/* Mobile Menu - Icons Only */}
          <Box display="flex" gap={2} alignItems="center" sx={{ display: { xs: "flex", md: "none" } }}>
            <SearchIcon sx={{ cursor: "pointer" }} />
            <ShoppingCartIcon sx={{ cursor: "pointer" }} />
            <PersonOutlineIcon sx={{ cursor: "pointer" }} />
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        
        {/* Mobile Drawer */}
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>

        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: 1 }}>
          <Box sx={{ maxWidth: "900px", alignSelf: "flex-start", ml: { xs: 0, md: 3 }, px: { xs: 2, md: 0 }, textAlign: "left" }}>
            <Typography variant="subtitle2" sx={{ letterSpacing: 2, mb: 1, textTransform: "uppercase", fontSize: { xs: "12px", md: "16px" } }}>
              Microseconds Matter
            </Typography>
            <Typography sx={{ mb: 2, fontSize: { xs: "1.5rem", md: "80px" }, fontWeight: 700, fontFamily: "'Lufga', sans-serif", lineHeight: 1 }}>
              Win your horserace with TTL supplements
            </Typography>
            <Typography sx={{ mb: 4, fontSize: { xs: "0.9rem", md: "26px" }, lineHeight: 1.6 }}>
              Scientifically formulated racehorse supplements from the home of champions
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
              Discover
            </Button>
          </Box>
        </Box>
      </Container>
      </Box>
    </Box>
  );
}

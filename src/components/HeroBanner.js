import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "152px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px 20px 20px 20px"
  >
    <Typography color="#FF2625" fontWeight="600" fontSize="66px">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "38px", xs: "34px" } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#FF2625",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "220px",
        textAlign: "center",
      }}
    >
      BE STRONG
    </Typography>
    <img
      src={HeroBannerImage}
      style={{ padding: "100px 0px 100px 0px" }}
      alt="hero-banner"
      className="hero-banner-img"
    />
  </Box>
);

export default HeroBanner;

import React from "react";
import { Stack, Typography } from "@mui/material";
import ExerciseImages from "../assets/ExerciseImages"; // Import an object mapping group names to image paths

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // Get the image path and dimensions based on the group name
  const { src, height, width } = ExerciseImages[item.toLowerCase()]; // Assuming group names are lowercase in ExerciseImages object

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={src} // Use the dynamically selected image path
        alt={item} // Use the group name as alt text
        style={{
          width: `${width}px`, // Set width dynamically
          height: `${height}px`, // Set height dynamically
        }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;

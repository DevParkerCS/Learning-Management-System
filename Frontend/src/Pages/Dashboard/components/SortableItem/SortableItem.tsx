import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, Grid, Paper, Typography } from "@mui/material";

export type ClassInfo = {
  id: string;
  name: string;
  professor: string;
  grade: string;
  color: string;
};

export const SortableItem = ({
  id,
  name,
  professor,
  grade,
  color,
}: ClassInfo) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    height: 200,
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column" as const,
    cursor: "pointer",
    borderRadius: 10,
    overflow: "hidden",
  };

  const noWrapTxt = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <Grid
      sx={{ width: "250px" }}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <Paper elevation={1} style={style}>
        <Box
          sx={{
            height: "50%",
            backgroundColor: color,
          }}
        ></Box>
        <Box sx={{ padding: "5px 16px" }}>
          <Typography variant="subtitle1" sx={noWrapTxt} fontWeight="bold">
            {name}
          </Typography>
          <Typography sx={noWrapTxt} variant="body2">
            {professor}
          </Typography>
          <Typography sx={noWrapTxt} variant="body2">
            Grade: {grade}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { SideNav } from "../../Components/Nav/SideNav";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import {
  ClassInfo,
  SortableItem,
} from "./components/SortableItem/SortableItem";

export const Dashboard = () => {
  const [classes, setClasses] = useState<ClassInfo[]>([
    {
      id: "1",
      name: "Introduction to Computer Science",
      professor: "Dr. Alice Smith",
      grade: "A",
      color: `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
        Math.random() * 256
      })`,
    },
    {
      id: "2",
      name: "Data Structures and Algorithms",
      professor: "Prof. Bob Johnson",
      grade: "B+",
      color: `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
        Math.random() * 256
      })`,
    },
    {
      id: "3",
      name: "Operating Systems",
      professor: "Dr. Carol Lee",
      grade: "A-",
      color: `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
        Math.random() * 256
      })`,
    },
    {
      id: "4",
      name: "Database Systems",
      professor: "Prof. David Kim",
      grade: "B",
      color: `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
        Math.random() * 256
      })`,
    },
    {
      id: "5",
      name: "Software Engineering",
      professor: "Dr. Emma Brown",
      grade: "A",
      color: `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
        Math.random() * 256
      })`,
    },
  ]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = classes.findIndex((cls) => cls.id === active.id);
      const newIndex = classes.findIndex((cls) => cls.id === over.id);
      if (oldIndex !== -1 && newIndex !== -1) {
        setClasses(arrayMove(classes, oldIndex, newIndex));
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <SideNav />
      <Box sx={{ marginLeft: "2rem", marginTop: "2rem" }}>
        <Typography variant="h3">Dashboard</Typography>
        <Divider sx={{ my: 3 }} />

        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={classes.map((cls) => cls.id)}
            strategy={rectSortingStrategy}
          >
            <Grid container spacing={4} width={"80%"}>
              {classes.map((cls) => (
                <SortableItem key={cls.id} {...cls} />
              ))}
            </Grid>
          </SortableContext>
        </DndContext>
      </Box>
    </Box>
  );
};

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.2rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        defaultExpanded
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span" variant="h5">
            Healthcare Dashboard
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              overflow: "auto",
              maxHeight: "350px",
            }}
          >
            <ListItem
              sx={{ padding: "0.5rem", width: "100%", margin: "0 auto" }}
              disableGutters
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  margin: "0.2rem auto",
                }}
              >
                - Users can tap on each disease to see more information of the
                top 3 popular diseases in that season
              </Typography>
            </ListItem>
            <ListItem
              sx={{ padding: "0.5rem", width: "100%", margin: "0 auto" }}
              disableGutters
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  margin: "0.2rem auto",
                }}
              >
                - Users can tap on an advisory Nutrient group to be redirected
                to the nutrition page showing the ingredients having that
                nutrient
              </Typography>
            </ListItem>
            <ListItem
              sx={{ padding: "0.5rem", width: "100%", margin: "0 auto" }}
              disableGutters
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  margin: "0.2rem auto",
                }}
              >
                - Users can tap on a seasonal ingredient group to be redirected
                to the nutrition page showing the ingredients belonged that
                group
              </Typography>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span" variant="h5">
            Nutritions and ingredients
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              overflow: "auto",
              maxHeight: "350px",
            }}
          >
            <ListItem
              sx={{ padding: "0.5rem", width: "100%", margin: "0 auto" }}
              disableGutters
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  margin: "0.2rem auto",
                }}
              >
                - Users can tap on each disease to see more information of the
                top 3 popular diseases in that season
              </Typography>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span" variant="h5">
            Outbreak Alerts & notifications
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              overflow: "auto",
              maxHeight: "350px",
            }}
          >
            <ListItem
              sx={{ padding: "0.5rem", width: "100%", margin: "0 auto" }}
              disableGutters
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  margin: "0.2rem auto",
                }}
              >
                - Users can view the latest news about the outbreak in their
                area in this section
              </Typography>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

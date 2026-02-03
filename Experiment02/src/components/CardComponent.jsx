import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CardComponent({ title, description }) {
  return (
    <Card sx={{ minWidth: 250, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;

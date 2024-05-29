import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({Info}){
    const INIT_URL="https://images.unsplash.com/photo-1554511491-0f21bacd5ba0?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
            <div className="mainBox">
            <Card sx={{ maxWidth: 345 }}>
            <div className="topBlur"/>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.temp<15 ? COLD_URL :Info.humidity >80?RAIN_URL_URL:HOT_URL}
        title="Temp Card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {Info.temp}&deg;C</p>
         <p>Humidity = {Info.humidity}</p>
         <p>Min Temp = {Info.tempMin}&deg;C</p>
         <p>Max Temp = {Info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{Info.weather}</i> and feels like {Info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>

    </Card>
      
</div>
        </div>
    )

}